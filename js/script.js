//array of airports
var airport = [
  "LAX",
  "SFO",
  "PHX",
  "JFK",
  "ATL",
  "MIA",
  "AUS",
  "BOS",
  "CLE",
  "ORD",
  "PDX",
  "SJC"
  ];

// Get data via api
function getAirportData(name, res) {

    console.log("getAirportData argument:", name);

    // get individual airport status
    if (name) {
      var link = "https://services.faa.gov/airport/status/" + name + "?format=application/json";
      res = $.getJSON(link, function(result) {
        });
    }

    //return res;
}

function homeTable() {

    var table1 = "";

    // Get all data when no attribute is given
    for (i=0; i < airport.length; i++){
        res1 = getAirportData(airport[i]);
        //var res2 = JSON.parse(res1.responseText);
        console.log("response from getAirportData: ", res1);
        // build table
        table1 = table1 + "<tr>" + "<td>" + "test" + i + "</td>" + "</tr>";

    }

    // Copy table to element
    console.log(table1);
    setOutput("homeStatusList",table1);
}


// Set innerHTMl value of elementByID
function setOutput(id,value){
  var el = document.getElementById(id);
  el.innerHTML = value;
}

// Load charts when document is ready
  $(document).ready(function() {
    homeTable();
});
