function matchFullName(text) {
    const pattern = /\b[A-Z][a-z]+ [A-Z][a-z]+\b/g;
    
    const result = [];

    const matches = text.match(pattern);
    for (const match of matches) {
        result.push(match)
    }

    console.log(result.join(' '));
}

matchFullName('Ivan Ivanov, Ivan ivanov, ivan Ivanov, IVan Ivanov, Test Testov, Ivan	Ivanov');