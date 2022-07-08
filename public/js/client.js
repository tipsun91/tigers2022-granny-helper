const utterance = new SpeechSynthesisUtterance('Добрый день!');
window.speechSynthesis.speak(utterance);

// захватим UI-элементы для работы с ними
const textEl = document.getElementById('text');
const speakEl = document.getElementById('speak');

// перехватим клик по кнопке
speakEl.addEventListener('click', speakText);

function speakText() {
  // остановим все, что уже синтезируется в речь
  window.speechSynthesis.cancel();

  // прочитать текст
  const text = textEl.value;
  const utterance = new SpeechSynthesisUtterance(text);
  window.speechSynthesis.speak(utterance);
}

utterance.pitch = 0.7;  // пониже
utterance.rate = 1.4;   // побыстрее
utterance.volume = 0.8; // потише
window.speechSynthesis.speak(utterance);

const voices = window.speechSynthesis.getVoices();
const lastVoice = voices[voices.length - 1];
utterance.voice = lastVoice; // заменить голос
window.speechSynthesis.speak(utterance);

window.speechSynthesis.start();
// start возникает в начале воспроизведения.
// pause возникает, когда воспроизведение приостановлено.
// resume возникает, когда воспроизведение продолжено.
// end возникает, когда закончился текст для воспроизведения. Кроме Safari, в остальных браузерах это событие срабатывает когда воспроизведение ещё и отменено.
// boundary возникает, когда речь достигает нового слова или предложения. Это событие не работает на Android, но об этом чуть позже.
window.speechSynthesis.end();
