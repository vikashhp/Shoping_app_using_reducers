import classes from './CartItem.module.css';
import { cartActions } from '../Store/cartManager';
import { useDispatch } from 'react-redux';

const CartItem = (props) => {
  const { title, quantity, total, price,id } = props.item;

  const dispatch=useDispatch()

  

  const removeItemFromCartHandler=()=>{
    dispatch(cartActions.removeFromCart(id))
  }
 
  const addItemToCartHandler=()=>{
    dispatch(cartActions.addToCart({
      id,
      title,
      price
    }))
  }

  return (
    <li className={classes.item}>
      <header>
        <h3>{title}</h3>
        <div className={classes.price}>
          ${total.toFixed(2)}{' '}
          <span className={classes.itemprice}>(${price.toFixed(2)}/item)</span>
        </div>
      </header>
      <div className={classes.details}>
        <div className={classes.quantity}>
          x <span>{quantity}</span>
        </div>
        <div className={classes.actions}>
          <button onClick={removeItemFromCartHandler}>-</button>
          <button onClick={addItemToCartHandler}>+</button>
        </div>
      </div>
    </li>
  );
};

export default CartItem;
