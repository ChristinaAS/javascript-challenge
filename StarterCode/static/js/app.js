// from data.js
var tableData = data;

// YOUR CODE HERE!
// reference the table body

var tbody = d3.select("tbody")

console.log(tableData);

function displayTable(tableData) {
    tableData.forEach(function (ufoReport) {
        //console.log(ufoReport);
        var row = tbody.append("tr");
        Object.entries(ufoReport).forEach(function ([key, value]) {
            //console.log(key, value);
            var cell = row.append("td");
            cell.text(value);
        });
    });
}
var button = d3.select("#filter-btn")
var dateTime = d3.select("#datetime")
//var filters = {}


button.on("click", function (sortData) {
    d3.event.preventDefault();
    var date = d3.select("#datetime").property("value");
    //console.log(date)
    var filteredData = tableData.filter(ufoFiltered => ufoFiltered.datetime === dateTime.property("value"));
    displayTable(filteredData)
});
//sortData(tableData)

//function updateFilters() {
 //   var filterData = tableData
 //   Object.entries(filters).forEach(function ([key, value]) {
//        filterData = filterData.filter(row => row[key] === value);
//    });
 //   displayTable(filterData);
//}

//displayTable(tableData);
//button.on("click", function() {
   // var result = sortData(tableData);
    //displayTable(result);
//})

//d3.selectAll("#filter-btn").on("click", sortData);
//displayTable(filteredData);