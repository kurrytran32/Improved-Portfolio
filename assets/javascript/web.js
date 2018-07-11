// $(document).ready(function(){
//     //appending images of projects and including links
    
// })

function projectShow(){
    let projects = {
        projName: ['Trivia Game', 'Word Guess Game', 'The Destinator'],
        projLinks: ['https://kurrytran32.github.io/TriviaGame/','https://kurrytran32.github.io/Word-Guess-Game/', 'https://loftusjl.github.io/Project1/'],
        projImages:['../images/TriviaGame.png','../images/Word-Guess-Game.png','../images/Destinator.png']
        
    }
    let proj = projects;
    for(i=0; i < proj.projName.length;i++){
        console.log(i)
        console.log(proj.projName[i])
        console.log(proj.projLinks[i])
        $('#proj-port').append(`<p>${proj.projImages[i]}</p>`)
        // begin structuring carousel items
        
        // structuring carousel items with id based on index value
        let $divC = $('<div>');
        
        //Div for caption
    }
}