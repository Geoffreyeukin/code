

let langbut=document.querySelector("#switchlangue");
function choixlangue()  {
    let choix=langbut.value;
    console.log(choix);

   
    switch (choix) {
        case "En":

            el=document.querySelectorAll(".word");
            for (element of el){
                element.innerHTML=EnWord[element.getAttribute("word")] ;
            }
            break;
        case "Fr":
           
         el=document.querySelectorAll(".word");
         for (element of el){
            element.innerHTML=FrWord[element.getAttribute("word")] ;
        }
            break;    
    
        default:
          
            break;
    }
    
}
choixlangue();
langbut.addEventListener("change",choixlangue );
