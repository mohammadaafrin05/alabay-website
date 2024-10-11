

setTimeout(function() {
  document.querySelector('.welcome-container').style.display = 'none';
  document.querySelector('.container').style.display = 'block';
}, 1500);



let currentSlide = 0;
let visibleItems = document.querySelectorAll('.sub-carousel-item');
let itemsPerPage = 3;

function updateVisibleItems() {
  visibleItems = document.querySelectorAll('.sub-carousel-item:not(.hidden)');
  updateSubCarousel();
}

function showAll() {
  currentSlide = 0;
  document.querySelectorAll('.sub-carousel-item').forEach(item => {
    item.classList.remove('hidden');
  });
  updateVisibleItems();
}

function showPhotos() {
  currentSlide = 0;
  document.querySelectorAll('.sub-carousel-item').forEach(item => {
    if (item.classList.contains('photo')) {
      item.classList.remove('hidden');
    } else {
      item.classList.add('hidden');
    }
  });
  updateVisibleItems();
}

function showVideos() {
  currentSlide = 0;
  document.querySelectorAll('.sub-carousel-item').forEach(item => {
    if (item.classList.contains('video')) {
      item.classList.remove('hidden');
    } else {
      item.classList.add('hidden');
    }
  });
  updateVisibleItems();
}

function nextSlide() {
  const maxSlide = Math.ceil(visibleItems.length / itemsPerPage) - 1;
  currentSlide = (currentSlide + 1) > maxSlide ? maxSlide : currentSlide + 1;
  updateSubCarousel();
}

function prevSlide() {
  currentSlide = (currentSlide - 1) < 0 ? 0 : currentSlide - 1;
  updateSubCarousel();
}

function updateSubCarousel() {
  const offset = -currentSlide * 100;
  document.querySelector('.sub-carousel').style.transform = `translateX(${offset}%)`;
}


let currentIndex = 1;
showSlides(currentIndex);

function changeSlide(n) {
    showSlides(currentIndex += n);
}

function showSlides(n) {
    let i;
    let slides = document.querySelectorAll('.carousel img');
    
    if (n > slides.length) { currentIndex = 1 }
    if (n < 1) { currentIndex = slides.length }

    for (i = 0; i < slides.length; i++) {
        slides[i].classList.remove('active');
    }

    slides[currentIndex - 1].classList.add('active');
}


let currentIndexSlide = 0;

function moveSlide(direction) {
    const slides = document.querySelector('.slides');
    const totalSlides = document.querySelectorAll('.slide').length;
    currentSlide += direction;
    if (currentSlide >= totalSlides) {
        currentSlide = 0;  
    } else if (currentSlide < 0) {
        currentSlide = totalSlides - 1;  
    }
    slides.style.transform = `translateX(-${currentSlide * 100}%)`;
}
   


