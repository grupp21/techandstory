const URLparams = new URLSearchParams(window.location.search);
const id = URLparams.get("id");
const key =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InBiampyamR5bmRzcXhrYWl4dnJtIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjU5NzAyNzAsImV4cCI6MjA0MTU0NjI3MH0.rMV_E9Z07FiTskqGWmi3fkRL4vr0nJVIT3QuQQ9Lk70";
// console.log(id);

fetch(
  "https://kea-alt-del.dk/t7/api/products/",
  {
    method: "GET",
    headers: {
      apikey: key,
    },
  } + id
)
  .then((response) => response.json())
  .then((data) => showProduct(data));

function showProduct(product) {
  document.querySelector(".purchaseBox h3").textContent = product.name;
  document.querySelector(".purchaseBox .brand").textContent = product.mærke;
  document.querySelector(".purchaseBox .info").textContent = product.info;

  //   document.querySelector(
  //     "img"
  //   ).src = `https://kea-alt-del.dk/t7/images/webp/640/${product.id}.webp`;
  //   document.querySelector("img").alt = product.name;
}
