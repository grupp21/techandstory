const params = new URLSearchParams(document.location.search);
const category = params.get("category");
let url = undefined;

// if (params.has("category1")) {
//   url = `https://pbjjrjdyndsqxkaixvrm.supabase.co/rest/v1/products?category=${category}`;
// } else {
//   url = "https://pbjjrjdyndsqxkaixvrm.supabase.co/rest/v1/products/?limit=50";
// }

/*Fetch data.js?*/

fetch("data.js")
  .then((res) => res.json())
  .then(showProducts);

function showProducts(product) {
  object.forEach(showProducts);
}

function showProduct(object) {
  const template = document.querySelector("#smallProductTemplate").content;
  const copy = template.cloneNode(true);

  copy.querySelector(".name").textContent = product.name;
  copy.querySelector(".mærke").textContent = product.brand;

  const moreLink = copy.querySelector(".read_more");
  moreLink.setAttribute("href", `single-view.html?id=${product.id}`);

  document.querySelector("main").appendChild(copy);
}
