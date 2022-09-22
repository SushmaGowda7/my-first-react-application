import React, { useState } from 'react';
import Form from './components/AddUsers/Form';
import UserList from './components/AddUsers/UserList';

function App() {
  const [userList, setUserList] = useState([]);

  const addUserHandler = (userName, userAge) => {
    setUserList((prevUserList) => {
      return [
        ...prevUserList, 
        {name: userName, age: userAge, id: Math.random().toString()}
      ]
    })
  }
  return (
    <div>
      <Form onAddUser={addUserHandler} />
      <UserList users={userList} />
    </div>
  );
}

export default App;
