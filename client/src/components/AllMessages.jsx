import { useState, useEffect } from "react";
import { fetchMessages } from "../API/messages";
import { BrowserRouter, Routes, Route } from "react-router-dom"
import {Link} from "react-router-dom";


export default function AllMessages() {
  const [messages, setMessages] = useState([]);
  const [error, setError] = useState(null);
  const [successMessage, setSuccessMessage] = useState("");
  // const [searchParam, setSearchParam] = useState("");

  useEffect(() => {
    async function getAllMessages() {
      const response = await fetchMessages();
      console.log(response);

      setMessages(response);
      }
    getAllMessages();
  }, []);

  


  return (
    <div className="message-card">
      <h3>messages:</h3>
      {messages.map((message) => ( 
        
        <div key={message.message_id}>
          
          <h4>{message.sender_id}</h4>
          <p>
            <img src={message.sender_id.photos} id="message-profile-image" />
          </p>
          <p>message: {message.message_content}</p>
          <hr></hr>
        </div>
      ))}
    </div>
  );
}