/**
 * Created by dey8083 on 4/26/2017.
 */

/*
 Calculator in Browser developed by Sridhar Karra
 Date = 1/16/2015
 */

var len, num1, num2, action;

function resetyes(){
  document.getElementById('result').className = "bg-info";
  document.getElementById('num1').value ='';
  document.getElementById('num2').value ='';
  document.getElementById('result').value ='';
  document.getElementById('add').checked = false;
  document.getElementById('minus').checked = false;
  document.getElementById('multiply').checked = false;
  document.getElementById('divide').checked = false;
  $('.collapse').collapse('hide');

}

function resetno(){
  $('.collapse').collapse('hide');
}


function enter_value(){
  $(document).ready(function(){
    $("#entervalue").modal();
  });
}

function calc_brow() {

  document.getElementById('result').className = "bg-info";

  num1 = document.getElementById('num1').value;
  num2 = document.getElementById('num2').value;
  action = document.getElementsByName('operation').checked
  console.log(num1, typeof(num1),parseInt(num1),typeof(parseInt(num1)));

  if (num1 == "" | num2 == "") {
    //alert("Enter a numerical value");
    enter_value();
  }
  else{
    len = document.rb.operation.length;

    for (i = 0; i < len; i++) {
      if (document.rb.operation[i].checked) {
        action = document.rb.operation[i].value;
      }
    }

    switch (action) {
      case "add":
        add(num1, num2);
        break;
      case "minus":
        minus(num1, num2);
        break;
      case "multiply":
        multiply(num1, num2);
        break;
      case "divide":
        divide(num1, num2);
        break;
    }

    function add(n1, n2) {
      sum = parseInt(n1) + parseInt(n2);
      document.getElementById('result').value = sum;
    }

    function minus(n1, n2) {
      sub = parseInt(n1) - parseInt(n2);
      document.getElementById('result').value = sub;

    }

    function multiply(n1, n2) {
      cross = n1 * n2;
      document.getElementById('result').value = cross;
    }

    function divide(n1, n2) {
      if (n2 != 0) {
        div = (n1 / n2);
        document.getElementById('result').value = div;
      }
      else {
        document.getElementById('result').className = "bg-danger";
        document.getElementById('result').value = "Cannot divide by zero";
      }
    }
  }
}
