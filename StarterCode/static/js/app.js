// from data.js
var tableData = data;

// YOUR CODE HERE!

//loop through data and append into table on webpage

let tbody = d3.select("tbody");

function table(data) {
  tbody.html("");

  data.forEach((dataRow) => {
    let row = tbody.append("tr");
    Object.values(dataRow).forEach((val) => {
      let UFOdata = row.append("td");
        UFOdata.text(val);
      }
    );
  });
}

//search through data by date

function buttonClick() {

 d3.event.preventDefault();
  let date = d3.select("#datetime").property("value");
  let filteredData = tableData;
  if (date) {
    filteredData = filteredData.filter(row => row.datetime === date);
  }
  table(filteredData);
}
d3.selectAll("#filter-btn").on("click", buttonClick);
table(tableData);
;