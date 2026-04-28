const content = window.siteContent;

function get(path) {
  return path.split('.').reduce((obj, key) => obj && obj[key], content);
}

document.querySelectorAll('[data-bind]').forEach((el) => {
  const value = get(el.dataset.bind);
  if (typeof value === 'string') el.textContent = value;
});

const nav = document.getElementById('nav');
content.nav.forEach(([label, href]) => {
  const a = document.createElement('a');
  a.href = href;
  a.textContent = label;
  nav.appendChild(a);
});

const stats = document.querySelector('.stats');
content.stats.forEach(([number, label]) => {
  const item = document.createElement('div');
  item.className = 'stat';
  item.innerHTML = `<strong>${number}</strong><span>${label}</span>`;
  stats.appendChild(item);
});

const useCaseGrid = document.getElementById('useCaseGrid');
content.useCases.forEach((item) => {
  const card = document.createElement('article');
  card.className = 'card reveal';
  card.innerHTML = `<span class="tag">${item.label}</span><h3>${item.title}</h3><p>${item.body}</p>`;
  useCaseGrid.appendChild(card);
});

const timeline = document.getElementById('timeline');
content.timeline.forEach(([week, title, body]) => {
  const step = document.createElement('article');
  step.className = 'step';
  step.innerHTML = `<span class="week">${week}</span><h3>${title}</h3><p>${body}</p>`;
  timeline.appendChild(step);
});

const comparisonRows = document.getElementById('comparisonRows');
content.comparison.forEach(([question, erp, us]) => {
  const row = document.createElement('div');
  row.className = 'row';
  row.setAttribute('role', 'row');
  row.innerHTML = `<div>${question}</div><div>${erp}</div><div>${us}</div>`;
  comparisonRows.appendChild(row);
});

const principles = document.getElementById('principles');
content.principles.forEach((text) => {
  const li = document.createElement('li');
  li.textContent = text;
  principles.appendChild(li);
});

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });

document.querySelectorAll('.reveal').forEach((el, index) => {
  el.style.transitionDelay = `${Math.min(index * 45, 240)}ms`;
  observer.observe(el);
});

window.demoSubmit = function demoSubmit() {
  const note = document.getElementById('formNote');
  note.textContent = 'Demo captured locally. Production form can route into email, CRM, or a booking flow.';
};
