function toggleSidebar() {
  var sidebar = document.getElementById("sidebar");
  var overlay = document.getElementsByClassName("overlay")[0];
  var closeButton = document.getElementsByClassName("close-btn")[0];
  var content = document.getElementsByClassName("content")[0];

  if (sidebar.style.left === "-300px") {
    sidebar.style.left = "0";
    overlay.style.display = "block";
    closeButton.style.display = "block";
    content.style.filter = "blur(5px)";
  } else {
    sidebar.style.left = "-300px";
    overlay.style.display = "none";
    closeButton.style.display = "none";
    content.style.filter = "none";
  }
}



var prevScrollPos = window.scrollY;
var navbar = document.querySelector('.navbar');
var rgh = document.querySelector('.lb');

window.onscroll = function() {
  var currentScrollPos = window.scrollY;

  if (prevScrollPos > currentScrollPos) {
    navbar.classList.remove('hidden');
    rgh.classList.remove('hidden');
  } else {
    navbar.classList.add('hidden');
    rgh.classList.add('hidden');
  }

  prevScrollPos = currentScrollPos;
};




  
  function handleClick(event) {
    event.preventDefault(); 
    const allLinks = document.querySelectorAll('.static a');
    allLinks.forEach((link) => link.classList.remove('active'));

    event.target.classList.add('active');

    const targetSectionId = event.target.getAttribute('href');

    const targetSection = document.querySelector(targetSectionId);
    targetSection.scrollIntoView({ behavior: 'smooth' });
  }

  const allLinks = document.querySelectorAll('.static a');
  allLinks.forEach((link) => {
    link.addEventListener('click', handleClick);
  });
  function updateActiveLink() {
    const sections = document.querySelectorAll('main .bx');

    sections.forEach((section) => {
      const sectionRect = section.getBoundingClientRect();
      const link = document.querySelector(`.static a[href="#${section.id}"]`);

      if (sectionRect.top <= 0 && sectionRect.bottom > 0) {
        link.classList.add('active');
      } else {
        link.classList.remove('active');
      }
    });

  }

  window.addEventListener('scroll', updateActiveLink);
  updateActiveLink();




