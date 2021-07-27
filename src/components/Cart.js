import React from 'react';
import { useSelector, useDispatch } from "react-redux";
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";

const Cart = () => {
    const { shoppingCart, totalQuantity, totalPrice } = useSelector(
        (state) => state.CartReducer
      );

      const dispatch = useDispatch();
      
    return (
        <>
        
            <div className="col-md-6">
            <div className="product_cart">
              <table className="table table-striped">
                <thead>
                  <tr>
                    <th scope="col">Basket</th>
                  </tr>
                </thead>
                <tbody>
                {shoppingCart.map((product) => {
                    
                  return (
                    <>
                      
                        <tr key={product.id}>
                          <td> {product.name} </td>
                          <td>
                            
                            ₹{(product.price * product.quantity).toFixed(
                              2
                            )}
                          </td>
                          <td>
                            
                            <div className="cart_quantity">
                              <span
                                className="cart_dec"
                                onClick={() =>
                                  dispatch({
                                    type: "DECREMENT",
                                    payload: product.id,
                                  })
                                }
                              >
                                <AiOutlineMinus />
                              </span>
                              <span className="cart_qty">
                                
                                {product.quantity}
                              </span>
                              <span
                                className="cart_inc"
                                onClick={() =>
                                  dispatch({ type: "INC", payload: product.id })
                                }
                              >
                                <AiOutlinePlus />
                              </span>
                            </div>
                          </td>
                        </tr>
                      


                    </>
                    
                  );
                })}
                    <tr>
                        <td>  Total Amount: <span> ₹{ totalPrice.toFixed(2) } </span> </td>
                       
                    </tr>
                
                </tbody>
              </table>
            </div>
          </div>
        </>
    )
}

export default Cart;
