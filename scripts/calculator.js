/*
 Calculator developed by Sridhar Karra
 Date: 1/20/2015
 */
var memory = 0;
var a = '';
var b = 0;
var val = 0;
var tmp = 0;

function display(digit){
  document.getElementsByName("Input")[0].value = digit;
}

function reset(){
  memory = 0;
  val = 0;
  a = '';
  b = 0;
  tmp = 0;
  display("0");
}

function number(arg) {
  val = val + arg.toString();
  //console.log("val,tmp,memory", parseInt(val),tmp,memory);
  display(parseInt(val));
}

function operator(text) {
  a = text;
  tmp = 0;
  //console.log(a);
  display(a);
  tmp = tmp + parseInt(val);
  val = 0;
  // console.log("val,tmp" , val, tmp);
  //display(parseInt(tmp));
  b++;
}

function calculate(){
  if(val == ' ') {
    alert("Select a number");
  }
  else if (a == '+'){
    memory = memory + parseInt(tmp) + parseInt(val);
    display((memory).toFixed(2));
    // console.log("val,tmp,memory" , val, tmp,memory);
    tmp = 0;
    val = 0;
  }
  else if (a == '-'){
    memory = memory - (parseInt(val) - parseInt(tmp));
    display((memory).toFixed(2));
    // console.log("val,tmp,memory" , val, tmp,memory);
    tmp = 0;
    val = 0;
  }
  else if (a == '*'){
    if (b == 1) {
      memory = 1 * parseInt(tmp) * parseInt(val);
      display((memory).toFixed(2));
      // console.log("val,tmp,memory", val, tmp, memory);
      tmp = 0;
      val = 0;
    }
    else{
      memory = memory * parseInt(val);
      display((memory).toFixed(2));
      //  console.log("val,tmp,memory", val, tmp, memory);
      tmp = 0;
      val = 0;
    }
  }
  else if (a =='/'){
    if (parseInt(val) == '0'){
      display("Cannot divide by Zero");
    }
    else{
      if(b == 1){
        memory = tmp / val;
        display((memory).toFixed(2));
        //  console.log("val,tmp,memory" , val, tmp,memory);
        tmp = 0;
        val = 0;
      }
      else{
        memory = memory / val;
        display((memory).toFixed(2));
        //  console.log("val,tmp,memory" , val, tmp,memory);
        tmp = 0;
        val = 0;
        // console.log("val,tmp,memory" , parseInt(val), tmp,memory);
      }
    }
  }
}
