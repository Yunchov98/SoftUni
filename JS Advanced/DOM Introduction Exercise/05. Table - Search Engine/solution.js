function solve() {
    document.querySelector('#searchBtn').addEventListener('click', onClick);

    const searchInput = document.getElementById('searchField');
    const trElements = document.querySelectorAll('tbody tr');

    function onClick() {
        const users = Array.from(trElements);

        for (const user of users) {
            if (user.textContent.includes(searchInput.value)) {
                user.classList = 'select';
            } else {
                user.classList.remove('select');
            }
        }

        searchInput.value = '';
    }
}