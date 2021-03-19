import color from "../config/color";

const mainCategories = [
  {
    id: 1,
    label: `Grocery &  Staples`,
    image: require("../../assets/groceries.jpg"),
  },
  {
    id: 2,
    label: "Condiments & Desssings",
    image: require("../../assets/condiments.png"),
  },
  {
    id: 3,
    label: "Snacks & Nimco",
    image: require("../../assets/snacks-nimco.png"),
  },
  {
    id: 4,
    label: "Baby & Kids",
    image: require("../../assets/baby-kids.jpg"),
  },
  {
    id: 5,
    label: "Breakfast and Dairy",
    image: require("../../assets/breakfast-dairy.png"),
  },
  {
    id: 6,
    label: "Beverages",
    image: require("../../assets/bevrages.png"),
  },
  {
    id: 7,
    label: "Bakery",
    image: require("../../assets/Bakeries.png"),
  },
  {
    id: 8,
    label: "Home & Furnishing",
    image: require("../../assets/home-furnish.png"),
  },
  {
    id: 9,
    label: "Vegitables & Fruits",
    image: require("../../assets/vegetables-fruits.png"),
  },
  {
    id: 10,
    label: "Personal Care",
    image: require("../../assets/personal-care.png"),
  },
  {
    id: 11,
    label: "Frozen & Canned Food",
    image: require("../../assets/frozen-Cannedfood.png"),
  },
  {
    id: 12,
    label: "Household & Supplies",
    image: require("../../assets/household-supplies.png"),
  },
  {
    id: 13,
    label: "Meat & Poultary",
    image: require("../../assets/poultary.jpg"),
  },
  {
    id: 14,
    label: "Stationery",
    image: require("../../assets/stationery.png"),
  },
  {
    id: 15,
    label: "Mobile Accessories",
    image: require("../../assets/mobile-accesories.jpg"),
  },
  {
    id: 16,
    label: "Pharmacy",
    image: require("../../assets/pharmacy.jpg"),
  },
  {
    id: 17,
    label: "Bakery",
    image: require("../../assets/Bakeries.png"),
  },
  {
    id: 18,
    label: "Home & Furnishing",
    image: require("../../assets/home-furnish.png"),
  },
  {
    id: 19,
    label: "Vegitables & Fruits",
    image: require("../../assets/vegetables-fruits.png"),
  },
  {
    id: 20,
    label: "Personal Care",
    image: require("../../assets/personal-care.png"),
  },
  {
    id: 21,
    label: "Bakery",
    image: require("../../assets/Bakeries.png"),
  },
  {
    id: 22,
    label: "Home & Furnishing",
    image: require("../../assets/home-furnish.png"),
  },
  {
    id: 23,
    label: "Vegitables & Fruits",
    image: require("../../assets/vegetables-fruits.png"),
  },
  {
    id: 24,
    label: "Personal Care",
    image: require("../../assets/personal-care.png"),
  },
];

const categories = [
  {
    id: 1,
    lable: "Pulses",
  },
  {
    id: 2,
    label: "Atta & Flours",
  },
  {
    id: 3,
    label: "Oil & Ghee",
  },
  {
    id: 4,
    lable: "Rice & Noodles",
  },
  {
    id: 5,
    lable: "Salt & Sugar",
  },
  {
    id: 6,
    label: "Organic & Diet Staples",
  },
  {
    id: 7,
    label: "Spice & Ready Masala",
  },
];

const category = [
  { id: 1, label: "Beverage", icon: "food", color: color.newgreen },
  { id: 2, label: "Pharmacy", icon: "pharmacy", color: color.newgreen },
  { id: 3, label: "Vegetables", icon: "nutrition", color: color.newgreen },
  { id: 4, label: "frozen Food", icon: "food-steak", color: color.newgreen },
  {
    id: 5,
    label: "Meat",
    icon: "food-drumstick-outline",
    color: color.newgreen,
  },
  { id: 6, label: "Fish", icon: "fish", color: color.newgreen },
  { id: 7, label: "Homeware", icon: "google-home", color: color.newgreen },
  { id: 8, label: "Fruits", icon: "fruit-pineapple", color: color.newgreen },
  { id: 9, label: "Fish", icon: "fish", color: color.newgreen },
  { id: 10, label: "Homeware", icon: "google-home", color: color.newgreen },
  { id: 11, label: "Fruits", icon: "fruit-pineapple", color: color.newgreen },
  { id: 12, label: "Fruits", icon: "fruit-pineapple", color: color.newgreen },
];

const topProducts = [
  {
    id: 1,
    price: 65,
    label: `Fruits`,
    image: require("../../assets/product2.jpg"),
  },
  {
    id: 2,
    price: 94,
    label: "Vegitables",
    image: require("../../assets/product3.jpg"),
  },
  {
    id: 3,
    price: 193,
    label: "Meat",
    image: require("../../assets/product4.jpg"),
  },
  {
    id: 4,
    price: 951,
    label: "Pharmacy",
    image: require("../../assets/product5.jpg"),
  },
  {
    id: 5,
    price: 173,
    label: "Chicken",
    image: require("../../assets/product6.jpg"),
  },
  {
    id: 6,
    price: 674,
    label: "Beverages",
    image: require("../../assets/product7.jpg"),
  },
  {
    id: 7,
    price: 323,
    label: "Fish",
    image: require("../../assets/product8.jpg"),
  },
  {
    id: 11,
    price: 65,
    label: `Fruits`,
    image: require("../../assets/product2.jpg"),
  },
  {
    id: 12,
    price: 94,
    label: "Vegitables",
    image: require("../../assets/product3.jpg"),
  },
  {
    id: 13,
    price: 193,
    label: "Meat",
    image: require("../../assets/product4.jpg"),
  },
  {
    id: 14,
    price: 951,
    label: "Pharmacy",
    image: require("../../assets/product5.jpg"),
  },
  {
    id: 15,
    price: 173,
    label: "Chicken",
    image: require("../../assets/product6.jpg"),
  },
  {
    id: 16,
    price: 674,
    label: "Beverages",
    image: require("../../assets/product7.jpg"),
  },
  {
    id: 17,
    price: 323,
    label: "Fish",
    image: require("../../assets/product8.jpg"),
  },
];

export { mainCategories, category, topProducts };
