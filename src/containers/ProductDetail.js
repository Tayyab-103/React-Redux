import React, { useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { selectedProducts } from "../redux/actions/productActions";
const ProductDetail = () => {
  const product = useSelector((state)=> state.product)
  const { productId } = useParams();
  const dispatch = useDispatch();
  console.log(product);

  const fetchProductDeetail = async () => {
    const response = await axios
      .get(`https://fakestoreapi.com/products/${productId}`)
      .catch((err) => console.log("Err ", err));

    dispatch(selectedProducts(response.data));
  };

  useEffect(()=>{
    if(productId && productId !== "") fetchProductDeetail()
  },[productId])
  return (
    <div>
      <div className="ui grid container">
        <div className="ui placeholder segment"></div>
      </div>
    </div>
  );
};

export default ProductDetail;
