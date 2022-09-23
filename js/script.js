let attractions;
fetch("assets/attractions.json")
  .then((response) => response.json())
  .then((data) => {
    attractions = data;
    filterData("all");
  });

function filterData(category) {
  let filtered = attractions
    .filter((att) => att.Category === category || category === "all")
    .sort((a, b) => a.Vistors > b.Vistors)
    .slice(0, 5);

  renderBarChart(filtered);
}

// TODO: Define an event listener for the dropdown menu

let dropdown = document.querySelector("#attraction-category");
dropdown.addEventListener("change", (e) => {
  filterData(e.target.value);
});
