document.querySelectorAll('.imagen').forEach((img) => {
  const textoAsociado = img.parentElement.querySelector('.texto');

  img.addEventListener('mouseenter', () => {
    textoAsociado.classList.replace('text-hidden', 'text-show');
  });

  img.addEventListener('mouseleave', () => {
    textoAsociado.classList.replace('text-show', 'text-hidden');
  });
});