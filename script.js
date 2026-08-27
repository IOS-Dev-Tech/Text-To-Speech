const appStyles = `
  * {
    box-sizing: border-box;
  }

  :root {
    font-family: Georgia, 'Times New Roman', serif;
    color: #222b2a;
    background: #f5efe6;
  }

  body {
    margin: 0;
    min-height: 100vh;
    background: linear-gradient(140deg, #f8f3eb 0%, #e8eee9 100%);
  }

  .app {
    width: min(980px, 92%);
    margin: auto;
    padding: 44px 0 30px;
  }

  header {
    display: flex;
    justify-content: space-between;
    align-items: end;
    margin-bottom: 28px;
  }

  .kicker {
    margin: 0 0 8px;
    color: #a24d3f;
    font: 700 12px Arial, sans-serif;
    letter-spacing: 2px;
    text-transform: uppercase;
  }

  h1 {
    margin: 0;
    font-size: clamp(2.4rem, 7vw, 5rem);
    font-weight: 400;
    line-height: .9;
    letter-spacing: -2px;
  }

  .live {
    color: #557f6a;
    font: 700 12px Arial, sans-serif;
  }

  .live::before {
    content: '';
    display: inline-block;
    width: 8px;
    height: 8px;
    margin-right: 6px;
    border-radius: 50%;
    background: #69a678;
  }

  .workspace {
    display: grid;
    grid-template-columns: 1.2fr .8fr;
    gap: 18px;
  }

  .card {
    padding: 22px;
    border: 1px solid #d8d8cb;
    border-radius: 8px;
    background: rgba(255, 255, 255, .76);
    box-shadow: 0 14px 35px rgba(66, 70, 55, .08);
  }

  .card h2 {
    margin: 0 0 14px;
    font-size: 18px;
    font-weight: 400;
  }

  textarea {
    width: 100%;
    min-height: 260px;
    padding: 14px;
    resize: vertical;
    border: 1px solid #d4d9d1;
    border-radius: 5px;
    outline: 0;
    color: #26332f;
    background: #fffdf9;
    font: 20px/1.5 Georgia, serif;
  }

  textarea:focus,
  select:focus,
  input:focus {
    border-color: #a24d3f;
    box-shadow: 0 0 0 3px rgba(162, 77, 63, .12);
  }

  .meta {
    display: flex;
    justify-content: space-between;
    margin: 8px 1px 18px;
    color: #87938a;
    font: 12px Arial, sans-serif;
  }

  .samples {
    display: flex;
    flex-wrap: wrap;
    gap: 7px;
  }

  .sample {
    padding: 7px 10px;
    border: 1px solid #d6ddd7;
    border-radius: 20px;
    color: #557f6a;
    background: transparent;
    font: 12px Arial, sans-serif;
    cursor: pointer;
  }

  .sample:hover {
    border-color: #a24d3f;
    color: #a24d3f;
  }

  .controls {
    display: grid;
    gap: 15px;
  }

  label {
    display: grid;
    gap: 7px;
    color: #68766c;
    font: 700 11px Arial, sans-serif;
    letter-spacing: .7px;
    text-transform: uppercase;
  }

  select,
  input[type=range] {
    width: 100%;
  }

  select {
    padding: 12px;
    border: 1px solid #d4d9d1;
    border-radius: 5px;
    color: #26332f;
    background: #fffdf9;
    font: 15px Georgia, serif;
  }

  input[type=range] {
    accent-color: #a24d3f;
  }

  .range-row {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 12px;
  }

  .range-value {
    min-width: 45px;
    color: #a24d3f;
    text-align: right;
    font: 12px Arial, sans-serif;
  }

  .actions {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 9px;
    margin-top: 4px;
  }

  button {
    cursor: pointer;
  }

  .primary,
  .secondary {
    padding: 13px;
    border-radius: 5px;
    font: 700 13px Arial, sans-serif;
  }

  .primary {
    border: 0;
    color: #fff;
    background: #a24d3f;
  }

  .secondary {
    border: 1px solid #c8d1c8;
    color: #557f6a;
    background: #fffdf9;
  }

  .primary:disabled,
  .secondary:disabled {
    cursor: not-allowed;
    opacity: .45;
  }

  .status {
    min-height: 18px;
    margin: 16px 0 0;
    color: #557f6a;
    font: 12px Arial, sans-serif;
  }

  footer {
    margin-top: 22px;
    color: #8b928a;
    text-align: center;
    font: 12px Arial, sans-serif;
  }

  @media (max-width: 720px) {
    .app {
      padding-top: 28px;
    }

    header {
      align-items: start;
    }

    .workspace {
      grid-template-columns: 1fr;
    }

    textarea {
      min-height: 190px;
    }
  }
`;

const favicon = document.createElement('link');
favicon.rel = 'icon';
favicon.type = 'image/svg+xml';
favicon.href = `data:image/svg+xml,${encodeURIComponent(`
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64">
    <rect width="64" height="64" rx="14" fill="#a24d3f"/>
    <path d="M32 14a7 7 0 0 0-7 7v12a7 7 0 0 0 14 0V21a7 7 0 0 0-7-7Zm-13 19a13 13 0 0 0 26 0h-4a9 9 0 0 1-18 0h-4Zm11 17h4v-6h-4v6Z" fill="#fffdf9"/>
  </svg>
`)}`;
document.head.appendChild(favicon);

document.head.insertAdjacentHTML(
  'beforeend',
  `<style>${appStyles}</style>`
);

document.body.innerHTML = `
  <main class="app">
    <header>
      <div>
        <p class="kicker">Browser voice lab</p>
        <h1>Speech Studio</h1>
      </div>
      <span class="live">Ready</span>
    </header>

    <section class="workspace" aria-label="Text to speech controls">
      <div class="card">
        <h2>Write something worth hearing.</h2>
        <textarea
          id="text"
          maxlength="3000"
          placeholder="Type or paste text here..."
          aria-label="Text to read aloud"
        ></textarea>

        <div class="meta">
          <span id="count">0 / 3000</span>
          <button class="secondary" id="clear" type="button">Clear</button>
        </div>

        <div class="samples" aria-label="Sample texts">
          <button class="sample" type="button">Welcome to the studio.</button>
          <button class="sample" type="button">Take a slow breath.</button>
          <button class="sample" type="button">The future is spoken.</button>
        </div>
      </div>

      <div class="card controls">
        <h2>Voice settings</h2>
        <label>
          Voice
          <select id="voice" aria-label="Voice"></select>
        </label>

        <label>
          Speed
          <div class="range-row">
            <input id="rate" type="range" min="0.5" max="2" value="1" step="0.1">
            <span class="range-value" id="rateValue">1.0x</span>
          </div>
        </label>

        <label>
          Pitch
          <div class="range-row">
            <input id="pitch" type="range" min="0" max="2" value="1" step="0.1">
            <span class="range-value" id="pitchValue">1.0</span>
          </div>
        </label>

        <label>
          Volume
          <div class="range-row">
            <input id="volume" type="range" min="0" max="1" value="1" step="0.1">
            <span class="range-value" id="volumeValue">100%</span>
          </div>
        </label>

        <div class="actions">
          <button class="primary" id="speak" type="button">Speak</button>
          <button class="secondary" id="pause" type="button" disabled>Pause</button>
          <button class="secondary" id="stop" type="button" disabled>Stop</button>
        </div>

        <p class="status" id="status" aria-live="polite">Choose a voice and press Speak.</p>
      </div>
    </section>

    <footer>Uses your browser's built-in speech synthesis.</footer>
  </main>
`;

const speech = window.speechSynthesis;
const textInput = document.querySelector('#text');
const voiceSelect = document.querySelector('#voice');
const speakButton = document.querySelector('#speak');
const pauseButton = document.querySelector('#pause');
const stopButton = document.querySelector('#stop');
const status = document.querySelector('#status');
let availableVoices = [];

function loadVoices() {
  availableVoices = speech
    .getVoices()
    .sort((first, second) => first.name.localeCompare(second.name));

  voiceSelect.innerHTML = availableVoices.length
    ? availableVoices
      .map(
        (voice, index) =>
          `<option value="${index}">${voice.name} (${voice.lang})</option>`
      )
      .join('')
    : '<option value="">Default browser voice</option>';
}

function updateRangeValue(input, output, formatter) {
  input.addEventListener('input', () => {
    output.textContent = formatter(input.value);
  });
}

function updateControls(isSpeaking) {
  speakButton.disabled = isSpeaking;
  pauseButton.disabled = !isSpeaking;
  stopButton.disabled = !isSpeaking;
}

textInput.addEventListener('input', () => {
  document.querySelector('#count').textContent = `${textInput.value.length} / 3000`;
});

document.querySelector('#clear').addEventListener('click', () => {
  speech.cancel();
  textInput.value = '';
  document.querySelector('#count').textContent = '0 / 3000';
  status.textContent = 'Cleared. Ready for a new thought.';
  updateControls(false);
});

document.querySelectorAll('.sample').forEach((sample) => {
  sample.addEventListener('click', () => {
    textInput.value = sample.textContent;
    textInput.dispatchEvent(new Event('input'));
    textInput.focus();
  });
});

updateRangeValue(
  document.querySelector('#rate'),
  document.querySelector('#rateValue'),
  (value) => `${Number(value).toFixed(1)}x`
);

updateRangeValue(
  document.querySelector('#pitch'),
  document.querySelector('#pitchValue'),
  (value) => Number(value).toFixed(1)
);

updateRangeValue(
  document.querySelector('#volume'),
  document.querySelector('#volumeValue'),
  (value) => `${Math.round(value * 100)}%`
);

speakButton.addEventListener('click', () => {
  const words = textInput.value.trim();

  if (!words) {
    status.textContent = 'Add some text before speaking.';
    textInput.focus();
    return;
  }

  speech.cancel();
  const utterance = new SpeechSynthesisUtterance(words);
  const selectedVoice = availableVoices[Number(voiceSelect.value)];

  if (selectedVoice) utterance.voice = selectedVoice;

  utterance.rate = Number(document.querySelector('#rate').value);
  utterance.pitch = Number(document.querySelector('#pitch').value);
  utterance.volume = Number(document.querySelector('#volume').value);

  utterance.onstart = () => {
    status.textContent = 'Speaking now...';
    updateControls(true);
  };

  utterance.onend = () => {
    status.textContent = 'Finished speaking.';
    updateControls(false);
  };

  utterance.onerror = () => {
    status.textContent = 'Speech could not start in this browser.';
    updateControls(false);
  };

  speech.speak(utterance);
});

pauseButton.addEventListener('click', () => {
  if (speech.paused) {
    speech.resume();
    status.textContent = 'Speaking now...';
    pauseButton.textContent = 'Pause';
    return;
  }

  speech.pause();
  status.textContent = 'Paused.';
  pauseButton.textContent = 'Resume';
});

stopButton.addEventListener('click', () => {
  speech.cancel();
  status.textContent = 'Stopped.';
  updateControls(false);
  pauseButton.textContent = 'Pause';
});

speech.addEventListener('voiceschanged', loadVoices);
loadVoices();
