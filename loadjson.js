var url = 'http://newsapi.org/v2/top-headlines?' +
          'country=us&' +
          'apiKey=7fa64666d0d04dcf93a03cd26601ffb7';

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
            // /*call display function on our JSON setlist (raw format)*/
            // displaySerialize(jsonString);
            //
            // /*get object from our jsonString*/
            // setListObj = JSON.parse(jsonString);
            //
            // table = document.querySelector("table");
            // data = Object.keys(setListObj[0]);
            // generateTableHead(table, data);
            // generateTable(table,setListObj,"");
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
