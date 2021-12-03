import React, { useState, useEffect } from "react";
import { Chart } from "../components/Chart";

export const Report = () => {
  const [products, setProducts] = useState([]);

  var nuevo;
  useEffect(() => {
    const fetchProductos = async () => {
      const response = await fetch(`http://localhost:3001/api/products/`);
      const data = await response.json();
      setProducts(data);
      nuevo = data[0].name;
    };

    fetchProductos();
  }, [nuevo]);

  return (
    <section id="report">
      <div className="report-container">
        <h1>Unidades en inventario</h1>
        {<Chart data={products} />}
      </div>
    </section>
  );
};
