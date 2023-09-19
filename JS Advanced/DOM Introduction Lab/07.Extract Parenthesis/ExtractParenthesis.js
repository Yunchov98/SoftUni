function extract(content) {
    const text = document.getElementById(content).textContent;
    const pattern = /\(([^(]+)\)/g;

    const result = [];

    const matches = text.matchAll(pattern);
    for (const match of matches) {
        result.push(match[1]);
    }

    return result.join('; ');
}