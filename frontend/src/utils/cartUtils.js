//convert to decimals with 2 places
const addDecimals = (num) => ( Math.round( num * 100 ) / 100 ).toFixed(2)

export const updateCart = (item,state) => {

            //check if this item already exists in the cart
            const existingItem = state.cartItems.find((x)=>x._id === item._id)

            //if it exists, update quantity
            if(existingItem){
                state.cartItems = state.cartItems.map(
                    (x)=> x._id === existingItem._id ? item : x )//so will this have update quantity?
            }
            //if its not existing, add to car
            else{
                state.cartItems = [...state.cartItems,item]//add it
            }

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

            //save cart to local storage
            localStorage.setItem('cart',JSON.stringify(state))//ie,cartitems+ other info

    return state
}