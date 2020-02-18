var talent = document.querySelector("#display_talent");
var texts = ["Dynamic Websites", "Blogs and Content writing", "Banners and Logos"];

/*$("body").css("background-color","#f6fcf5");

/*,#how_i_work,#body-details").css("background-color*/



//setInterval(function(){


 
    new TypeIt("#display_talent", {
      speed: 200,
      waitUntilVisible: true
    })
    .delete(1)
    .type(texts[0])
    .pause(500)
    .type(", ")
    //.delete(texts[0].length)
    .type(texts[1])
    .pause(500)
    .type(", ")
    //.delete(texts[1].length)
    .type(texts[2])
    .break()
    .pause(500)
    .options({ speed: 100 })
    .go();

  
  
  
//}, 10000);




  

