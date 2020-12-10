import { createSelector } from 'reselect';

const selectCart = state => state.cart;

export const selectcartItems = createSelector(
    [selectCart],
    (cart) => cart.cartItems

);

export const selectCartItemsCount = createSelector(
    [selectcartItems],
    cartItems => cartItems.reduce(
        (accumulateQuantity,cartItem) => accumulateQuantity + cartItem.quantity
        ,0 )

);