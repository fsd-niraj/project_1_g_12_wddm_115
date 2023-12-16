function displayRestaurantCards() {

  fetch("data.json")
    .then(response => {
      return response.json();
    }).then((jsonData) => {
      const allData = jsonData.data;

      allData.map((data) => {
        return data.details.details.map((v) => {
          displayCard(v);
        })
      })
    });
}

function displayCard(data) {
  const restaurantList = document.getElementById("restaurant_list");
  const detailCard = document.createElement("div")
  detailCard.classList.add('card', 'animate-up')
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
  return restaurantList.appendChild(detailCard);
}

function displayTitle(title) {
  const mainDiv = document.getElementById("main")

  const titleSection = document.createElement('div')
  titleSection.classList.add = "restrro";
  titleSection.textContent = title;

  mainDiv.appendChild(titleSection)
}

function globalGradientBg() {
  const body = document.body;
  const fsDiv = document.createElement('div');
  fsDiv.classList.add('pos-relative')
  const radGrdDiv = document.createElement('div');
  radGrdDiv.id = 'gradient_bg_screen';
  document.addEventListener('mousemove', (event) => {
    const x = event.clientX;
    const y = event.clientY;
    const gradientValue = `radial-gradient(800px at ${x}px ${y}px, rgba(29, 78, 216, 0.15), transparent 50%)`;
    radGrdDiv.style.background = gradientValue
  });
  fsDiv.appendChild(radGrdDiv);
  return body.appendChild(fsDiv)
}

function navbarToggle() {
  const navbar = document.getElementById("navbar");
  let prevScrollPos = window.pageYOffset;
  window.addEventListener("scroll", function () {
    const currentScrollPos = window.pageYOffset;

    if (prevScrollPos > currentScrollPos) {
      navbar.classList.remove("navbar-hidden");
    } else {
      navbar.classList.add("navbar-hidden");
    }

    prevScrollPos = currentScrollPos;
  });
}

function displayNavLinks(){
  const navbar = document.getElementById("navbar");
  const ul = document.createElement("ul")
  ul.classList.add('nav-links')
  fetch('data.json')
  .then((res)=> res.json())
  .then((res)=> {
    const navData = res.navLinks;
    for (let i = 0; i < navData.length; i++) {
      const li = document.createElement("li")
      const anchr = document.createElement("a")
      anchr.textContent = navData[i].title;
      anchr.href = navData[i].href;
      li.appendChild(anchr)
      ul.appendChild(li)
    }
    return navbar?.appendChild(ul)
  })
}

document.addEventListener("DOMContentLoaded", function () {
  globalGradientBg();
  navbarToggle();
  displayNavLinks();
});

document.addEventListener('DOMContentLoaded', function () {
  setTimeout(() => {
    const elementsToAnimate = document.querySelectorAll('.animate-on-scroll');

    const observer = new IntersectionObserver((val) => {
      val.forEach((data) => {
        if (data.isIntersecting) {
          data.target.style.opacity = '1';
          data.target.style.transform = 'translateY(0) scale(1)';
        } else {
          data.target.style.opacity = '0';
          data.target.style.transform = 'translateY(20px) scale(0.95)';
        }
      });
    }, { threshold: 0.25 });
    elementsToAnimate.forEach(element => {
      observer.observe(element);
    });
  }, 200)
});

function placeOrder() {
  const firstName = document.getElementById('fname').value;
  const lastName = document.getElementById('lname').value;
  const address = document.getElementById('address').value;

  const orderMessage = `${firstName} ${lastName}'s order:<br>Address: ${address}`;
  
  const orderDetails = document.getElementById('orderDetails');
  orderDetails.innerHTML = orderMessage;
  
  window.location.href = `confirmation.html?name=${firstName}`;
}