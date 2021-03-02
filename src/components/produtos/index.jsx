import { useDispatch } from "react-redux";
import {
  addToCarrinho,
  removeFromCarrinho,
} from "../../store/modules/carrinho/actions";

const Produtos = ({ product, isRemovable = false }) => {
  const dispatch = useDispatch();

  return (
    <div className="card-produto">
      <img src={product.image} alt={product.name} />
      <h3>{product.name}</h3>
      <h2>Preço: R$ {product.price}</h2>
      {isRemovable ? (
        <button onClick={() => dispatch(removeFromCarrinho(product.id))}>
          Remover item do carrinho
        </button>
      ) : (
        <button onClick={() => dispatch(addToCarrinho(product))}>
          Adicionar item ao carrinho
        </button>
      )}
    </div>
  );
};

export default Produtos;
