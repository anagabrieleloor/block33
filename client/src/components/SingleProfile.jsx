export default function SingleProfile({ user }) {

    return(
        <p key={user.user_id}>{user.first_name}</p>
    );
}