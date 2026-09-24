const toggle = document.querySelector('.menu-toggle');
const navigation = document.querySelector('#navigation');
const mobile = window.matchMedia('(max-width: 680px)');
function setMenu(open) {
  toggle.setAttribute('aria-expanded', String(open));
  navigation.dataset.collapsed = String(mobile.matches && !open);
}
function syncMenu() {
  toggle.hidden = !mobile.matches;
  setMenu(false);
}
toggle.addEventListener('click', () => setMenu(toggle.getAttribute('aria-expanded') !== 'true'));
navigation.addEventListener('click', event => {
  if (event.target.closest('a')) setMenu(false);
});
document.addEventListener('keydown', event => {
  if (event.key === 'Escape' && toggle.getAttribute('aria-expanded') === 'true') {
    setMenu(false);
    toggle.focus();
  }
});
mobile.addEventListener('change', syncMenu);
syncMenu();
