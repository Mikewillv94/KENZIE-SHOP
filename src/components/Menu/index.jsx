import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Button from "@material-ui/core/Button";
import { useHistory } from "react-router-dom";
import { MenuItem } from "@material-ui/core";
import LocalGroceryStoreIcon from "@material-ui/icons/LocalGroceryStore";
import Badge from "@material-ui/core/Badge";
import { useSelector } from "react-redux";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  title: {
    flexGrow: 1,
    fontWeight: "500",
    fontSize: "18px",
  },
}));

export default function MenuShop() {
  const classes = useStyles();

  const carrinho = useSelector((state) => state.carrinho);

  const history = useHistory();
  const sendTo = (path) => {
    history.push(path);
  };

  return (
    <div className={classes.root}>
      <AppBar position="fixed">
        <Toolbar>
          <MenuItem onClick={() => sendTo("/")} className={classes.title}>
            Kenzie Shop
          </MenuItem>
          <MenuItem onClick={() => sendTo("/carrinho")}>
            <Badge badgeContent={carrinho.length} color="secondary">
              <LocalGroceryStoreIcon />
            </Badge>
          </MenuItem>
          <Button color="inherit">Login</Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}
