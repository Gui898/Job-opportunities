toSpeak('Available vacancies');

function toSpeak(value) {
    responsiveVoice.speak(value, 'US English Female',
    {rate:1.0});  
}
