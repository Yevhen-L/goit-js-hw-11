
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";

const searchForm = document.querySelector("#search-form");
const gallery = document.querySelector(".gallery");
const loadMoreBtn = document.querySelector(".load-more");
const apiKey = "38983317-2cdf068ca906dc85bbb8e8b48"; //ключ

let currentPage = 1;
let currentQuery = "";

const lightbox = new SimpleLightbox(".photo-card a");

// Функція для отримання зображень з сервера
async function fetchImages(query, page = 1) {
  try {
    const response = await axios.get("https://pixabay.com/api/", {
      params: {
        key: apiKey,
        q: query,
        image_type: "photo",
        orientation: "horizontal",
        safesearch: true,
        page,
        per_page: 40,
      },
    });

    return response.data;
  } catch (error) {
    console.error("Error fetching images:", error);
  }
}

// Функція для відображення зображень
function displayImages(images) {
  gallery.innerHTML = "";

  images.forEach(image => {
    const card = document.createElement("div");
    card.classList.add("photo-card");

    const link = document.createElement("a");
    link.href = image.largeImageURL;

    const img = document.createElement("img");
    img.src = image.webformatURL;
    img.alt = image.tags;
    img.loading = "lazy";

    const info = document.createElement("div");
    info.classList.add("info");

    const infoItems = [
      { label: "Likes", value: image.likes },
      { label: "Views", value: image.views },
      { label: "Comments", value: image.comments },
      { label: "Downloads", value: image.downloads },
    ];

    infoItems.forEach(item => {
      const p = document.createElement("p");
      p.classList.add("info-item");
      p.innerHTML = `<b>${item.label}:</b> ${item.value}`;
      info.appendChild(p);
    });

    link.appendChild(img);
    card.appendChild(link);
    card.appendChild(info);
    gallery.appendChild(card);
  });

  // Оновлення галереї після додавання нових зображень
  lightbox.refresh();
}

// Обробник події подачі форми
searchForm.addEventListener("submit", async event => {
  event.preventDefault();
  
  currentQuery = event.target.searchQuery.value.trim();
  currentPage = 1;

  if (!currentQuery) return;

  const { hits, totalHits } = await fetchImages(currentQuery);

  if (hits.length === 0) {
    Notiflix.Notify.failure("Sorry, there are no images matching your search query. Please try again.");
    return;
  }

  Notiflix.Notify.success(`Hooray! We found ${totalHits} images.`);

  displayImages(hits);
  loadMoreBtn.style.display = "block";
  window.scrollTo({ top: 0, behavior: "smooth" });
});

// Обробник події кнопки "Load more"
loadMoreBtn.addEventListener("click", async () => {
  currentPage++;
  const { hits } = await fetchImages(currentQuery, currentPage);
  displayImages(hits);
  window.scrollBy({ top: gallery.clientHeight, behavior: "smooth" });
});

// Відправка запиту за зображеннями при завантаженні сторінки
fetchImages("initial search term").then(response => {
  displayImages(response.hits);
  loadMoreBtn.style.display = "none";
});