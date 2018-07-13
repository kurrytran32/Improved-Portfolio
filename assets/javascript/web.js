// $(document).ready(function(){
//     //appending images of projects and including links

// })

function projectShow() {
    let projects = {
        projName: ['Trivia Game', 'Word Guess Game', 'The Destinator'],
        projLinks: ['https://kurrytran32.github.io/TriviaGame/', 'https://kurrytran32.github.io/Word-Guess-Game/', 'https://loftusjl.github.io/Project1/'],
        projImages: ['./assets/images/TriviaGame.png', './assets/images/Word-Guess-Game.png', './assets/images/Destinator.png']

    }
    let proj = projects;
    for (i = 0; i < proj.projName.length; i++) {
        console.log(i)
        console.log(proj.projName[i])
        console.log(proj.projLinks[i])
        // $('#proj-port').append(`<p>${proj.projImages[i]}</p>`)
        // begin structuring carousel items

        // structuring carousel items with id based on index value
        let $divC = $('<div>');
        // adding carousel class to main car div
        $divC.addClass('carousel-item').attr('id', `slide${i + 1}`);
        // adding active to first slide
        $('#slide1').addClass('active');
        // adding image tag into carousel item
        let $img = $('<img>');
        //adding src att to img tag
        $img.attr('src', proj.projImages[i]).addClass('imgPro d-block w-100');
        //Div for caption
        let $capDiv = $('<div>');
        // adding caption caption class
        $capDiv.addClass('carousel-caption d-none d-md-block');
        // h5 element to capDiv for title of project
        let $title = $('<h5>');
        // adding titles into h5
        $title.text(proj.projName[i]);
        let $link = $('<a>');
        $link.attr('href', proj.projLinks[i]);
        $link.text(proj.projLinks[i]);

        // building appends
        $('#proj-port').append($divC);
        $divC.append($img);
        $divC.append($capDiv);
        $capDiv.append($title);
        $capDiv.append($link);
    }
}