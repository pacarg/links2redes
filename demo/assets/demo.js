/* Public showcase only. No API, mail, authentication, persistence or uploads. */
(() => {
  'use strict';
  const form = document.querySelector('#intakeForm');
  if (!form) return;
  const locale = document.documentElement.lang;
  const words = {
    es: {note:'Demostración: no se envían ni guardan datos.', files:'La carga de archivos está desactivada en esta demostración.', summary:'Vista de ejemplo', saved:'Sin almacenamiento · demostración'},
    en: {note:'Demonstration: nothing is sent or saved.', files:'File uploads are disabled in this demonstration.', summary:'Sample review', saved:'No storage · demonstration'},
    de: {note:'Demonstration: Es werden keine Daten übermittelt oder gespeichert.', files:'Datei-Uploads sind in dieser Demonstration deaktiviert.', summary:'Beispielübersicht', saved:'Keine Speicherung · Demonstration'}
  }[locale];
  const steps = [...document.querySelectorAll('.form-step')];
  const nav = [...document.querySelectorAll('.steps-nav button')];
  const prev = document.querySelector('#prevBtn');
  const next = document.querySelector('#nextBtn');
  const submit = document.querySelector('#submitBtn');
  const drawer = document.querySelector('#helpDrawer');
  const overlay = document.querySelector('#helpOverlay');
  let current = 0;
  const status = document.querySelector('#saveState');
  status.textContent = words.saved;
  form.addEventListener('submit', event => {event.preventDefault(); alert(words.note);});
  form.querySelectorAll('button').forEach(button => { button.type = 'button'; });

  function progress() {
    const required = [...form.querySelectorAll('[required]')];
    const filled = required.filter(el => el.type === 'checkbox' || el.type === 'radio' ? el.checked : el.value.trim()).length;
    const percent = required.length ? Math.round(filled / required.length * 100) : 0;
    document.querySelector('#progressLabel').textContent = window.L2R_I18N.t('progress', {percent});
    document.querySelector('#progressBar').style.width = `${percent}%`;
  }
  function show(index) {
    current = Math.max(0, Math.min(steps.length - 1, index));
    steps.forEach((step, i) => step.classList.toggle('active', i === current));
    nav.forEach((button, i) => {button.classList.toggle('active', i === current); button.setAttribute('aria-current', i === current ? 'step' : 'false');});
    prev.hidden = current === 0;
    next.classList.toggle('hidden', current === steps.length - 1);
    submit.classList.toggle('hidden', current !== steps.length - 1);
    const summary = document.querySelector('#summary');
    if (summary) {
      summary.replaceChildren();
      for (const name of ['public_name','activity','primary_goal','primary_contact']) {
        const field = form.elements.namedItem(name);
        if (field && field.value.trim()) {
          const item = document.createElement('p');
          item.textContent = field.value;
          summary.appendChild(item);
        }
      }
      if (!summary.childNodes.length) summary.textContent = words.summary;
    }
  }
  nav.forEach((button,i) => button.addEventListener('click', () => show(i)));
  prev.addEventListener('click', () => show(current - 1));
  next.addEventListener('click', () => show(current + 1));
  document.querySelector('#saveBtn').addEventListener('click', () => alert(words.note));
  submit.addEventListener('click', () => {
    const invalid = [...form.querySelectorAll('[required]')].find(el => !el.checkValidity());
    if (invalid) {
      show(steps.findIndex(step => step.contains(invalid)));
      invalid.focus();
      invalid.reportValidity();
    } else alert(words.note);
  });
  form.addEventListener('input', progress);
  form.addEventListener('change', progress);
  form.querySelectorAll('input[type="file"]').forEach(input => {
    input.disabled = true;
    const hint = document.createElement('small');
    hint.textContent = words.files;
    input.parentElement.appendChild(hint);
  });
  form.querySelectorAll('.upload-btn').forEach(button => {button.disabled=true;button.title=words.files;});
  function help(topic) {
    const index = topic === 'general' ? 0 : topic === 'vcard' ? 3 : topic === 'permissions' ? 4 : topic === 'tracking' ? 5 : current + 1;
    const content = window.L2R_I18N.help[index];
    document.querySelector('#helpTitle').textContent = content.title;
    document.querySelector('#helpBody').innerHTML = content.body; // trusted bundled copy only
    drawer.hidden = overlay.hidden = false;
    document.body.classList.add('help-open');
    document.querySelector('#helpClose').focus();
  }
  function close() {
    drawer.hidden = overlay.hidden = true;
    document.body.classList.remove('help-open');
    document.querySelector('#helpButton').focus();
  }
  document.querySelector('#helpButton').addEventListener('click', () => help());
  document.querySelectorAll('[data-open-help]').forEach(button => button.addEventListener('click', () => help(button.dataset.openHelp)));
  document.querySelector('#helpClose').addEventListener('click',close);
  overlay.addEventListener('click',close);
  document.addEventListener('keydown',event => {if(event.key==='Escape')close();});
  document.querySelector('#formLanguage').addEventListener('change',event => {
    const lang = event.target.value;
    if (['es','en','de'].includes(lang)) location.href = `${lang}.html`;
  });
  progress(); show(0);
})();
