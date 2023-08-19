import {useEffect, useState} from 'react';

import * as userService from "../src/services/userService.js";

import Footer from "./components/Footer";
import Header from "./components/Header";
import Search from "./components/Search";
import './App.css';
import UserList from "./components/UserList";

function App() {

  const [users,setUsers] = useState([]);


  const onDeleteClick = async (userId,onClose) => {
    const userA = await userService.delUser(userId)
    setUsers(users.filter(u => u._id !== userId));
    onClose();
  }

 useEffect(() => {
    userService.getAll()
    .then(users => {
      setUsers(users);
    }).catch(err => {
      console.log('Error' + err);
    })
  }, []);
  return (
    <>
      <Header />

      <main className='main'>
      <section className="card users-container">
        <Search />
        <UserList users={users} onDeleteClick={onDeleteClick}/>

        <button className="btn-add btn">Add new user</button>

    </section>

      </main>

      <Footer />
    </>
  );
}

export default App;
