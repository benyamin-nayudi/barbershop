function toggleMenu() {
  const sidenav = document.getElementById('sidenav');
  const isOpen = sidenav.classList.contains('open');
  if (isOpen) {
      sidenav.classList.remove('open');
  } else {
      sidenav.classList.add('open');
  }
}

function closeMenu() {
  document.getElementById('sidenav').classList.remove('open');
}