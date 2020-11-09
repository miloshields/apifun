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
