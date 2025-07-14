const burger = document.querySelector('.burger');
  const navList = document.querySelector('.nav nav ul');

  burger.addEventListener('click', () => {
    navList.classList.toggle('active');
    // Optional: animasi burger menjadi "X"
    burger.classList.toggle('toggle');
  });