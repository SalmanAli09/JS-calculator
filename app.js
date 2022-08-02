var resultKeeper = document.getElementsByTagName("span");
function getNumber(num){
   var result = document.getElementById('result');
   result.value += num;
   var lastResult = result.value.length -1;
   console.log(lastResult)
   if(result.value[lastResult] === "+" || result.value[lastResult] === "-" || result.value[lastResult] === "*" || result.value[lastResult] === "/" || result.value[lastResult] === "%"){
      document.getElementById("plus").setAttribute("disabled","disabled")
      document.getElementById("minus").setAttribute("disabled","disabled")
      document.getElementById("multiply").setAttribute("disabled","disabled")
      document.getElementById("divide").setAttribute("disabled","disabled")
      document.getElementById("percent").setAttribute("disabled","disabled")
   }else{
      document.getElementById("plus").removeAttribute("disabled","disabled")
      document.getElementById("minus").removeAttribute("disabled","disabled")
      document.getElementById("multiply").removeAttribute("disabled","disabled")
      document.getElementById("divide").removeAttribute("disabled","disabled")
      document.getElementById("percent").removeAttribute("disabled","disabled")
   }
   if(result.value[lastResult] === "."){
      document.getElementById("dot").setAttribute("disabled","disabled")
   }else{
      document.getElementById("dot").removeAttribute("disabled","disabled")
   }
}
function clearResult(){
    var result = document.getElementById('result');
   result.value = "";
}
function getResult(){
    var result = document.getElementById('result');
    result.value = eval(result.value.toString());
    console.log(result.value)
    if(result.value === "undefined"){
      swal("Enter Some Calculation");
      result.value = ""
    }
}
function getSqrt(){
   result.value = Math.sqrt(result.value);
}

// Background

