const UserList = ({ users }) => {
  return (
    <div>
      <ul>
        {users.map((item) => (
          <li key={item.id}>
            {item.firstName}
            {item.lastName}
          </li>
        ))}
      </ul>
    </div>
  );
};
export default UserList;
