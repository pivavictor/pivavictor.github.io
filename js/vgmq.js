var score = 0;

function loadGame() {
    for(var i = 1; i <= 20; i++){
        $('#main').append(
            '<div class="item' + i + ' entryBlock" id="divGame' + i + '">' +
                '<p class="gameTitle" id="titleGame' + i + '">Game ' + i + '</p>' +
                '<audio controls>' +
                    '<source src="audio/mus' + i + '.mp3" type="audio/mpeg">' +
                '</audio>' +
                '<br>' +
                '<input type="text" class="nameInput" id="gameName' + i + '" onkeyup="guess(' + i + ')">' +
            '</div>');
    }
}

function guess(index) {
    var name = $('#gameName' + index).val().trim().toLowerCase();
    var title = list[index];
    var gameTitle = title[0];
    for(var i = 0; i < title.length; i++){
        if (name === title[i].toLowerCase()){
            $('#titleGame' + index).text(gameTitle).css("color", "white");
            $('#divGame' + index).css("background-color", "green");
            score++;
            $('#score').text('Score: ' + score + '/20');
            $('#gameName' + index).prop('disabled', true);
        }
    }
}