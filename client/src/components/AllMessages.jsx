import { useState, useEffect } from "react";
import { fetchMessages } from "../API/messages";
import { BrowserRouter, Routes, Route } from "react-router-dom"
import { Link } from "react-router-dom";
import DeleteMessage from "./DeleteMessage";
import EditMessage from "./EditMessage";
import ReplyMessage from "./ReplyMessage";

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
      <h3 className="all-messages-banner">messages:</h3>

      <Link to="/messages/new">send a message</Link>

      {messages.map((message) => (

        <div key={message.message_id}>

          <h4>{message.sender_first_name}</h4>
          <p>
            <Link to={`/messages/thread/${message.thread_id}`}>
            <img src={message.sender_photos} id="user-profile-image" />
            </Link>
          </p>
          <p>message: {message.sender_first_name}: {message.message_content}</p>
          <DeleteMessage message_id={message.message_id} />
          <Link
            to={`/messages/edit/${message.message_id}`}>edit
          </Link>

          <hr className="rounded" />
        </div>
      ))}
    </div>
  );
}