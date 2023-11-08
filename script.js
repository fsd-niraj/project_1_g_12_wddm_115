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

  restaurantData.map((data, i) => {
    const detailCard = document.createElement("div")
    detailCard.classList.add('card', 'animate-up')
    detailCard.id = i
    const imageDiv = document.createElement("img")
    imageDiv.src = data.image
    imageDiv.alt = data.name
    const nameDiv = document.createElement("div")
    nameDiv.classList.add('name')
    nameDiv.textContent = data.name
    const starDiv = document.createElement("div")
    starDiv.classList.add('star')
    starDiv.textContent = data.star

    const nameStarDiv = document.createElement("div")
    nameStarDiv.classList.add('d-flex', 'align-center', 'justify-between')
    nameStarDiv.appendChild(nameDiv)
    nameStarDiv.appendChild(starDiv)

    const textDiv = document.createElement("div")
    textDiv.classList.add('text')
    textDiv.textContent = data.cuisine
    const rtextDiv = document.createElement("div")
    rtextDiv.classList.add('rtext')
    rtextDiv.textContent = data.cost

    const infoTextDiv = document.createElement("div")
    infoTextDiv.classList.add('d-flex', 'align-center', 'justify-between')
    infoTextDiv.appendChild(textDiv)
    infoTextDiv.appendChild(rtextDiv)

    const infoDiv = document.createElement("div")
    infoDiv.classList.add('info')
    infoDiv.textContent = data.info
    const safetyDiv = document.createElement("div")
    safetyDiv.classList.add('safety')

    const safetyTextDiv = document.createElement("div")
    safetyTextDiv.classList.add('d-flex', 'align-center', 'justify-between')
    safetyTextDiv.appendChild(infoDiv)
    safetyTextDiv.appendChild(safetyDiv)

    const safetyImg = document.createElement("img")
    safetyImg.src = "images/safety.png"
    safetyDiv.appendChild(safetyImg)

    const combinedData = document.createDocumentFragment();
    combinedData.appendChild(imageDiv)
    combinedData.appendChild(nameStarDiv)
    combinedData.appendChild(infoTextDiv)
    combinedData.appendChild(safetyTextDiv)

    detailCard.appendChild(combinedData);
    restaurantList.appendChild(detailCard)
  })
}

document.addEventListener("DOMContentLoaded", function () {
  displayRestaurantCards();
});
