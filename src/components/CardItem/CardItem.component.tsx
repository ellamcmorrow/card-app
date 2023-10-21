import React, { FC, useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

export const CardItem: FC = () => {
  const { productId } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true); 

  useEffect(() => {
    axios
      .get(`https://moonpig.github.io/tech-test-frontend/search.json`)
      .then(response => {
        console.log("Fetched Data:", response.data); // To inspect the structure
        
        // Assuming ProductId is a number
        const foundProduct = response.data.Products.find(p => p.ProductId === Number(productId));

        if (foundProduct) {
          setProduct(foundProduct);
        } else {
          console.error("Product not found:", productId);
        }
        setLoading(false);
      })
      .catch(error => {
        console.error("Error fetching data:", error);
        setLoading(false);
      });
  }, [productId]);

  if (loading) return <p>Loading...</p>;
  if (!product) return <p>Product not found.</p>;

  return (
    <div>
      <h1>{product.Title}</h1>
      <img src={product.ProductImage.Link.Href} alt={product.Title} />
    </div>
  );
};

export default CardItem;