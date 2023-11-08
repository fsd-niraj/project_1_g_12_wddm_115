const restaurantData = [
  {
    name: "Mama Mia's Italian Kitchen",
    star: "4.5",
    cuisine: "Italian, Pasta, Fine Dining",
    cost: "CA$14.99 for one",
    info: "4500+ orders are placed from here",
    image: "images/1.jpg",
  },
  {
    name: "Pasta Palace",
    star: "4.2",
    cuisine: "Italian, Pasta, Vegetarian",
    cost: "CA$11.99 for one",
    info: "3800+ orders are placed from here",
    image: "images/2.jpg",
  },
  {
    name: "Pizza Paradise",
    star: "4.3",
    cuisine: "Italian, Pizza, Fast Food",
    cost: "CA$10.99 for one",
    info: "5000+ orders are placed from here",
    image: "images/3.jpg",
  },
  {
    name: "Gourmet Pizzeria",
    star: "4.4",
    cuisine: "Italian, Pizza, Gourmet",
    cost: "CA$12.99 for one",
    info: "4200+ orders are placed from here",
    image: "images/4.jpg",
  },
  {
    name: "Big City Slices",
    star: "4.1",
    cuisine: "Italian, Pizza, Fast Food",
    cost: "CA$9.99 for one",
    info: "3600+ orders are placed from here",
    image: "images/5.jpg",
  },
  {
    name: "Ristorante Italiano",
    star: "4.6",
    cuisine: "Italian, Fine Dining, Pasta",
    cost: "CA$16.99 for one",
    info: "5200+ orders are placed from here",
    image: "images/6.jpg",
  },
  {
    name: "Globetrotter Pizzas",
    star: "4.2",
    cuisine: "Italian, Pizza, World Cuisine",
    cost: "CA$11.99 for one",
    info: "3900+ orders are placed from here",
    image: "images/7.jpg",
  },
  {
    name: "Pizza Planet & Shakes",
    star: "4.4",
    cuisine: "Italian, Pizza, Desserts",
    cost: "CA$12.99 for one",
    info: "4300+ orders are placed from here",
    image: "images/8.jpg",
  },
  {
    name: "Tony's Pizzeria",
    star: "4.3",
    cuisine: "Italian, Pizza, Fast Food",
    cost: "CA$10.99 for one",
    info: "4700+ orders are placed from here",
    image: "images/9.jpg",
  },
];

function displayRestaurantCards() {
  const restaurantList = document.getElementById("restaurant_list");

  restaurantData.map((data, i)=> {
    const detailCard = document.createElement("div")
    const imageDiv = document.createElement("img")
    const nameDiv = document.createElement("div")
    const starDiv = document.createElement("div")
    const nameStarDiv = document.createElement("div")
    const textDiv = document.createElement("div")
    const rtextDiv = document.createElement("div")
    const infoTextDiv = document.createElement("div")
    const infoDiv = document.createElement("div")
    const safetyDiv = document.createElement("div")
    const safetyTextDiv = document.createElement("div")
    const safetyImg = document.createElement("img")
    const combinedData = document.createDocumentFragment();
    detailCard.appendChild(combinedData);
    restaurantList.appendChild(detailCard)
  })
}
