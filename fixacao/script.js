
lerP = document.getElementById("paragrafo")
console.log(lerP.innerHTML)

lerInput = () =>{
   console.log(document.getElementById("texto").value) 

};

novoP = document.getElementById("texto")

alterarP = () => {
    lerP.innerHTML = novoP.value
    console.log(novoP.value)
    novoP.value= " "
}



