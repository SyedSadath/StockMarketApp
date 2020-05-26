let params = new URLSearchParams(location.search);
var username = params.get('email');

document.getElementById("username").innerHTML=username;
// params.get('email') # => "n1"
// range1 : 01.00% to 10.00%

function range1(){
	return (Math.random()*10).toFixed(2)
}  

//range2 : 01.00% t0 20.00% 
function range2(){
	return (Math.random()*20).toFixed(2)
}

//rang3 : -05.00% to +05.00%
function range3(){
	return ((Math.random()*5)+(Math.random()*(-5))).toFixed(3)
}

var stock_names =	[	
						["bitcoin",9156.20],
						["ethereum",206.19],
						["gold",1735],
						["teslamotoros",816.88],
						["microsoft",183.51]
					];

var only_names = ["bitcoin","ethereum","gold","teslamotoros","microsoft"];
// var investment = [6000,400,350,2500,600];
// var updated_investment = [];
var range3_value;
var asset_value=[0,0,0,0,0];
var available_balance=0;

let inital_stock_value = new Map(stock_names);
let updated_value = new Map()

function redorgreen(value){
	return value>0 ? "green":"red";
}

function percent_change(){
	var row=1;
	var col=3;
	var i=0;
	for (data of only_names){
		range3_value = range3();
		var value = range3_value;

		var color = redorgreen(value)

		document.getElementById("stksTable").rows[row].cells[col].innerHTML=value+"%";
		document.getElementById("stksTable").rows[row].cells[col].style.backgroundColor = color;

		var new_value = ((inital_stock_value.get(data)*(value/100))+(inital_stock_value.get(data)));
		document.getElementById("stksTable").rows[row].cells[2].innerHTML=new_value.toFixed(2)+'$';		
				
		updated_value.set(data,new_value);

		// console.log(value);	
		// console.log( value+"% of "+inital_stock_value.get(data)+" is "+(inital_stock_value.get(data)*(value/100)).toFixed(2) +" Resulting value is "+ ((inital_stock_value.get(data)*(value/100))+(inital_stock_value.get(data))));


		if(asset_value[i]>0){
			asset_value[i] = asset_value[i] + (asset_value[i]*(value/100)); 
			// asset_value = (asset_value + asset_value*(value/100));
			// var temp_asset_value = asset_value[i]+''
					

			// var arrow_value = "&#x2B06";
			// arrow_value.fontcolor("green");
			document.getElementById("stksTable").rows[row].cells[4].innerHTML=asset_value[i].toFixed(2);
			// document.getElementsByClassName("arrow").style.color=redorgreen();
			// document.getElementsByClassName("arrow").innerHTML="asd";
		}

		// console.log(document.getElementById("stksTable").rows[row].cells[5].innerHTML);

		i=row;
		row++;
	}	

	for (data of only_names){
		inital_stock_value.set(data,updated_value.get(data));
	}

// console.log(inital_stock_value)
}
setInterval(percent_change,2000);


function buy(clicked_id){
	var inputId = "input"+clicked_id.toString();
	var inputValue = parseInt(document.getElementById(inputId).value);
	available_balance = available_balance-inputValue;
	update_balance(available_balance);
	var flag="buy";
	update_asset(inputValue,clicked_id,flag,inputId);
}

function sell(clicked_id){
	var inputId = "input"+clicked_id.toString()
	var inputValue = parseInt(document.getElementById(inputId).value);
	available_balance = available_balance+inputValue;
	update_balance(available_balance);
	var flag="sell";
	update_asset(inputValue,clicked_id,flag,inputId);
}

function update_asset(inputValue,clicked_id,flag,inputId){
	index = parseInt(clicked_id)-1
	if(flag=="buy"){
		asset_value[index] = asset_value[index]+inputValue;
		document.getElementById("stksTable").rows[clicked_id].cells[4].innerHTML=asset_value[index].toFixed(2);		
		document.getElementById(inputId).value='';
	}
	else if(flag=="sell"){
		asset_value[index] = asset_value[index]-inputValue;
		document.getElementById("stksTable").rows[clicked_id].cells[4].innerHTML=asset_value[index].toFixed(2);				
		document.getElementById(inputId).value='';

	}	
}


function update_balance(money) {
	var id = document.getElementById("available_balance");
	id.innerHTML=money+'$';	
}

function addmoney() {
	var money = prompt("please enter the amount..");
	money = parseInt(money);
	available_balance = money;
	update_balance(money);
}