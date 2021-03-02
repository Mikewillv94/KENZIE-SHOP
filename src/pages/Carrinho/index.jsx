import { useSelector } from "react-redux";
import Produtos from "../../components/produtos";

const Carrinho = () => {
  const carrinho = useSelector((state) => state.carrinho);
  console.log(carrinho);
  return (
    <div className="container">
      <div className="title">
        <h2>Meu Carrinho de Compras</h2>
      </div>
      <div className="total">
        <label>
          Total - R$:
          {carrinho.reduce((acc, product) => acc + product.price, 0)}
        </label>
      </div>
      <div className="compras">
        {carrinho.map((product, index) => (
          <Produtos key={index} product={product} isRemovable />
        ))}
      </div>
    </div>
  );
};

export default Carrinho;
