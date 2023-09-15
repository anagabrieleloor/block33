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

  
    const requestBody = JSON.stringify({
      sender_id,
      receiver_id,
      message_content,
      thread_id,
    });

    try {
      
      const response = await fetch(`${BASE_URL}/messages/new`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: requestBody,
      });

 
      if (response.ok) {
        const data = await response.json();
        console.log("message sent ayooo", data);

       
        navigate(`/messages/${thread_id}`);
      } else {
        console.error("message send go oopsie:", response.statusText);

      }
    } catch (error) {
      console.error("Error:", error);

      
    }
  }

  return (
    <div>
      <form onSubmit={createMessage}>
        {/* <label>whats up?</label> */}
        <input
          type="text"
          value={message_content}
          placeholder="whats up?"
          onChange={(e) => setMessageContent(e.target.value)}
        />
    <button className="btn draw-border" type="submit">
            reply
          </button>
        <div>
          
        </div>
      </form>
    </div>
  );
}