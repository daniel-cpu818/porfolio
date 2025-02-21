function fullScreen() {
    document.querySelectorAll(".thumbnail").forEach(img => {
        img.addEventListener("click", () => {
            if (img.requestFullscreen) {
                img.requestFullscreen();
            } else if (img.mozRequestFullScreen) { // Firefox
                img.mozRequestFullScreen();
            } else if (img.webkitRequestFullscreen) { // Chrome, Safari, Opera
                img.webkitRequestFullscreen();
            } else if (img.msRequestFullscreen) { // IE/Edge
                img.msRequestFullscreen();
            }
        });
    });
}

export default fullScreen;
