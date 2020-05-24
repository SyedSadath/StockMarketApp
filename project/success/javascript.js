// range1 : 01.00% to 20.00%

function range1(){
	return (Math.random()*20).toFixed(2)
}  

//range2 : 01.00% t0 20.00% 
function range2(){
	return (Math.random()*10).toFixed(2)
}

var stock_names =	[	
						["bitcoin",9156.20],
						["ethereum",206.19],
						["gold",1735],
						["teslamotoros",816.88],
						["microsoft",183.51]
					];

let inital_stock_value = new Map(stock_names);

var luckyno = 5555;
// 1,2

console.log(document.getElementById("stksTable").rows[1].cells.length);




// var x = document.getElementById("stksTable").rows[0].cells.length;
// console.log(x);

// var myTable = document.getElementById('stksTable');
// myTable.rows[1].cells[3].innerHTML = 'Hello';

// console.log(inital_stock_value.get("teslamotoros"));