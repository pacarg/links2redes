const fs = require('node:fs');
const path = require('node:path');
const vm = require('node:vm');
const assert = require('node:assert/strict');
const assets = path.join(__dirname,'../demo/assets');
for (const locale of ['es','en','de']) {
  const context = {window:{L2R_DEMO:{locale}},document:{documentElement:{lang:locale}}};
  vm.createContext(context);
  for(const file of ['i18n.js','help-es.js']) vm.runInContext(fs.readFileSync(path.join(assets,file),'utf8'),context);
  assert.equal(context.window.L2R_I18N.help.length,7);
  for(const help of context.window.L2R_I18N.help){assert.ok(help.title);assert.ok(help.body);}
  assert.ok(context.window.L2R_I18N.t('progress',{percent:17}).includes('17'));
}
console.log('Ayudas y progreso ES/EN/DE comprobados.');
