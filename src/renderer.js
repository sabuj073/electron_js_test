var for_two = "false";
var for_one = "false";
var for_three = "false";


function celciusToFahrenheit(){
    let celcius = document.getElementById('celcius').value;
    let fahrenheit = (celcius* 9/5) + 32;
    document.getElementById('fahrenheit').value = fahrenheit;

}

function fahrenheitToCelcius(){
    let fahrenheit = document.getElementById('fahrenheit').value;
    let celcius = (fahrenheit - 32) * 5/9
    document.getElementById('celcius').value = celcius;
}

function run(){
		

const fetch = require('node-fetch');
let url = "https://14mdf85zh7.execute-api.us-east-2.amazonaws.com/production/guard-duty";

let settings = { method: "Get" };

fetch(url, settings)
    .then(res => res.json())
    .then((json) => {
        // do something with JSON
        var data = JSON.parse(json.body)
        var length = data.length;
		for(var i =0 ; i<length ; i++){
		addRow(i,data[i].IP,data[i].Country,data[i].HitCount,data[i].Time,data[i].Type);
	
		}
      /*   if(length==2){
          if(for_two=="false"){
            for_two = "true";
            addRow(data[1].flightfromto,data[1].flightname,data[1].flighttime);

        }
      }
      else if(length==1)
      {
        if(for_one=="false")
        {
           for_one="true";
            addRow(data[0].flightfromto,data[0].flightname,data[0].flighttime);
        }
      }

       else if(length==3){
          if(for_three=="false"){
            for_three = "true";
           addRow(data[0].flightfromto,data[0].flightname,data[0].flighttime);
        }
      } */
        


        
    });
	
	
}

 function addRow(data1,data2,data3,data4,data5,data6)
{
          
      var table = document.getElementsByTagName('table')[0];
      var newRow = table.insertRow(table.rows.length/2+1);
      var cel1 = newRow.insertCell(0);
      var cel2 = newRow.insertCell(1);
      var cel3 = newRow.insertCell(2);
	  var cel4 = newRow.insertCell(3);
      var cel5 = newRow.insertCell(4);
      var cel6 = newRow.insertCell(5);
	  

      cel1.innerHTML = data1;
      cel2.innerHTML = data2;
      cel3.innerHTML = data3;
	  cel4.innerHTML = data4;
      cel5.innerHTML = data5;
      cel6.innerHTML = data6;
  
}

function save(){
var fname = document.getElementById('name').value;
var airline = document.getElementById('airline').value;
var time = document.getElementById('time').value;

const axios = require('axios');

axios.post('https://be1u5wa6xi.execute-api.us-east-2.amazonaws.com/production/flights', {
  flightfromto: fname,
  flightname: airline,
  flighttime: time,
});
 
document.getElementById('name').value="";
document.getElementById('airline').value="";
document.getElementById('time').value="";

}