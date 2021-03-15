class Form {
constructor(){}

display(){

    var title= createElement('h1')
    title.html(" Car Racing Game")
    title.position(400,10)


    var input= createInput("Name");
    input.position(500,150)


    var button = createButton("Play")
    button.position(500,200)

    var greeting= createElement('h2')


    button.mousePressed(function(){
        input.hide()
        button.hide()


        var name= input.val()

        playerCount++;

        player.update(name)
        player.updateCount(playerCount)

        greeting.html("Welcome  "+name)
        greeting.position(500,150)

    })

}

}