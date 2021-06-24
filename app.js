// Element.getBoundingClientRect() method returns rhe size of an element and its position relative to the viewport.

//pageYOffset is a read-only window property that returns the number of pixels the document has been scrolled vertivally

// slice extracts a section of a string without modifying original sting

// offsetTop - A Number, representing the top position of the element, in pixels

// ********* set date *********
const date = document.getElementById('date');
date.innerHTML = new Date().getFullYear();

// ********* close links *********
const navToggle = document.querySelector('.nav-toggle');
const linksContainer = document.querySelector('.links-container');
const links = document.querySelector('.links');

const toggleMenu = () => {
  const containerHeight = linksContainer.getBoundingClientRect().height;
  const linksHeight = links.getBoundingClientRect().height;
  if (containerHeight === 0) {
    linksContainer.style.height = `${linksHeight}px`;
  } else {
    linksContainer.style.height = 0;
  }
};

navToggle.addEventListener('click', toggleMenu);

const navbar = document.getElementById('nav');
// ********* fixed navbar *********
window.addEventListener('scroll', function () {
  const scrollHeight = window.pageYOffset;
  const navHeight = navbar.getBoundingClientRect().height;

  if (scrollHeight > navHeight) {
    navbar.classList.add('fixed-nav');
  } else {
    navbar.classList.remove('fixed-nav');
  }

  const topLink = document.querySelector('.top-link');
  // ********* show to-the-top link *********
  if (scrollHeight > 500) {
    topLink.classList.add('show-link');
  } else {
    topLink.classList.remove('show-link');
  }
});

// ********* smooth scroll *********
const scrollLinks = document.querySelectorAll('.scroll-link');

scrollLinks.forEach(function (link) {
  link.addEventListener('click', function (e) {
    // prevent the default scroll
    e.preventDefault();
    // navigate to the specific spot
    const id = e.currentTarget.getAttribute('href').slice(1);
    const element = document.getElementById(id);
    // calculate the heights
    const navHeight = navbar.getBoundingClientRect().height;
    const containerHeight = linksContainer.getBoundingClientRect().height;
    const fixedNav = navbar.classList.contains('fixed-nav');
    let position = element.offsetTop - navHeight;

    // when the navbar is not fixed
    if (!fixedNav) {
      position = position - navHeight;
    }
    // for mobile and links are opened
    if (navHeight > 82) {
      position = position + containerHeight;
    }
    window.scrollTo({
      left: 0,
      top: position,
    });

    // close the links
    linksContainer.style.height = 0;
  });
});
