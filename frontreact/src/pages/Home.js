import React, { useEffect, useState } from "react";
import { Card } from "../components/Card";
import { FormattedMessage } from "react-intl";

export const Home = ({ searchKey }) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProductos = async () => {
      const response = await fetch(
        `http://localhost:3001/api/products?q=${searchKey}`
      );
      const data = await response.json();
      setProducts(data);
    };

    fetchProductos();
  }, [searchKey]);

  return (
    <section id="home">
      <div className="home-container">
        <h1>
          <FormattedMessage id="gallery" />
        </h1>
        <div className="home-card">
          {products.map((e, i) => (
            <Card key={i} products={e} />
          ))}
        </div>
      </div>
    </section>
  );
};
