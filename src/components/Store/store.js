
import {configureStore} from '@reduxjs/toolkit';
import cartVisible from './cartVisible'

const store=configureStore({
    reducer:{cartVisible:cartVisible}
})

export default store;