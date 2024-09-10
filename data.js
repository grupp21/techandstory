//const url = "https://pbjjrjdyndsqxkaixvrm.supabase.co/rest/v1/products?select=name,category1";
const url = "https://pbjjrjdyndsqxkaixvrm.supabase.co/rest/v1/products";

const key = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InBiampyamR5bmRzcXhrYWl4dnJtIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjU5NzAyNzAsImV4cCI6MjA0MTU0NjI3MH0.rMV_E9Z07FiTskqGWmi3fkRL4vr0nJVIT3QuQQ9Lk70";

fetch(url, {
  method: "GET",
  headers: {
    apikey: key,
  },
})
  .then((res) => res.json())
  .then(showData);

function showData(items) {
  console.log(items);
}
