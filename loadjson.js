var jsonString;
var holidaysObj;
var data;
var table;


/*building our table up - THIS CODE IS FROM
* https://www.valentinog.com/blog/html-table/
* AND IS NOT MINE, WITH THE EXCEPTION OF THE FILTER MECHANISM
*/
function generateTableHead(table, data) {
  let thead = table.createTHead();
  let row = thead.insertRow();
  var i = 0;
  for (let key of data) {
    let th = document.createElement("th");
    let text = document.createTextNode(key);
    th.appendChild(text);
    row.appendChild(th);
    i++;
    if(i >1){
        break;
    }
  }
}
function generateTable(table, data, rows) {
  var i = 0;
  for (let element of data) {
    let row = table.insertRow();
    var j = 0;
    for (key in element) {
      let cell = row.insertCell();
      let text = document.createTextNode(element[key]);
      cell.appendChild(text);
      j++;
      if(j >1){
          break;
      }
    }
    i++;
    if(i > rows){
        break;
    }
  }
}

var url = 'https://calendarific.com/api/v2/holidays?&api_key=fccfcbba1adc682348f7f7a17ec7c75915bab7ff&country=US&year=2020&month=11';

//retrieve our setlist file, do initital printing when it arrives
function loadFile(){

    /*initialize request object*/
    request = new XMLHttpRequest();
    console.log("1 - request initialized");

    /*set URL of target json file*/
    request.open("GET",url,true);
    console.log("2 - URL, asynch mode and get/post set successfully");

    /*setting up event handler and callback*/
    request.onreadystatechange = function(){
        console.log("request state changed");
        if(request.readyState == 4 && request.status === 200) {

            console.log("Data appears to be here!");
            //handle data accordingly if successfully loaded
            jsonString = request.responseText;
            console.log("json string is" + jsonString);
            
            holidaysObj = JSON.parse(jsonString);
            table = document.querySelector("table");
            data = Object.keys(holidaysObj["response"]["holidays"][0]);
            
            generateTableHead(table,data);
            generateTable(table,holidaysObj["response"]["holidays"],10);
           
        }
        else if(request.readyState == 4 && request.status != 200){
            alert("request was not returned successfully");
        }
        else if(request.readyState == 3){
            console.log("request state is 3");
        }
    }

    /*fire request*/
    request.send();
    console.log("request sent");
}


/*Load the json into the json string*/
loadFile()
