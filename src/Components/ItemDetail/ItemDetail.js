import React, { useContext } from "react";
import { useEffect, useState } from "react";
import { useParams } from "react-router";
import "../ItemDetail/ItemDetail.css";
import ItemCount from "../ItemCount/ItemCount";
import { CartContext } from "../CartContext/CartContext";

// Firebase
import { db } from "../../Firebase/FirebaseConfig";
import { collection, query, where, getDocs } from "firebase/firestore";

const ItemDetail = () => {
  let IDProduct = useParams();

  let IDProductDetail = IDProduct.id;
  const [productDetail, setProductDetail] = useState([]);

  const { addItem } = useContext(CartContext);

  useEffect(() => {
    const getFunkoData = async () => {
      const q = query(
        collection(db, "funko"),
        where("id", "==", `${IDProductDetail}`)
      );

      const querySnapshot = await getDocs(q);
      const dataF = [];
      querySnapshot.forEach((doc) => {
        // doc.data() is never undefined for query doc snapshots
        dataF.push({ ...doc.data() });
      });
      setProductDetail(dataF[0]);
    };
    getFunkoData();
  }, []);

  return (
    <div className="detail">
      <h1 className="detailTitle">Detalle de producto</h1>
      <div key={productDetail.id} className="card">
        <div className="imageContainerDetail">
          <img src={productDetail.img} alt="imagen de producto" />
        </div>
        <div className="detailRight">
          <h1 className="title">{productDetail.title}</h1>
          <h2 className="quote">{productDetail.quote}</h2>
          <h3 className="price">U$D {productDetail.price}</h3>
        </div>
        <div className="stockContainer">
          <ItemCount
            item={productDetail}
            stock={productDetail.stock}
            initial={1}
            addItem={addItem}
          />
          <h4 className="stock">Stock disponible: {productDetail.stock}</h4>
        </div>
      </div>
    </div>
  );
};

export default ItemDetail;
