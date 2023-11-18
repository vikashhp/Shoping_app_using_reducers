import classes from './CartButton.module.css';
import {useSelector} from 'react-redux';
import { useDispatch } from 'react-redux';
import { cartActions } from '../Store/cartVisible';

const CartButton = (props) => {

  const dispatch = useDispatch()


  const cart = useSelector(state => state.cartVisible.isVisible);

  

  const cartVisibleHandler=()=>{
      dispatch(cartActions.visible())
  }
  return (
    <button className={classes.button} onClick={cartVisibleHandler}>
      <span>My Cart</span>
      <span className={classes.badge}>1</span>
    </button>
  );
};

export default CartButton;
