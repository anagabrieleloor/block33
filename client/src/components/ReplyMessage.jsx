import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { createMessage } from "../API/messages";



export default function ReplyMessage({ thread_id, sender_id, receiver_id, messages }) {
  const [message_content, setMessageContent] = useState("");
  const navigate = useNavigate();

  const messagesRef = useRef(null);
  const inputRef = useRef(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      let data;

      if (thread_id) {
        data = await createMessage(sender_id, receiver_id, message_content, thread_id);
      } else {
        data = await createMessage(sender_id, receiver_id, message_content);
      }

      console.log("Message sent:", data);


      setMessageContent("");
    } catch (error) {
      console.error('error:', error);
    }
  };

  useEffect(() => {
    // Scroll to the bottom of the chat container to show the new message
    if (messagesRef.current) {
      messagesRef.current.scrollTop = messagesRef.current.scrollHeight;
    }
  }, [messages]);

  useEffect(() => {
    // Focus on the input field after submitting a message
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, [message_content]);

  function refreshPage() {
    window.location.reload(false);
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div ref={messagesRef} style={{ maxHeight: "200px", overflowY: "auto" }}>
          
        </div>
        <input
          type="text"
          value={message_content}
          placeholder="whats up?"
          onChange={(e) => setMessageContent(e.target.value)}
          ref={inputRef}
        />
        <button className="btn draw-border" type="submit" onClick={refreshPage}>
          reply
        </button>
      </form>
    </div>
  );
}