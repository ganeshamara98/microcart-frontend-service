import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axiosInstance from "../utils/axiosInstance";  // <-- Use this instance
import { API_ROUTES } from "../config/api";

const fallbackImage = "/images/apple-iphone-12.webp";

const ProductDetailPage = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    axiosInstance
      .get(`${API_ROUTES.PRODUCT.LIST}/${id}`)
      .then((res) => {
        const productData = res.data.product || res.data;  // Adjust according to API response
        setProduct(productData);
      })
      .catch((err) => {
        console.error("Error fetching product", err);
      });
  }, [id]);

  if (!product) return <p className="text-center mt-5">Loading...</p>;

  return (
    <div className="container mt-4">
      <div className="row">
        <div className="col-md-6">
          <img
            src={product.image_url || fallbackImage}
            alt={product.name}
            className="img-fluid"
          />
        </div>
        <div className="col-md-6">
          <h2>{product.name}</h2>
          <h4>₹{product.price}</h4>
          <p>{product.description}</p>
          <div className="mt-3">
            <button className="btn btn-primary me-2">Buy Now</button>
            <button className="btn btn-outline-secondary">Add to Cart</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailPage;
