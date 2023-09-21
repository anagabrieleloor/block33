import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
const BASE_URL = 'http://localhost:8080/api';
 

export default function ReplyMessage({ thread_id, token, sender_id, receiver_id }) {

  // const [sender, setSender] = useState("");
  // const [receiver, setReceiver] = useState("");
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
          Authorization: `Bearer ${token}`,
        },
        body: requestBody,
        
      });

 
      if (response.ok) {
        const data = await response.json();
        console.log("message sent ayooo", data);
        console.log("Thread ID in ReplyMessage:", thread_id);

       
        // navigate(`/messages/thread/${thread_id}`);
        window.location.reload()
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