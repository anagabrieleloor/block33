import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
const BASE_URL = 'http://localhost:8080/api';
 

export default function ReplyMessage({ message_id, thread_id }) {
  const [sender_id, setSenderId] = useState("");
  const [receiver_id, setReceiverId] = useState("");
  const [message_content, setMessageContent] = useState("");
  const navigate = useNavigate();

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
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: requestBody,
      });

      // API Response Handling
      if (response.ok) {
        const data = await response.json();
        console.log("message sent ayooo", data);

        // Optionally, you can navigate back to the message thread or perform other actions
        navigate(`/messages/${thread_id}`);
      } else {
        console.error("message send go oopsie:", response.statusText);

        // Handle errors or show an error message to the user
      }
    } catch (error) {
      console.error("Error:", error);

      // Handle unexpected errors here
    }
  }

  return (
    <div>
      <form onSubmit={createMessage}>
        <label>whats up?</label>
        <input
          type="text"
          value={message_content}
          onChange={(e) => setMessageContent(e.target.value)}
        />
        <br />
        <div>
          <button className="btn draw-border" type="submit">
            reply
          </button>
        </div>
      </form>
    </div>
  );
}