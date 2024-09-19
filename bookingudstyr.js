// const categoryList = document.querySelector("#categoryList");
const key =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InBiampyamR5bmRzcXhrYWl4dnJtIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjU5NzAyNzAsImV4cCI6MjA0MTU0NjI3MH0.rMV_E9Z07FiTskqGWmi3fkRL4vr0nJVIT3QuQQ9Lk70";

fetch(
  //   "https://pbjjrjdyndsqxkaixvrm.supabase.co/rest/v1/products?select=category",
  "https://pbjjrjdyndsqxkaixvrm.supabase.co/rest/v1/products",

  {
    method: "GET",
    headers: {
      apikey: key,
    },
  }
)
  .then((response) => response.json())
  .then((categories) => {
    categories.forEach((category) => {
      console.log(category);

      //   document
      //     .querySelectorAll(".read_more")
      //     .forEach((elem) =>
      //       elem.setAttribute(
      //         "href",
      //         `produktliste.html?category=${category.category}`
      //       )
      //     );
    });
  });

// function showProducts(product) {
//   console.log(product);
//   product.forEach(showProduct);
// }

// function showProduct(product) {
//   const template = document.querySelector(".smallProduct").content;
//   const copy = template.cloneNode(true);

//   copy.querySelector("h3").textContent = product.kategorier;
//   copy
//     .querySelector(".read_more")
//     .setAttribute("href", `produktliste.html?id=${product.id}`);

//   document.querySelector("main").appendChild(copy);
// }
