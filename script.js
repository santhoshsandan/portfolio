
const navSlide = () => {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('nav ul');
    const navLinks = document.querySelectorAll('nav ul li');
    
    burger.addEventListener('click', () => {
    nav.classList.toggle('nav-active');
    navLinks.forEach((link, index) => {
        if (link.style.animation) {
          link.style.animation = '';
        } else {
          link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.3}s`;
        }
      });
      
      burger.classList.toggle('toggle');
      });
      };
      
      navSlide();
      
      const slideContainer = document.querySelector('.slider');
      const slides = document.querySelectorAll('.slide');
      const prevBtn = document.querySelector('#prevBtn');
      const nextBtn = document.querySelector('#nextBtn');
      
      let slideIndex = 1;
      let slideTimer = setInterval(showSlides, 5000);
      
      prevBtn.addEventListener('click', () => {
      clearInterval(slideTimer);
      slideTimer = setInterval(showSlides, 5000);
      showSlides(slideIndex -= 1);
      });
      
      nextBtn.addEventListener('click', () => {
      clearInterval(slideTimer);
      slideTimer = setInterval(showSlides, 5000);
      showSlides(slideIndex += 1);
      });
      
      function showSlides(n) {
      if (n === undefined) {
      n = slideIndex;
      }
      
      if (n > slides.length) {
      slideIndex = 1;
      }
      if (n < 1) {
        slideIndex = slides.length;
        }
        
        slides.forEach(slide => {
        slide.classList.remove('active', 'prev', 'next');
        });
        
        if (slideIndex === 1) {
        slides[slides.length - 1].classList.add('prev');
        slides[slideIndex - 1].classList.add('active');
        slides[slideIndex].classList.add('next');
        } else if (slideIndex === slides.length) {
        slides[slideIndex - 2].classList.add('prev');
        slides[slideIndex - 1].classList.add('active');
        slides[0].classList.add('next');
        } else {
        slides[slideIndex - 2].classList.add('prev');
        slides[slideIndex - 1].classList.add('active');
        slides[slideIndex].classList.add('next');
        }
        }
        
        