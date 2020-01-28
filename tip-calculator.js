/****************************
* Tip Calculator Life
*/


var output = document.getElementById('tip-info');

//function tipCalculator

function tipCalculator() {
  var billAmt = document.getElementById('bill').value;

  //check if bill has been entered
  billAmt === '' ? alert('Enter the bill!') : billAmt;
  console.log(billAmt);
  var percentageAmt = document.getElementById('percentage').value;
  console.log(percentageAmt);

  //check if people have been added
  var peopleAmt = document.getElementById('people').value;
  peopleAmt === '' ? alert('How many people were there?') : peopleAmt;
  console.log(peopleAmt);


  //calculate the tip
  var tipAmt = parseFloat(billAmt) * parseFloat(percentageAmt);
  console.log('The tip would be: ' + tipAmt + '.')
  //calculate the total
  var totalAmt = parseFloat(billAmt) + parseFloat(tipAmt);

  //calculate per each
  var perEach = totalAmt / peopleAmt;

  // round to two decimals for better reading

  billAmt = (Math.round(billAmt * 100) / 100).toFixed(2);
  tipAmt = (Math.round(tipAmt * 100) / 100).toFixed(2);
  totalAmt = (Math.round(totalAmt * 100) / 100).toFixed(2);
  perEach = (Math.round(perEach * 100) / 100).toFixed(2);

  // output the results to its own section

  output.innerHTML = '<p> Total Bill: $' + billAmt + '</p>';
  output.innerHTML += '<p> Total tip: $' + tipAmt + '</p>';
  output.innerHTML +='<p> Total Amount with Tip: $' + totalAmt + '</p>';
  output.innerHTML +='<p> Total Per Each Person: $' + perEach + '</p>';
}

  // add the functionality to click on submit and calculate the results
document.getElementById('submit').onclick = function () {
  tipCalculator();
}

  // clear forms and results and start from scratch
function clearData() {
  output.innerHTML = '';
}
var clear = document.getElementById('reset');
clear.addEventListener('click', clearData, false)
