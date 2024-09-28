import Modal from "@/components/Modal";
import { products } from "@/products";
import Image from "next/image";
const InterceptedProduct = ({ params }) => {
  const { id } = params;
  const product = products.find((product) => product.id === parseInt(id));
  return (
    <Modal>
      <Image src={product.url} height={350} width={350} alt={product.title} />
    </Modal>
  );
};

export default InterceptedProduct;
