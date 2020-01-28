/****************************
* Tip Calculator Life
*/


//function tipCalculator

function tipCalculator() {
  var billAmt = document.getElementById('bill').value;
  console.log(billAmt);
  var percentageAmt = document.getElementById('percentage').value;
  console.log(percentageAmt);
  var peopleAmt = document.getElementById('people').value;
  console.log(peopleAmt);

  //calculate the tip
  var tipAmt = parseFloat(billAmt) * parseFloat(percentageAmt);
  console.log('The tip would be: ' + tipAmt + '.')
  //calculate the total
  var totalAmt = parseFloat(billAmt) + parseFloat(tipAmt);

  //calculate per each
  var perEach = totalAmt / peopleAmt;

  var output = document.getElementById('tip-info');
  output.innerHTML = '<p> Total Bill: $' + billAmt + '</p>';
  output.innerHTML +='<p> Total Amount with Tip: $' + totalAmt + '</p>';
  output.innerHTML +='<p> Total Per Each Person: $' + perEach + '</p>';
}

document.getElementById('submit').onclick = function () {
  tipCalculator();
}
