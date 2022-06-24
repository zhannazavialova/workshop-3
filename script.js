// Сделать смену мелодий при нажатии на кнопки.
//Чтобы каждая кнопка проигрывала свою мелодию.И в одно время должна играть одна мелодия.
player = document.querySelector("audio");

playerScnd = document.querySelector("audio");

firstTrackBtn = document.querySelector("#firstTrack");
secondTrackBtn = document.querySelector("#secondTrack");

firstTrackBtn.onclick = function () {
    player.src = "audio/1.mp3";
    player.play();
}

secondTrackBtn.onclick = function () {  
    playerScnd.src = "audio/2.mp3";
    playerScnd.play();
}