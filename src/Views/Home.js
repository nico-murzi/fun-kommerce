import React, { useEffect, useState } from "react";
import Item from "../Components/Item/Item";
import ItemList from "../Components/ItemList/ItemList";

// Firebase
import { db } from "../Firebase/FirebaseConfig";
import { collection, query, getDocs } from "firebase/firestore";

const Home = () => {
  return (
    <>
      <ItemList />
    </>
  );
};

export default Home;
