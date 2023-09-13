import { useEffect, useState } from "react";
import { fetchMessageById } from "../API/messages";
import { Link, useParams } from "react-router-dom";
import DeleteMessage from "./DeleteMessage";
import EditMessage from "./EditMessage";
import NewMessage from "./NewMessage";
import ReplyMessage from "./ReplyMessage";





export default function MessageThread() {
const { message_id, receiver_id } = useParams();
const [message, setMessage] = useState(null);
const [error, setError ] = useState(null);


    useEffect(() => {
        async function getMessageThread() {
            try {
            const response = await fetchMessageById(message_id);
            if (response) {
                setMessage(response);
              } else {
                setError("failed to fetch message");
              }
            } catch (err) {
              console.error(err);
              setError("error occurred fetching message");
            }
        }
        getMessageThread();
    }, [message_id]);

    return (
        <div className="message-card">
            {error && <p>{error}</p>}
          <h3>message thread:</h3>
    
          <Link to="/messages/new">send a message</Link>
    
          {message && (
    
            <div key={message.message_id}>
    
              <h4>{message.sender_first_name}</h4>
              <p>
                <Link to={`/users/${message.sender_id}`}>
                <img src={message.sender_photos} id="user-profile-image" />
                </Link>
              </p>
              <p>message: {message.sender_first_name}: {message.message_content}</p>
              {/* <NewMessage message_id={message.message_id} sender_id={message.sender_id} receiver_id={message.receiver_id}/> */}
              {/* <ReplyMessage message_id={message.message_id} receiver_id={receiver_id} thread_id={message.thread_id} /> */}
              <NewMessage message_id={message.message_id} thread_id={message.thread_id} />
              <DeleteMessage message_id={message.message_id} />
              <Link
                to={`/messages/edit/${message.message_id}?sender_id=${message.sender_id}&receiver_id=${message.receiver_id}`}>edit
              </Link><br />
              <hr className="rounded" />


              testing all info in thread:
              <h4>{message.receiver_first_name}</h4>
              <p>
                <Link to={`/users/${message.sender_id}`}>
                <img src={message.receiver_photos} id="user-profile-image" />
                </Link>
              </p>
              <p>message: {message.receiver_first_name}: {message.message_content}</p>
              {/* <NewMessage message_id={message.message_id} sender_id={message.sender_id} receiver_id={message.receiver_id}/> */}
              {/* <ReplyMessage message_id={message.message_id} receiver_id={receiver_id} thread_id={message.thread_id} /> */}
              <NewMessage message_id={message.message_id} thread_id={message.thread_id} />
              <DeleteMessage message_id={message.message_id} />
              <Link
                to={`/messages/edit/${message.message_id}`}>edit
              </Link><br />
              <hr className="rounded" />
            </div>
          )}
        </div>
      );
}