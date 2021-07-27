const initailState = {
  products: [
    {
      id: 1,
      name: "Bread",
      quantity: 1,
      price: 10
    },

    {
      id: 2,
      name: "MIlk",
      quantity: 1,
      price: 40
    },

    {
      id: 3,
      name: "Cheese",
      quantity: 1,
      price: 10
    },

    {
      id: 4,
      name: "Soup",
      quantity: 1,
      price: 25
    },

    {
      id: 5,
      name: "Butter",
      quantity: 1,
      price: 30
    },
    
  ],
};

const ProductsReducers = (state = initailState, action) => {
  switch (action.type) {

    default:
      return state;
  }
};

export default ProductsReducers;
