// const BASE_URL = 'http://localhost:8088/api';
const BASE_URL = 'https://carino.onrender.com';

export async function createSwipe(user1, user2, is_like, is_pass) {
    try {
        const response = await fetch(`${BASE_URL}/swipes`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                swipe: {
                    user1: user1,
                    user2: user2, 
                    is_like: is_like,
                    is_pass: is_pass
                }
            })
        });
        const result = await response.json();
        console.log(result);
        return result;
    } catch (error) {
        console.error(error);
        return error;
    }
};