// Alterna entre tema claro e escuro
const btn = document.getElementById('toggle-theme');

btn.addEventListener('click', () => {
  document.body.classList.toggle('dark');
  btn.textContent = document.body.classList.contains('dark') ? '☀️' : '🌙';
});
