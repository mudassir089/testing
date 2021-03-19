import React from "react";
import { atom, selector } from "recoil";

//productState
export const ProductState = atom({
  key: "ProductState",
  default: [
    {
      id: 1,
      label: "Lux",
      price: 40,
      image: require("../../assets/personal-care.png"),
    },
    {
      id: 2,
      label: "LifeBoy",
      price: 30,
      image: require("../../assets/bakery.png"),
    },
    {
      id: 3,
      label: "Detol",
      price: 46,
      image: require("../../assets/banana.png"),
    },
    {
      id: 4,
      label: "Capri",
      price: 32,
      image: require("../../assets/cone.png"),
    },
    {
      id: 5,
      label: "Pamolive",
      price: 42,
      image: require("../../assets/fruit.png"),
    },
    {
      id: 6,
      label: "SafeGuarf",
      price: 52,
      image: require("../../assets/vegitable.png"),
    },
    {
      id: 7,
      label: "Dove",
      price: 80,
      image: require("../../assets/pharmacy.jpg"),
    },
    {
      id: 8,
      label: "Golden",
      price: 75,
      image: require("../../assets/baby-kids.jpg"),
    },
    {
      id: 9,
      label: "Pure",
      price: 65,
      image: require("../../assets/Grocery.jpg"),
    },
  ],
});

// features/cart/cartState.js
export const addToCart = (cart, item) => {
  const newCart = [...cart];
  const foundIndex = cart.findIndex((x) => x.id === item.id);
  // Increase quantity if existing
  if (foundIndex >= 0) {
    newCart[foundIndex] = {
      ...cart[foundIndex],
      quantity: cart[foundIndex].quantity + 1,
    };
    return newCart;
  }
  // Add new item
  newCart.push({
    id: item.id,
    product: item,
    quantity: 1,
  });
  return newCart;
};
export const subToCart = (cart, item) => {
  const newCart = [...cart];
  const foundIndex = cart.findIndex((x) => x.id === item.id);
  // Increase quantity if existing
  if (foundIndex >= 0) {
    newCart[foundIndex] = {
      ...cart[foundIndex],
      quantity: cart[foundIndex].quantity - 1,
    };
    return newCart;
  }
  // Add new item
  newCart.push({
    id: item.id,
    product: item,
    quantity: 1,
  });
  return newCart;
};

//cartState
export const cartState = atom({
  key: "cart",
  default: [],
});

//Total items
export const cartTotal = selector({
  key: "cartTotal",
  get: ({ get }) => {
    const cart = get(cartState);
    return cart.reduce((total, item) => {
      return total + item.product.price * item.quantity;
    }, 0);
  },
});
