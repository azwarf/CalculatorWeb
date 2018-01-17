var a = true;
var angka1='';
var angka2='';
var operator =''; 


$('button').click(function(){
  var clasNme = $(this).attr('class')
  var konten = $(this).text();
    

  if (clasNme=='angka'){
    if (a == true) {
      angka1+=konten;
      document.getElementById('view').innerHTML= angka1
    }else{
      angka2+=konten;
      document.getElementById('view').innerHTML= angka2
    }
  } else {
    a = false;
    operator=konten
  }
  
})

function  hitung(){
    switch (operator){
      case '+':
        document.getElementById('view').innerHTML= parseInt(angka1)+parseInt(angka2)
        break;
      case '-':
        document.getElementById('view').innerHTML= parseInt(angka1)-parseInt(angka2)
        break;
      case '*':
        document.getElementById('view').innerHTML= parseInt(angka1)*parseInt(angka2)
        break;
      case '/':
        document.getElementById('view').innerHTML= parseInt(angka1)/parseInt(angka2)
        break;
    }

  }
function reset(){
  document.getElementById('view').innerHTML =null;
}