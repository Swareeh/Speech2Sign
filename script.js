// The following code is for Speech to Text Recognition

const mic_icon = document.getElementById("mic_icon")
const convert_textarea = document.getElementById("convert_textarea")

mic_icon.addEventListener('click', function () {
    var speech = true;
    window.SpeechRecognition = window.webkitSpeechRecognition;
    const recognition = new SpeechRecognition();
    recognition.interimResults = true;

    recognition.addEventListener('result', e => {
        const transcript = Array.from(e.results)
            .map(result => result[0])
            .map(result => result.transcript)
        convert_textarea.innerHTML = transcript;
        mic_icon.src = './Resources/mute.png'
    })


    recognition.addEventListener('end', () => {
        if (convert_textarea.textContent.trim() === '') {
            convert_textarea.textContent = "No speech detected. Please try again.";
            mic_icon.src = './Resources/mute.png'
        }
    })

    if (speech == true) {
        recognition.start();
        mic_icon.src = './Resources/unmute.png'
    }


})

// We need to make the js find the animated gifs from the directory and display it on the website