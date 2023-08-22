import {useEffect, useState} from 'react';

import * as userService from "../src/services/userService.js";

import Footer from "./components/Footer";
import Header from "./components/Header";
import Search from "./components/Search";
import './App.css';
import UserList from "./components/UserList";
import CreateUser from './components/CreateUser.js';

function App() {

  const [users,setUsers] = useState([]);
  const [addUser, setAddUser] = useState(null);
  const [error, setError] = useState(false);


  const onClose = () => {
    setAddUser(null);
  }

  const onDeleteClick = async (userId,onClose) => {
    //Delete from Server
    const userA = await userService.delUser(userId)

    //Delete from VDom
    setUsers(users.filter(u => u._id !== userId));

    //Close dialog after clicking delete
    onClose();
  }

  const onAddUserClick = () => {
    setAddUser(true);
  }

  const onSubmit = async (e) => {
    e.preventDefault();

    let formData = new FormData(e.currentTarget);

    let firstName = formData.get('firstName');
    let lastName = formData.get('lastName');
    let email = formData.get('email');
    let imageUrl = formData.get('imageUrl');
    let phoneNumber = formData.get('phoneNumber');
    let street = formData.get('street');
    let streetNumber = formData.get('streetNumber');
    let city = formData.get('city');
    let country = formData.get('country');

    //Send Ajax to the server
    const createdUser = await userService.addUser({firstName,lastName,email,phoneNumber,imageUrl,address:{country,city,street,streetNumber}});
    
    setUsers(state => [...state, createdUser.user]);
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
        {addUser && <CreateUser onClose={onClose} onSubmit={onSubmit} />}
        <button className="btn-add btn" onClick={onAddUserClick}>Add new user</button>

    </section>

      </main>

      <Footer />
    </>
  );
}

export default App;
