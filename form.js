class Form{
    constructor(){

    }
    display(){
        var title = createElement('h2')
        title.html("Racing Game")
        title.position(130,5)

        var input = createInput("Name"); 
        var button = createButton('Play');
         input.position(130, 160); 
         button.position(250, 200);

         button.mousePressed(function(){
         input.hide();
         button.hide();
         var name = input.value()

         playerCount+=1
         player.updateCount(playerCount)
         player.update(name)

         var greeting = createElement('h3')
         greeting.html("Welcome"+name)
         greeting.positon(130,5);
         })
    }
}