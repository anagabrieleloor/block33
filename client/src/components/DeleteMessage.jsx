import { useNavigate } from "react-router-dom";
import { deleteMessage } from "../API/messages";

export default function DeleteMessage({ message_id }) {
	

	const navigate = useNavigate();

	async function handleDelete(event) {
		event.preventDefault();

		try {
			await deleteMessage(message_id);
			window.location.reload();
		} catch (error) {
			console.error(error);
		}
	}
	return (
		<div>
			<button className="btn draw-border" onClick={handleDelete}>delete</button>
		</div>
	);
}