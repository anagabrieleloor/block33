import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { editMessage } from "../API/messages";
import { useParams } from "react-router-dom";

export default function EditMessage() {
  const [message_content, setMessageContent] = useState("");
  const navigate = useNavigate();
  const location = useLocation();
  const { message_id } = useParams();
  console.log("message_id from URL:", message_id);

  // Extract sender_id and receiver_id from query parameters
  const sender_id = new URLSearchParams(location.search).get("sender_id");
  const receiver_id = new URLSearchParams(location.search).get("receiver_id");

  async function handleEditMessage(event) {
    event.preventDefault();

    let updatedMessage = {
      sender_id: sender_id,
      receiver_id: receiver_id,
      message_content: message_content,
    };

    try {
      await editMessage(message_id, updatedMessage);
      navigate("/messages");
    } catch (err) {
      console.error("edit nogood", err);
    }
  }

  return (
    <div className="login-card">
      <form onSubmit={handleEditMessage}>
        <h3>edit message</h3>
        <label>from: one cutie</label><br />
      
        <label>to: another</label><br />

        <br />
        <label>whats up?</label>
        <input
          type="text"
          value={message_content}
          onChange={(e) => setMessageContent(e.target.value)}
        />
        <br />
        <button className="btn draw-border">submit</button>
      </form>
    </div>
  );
}
