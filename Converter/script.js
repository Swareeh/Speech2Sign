const mic_icon = document.getElementById("mic_icon")
const input_textarea = document.getElementById("input_textarea")
const output = document.getElementById('output')
const convert_btn = document.getElementById('convert_btn')

mic_icon.addEventListener('click', function () {
    var speech = true;
    window.SpeechRecognition = window.webkitSpeechRecognition;
    const recognition = new SpeechRecognition();
    recognition.interimResults = true;

    recognition.addEventListener('result', e => {
        const transcript = Array.from(e.results)
            .map(result => result[0])
            .map(result => result.transcript)
        input_textarea.innerHTML = transcript;
        mic_icon.src = './Assets/mute.png'
    })


    recognition.addEventListener('end', () => {
        if (input_textarea.textContent.trim() === '') {
            input_textarea.textContent = "No speech detected. Please try again.";
            mic_icon.src = './Assets/mute.png'
        }
    })

    if (speech == true) {
        recognition.start();
        mic_icon.src = './Assets/unmute.png'
    }

})

function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

var converter = false

convert_btn.onclick = async function () {

    if (converter == true) {
        alert('Converter is already running...\n[Press OK to continue]')
        return
    }

    converter = true
    var input_value = document.getElementById('input_textarea').value
    input_value = input_value.toUpperCase()

    const input_value_words = input_value.split(' ')

    for (let i = 0; i < input_value_words.length; i++) {

        var word = input_value_words[i]
        
        if (word == 'YES') {
            output.src = './Assets/Signs/Words/YES.jpg'
            await delay(500)
            output.src = './Assets/white.png'
        }

        else if (word == 'LOVE') {
            output.src = './Assets/Signs/Words/LOVE.jpg'
            await delay(500)  
            output.src = './Assets/white.png'
        }

        else if (word == 'BELIEVE') {
            output.src = './Assets/Signs/Words/BELIEVE.jpg'
            await delay(500) 
            output.src = './Assets/white.png'
        }

        else if (word == 'FRIEND') {
            output.src = './Assets/Signs/Words/FRIEND.jpg'
            await delay(500)  
            output.src = './Assets/white.png'
        }

        else if (word == 'BYE') {
            output.src = './Assets/Signs/Words/BYE.jpg'
            await delay(500)  
            output.src = './Assets/white.png'
        }

        else if (word == 'FRIENDS') {
            output.src = './Assets/Signs/Words/FRIENDS.jpg'
            await delay(500)  
            output.src = './Assets/white.png'
        }

        else if (word == 'INSPIRATION') {
            output.src = './Assets/Signs/Words/INSPIRATION.jpg'
            await delay(500)  
            output.src = './Assets/white.png'
        }

        else if (word == 'NO') {
            output.src = './Assets/Signs/Words/NO.jpg'
            await delay(500)  
            output.src = './Assets/white.png'
        }

        else if (word == 'PLEASE') {
            output.src = './Assets/Signs/Words/PLEASE.jpg'
            await delay(500)  
            output.src = './Assets/white.png'
        }

        else if (word == 'STOP') {
            output.src = './Assets/Signs/Words/STOP.jpg'
            await delay(500)
            output.src = './Assets/white.png'
        }
        
        else {

            for (let i = 0; i < word.length; i++) {

                if (word[i] == ' ') {
                    output.src = `./Assets/white.png`
                } else {
                    output.src = `./Assets/Signs/alphabets/${word[i]}.jpg`
                }
                await delay(500)
            }
            output.src = './Assets/white.png'
        }

    }

    converter = false
}
