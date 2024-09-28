import { products } from "@/products";

const Product = ({ params }) => {
  const { id } = params;
  return <div>Product {id}</div>;
};

export default Product;
