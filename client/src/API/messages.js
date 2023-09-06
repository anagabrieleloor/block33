const BASE_URL = 'http://localhost:8080/api';

export async function fetchMessages() {
    try {
        const response = await fetch(`${BASE_URL}/messages`);
        const result = await response.json();
        console.log(result);
        return result
    } catch (error) {
        console.error(error);
        return error;
    }
}