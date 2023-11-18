import Card from "../UI/Card";
import classes from "./Cart.module.css";
import CartItem from "./CartItem";
import { useSelector } from "react-redux";
import { Fragment } from "react";

const Cart = (props) => {
  const cartVisible = useSelector((state) => state.cartVisible.isVisible);

  return (
    <Fragment>
      {cartVisible && (
        <div>
          <Card className={classes.cart}>
            <h2>Your Shopping Cart</h2>
            <ul>
              <CartItem
                item={{ title: "Test Item", quantity: 3, total: 18, price: 6 }}
              />
            </ul>
          </Card>
        </div>
      )}
    </Fragment>
  );
};

export default Cart;
