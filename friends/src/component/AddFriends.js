import React, { useState } from "react";
import { axiosWithAuth } from '../utils.js/axiosWithAuth'

const AddFriend = ( ) => {
    const [form, setForm] = useState({
      id: Date.now(),
      name: "",
      age: "",
      email: ""
    });
  
    const formHandler = e => {
      e.preventDefault();
      axiosWithAuth()
        .post("/friends", form)
        .then(res => {
          console.log(res);
          setForm(res.data);
        })
        .catch( err => err);
    };
  
  
  return (
      <div className="addfriendform">
        <h1>Add Someone New:</h1>
        <form onSubmit={e => formHandler(e)}>
          <input
            type="text"
            placeholder="Name"
            name="name"
            value={form.name}
            onChange={e => setForm({ ...form, name: e.target.value })}
            className="addfriendinput"
          />
  
          <input
            type="number"
            placeholder="Age"
            name="age"
            value={form.age}
            onChange={e => setForm({ ...form, age: e.target.value })}
            className="addfriendinput"
          />
  
          <input
            type="email"
            placeholder="Email"
            name="email"
            value={form.email}
            onChange={e => setForm({ ...form, email: e.target.value })}
            className="addfriendinput"
          />
  
          <br />
          <br />
  
          <button type="submit">Submit</button>
        </form>
      </div>
    );
  };

export default AddFriend;