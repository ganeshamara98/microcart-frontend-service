import React, { useEffect, useState } from "react";
import axiosInstance from "../utils/axiosInstance";
import { API_ROUTES } from "../config/api";
import { useNavigate } from "react-router-dom";

const fallbackImage = "/images/apple-iphone-12.webp";

const ProductsPage = () => {
  const [products, setProducts] = useState([]); // ✅ Ensure it's always an array
  const navigate = useNavigate();


  useEffect(() => {
    axiosInstance
        .get(API_ROUTES.PRODUCT.LIST)
        .then((res) => {
        const responseData = res.data;

        if (Array.isArray(responseData.products)) {
            setProducts(responseData.products);
        } else {
            console.warn("Expected 'products' to be an array, got:", responseData.products);
            setProducts([]);
        }
        })
        .catch((err) => {
        console.error("Error fetching products", err);
        setProducts([]);
        });
    }, []);


  return (
    <div className="container mt-4">
      <h2 className="mb-4">Products</h2>
      <div className="row">
        {products.length === 0 ? (
          <p>No products available.</p>
        ) : (
          products.map((product) => (
            <div
              key={product.id}
              className="col-md-4 mb-4"
              onClick={() => navigate(`/products/${product.id}`)}
              style={{ cursor: "pointer" }}
            >
              <div className="card h-100">
                <img
                  src={product.image_url || fallbackImage}
                  className="card-img-top"
                  alt={product.name}
                  height="200"
                  style={{ objectFit: "cover" }}
                  onError={(e) => {
                    e.target.src = fallbackImage;
                  }}
                />
                <div className="card-body">
                  <h5 className="card-title">{product.name}</h5>
                  <p className="card-text">₹{product.price}</p>
                  <div className="d-flex justify-content-between">
                    <button className="btn btn-primary btn-sm">Buy Now</button>
                    <button className="btn btn-outline-secondary btn-sm">Add to Cart</button>
                  </div>
                </div>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default ProductsPage;
