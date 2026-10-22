"""Check the public showcase, without reading any operational project files."""
from pathlib import Path
from html.parser import HTMLParser
import re

root = Path(__file__).resolve().parents[1]
allowed = {'.gitignore', '.nojekyll', 'LICENSE', 'README.md', 'index.html'}
for path in root.iterdir():
    assert path.name in allowed | {'.git', 'demo', 'docs', 'tests'}, f'Unexpected public root: {path.name}'
blocked = re.compile(r'(?:[A-Za-z]:\\\\|\\\\\\\\[a-zA-Z]|(?:mysql|postgres)://[^\s]+:[^\s]+@)', re.I)
files = [p for folder in ['demo','docs'] for p in (root/folder).rglob('*') if p.is_file()] + [root/'README.md',root/'index.html']
for path in files:
    assert path.suffix.lower() not in {'.php','.sql','.sqlite','.zip','.gz'}, path
    text = path.read_text(encoding='utf-8')
    assert not blocked.search(text), f'Private reference in {path.relative_to(root)}'
    assert not re.search(r'-----BEGIN .*PRIVATE KEY|gh[pousr]_[A-Za-z0-9]{20,}|github_pat_[A-Za-z0-9_]{20,}|AKIA[A-Z0-9]{16}', text), path
    if path.suffix == '.js':
        assert not re.search(r'\bfetch\s*\(|XMLHttpRequest|WebSocket|sendBeacon|localStorage|sessionStorage|indexedDB|api\.php',text), path

class Assets(HTMLParser):
    def __init__(self): super().__init__(); self.links=[]; self.inputs=[]
    def handle_starttag(self,tag,attrs):
        a=dict(attrs)
        if tag in {'script','link','img','a'}:
            target=a.get('src') or a.get('href','')
            if target and not re.match(r'^(?:https?:|mailto:|#|data:)',target):self.links.append(target)
        if tag=='input':self.inputs.append(a)
for path in [root/'index.html', *(root/'demo').rglob('*.html')]:
    text=path.read_text(encoding='utf-8')
    parser=Assets();parser.feed(text)
    assert 'connect-src \'none\'' in text and 'form-action \'none\'' in text, path
    for target in parser.links:
        asset=(path.parent/target.split('?')[0].split('#')[0]).resolve()
        assert asset.is_relative_to(root) and asset.exists(), f'Broken asset: {path}: {target}'
for lang in ['es','en','de']:
    text=(root/f'demo/{lang}.html').read_text(encoding='utf-8')
    assert f'lang="{lang}"' in text
    assert 'Atelier Example' in text
    assert 'L2R_INTAKE' not in text
    assert text.count(' required') == 6
print(f'Public showcase checked: {len(files)} files, 3 languages, local links, no backend or detected private references.')
