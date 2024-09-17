const categoryList = document.querySelector("#categoryList");

fetch("https://pbjjrjdyndsqxkaixvrm.supabase.co/rest/v1/products/category")
  .then((response) => response.json())
  .then((categories) => {
    categories.forEach((category) => {
      categoryList.innerHTML += `<li><a href="produktliste.html?category=${category.category}">${category.category}</a></li>`;
    });
  });
