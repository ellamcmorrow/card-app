import React, { FC, useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { Button } from "../Button";
import { Card } from "../Card";
import { Product } from "../types";

export const CardItem: FC = () => {
  const { productId } = useParams();
  const [product, setProduct] = useState<Product | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get(`https://moonpig.github.io/tech-test-frontend/search.json`)
      .then((response) => {
        const foundProduct = response.data.Products.find(
          (p) => p.ProductId === Number(productId)
        );

        if (foundProduct) {
          setProduct(foundProduct);
        } else {
          console.error("Product not found:", productId);
        }
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        setLoading(false);
      });
  }, [productId]);

  if (loading) return <p>Loading...</p>;
  if (!product) return <p>Product not found.</p>;

  return (
    <div className="container">
      <div className="row">
        <div className="col-12 col-md-6 col-lg-3">
          <Card>
            <Card.Image
              src={product.ProductImage.Link.Href}
              alt={product.Title}
            />
          </Card>
        </div>
        <div className="col-12 col-md-6 col-lg-3">
          <h1> {product.Title}</h1>
          <Button onPress={() => alert("Success!")}>Buy me!</Button>
        </div>
      </div>
    </div>
  );
};

export default CardItem;
