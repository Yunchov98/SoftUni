const host = 'http://localhost:3030';

async function request(method, url, data) {
    const options = {
        method,
        headers: {},
    };

    if (data != undefined) {
        options.headers['Content-Type'] = 'application/json';
        options.body = JSON.stringify(data);
    }

    const user = JSON.parse(localStorage.getItem('user'));
    if(user) {
        const token = user.accessToken;
        options.headers['X-Authorization'] = token;
    }

    try {
        const respose = await fetch(host + url, options);

        if (respose.ok != true) {
            if(respose.status == 403) {
                localStorage.removeItem('user');
            }
            
            const error = await respose.json();
            throw new Error(error.message);
        }

        if (respose.status == '204') {
            return respose;
        } else {
            return respose.json();
        }
    } catch (error) {
        alert(error.message);
        throw error;
    }
}

const get = request.bind(null, 'GET');
const post = request.bind(null, 'POST');
const put = request.bind(null, 'PUT');
const del = request.bind(null, 'DELETE');

export {
    get,
    post,
    put,
    del as delete,
};