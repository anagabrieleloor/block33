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
export async function newMessage(sender_id, receiver_id, message_content) {
    try {
        const response = await fetch(
            `${BASE_URL}/messages/new`, {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    message: {
                        sender_id,
                        receiver_id,
                        message_content
                        
                    },
                })
            });
            const result = await response.json();
            console.log("message fetch", result);
            return result
    } catch (error) {
        console.error("new message error", error);
        return error;
    }
}

export async function deleteMessage(message_id) {
	try {
		const response = await fetch(`${BASE_URL}/messages/${message_id}`, {
			method: "DELETE",
		});
		;
        console.log("message go byebye")

        
	} catch (error) {
		console.error("message not deleted", error);
        throw error;
	}
}



export async function editMessage(message_id, updatedMessage) {
	try {
		const response = await fetch(`${BASE_URL}/messages/edit/${message_id}`, {
			method: "PUT",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify(updatedMessage),
		});
		const result = await response.json();
		console.log("message edit good");
		return result;
	} catch (error) {
		console.log("message no edit", error);
		throw(error);
	}
}

export async function fetchMessageById(message_id) {
    try {
        const response = await fetch(`${BASE_URL}/messages/${message_id}`);
        const result = await response.json();
        console.log(result);
        return result
    } catch (error) {
        console.error(error);
        return error;
    }
}