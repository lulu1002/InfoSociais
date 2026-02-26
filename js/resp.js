const larguraTela= window.innerWidth

const isa= document.getElementById("isa");
const leoeisa= document.getElementById("leoeisa");
const lives= document.getElementById("lives");

if(larguraTela < 1000){
   isa.className= "responsive"
    leoeisa.className= "responsive"
     lives.className= "responsive"
}