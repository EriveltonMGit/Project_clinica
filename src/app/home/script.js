window.addEventListener('scroll', function() {
    var menuScroll = document.getElementById(`header-menu-3`);
    var scrollPosition = window.scrollY;
  
    if (scrollPosition > 500) { 
      menuScroll.style.top = '0px'; 
    } else {
      menuScroll.style.top = '-70px'; 
    }
  });