import React, { useState, useEffect } from 'react';
import { axiosWithAuth } from "../utils.js/axiosWithAuth";
import AddFriend from "./AddFriends";


function FriendsList() {
    const [friends, setFriends] = useState([]);


    useEffect(() => {
        axiosWithAuth()
            .get("/friends")
            .then(res => {
                console.log("FriendsList.js: axios.get: res ", res);
                setFriends(res.data);
            })
            .catch(err => console.log(err));
    }, []);

    return (
        <div>
            {friends.map(x => {
          return (
            <div id={x.id} className="friend">
              <h1>{x.name}</h1>
              <h2>{x.age}</h2>
              <p>{x.email}</p>
            </div>
          );
        })}
        </div>
    );
}

export default FriendsList;