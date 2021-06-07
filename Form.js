class Form {
    constructor(){
        this.title = createElement("h1")
        this.input = createInput("Name")
        this.button = createButton("Play")
        this.greeting = createElement("h2")
        this.reset = createButton("Reset");
    }

     hide(){
         this.title.hide();
         this.input.hide();
         this.button.hide();
         this.greeting.hide();
     }

     
    display(){
      
      this.title.html("Car Racing Game")
      this.title.position(displayWidth/2-50,0)

      this.input.position(displayWidth/2-40,displayHeight/2-80)
       
       this.reset.position(displayWidth+50,30);
       this.reset.mousePressed(()=>{
           database.ref("/").update({
               players: null,
               gameState: 0,
               playerCount: 0

           })

       })
      this.button.position(displayWidth/2+30,displayHeight/2)
      this.button.mousePressed(()=>{
          this.input.hide();
          this.button.hide();

          player.name = this.input.value();
          playerCount = playerCount+1;
          player.index = playerCount
          player.update();
          player.updateCount(playerCount);

          this.greeting.html("Welcome "+ player.name);
          this.greeting.position(displayWidth/2-70,displayHeight/4);
      })
   } 
}