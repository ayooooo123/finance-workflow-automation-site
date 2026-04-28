const fs = require('fs');
for (const file of ['index.html', 'content.js', 'styles.css', 'script.js', '_headers']) {
  if (!fs.existsSync(file)) throw new Error(`Missing ${file}`);
}
const html = fs.readFileSync('index.html', 'utf8');
for (const id of ['use-cases', 'how-it-works', 'erp', 'about', 'contact']) {
  if (!html.includes(`id="${id}"`)) throw new Error(`Missing section ${id}`);
}
const css = fs.readFileSync('styles.css', 'utf8');
if (/robot|stock imagery|lorem ipsum|acme/i.test(html + css)) throw new Error('Generic banned content found');
console.log('static site check passed');
