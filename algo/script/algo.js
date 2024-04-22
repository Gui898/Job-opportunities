toSpeak("Select your type of disability");

function toSpeak(value) {
    responsiveVoice.speak(value, 'US English Female',
    {rate:1.0});  
}

module.exports = toSpeak(value);