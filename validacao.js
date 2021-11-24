function verificar(){
     var nome = document.getElementById('nome').value;
     var email = document.getElementById('email').value;
     var cpf = document.getElementById('cpf').value;
     var fone = document.getElementById('fone').value;

     if(!nome || !email || !cpf || !fone){
         alert("campos não preenchidos, favor preenchê-los");
     } else{
         alert("campos preenchidos com sucesso");
     }
}