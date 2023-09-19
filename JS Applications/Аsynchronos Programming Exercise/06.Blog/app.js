function attachEvents() {
    const loadButtonElement = document.getElementById('btnLoadPosts');
    const viewButtonElement = document.getElementById('btnViewPost');
    const selectPostsElement = document.getElementById('posts');
    const postTitleElement = document.getElementById('post-title');
    const pBodyElement = document.getElementById('post-body');
    const postUlElement = document.getElementById('post-comments');
    const url = 'http://localhost:3030/jsonstore/blog';

    const posts = [];

    loadButtonElement.addEventListener('click', onLoad);
    viewButtonElement.addEventListener('click', onView);

    function onLoad() {
        fetch(`${url}/posts`)
            .then(response => {
                if (response.ok === false) {
                    throw new Error();
                }

                return response.json();
            })
            .then(data => {
                selectPostsElement.textContent = '';
                Object.entries(data).forEach(([key, value]) => {

                    const optionElement = document.createElement('option');
                    optionElement.value = key;
                    optionElement.textContent = value.title;

                    posts.push({
                        title: value.title,
                        body: value.body,
                    });

                    selectPostsElement.appendChild(optionElement);
                });
            })
            .catch(err => console.log(err));
    }

    function onView() {
        fetch(`${url}/comments`)
            .then(response => {
                if (response.ok === false) {
                    throw new Error();
                }

                return response.json();
            })
            .then(data => {
                postUlElement.textContent = '';

                const comments = Object
                    .values(data)
                    .filter(el => el.postId === selectPostsElement.value);

                postTitleElement.textContent = selectPostsElement.selectedOptions[0].textContent;
                const post = posts.filter(p => p.title === selectPostsElement.selectedOptions[0].textContent);
                pBodyElement.textContent = post[0].body;

                comments.forEach(c => {
                    const liElement = document.createElement('li');
                    liElement.textContent = c.text;
                    postUlElement.appendChild(liElement);
                });

            })
            .catch(err => console.log(err));
    }
}

attachEvents();