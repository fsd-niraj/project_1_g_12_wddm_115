function displayRestaurantCards() {

  fetch("data.json")
  .then(response => {
    return response.json();
  }).then((jsonData) => {
    const allData = jsonData.jsonData.details;

      const restaurantList = document.getElementById("restaurant_list");

      allData.map((data, i) => {
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
    })
}

document.addEventListener("DOMContentLoaded", function () {
  displayRestaurantCards();
});
