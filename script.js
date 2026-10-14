const toggle = document.querySelector('.menu-toggle');
const navigation = document.querySelector('.site-nav');

toggle?.addEventListener('click', () => {
  const isOpen = toggle.getAttribute('aria-expanded') === 'true';
  toggle.setAttribute('aria-expanded', String(!isOpen));
  navigation.classList.toggle('open', !isOpen);
});

navigation?.querySelectorAll('a').forEach((link) => {
  link.addEventListener('click', () => {
    navigation.classList.remove('open');
    toggle?.setAttribute('aria-expanded', 'false');
  });
});

document.getElementById('year').textContent = String(new Date().getFullYear());
