import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { newMessage } from "../API/messages";
const BASE_URL = 'http://localhost:8080/api';

export default function NewMessage() {
    const [sender_id, setSenderId] = useState("");
    const [receiver_id, setReceiverId] = useState("");
    const [thread_id, setThreadId] = useState("");
    const [message_content, setMessageContent] = useState("");
    const navigate = useNavigate();


// Your component or function where you make the API call
async function createMessage(event) {
  event.preventDefault();

  // Data serialization
  const requestBody = JSON.stringify({
    sender_id,
    receiver_id,
    message_content,
    thread_id,
  });

  try {
    // API request headers and fetch request
    const response = await fetch(`${BASE_URL}/messages/new`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: requestBody,
    });

    // API Response Handling
    if (response.ok) {
      const data = await response.json();
      console.log('message sent ayooo', data);

      // Update your UI or state with the response data here
    } else {
      console.error('message send go oopsie:', response.statusText);

      // Handle errors or show an error message to the user
    }
  } catch (error) {
    console.error('Error:', error);

    // Handle unexpected errors here
  }
}

return (
    <div>
      <form onSubmit={createMessage}>
        <h3>hit their line</h3>
        <label>from:</label>
                <input
                type="text"
                placeholder="one cutie"
                    value={sender_id}
                    onChange={(e) => setSenderId(e.target.value)}
                />
                <br />
                <label>to:</label>
                <input
                    type="text"
                    placeholder="another"
                    value={receiver_id}
                    onChange={(e) => setReceiverId(e.target.value)}
                />
                <br />
                <label>whats uppp?</label>
                <input
                    type="text"
                    value={message_content}
                    onChange={(e) => setMessageContent(e.target.value)}
                />
                <br />
        <div>
          <button className="btn draw-border" type="submit">full send</button>
        </div>
      </form>
      <div>

      </div>
    </div>
  );
}