import { useParams } from "react-router-dom";

const Product = () => {
  const { slug } = useParams();
  return <h1>{slug}</h1>;
};

export default Product;
