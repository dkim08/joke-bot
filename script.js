function startHorror() {
    const text = document.getElementById('question');
    const screamer = document.getElementById('gif');
    const audio = document.querySelector('audio');
    const button = document.getElementById('btn');
    audio.play();
    console.log(audio);
    text.classList.add('disable');
    screamer.classList.remove('disable');
    button.classList.add('disable');
}
button.addEventListener('click', startHorror);
