import { Link } from "react-router-dom";

const UserList = ({ users }) => {
  return (
    <div>
      <ul>
        {users.map((item) => (
          <li key={item.id}>
            <Link to={item.id.toString()}>
              {item.firstName}
              {item.lastName}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};
export default UserList;
