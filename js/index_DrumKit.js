// Wait for the DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function () {
    // Function to play a sound
    function playSound(sound, button) {
        sound.currentTime = 0; // Reset the sound to the beginning
        sound.play();
    }

    // Function to set up a button with a sound
    function setUpButton(buttonId, soundId) {
        const button = document.getElementById(buttonId);
        const sound = document.getElementById(soundId);
        button.addEventListener('click', function () {
            playSound(sound, button);
        });
    }

    // Set up buttons for different sounds
    const drumButtons = [
        { buttonId: 'kickButton', soundId: 'kickSound' },
        { buttonId: 'rideButton', soundId: 'rideSound' },
        { buttonId: 'snareButton', soundId: 'snareSound' },
        { buttonId: 'tomButton', soundId: 'tomSound' },
        { buttonId: 'hiHatButton', soundId: 'hiHatSound' }
    ];

    drumButtons.forEach(button => {
        setUpButton(button.buttonId, button.soundId);
    });

    // Keyboard event listener
    document.addEventListener('keydown', function (event) {
        const keyToSound = {
            's': 'rideSound',
            'a': 'kickSound',
            'd': 'snareSound',
            'f': 'tomSound',
            'g': 'hiHatSound'
        };

        const soundId = keyToSound[event.key];
        if (soundId) {
            playSound(document.getElementById(soundId));
        }
    });
});
