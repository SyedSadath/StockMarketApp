// range1 : 01.00% to 20.00%

function range1(){
	return (Math.random()*20).toFixed(2)
}  

//range2 : 01.00% t0 20.00% 
function range2(){
	return (Math.random()*10).toFixed(2)
}

//rang3 : -02.00% to +02.00%
function range3(){
	return ((Math.random()*3)+(Math.random()*(-3))).toFixed(3)
}


var stock_names =	[	
						["bitcoin",9156.20],
						["ethereum",206.19],
						["gold",1735],
						["teslamotoros",816.88],
						["microsoft",183.53]
					];


var only_names = ["bitcoin","ethereum","gold","teslamotoros","microsoft"];

let inital_stock_value = new Map(stock_names);


function current_value(){
	var row=1;
	var col=2;
	for (data of only_names){
		var value = (inital_stock_value.get(data)+(inital_stock_value.get(data)*range2())).toFixed(2);
		document.getElementById("stksTable").rows[row].cells[col].innerHTML=value;
		row++;	
	}
}


console.log(range3()+"%");



// for (data of only_names){
// 	console.log((data));
// 	row++;	
// }
	// keys = inital_stock_value.keys();
	// console.log(keys[2]);


// console.log(document.getElementById("stksTable").rows[1].cells[1].innerHTML="noRiba");





// var x = document.getElementById("stksTable").rows[0].cells.length;
// console.log(x);

// var myTable = document.getElementById('stksTable');
// myTable.rows[1].cells[3].innerHTML = 'Hello';

// console.log(inital_stock_value.get("teslamotoros"));