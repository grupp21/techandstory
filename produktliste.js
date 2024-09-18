const params = new URLSearchParams(document.location.search);
const category = params.get("category");
let url = undefined;
const key =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InBiampyamR5bmRzcXhrYWl4dnJtIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjU5NzAyNzAsImV4cCI6MjA0MTU0NjI3MH0.rMV_E9Z07FiTskqGWmi3fkRL4vr0nJVIT3QuQQ9Lk70";

// if (params.has("category1")) {
//   url = `https://pbjjrjdyndsqxkaixvrm.supabase.co/rest/v1/products?category=${category}`;
// } else {
//   url = "https://pbjjrjdyndsqxkaixvrm.supabase.co/rest/v1/products/?limit=50";
// }

/*Fetch data.js?*/

fetch("https://pbjjrjdyndsqxkaixvrm.supabase.co/rest/v1/products", {
  method: "GET",
  headers: {
    apikey: key,
  },
})
  .then((res) => res.json())
  .then(showProducts);

function showProducts(product) {
  console.log(product);
  product.forEach(showProduct);
}

function showProduct(product) {
  const template = document.querySelector("#smallProductTemplate").content;
  const copy = template.cloneNode(true);

  copy.querySelector(".name").textContent = product.name;
  copy.querySelector(".mærke").textContent = product.brand;
  copy.querySelector(".kategori").textContent = product.category;

  document.querySelector("main").appendChild(copy);
}
