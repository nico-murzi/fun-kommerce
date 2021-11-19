import React, { useEffect, useState } from "react";
import "./ItemListContainer.css";
import ItemCharacter from "../ItemCharacter/ItemCharacter";

const ItemListContainer = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("https://pokeapi.co/api/v2/pokemon?limit=100&offset=200")
      .then((response) => response.json())
      .then((json) => setUsers(json));
  }, []);

  console.log(users);

  return (
    <div className="CardContainer">
      <h1>CardContainer</h1>
      <div className="CardUser">
        {users.map((user) => (
          <div>
            <ItemCharacter data={user} key={user.id} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ItemListContainer;
