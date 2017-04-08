//NOTE: All functions are activated per onclick button

function calculate()
{
	//Getting the input values
	var operand_one = document.getElementById('op_one').value;
	var operand_two = document.getElementById('op_two').value;
	
	//Converting string to float
	operand_one = parseFloat(operand_one);
	operand_two = parseFloat(operand_two);
	
	var result = document.getElementById('result');
	
	result.innerHTML = operand_one + operand_two;
	
}



function concatenate()
{
	
	//Getting the input values
	var Text_one = document.getElementById('txt_one').value;
	var Text_two = document.getElementById('txt_two').value;
	
	var result = document.getElementById('concat');
	
	
	result.innerHTML = Text_one + Text_two;

}



//NOTE: There are different ways to realize and optimize the following examples in js.
//		To split it in three seperate functions should simplify code readability. 

function example1()
{
	var result = document.getElementById('ex_one');
	
	//result should be 4
	result.innerHTML = 3 + true;
}



function example2()
{
	var result = document.getElementById('ex_two');
	
	//result should be 321
	result.innerHTML = "3" + 2 + 1;
}



function example3()
{
	var result = document.getElementById('ex_three');
	
	//result should be 321
	result.innerHTML = 3 + "2" + 1;
}



function example4()
{
	var result = document.getElementById('ex_four');
	
	//result should be 33
	result.innerHTML = "3" + (2 + 1);
}
