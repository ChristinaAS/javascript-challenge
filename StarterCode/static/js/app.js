// from data.js
var tableData = data;

// YOUR CODE HERE!
// reference the table body

var tbody = d3.select("tbody")

console.log(tableData);

function displayTable(tableData) {
    tableData.forEach(function(ufoReport) {
    //console.log(ufoReport);
        var row = tbody.append("tr");
        Object.entries(ufoReport).forEach(function([key, value]) {
        //console.log(key, value);
        var cell = row.append("td");
        cell.text(value);
    });
});
}
var button = d3.select("filter-btn")
var dateTime = d3.select("#datetime")


//button.on("click", function(){
  //  var value = ; 
//{
    //d3.event.preventDefault();
    //deleteTbo})
function sortData(tableData) {
    d3.event.preventDefault();
    //var DateTime = d3.select("#datetime").property("value");
    var filteredDateTime = tableData.filter(function(d) {
        return d.datetime === $('#datetime').val();
    });
    return filteredDateTime;
    //var filteredData = tableData.filter(ufoReport => ufoReport.datetime === dateTime.trim)
//ufoReport(filteredData);
};

displayTable(data);
button.on("click", function() {
    var result = sortData(data);
    displayTable(result);
})

d3.selectAll("#filter-btn").on("click", sortData);
displayTable(tableData);