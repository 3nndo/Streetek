document.querySelectorAll('.producto-col').forEach((productoCol) => {
    const textoAsociado = productoCol.querySelector('.texto');
    const imagenContenedor = productoCol.querySelector('.imagen');
    let isAnimating = false;
    let timeout;
    
    productoCol.addEventListener('mouseenter', () => {
        clearTimeout(timeout);
        if (!isAnimating) {
            isAnimating = true;
            textoAsociado.classList.replace('text-hidden', 'text-show');
            imagenContenedor.classList.replace('img-product', 'img-product-text-shown');
        }
    });

    productoCol.addEventListener('mouseleave', () => {
        clearTimeout(timeout);
        timeout = setTimeout(() => {
            isAnimating = false;
            textoAsociado.classList.replace('text-show', 'text-hidden');
            imagenContenedor.classList.replace('img-product-text-shown', 'img-product');
        }, 50);
    });
});
