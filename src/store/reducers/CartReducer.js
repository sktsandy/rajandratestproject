const initailState = {
  shoppingCart: [],
  totalPrice: 0,
  totalQuantity: 0,
};

const CartReducer = (state = initailState, action) => {
  const { shoppingCart, totalPrice, totalQuantity } = state;
  let updatedPrice;
  let updatedQuantity;
  let findProduct;
  let index;

  switch (action.type) {
    // ITEMS ADD TO CART CASE

    case "ADD_TO_CART":
      const { price, quantity } = action.payload.product;
      console.log(price);
      //console.log(quantity);

      const check = shoppingCart.find((product) => product.id === action.payload.id );
      if (check) {
        alert("this product is Already added...");
        return state;
      } else {
        updatedPrice = totalPrice + price * quantity;
        updatedQuantity = totalQuantity + quantity;
       

        return {
          ...state,
          shoppingCart: [...shoppingCart, action.payload.product],
          totalPrice: updatedPrice,
          totalQuantity: updatedQuantity,
        };
      }

      break;

    //// INCREMENT INDIVIDUAL ITEM FROM SHOPPING CART
    case "INC":
      findProduct = shoppingCart.find((product) => product.id === action.payload);
      //console.log(findProduct);
      index = shoppingCart.find((product) => product.id === action.payload);
      findProduct.quantity += 1;
      shoppingCart[index] = findProduct;
      return {
        ...state,
        totalPrice: totalPrice + findProduct.price,
        totalQuantity: totalQuantity + 1,
      };

      break;

    ///  DECREMNT INDIVIDUAL ITEMS FROM SHOPPING CART
    case "DECREMENT":
      findProduct = shoppingCart.find((product) => product.id === action.payload );
      index = shoppingCart.find((product) => product.id === action.payload);
      if (findProduct.quantity > 1) {
        findProduct.quantity -= 1;
        shoppingCart[index] = findProduct;

        return {
          ...state,
          totalPrice: totalPrice - findProduct.price,
          totalQuantity: totalQuantity - 1,
        };
      } else {
        return state;
      }

      break;

    // //// DELETE INDIVIDUAL ITEM FROM SHOPPING CART
    // case "REMOVE_ITEM":
    //   findProduct = shoppingCart.find((product) => product.id === action.payload);
    //   let filtered = shoppingCart.filter((product) => {
    //     return product.id !== action.payload;
    //   });

    //   return {
    //     ...state,
    //     shoppingCart: [...filtered],
    //     totalPrice:
    //       totalPrice - findProduct.discountPrice * findProduct.quantity,
    //     totalQuantity: totalQuantity - findProduct.quantity,
    //   };

    default:
      return state;
  }
};

export default CartReducer;