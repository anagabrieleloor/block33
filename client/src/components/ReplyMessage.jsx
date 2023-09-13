import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { fetchMessageById, newMessage } from "../API/messages";


export default function ReplyMessage({message_id, thread_id}) {
    const [sender_id, setSenderId] = useState("");
    const [receiver_id, setReceiverId] = useState("");
    const [message_content, setMessageContent] = useState("");
    const [error, setError] = useState(null);
    const navigate = useNavigate();

useEffect(() => {
    async function createMessage() {
        
        try {
            const messageData = await fetchMessageById({message_id});
            console.log("message thread fetched", messageData);
            // navigate("/messages")
            // console.log("message sent lets gooo");
            setSenderId(messageData.sender_id || "");
            setReceiverId(messageData.receiver_id || "");
            setMessageContent(messageData.message_content || "");
        } catch (err) {
            console.error("message no good", err);
           
        }
    }
    createMessage();
}, [message_id]);

async function handleSubmit(e) {
    e.preventDefault();
    try {
        const updatedUserData = {
            message_content,
            message_id: message_id,
            thread_id: thread_id,
        }; 


        const response = await newMessage(message_id, thread_id, message_content);
        console.log("message sent~~~", response);
    } catch (error) {
        console.error("error sending message", error)
    }
}


return (
    // <div className="login-card">
    <div>
      <form onSubmit={handleSubmit}>
        {/* <h3>hit their line</h3> */}
        {/* <label>from:</label>
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
                <br /> */}
                <label>whats up?</label>
                <input
                    type="text"
                    value={message_content}
                    onChange={(e) => setMessageContent(e.target.value)}
                />
                <br />
        <div>
          <button className="btn draw-border" type="submit">reply</button>
        </div>
      </form>
      <div>

      </div>
    </div>
  );
}