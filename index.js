 
for(let i=0;i<document.querySelectorAll(".drum").length;i++){



 
 document.querySelectorAll(".drum")[i].addEventListener("click",function(){// waiting to click ...after click then function name is called
  let buttonHtml=this.innerHTML;
makesound(buttonHtml)
buttonAnimation(buttonHtml)

   
 });

}

document.addEventListener("keydown",function(eveny){

   makesound(event.key)
   buttonAnimation(event.key)
});




function makesound(key){

   switch (key) {
      case "w":

         let tom1=new Audio("sounds/tom-1.mp3");
         tom1.play();
         break;
      case "a":

         let tom2=new Audio("sounds/tom-2.mp3");
         tom2.play(); 
         break;
      case "s":

         let tom3=new Audio("sounds/tom-3.mp3");
         tom3.play(); 
         break;

      case "d":

         let tom4=new Audio("sounds/tom-4.mp3");
         tom4.play(); 
         break;
      case "j":

         let snare=new Audio("sounds/snare.mp3");
         snare.play(); 
         break;
      case "k":

         let crash=new Audio("sounds/crash.mp3");
         crash.play(); 
         break;
      case "l":

         let kick=new Audio("sounds/kick-bass.mp3");
         kick.play(); 
                           

                     
         
         break;

         
   
      default:
         console.log(buttonHtml)
      
   }



}

function buttonAnimation(currentKey){
    let activeButton=document.querySelector("."+currentKey)
    activeButton.classList.add("pressed")
   
    setTimeout(function(){
      activeButton.classList.remove("pressed");
    },100);
    

}





// let audio=new Audio("sounds/tom-4.mp3");
//    audio.play();
// function BellBoy(name,age,hasWorkPermit,language){
// this.name=name;
// this.age=age;
// this.hasWorkPermit=hasWorkPermit;
// this.language=language

// }

// let Housekeeper=new BellBoy("Timmy",19,true,["French","English"]);
// console.log(Housekeeper)