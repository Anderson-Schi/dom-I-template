let limpaNome = document.getElementById("nome");
console.log(nome.value);
limpaNome.value = " ";

let limpaEndereco = document.getElementById("endereco");
console.log(endereco.value);
limpaEndereco.value = " ";

let limpaEmail = document.getElementById("email");
console.log(email.value);
limpaEmail.value = " ";

// ------------------------------------------------------- 


// // Arrow function
// const exibirNome = () => {

// }; 

// // Nomeada function
// function teste () {

// };


// Anonima function
const exibirNome = function(){
   console.log(document.getElementById("nome").value);
};

const exibirEndereco = function(){
    console.log(document.getElementById("endereco").value);
};

const exibirEmail = function(){
    console.log(document.getElementById("email").value)
};

const mostrarForm = () =>{
    exibirNome();
    exibirEndereco();
    exibirEmail();

    document.getElementById("nome").value = " ";
    document.getElementById("endereco").value = " ";
    document.getElementById("email").value = " ";
};