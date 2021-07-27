import React from "react";
import { useSelector, useDispatch } from "react-redux";
import Cart from "./Cart";


const Products = () => {
  const { products } = useSelector((state) => state.ProductsReducers);
  const { shoppingCart, totalQuantity, totalPrice } = useSelector(
    (state) => state.CartReducer
  );

  //console.log(shoppingCart);
  const dispatch = useDispatch();
  //console.log(products);
  return (
    <>

      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <div className="product_table">
              <table className="table table-striped">
                <thead>
                  <tr>
                    <th scope="col"> Products </th>
                  </tr>
                </thead>
                {products.map((product) => {
                  return (
                    <tbody key={product.id}>
                      <tr>
                        <td> {product.name} </td>
                        <td>{product.price}</td>
                        <td>
                          <button
                            onClick={() =>
                              dispatch({
                                type: "ADD_TO_CART",
                                payload: { id: product.id, product },
                              })
                            }
                          >
                            
                            ADD
                          </button>
                        </td>
                      </tr>
                    </tbody>
                  );
                })}
              </table>
            </div>
          </div>
          {
              shoppingCart === 0 ? <h2> cart empty </h2> :  <Cart />
          }

        
  
        </div>
      </div>
    </>
  );
};

export default Products;

