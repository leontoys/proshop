//convert to decimals with 2 places
const addDecimals = (num) => ( Math.round( num * 100 ) / 100 ).toFixed(2)

export const updateCart = (state) => {
        console.log('---updateCart----')
        console.log('state cart items  ',state.cartItems)
    //it will only process the items in the cart in the state at this moment
            //calculate items price
            state.itemsPrice = addDecimals(
                state.cartItems.reduce((acc,item)=> acc+ item.price * item.qty, 0)
            )
            //calculate shipping price
            state.shippingPrice = addDecimals(
                state.itemsPrice > 100 ? 0 : 10
            )
            //calculate tax - 15%
            state.taxPrice = addDecimals(
                Number((0.15*state.itemsPrice).toFixed(2))
            )
            //calculate total price
            state.totalPrice = (
                Number(state.itemsPrice) +
                Number(state.shippingPrice) +
                Number(state.taxPrice)
            ).toFixed(2)


            console.log("state cart items",state.cartItems)
            //save cart to local storage
            localStorage.setItem('cart',JSON.stringify(state))//ie,cartitems+ other info
            console.log("local storage",JSON.parse(localStorage.getItem('cart')))

    return state
}