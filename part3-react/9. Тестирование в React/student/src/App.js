import { useEffect, useState } from "react";
import Button from "./components/Button";

import { formatUserName } from "./utils";

function App() {
  const [users, setUsers] = useState([]);

  // Load the data from the server
  useEffect(() => {
    let mounted = true;

    const getUsers = async () => {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/users"
      );
      const data = await response.json();
      if (mounted) {
        setUsers(data);
      }
    };

    getUsers();

    return () => {
      mounted = false;
    };
  }, []);

  return (
    <div className="App">
      <div>Users:</div>
      <Button onClick={() => console.log("fire")} />
      {users.length ? (
        <ul data-testid="user-list">
          {users.map((user) => (
            <li key={user.id} className="user" data-testid="user-item">
              <span>{user.name}</span> (
              <span>{formatUserName(user.username)}</span>)
            </li>
          ))}
        </ul>
      ) : (
        <div>Loading users...</div>
      )}
    </div>
  );
}

export default App;
