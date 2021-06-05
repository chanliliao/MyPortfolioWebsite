// Loading
window.addEventListener('load', () => {
  document.querySelector('.main').classList.remove('hidden');
  document.querySelector('.home-section').classList.add('active');
  // page loader
  document.querySelector('.page-loader').classList.add('fade-out');
  setTimeout(() => {
    document.querySelector('.page-loader').style.display = 'none';
  }, 600);
});

// Dark mode toggle
const darkModeToggler = document.querySelector('.dark-mode-toggle');
darkModeToggler.addEventListener('click', (e) => {
  toggleDarkMode(e);
});

function toggleDarkMode(e) {
  if (e.target.classList.contains('d')) {
    document.querySelector('.dark-mode-toggle').innerHTML = 'Light Mode';
    e.target.classList.remove('d');
  } else {
    document.querySelector('.dark-mode-toggle').innerHTML = 'Dark Mode';
    e.target.classList.add('d');
  }
  document.querySelector('body').classList.toggle('dark-mode');
  let items = document.querySelectorAll('.about-tabs .tab-item');
  items.forEach((item) => {
    item.classList.toggle('dark-mode');
  });
  let sections = document.querySelectorAll('section');
  sections.forEach((section) => {
    section.classList.toggle('dark-mode');
  });
  let btns = document.querySelectorAll('.btn');
  btns.forEach((btn) => {
    btn.classList.toggle('dark-mode');
  });
  document.querySelector('.header .nav-toggler').classList.toggle('dark-mode');
  document.querySelector('.header .nav-inner').classList.toggle('dark-mode');
  let skillItems = document.querySelectorAll('.about-text .skill-item');
  skillItems.forEach((skillItem) => {
    skillItem.classList.toggle('dark-mode');
  });
  let links = document.querySelectorAll('.header .nav-inner ul li a');
  links.forEach((link) => {
    link.classList.toggle('dark-mode');
  });
  // document.querySelector('.home-img .img-box').classList.toggle('dark-mode');
  // document.querySelector('.about-img .img-box').classList.toggle('dark-mode');
  let thumbnails = document.querySelectorAll('.portfolio-item-thumbnail');
  thumbnails.forEach((thumbnail) => {
    thumbnail.classList.toggle('dark-mode');
  });
  document.querySelector('.pp-content').classList.toggle('dark-mode');

  let inputs = document.querySelectorAll('.contact-form .input-control');
  inputs.forEach((input) => {
    input.classList.toggle('dark-mode');
  });

  let slinks = document.querySelectorAll('.contact-info-item .social-links a');
  slinks.forEach((slink) => {
    slink.classList.toggle('dark-mode');
  });
}

// NavBar Toggle
const navToggler = document.querySelector('.nav-toggler');
navToggler.addEventListener('click', () => {
  hideSection();
  toggleNavbar();
  document.body.classList.toggle('hide-scrolling');
});

function hideSection() {
  document.querySelector('section.active').classList.toggle('fade-out');
}

function toggleNavbar() {
  document.querySelector('.header').classList.toggle('active');
}

// Active Section
document.addEventListener('click', (e) => {
  if (e.target.classList.contains('link-item') && e.target.hash !== '') {
    document.querySelector('.overlay').classList.add('active');
    navToggler.classList.add('hide');
    if (e.target.classList.contains('nav-item')) {
      toggleNavbar();
    } else {
      hideSection();
      document.body.classList.add('hide-scrolling');
    }
    setTimeout(() => {
      document
        .querySelector('section.active')
        .classList.remove('active', 'fade-out');
      document.querySelector(e.target.hash).classList.add('active');
      window.scrollTo(0, 0);
      document.body.classList.remove('hide-scrolling');
      navToggler.classList.remove('hide');
      document.querySelector('.overlay').classList.remove('active');
    }, 500);
  }
});

// About Tab Function

const tabsContainer = document.querySelector('.about-tabs'),
  aboutSection = document.querySelector('.about-section');

tabsContainer.addEventListener('click', (e) => {
  if (
    e.target.classList.contains('tab-item') &&
    !e.target.classList.contains('active')
  ) {
    tabsContainer.querySelector('.active').classList.remove('active');
    e.target.classList.add('active');
    const target = e.target.getAttribute('data-target');
    aboutSection
      .querySelector('.tab-content.active')
      .classList.remove('active');
    aboutSection.querySelector(target).classList.add('active');
  }
});

// Portfolio Item Details Popup

document.addEventListener('click', (e) => {
  if (e.target.classList.contains('view-project-btn')) {
    togglePortfolioPopup();
    document.querySelector('.portfolio-popup').scrollTo(0, 0);
    portfolioItemDetails(e.target.parentElement);
  }
});

document
  .querySelector('.pp-close')
  .addEventListener('click', togglePortfolioPopup);

document.addEventListener('click', (e) => {
  if (e.target.classList.contains('pp-inner')) {
    togglePortfolioPopup();
  }
});

function togglePortfolioPopup() {
  document.querySelector('.portfolio-popup').classList.toggle('open');
  document.body.classList.toggle('hide-scrolling');
  document.querySelector('.main').classList.toggle('fade-out');
}

function portfolioItemDetails(portfolioItem) {
  document.querySelector('.pp-thumbnail img').src = portfolioItem.querySelector(
    '.portfolio-item-thumbnail img'
  ).src;

  document.querySelector('.pp-header h3').innerHTML =
    portfolioItem.querySelector('.portfolio-item-title').innerHTML;

  document.querySelector('.pp-body').innerHTML = portfolioItem.querySelector(
    '.portfolio-item-details'
  ).innerHTML;
}
