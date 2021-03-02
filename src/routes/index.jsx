import { Route, Switch } from "react-router-dom";
import Loja from "../pages/Loja";
import Carrinho from "../pages/Carrinho";

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/">
        <Loja />
      </Route>
      <Route exact path="/carrinho">
        <Carrinho />
      </Route>
    </Switch>
  );
};

export default Routes;
