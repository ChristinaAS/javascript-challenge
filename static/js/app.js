// from data.js
var tableData = data;

// YOUR CODE HERE!
// reference the table body

var tbody = d3.select("tbody")

console.log(tableData);

function displayTable(data) {
    data.forEach(function (ufoReport) {
        console.log(ufoReport);
        var row = tbody.append("tr");
        Object.entries(ufoReport).forEach(function ([key, value]) {
            console.log(key, value);
            var cell = row.append("td");
            cell.text(value);
        });
    });
}

displayTable(tableData);

var button = d3.select("#filter-btn")
var dateTime = d3.select("#datetime")
//var filters = {}


function buttonClick() {
    d3.event.preventDefault();
    date = d3.select("#datetime").property("value");
    var filteredData = tableData;

    if (date) {
        filteredData = filteredData.filter(row => row.datetime === date);

    displayTable(filteredData);
    }
}
d3.selectAll("#filter-btn").on("click", buttonClick);

displayTable(tableData);


//button.on("click", function sortData () {
  //  d3.event.preventDefault();
  //  console.log("button clicked")
    
    //var date = d3.select("#datetime").property("value");
    //console.log(date)
  //  var filteredData = tableData.filter(row => row.datetime === dateTime.property("value"));
  //  displayTable(filteredData);
//});
//sortData(tableData);
//displayTable(filteredData);
//function updateFilters() {
 //   var filterData = tableData
 //   Object.entries(filters).forEach(function ([key, value]) {
//        filterData = filterData.filter(row => row[key] === value);
//    });
 //   displayTable(filterData);
//}


//button.on("click", function() {
   // var result = sortData(tableData);
    //displayTable(result);
//})
//d3.selectAll("#filter-btn").on("click", sortData);
//displayTable(filteredData);