document.getElementById("loveButton").addEventListener("click", function() {
    alert("¡Amor enviado! 💖");
    showPhoto();
});

function showPhoto() {
    var photo = document.getElementById("photo");
    photo.src = "we.jpg"; // Cambia la URL por la URL de tu imagen
    document.getElementById("photoContainer").style.display = "block";
}
