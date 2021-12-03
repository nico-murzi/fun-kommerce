import React, { useEffect, useState } from "react";
import "./ItemList.css";
import Item from "../Item/Item";
import { Link } from "react-router-dom";

const ItemList = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("https://api.mercadolibre.com/sites/MLA/search?q=funko&limit=4")
      .then((response) => response.json())
      .then((json) => setUsers(json.results));
  }, []);

  return (
    <div className="CardContainer">
      <div className="CardUser">
        {users.map((user) => (
          <div className="CardUser2" key={user.id}>
            <Link to={`/detail/${user.id}`}>
              <Item data={user} />
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ItemList;
