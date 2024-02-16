let inputvale=document.getElementById("inp");

function display(num){
   inputvale.value +=num
}
function eqval(){
  try{
    answer=eval(inputvale.value);
    inputvale.value=answer;
  }
  catch{
    alert( inputvale.value +" "+'you texting roung one');
  }
}
function delite(){
  inputvale.value="";
}
function clearinp(){
   inputvale.value=inputvale.value.slice(0,-1);
}