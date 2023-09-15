import { useState, useEffect } from "react";
import { fetchMessages } from "../API/messages";
import { Link } from "react-router-dom";
import DeleteMessage from "./DeleteMessage";
import EditMessage from "./EditMessage";
import ReplyMessage from "./ReplyMessage";

export default function AllMessages() {
  const [messages, setMessages] = useState([]);
  const [error, setError] = useState(null);
  const [successMessage, setSuccessMessage] = useState("");
  const [searchParam, setSearchParam] = useState("");

  useEffect(() => {
    async function getAllMessages() {
      try {
        const response = await fetchMessages();
        setMessages(response);
      } catch (error) {
        setError(error.message);
      }
    }
    getAllMessages();
  }, []);

  const messagesToDisplay = searchParam
    ? messages.filter((message) =>
        message.sender_first_name.toLowerCase().includes(searchParam)
      )
    : messages;

  return (
    <div className="match-container">
      <div className="match-card">
        <h3 className="all-messages-banner">messages:</h3>
        <Link to="/messages/new">send a message</Link>



        {messagesToDisplay.map((message) => (
          <div key={message.message_id}>
            <h4>{message.sender_first_name}</h4>
            <p>
              <Link to={`/messages/thread/${message.thread_id}`}>
                <img src={message.sender_photos} id="user-profile-image" />
              </Link>
            </p>
            <p>
              message: {message.sender_first_name}: {message.message_content}
            </p>
            <DeleteMessage message_id={message.message_id} />
            <Link to={`/messages/edit/${message.message_id}`}>edit</Link>
            <hr className="rounded" />
          </div>
        ))}
      </div>
      <label>
          ♡{" "}
          <input
            type="text"
            placeholder="search"
            value={searchParam}
            onChange={(e) => setSearchParam(e.target.value.toLowerCase())}
          />
        </label>
    </div>
  );
}
