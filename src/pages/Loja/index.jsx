import { useSelector } from "react-redux";
import Produtos from "../../components/produtos";

const Loja = () => {
  const loja = useSelector((state) => state.loja);

  return (
    <>
      <div className="title">
        <h2>Produtos a venda</h2>
      </div>
      <div className="container-flex">
        {loja.map((product, index) => (
          <Produtos key={index} product={product} />
        ))}
      </div>
    </>
  );
};

export default Loja;
