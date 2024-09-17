const URLparams = new URLSearchParams(window.location.search);
const id = URLparams.get("id");

fetch("https://pbjjrjdyndsqxkaixvrm.supabase.co/rest/v1/products/" + id)
  .then((response) => response.json())
  .then((data) => showObjects(data));

function showProduct(product) {
  document.querySelector(".info_box h1").textContent = object.name;
  document.querySelector(".info_box .info").textContent = object.brand;

  //   document.querySelector(
  //     "img"
  //   ).src = `https://kea-alt-del.dk/t7/images/webp/640/${product.id}.webp`;
  //   document.querySelector("img").alt = product.productdisplayname;
}
