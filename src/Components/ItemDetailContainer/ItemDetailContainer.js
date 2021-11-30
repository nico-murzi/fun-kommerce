import React, { useState, useEffect } from "react";
import ItemDetail from "../ItemDetail/ItemDetail";
import { Dimmer, Loader, Image, Segment } from "semantic-ui-react";

const ItemDetailContainer = () => {
  const [item, setItem] = useState({});
  const [loader, setLoader] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      fetch(
        "https://api.mercadolibre.com/sites/MLA/search?q=Zapatillas&limit=1"
      )
        .then((response) => response.json())
        .then((productObject) => {
          setItem(productObject.results[0]);
          setLoader(false);
        });
    }, 2000);
  }, []);

  return (
    <>
      {loader ? (
        <Segment>
          <Dimmer active inverted>
            <Loader inverted>Loading</Loader>
          </Dimmer>

          <Image src="/images/wireframe/short-paragraph.png" />
        </Segment>
      ) : (
        <ItemDetail item={item} />
      )}
    </>
  );
};

export default ItemDetailContainer;
