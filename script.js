
  const imageprdc = document.getElementsByClassName('imagen');
  const textprdc = document.getElementsByClassName('texto');

  imageprdc.addEventListener('mouseenter', () => {
    textprdc.classList.remove('text-hidden');
    textprdc.classList.add('text-show');
  });

  
  imageprdc.addEventListener('mouseleave', () => {
    textprdc.classList.remove('text-show');
    textprdc.classList.add('text-hidden');
  });




