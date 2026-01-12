window.addEventListener('load', windowLoad);
const html = document.documentElement;

function windowLoad() {
  document.addEventListener('click', documentActions);
  html.classList.add('loaded');
}
function documentActions(e) {
  const targetElement = e.target;

  if (targetElement.closest('.dark-light-mode__sun') && !html.classList.contains('light-mode')) {
    html.classList.add('light-mode');
    console.log('light-mode');
  }
  if (targetElement.closest('.dark-light-mode__moon') && html.classList.contains('light-mode')) {
    html.classList.remove('light-mode');
    console.log('remove light-mode');
  }
  if (window.innerWidth < 768) {
    if (
      targetElement.closest('.actions__btn--search') &&
      !html.classList.contains('search-bar-open')
    ) {
      html.classList.add('search-bar-open');
    }
    if (targetElement.closest('.search-header__close')) {
      html.classList.remove('search-bar-open');
    }
  }
}
var swiper = new Swiper('.hero-swiper', {
  spaceBetween: 20,
  pagination: {
    el: '.swiper-actions__pagination',
    type: 'fraction',
  },
  navigation: {
    nextEl: '.swiper-actions__arrow--next',
    prevEl: '.swiper-actions__arrow--prev',
  },
});
