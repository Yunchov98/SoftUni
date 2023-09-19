function attachGradientEvents() {
    const gradientElement = document.getElementById('gradient');
    const resultElement = document.getElementById('result');

    gradientElement.addEventListener('mousemove', (e) => {
        const percent = Math.floor(e.offsetX / (e.target.clientWidth - 1) * 100);
        resultElement.textContent = `${percent}%`;
    });
}

// clientX
// clientWidth
