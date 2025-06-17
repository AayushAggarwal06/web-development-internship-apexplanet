// ===== Carousel Logic =====
const imageNames = ["img1.jpg", "img2.jpg", "img3.jpg", "img4.jpg"];
const carouselTrack = document.getElementById("carouselTrack");

imageNames.forEach((img) => {
  const image = document.createElement("img");
  image.src = `images/${img}`;
  image.alt = img;
  image.className = "carousel-img";
  carouselTrack.appendChild(image);
});

const slides = document.getElementsByClassName("carousel-img");
let currentIndex = 0;

function updateCarousel(index) {
  const slideWidth = slides[0].clientWidth;
  carouselTrack.style.transform = `translateX(-${index * slideWidth}px)`;
}

document.getElementById("prevBtn").addEventListener("click", () => {
  currentIndex = (currentIndex - 1 + slides.length) % slides.length;
  updateCarousel(currentIndex);
});

document.getElementById("nextBtn").addEventListener("click", () => {
  currentIndex = (currentIndex + 1) % slides.length;
  updateCarousel(currentIndex);
});

window.addEventListener("resize", () => updateCarousel(currentIndex));

// ===== Weather API Logic (GoWeather) =====
document.getElementById("getWeatherBtn").addEventListener("click", () => {
  const city = document.getElementById("cityInput").value.trim();
  const resultBox = document.getElementById("weatherResult");
  resultBox.innerHTML = "";

  if (!city) {
    resultBox.textContent = "⚠️ Please enter a city name.";
    return;
  }

  fetch(`https://goweather.herokuapp.com/weather/${city}`)
    .then((res) => res.json())
    .then((data) => {
      if (!data.temperature) {
        resultBox.textContent = "❌ City not found or API error.";
        return;
      }

      resultBox.innerHTML = `
        <p>🌡️ <strong>Temperature:</strong> ${data.temperature}</p>
        <p>💨 <strong>Wind:</strong> ${data.wind}</p>
        <p>📃 <strong>Description:</strong> ${data.description}</p>
      `;
    })
    .catch(() => {
      resultBox.textContent = "⚠️ Error fetching weather data.";
    });
});
