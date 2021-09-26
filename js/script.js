// name adr menu qte
const name = document.getElementById('name')
const menu = document.getElementById('menu')
const adr = document.getElementById('adr')
const qte = document.getElementById('qte')

const app = () =>{
    if(name.value == "" || menu.value == "" || adr.value == "" || qte.value == ""){
        alert("remplisser les champs")
        return false
    }
    if(isNaN(qte.value) || parseInt(qte.value) <= 0 ){
        alert('verifier la quantite')
        return false
    }
}
