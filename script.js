window.onload = function() {
    const addMusicBtn = document.getElementById('addMusicBtn');
    const audioPlayer = document.getElementById('audioPlayer');

    let isMusicAdded = false; // Track if music is added

    addMusicBtn.addEventListener('click', function() {
        if (!isMusicAdded) { // Check if music is not added
            const input = document.createElement('input');
            input.type = 'file';
            input.accept = 'audio/*';
            input.onchange = function(event) {
                const file = event.target.files[0];
                const url = URL.createObjectURL(file);
                audioPlayer.src = url;
                audioPlayer.style.display = 'block'; // Show custom audio player
                addMusicBtn.textContent = 'Play Music'; // Change button text to 'Play Music'
                isMusicAdded = true; // Set music added to true
            };
            input.click();
        } else { // If music is added, toggle play/pause
            if (audioPlayer.paused) {
                audioPlayer.play();
                addMusicBtn.textContent = 'Pause Music';
            } else {
                audioPlayer.pause();
                addMusicBtn.textContent = 'Play Music';
            }
        }
    });
};
