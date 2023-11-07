const baseUrl = 'http://localhost3030/jsonstore/users';

export const getAll = async () => {
    try {
        const response = await fetch(baseUrl);
        const result = await response.json();

        return Object.values(result);
    } catch (error) {
        console.log(error);
    }
};