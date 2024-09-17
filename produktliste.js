const params = new URLSearchParams(document.location.search);
const category = params.get("category");
let url = undefined;

if (params.has("category1")) {
  url = `https://pbjjrjdyndsqxkaixvrm.supabase.co/rest/v1/products?category=${category}`;
} else {
  url = "https://pbjjrjdyndsqxkaixvrm.supabase.co/rest/v1/products/?limit=50";
}

fetch("https://pbjjrjdyndsqxkaixvrm.supabase.co/rest/v1/products")
  .then((res) => res.json())
  .then(showObjects);

function showObjects(object) {
  object.forEach(showObjects);
}

function showProduct(object) {
  const template = document.querySelector("#smallProductTemplate").content;
  const copy = template.cloneNode(true);

  copy.querySelector(".name").textContent = object.name;
  copy.querySelector(".mærke").textContent = object.brand;

  //   const img = copy.querySelector("img");
  //   img.src = `https://kea-alt-del.dk/t7/images/webp/640/${object.id}.webp`;
  //   img.alt = object.name;

  const moreLink = copy.querySelector(".read_more");
  moreLink.setAttribute("href", `single-view.html?id=${object.id}`);

  document.querySelector("main").appendChild(copy);
}
