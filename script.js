const items = document.querySelectorAll('.nav-item');
const sections = document.querySelectorAll('.page-section');

items.forEach(item => {
  item.addEventListener('click', () => {
    items.forEach(i => {
      i.classList.remove('active');
      i.removeAttribute('aria-current');
    });
    sections.forEach(s => s.classList.remove('active'));

    item.classList.add('active');
    item.setAttribute('aria-current', 'page');

    const target = item.dataset.target;
    const section = document.getElementById(`section-${target}`);
    if (section) section.classList.add('active');
  });
});