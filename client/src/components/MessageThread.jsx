import { useEffect, useState } from "react";
import { fetchMessageByThread } from "../API/messages";
import { Link, useParams } from "react-router-dom";
import DeleteMessage from "./DeleteMessage";
import EditMessage from "./EditMessage";
import NewMessage from "./NewMessage";
import ReplyMessage from "./ReplyMessage";

export default function MessageThread({token}) {
  const { thread_id } = useParams();
  const [messages, setMessages] = useState([]);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [sender_id, setSender] = useState();
  const [receiver_id, setReceiver] = useState(null);



  useEffect(() => {
    async function getMessageThread() {
      try {
        const response = await fetchMessageByThread(thread_id);
        if (response) {
          setMessages(response);

          const lastMessage = response[response.length - 1];
          if (lastMessage) {
            setSender(lastMessage.sender_id);
            setReceiver(lastMessage.receiver_id);
          }

        } else {
          setError("Failed to fetch messages");
        }
      } catch (err) {
        console.error(err);
        setError("Error occurred fetching messages");
      } finally {
        setIsLoading(false);
      }
    }
    getMessageThread();
  }, [thread_id]);

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  if (messages.length === 0) {
    return <p>No messages found.</p>;
  }
  console.log("Thread ID in MessageThread:", thread_id);

  return (
    <div className="thread-card-container">
      <div className="thread-card">
        {error && <p>{error}</p>}

        <h3 className="chat-banner">message thread:</h3>

        {/* <Link to="/messages/new">Send a message</Link> */}

        {messages.map((message) => (

          <div key={message.message_id}>
            {console.log('chat with: ', message.sender_first_name)}
            {/* <h4>{message.sender_first_name}</h4> */}
            <p>
              <Link to={`/users/${message.sender_id}`}>
                <img src={message.sender_photos} id="chat-profile-pic" alt={`Profile of ${message.sender_first_name}`} />
              </Link>
            </p>
            <p id="chat-bubble"><b>{message.sender_first_name}:</b> {message.message_content}</p>

            {/* <ReplyMessage message_id={message.message_id} thread_id={message.thread_id} /> */}
            {/* <DeleteMessage message_id={message.message_id} />
          <Link
            to={`/messages/edit/${message.message_id}?sender_id=${message.sender_id}&receiver_id=${message.receiver_id}`}>Edit
          </Link><br /> */}

          </div>
        ))}

      </div>
      <ReplyMessage 
      thread_id={thread_id} 
      sender_id={sender_id} 
      receiver_id={receiver_id} 
      token={token} />

    </div>
  );
}
