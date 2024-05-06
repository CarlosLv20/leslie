document.getElementById("loveButton").addEventListener("click", function() {
    alert("¡Amor enviado! 💖");
    showPhoto();
});

function showPhoto() {
    var photos = document.querySelectorAll(".photo img");
    i=1;
    photos.forEach(function(photo) {
        photo.src = "foto"+i+".jpg"; // Cambia la URL por la URL de tus imágenes
        i++;
    });
    document.getElementById("photoContainer").style.display = "block";
}
