import React, { useState , Fragment} from 'react';
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
    <Fragment>
      <Form onAddUser={addUserHandler} />
      <UserList users={userList} />
    </Fragment>
  );
}

export default App;
