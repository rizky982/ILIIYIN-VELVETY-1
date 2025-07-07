  let currentIndex = 0;
  const images = document.querySelectorAll('.product-img');
  const dots = document.querySelectorAll('.dot');

  function changeImage(direction) {
    images[currentIndex].classList.remove('active');
    dots[currentIndex].classList.remove('active');

    if (direction === 'next') {
      currentIndex = (currentIndex + 1) % images.length;
    } else if (direction === 'prev') {
      currentIndex = (currentIndex - 1 + images.length) % images.length;
    }

    images[currentIndex].classList.add('active');
    dots[currentIndex].classList.add('active');
  }

