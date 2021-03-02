const carrinhoReducer = (state = [], action) => {
  switch (action.type) {
    case "ADD_CARRINHO":
      const { product } = action;
      return [...state, product];

    case "REMOVE_CARRINHO":
      const newList = state.filter((product) => product.id !== action.id);
      return newList;
    default:
      return state;
  }
};

export default carrinhoReducer;
