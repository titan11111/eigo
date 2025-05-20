const questionEl = document.getElementById('question');
const choicesEl = document.getElementById('choices');
const resultEl = document.getElementById('result');
const restartBtn = document.getElementById('restart-btn');
const nextBtn = document.getElementById('next-btn');

const QUESTIONS_PER_GAME = 10;
let currentQuestion = 0;
let score = 0;
let correctStreak = 0;
let gameQuestions = [];
let allQuizData = [];

// 音声読み上げ関数（改良版）
function speak(text) {
  const utterance = new SpeechSynthesisUtterance(text);
  utterance.lang = 'en-US';
  utterance.volume = 1.0;
  utterance.rate = 0.9;
  utterance.pitch = 1.0;

  const voices = window.speechSynthesis.getVoices();
  voices.forEach(voice => {
    if (voice.lang.includes('en-') && !utterance.voice) {
      utterance.voice = voice;
    }
    if (voice.lang === 'en-US') {
      utterance.voice = voice;
    }
  });

  window.speechSynthesis.cancel();
  window.speechSynthesis.speak(utterance);
}

// クイズ出題
function showQuestion() {
  const current = gameQuestions[currentQuestion];
  questionEl.innerHTML = `
    <p><strong>${current.jp}</strong></p>
    <p>${current.sentence}</p>
  `;

  const shuffledChoices = [...current.choices].sort(() => Math.random() - 0.5);
  choicesEl.innerHTML = '';
  resultEl.innerHTML = '';
  nextBtn.style.display = 'none';

  shuffledChoices.forEach(choice => {
    const btn = document.createElement('button');
    btn.className = 'choice-btn';
    btn.innerText = choice;
    btn.onclick = () => selectAnswer(choice);
    choicesEl.appendChild(btn);
  });
}

// 解答処理
function selectAnswer(selected) {
  const current = gameQuestions[currentQuestion];
  const correct = current.answer;
  const sentenceWithWord = current.sentence.replace("(   )", correct);

  document.querySelectorAll('.choice-btn').forEach(btn => btn.disabled = true);

  if (selected === correct) {
    score++;
    correctStreak++;
    resultEl.innerHTML = `
      <div class="explain-block correct">
        <div class="title">✅ <strong>正解！</strong></div>
        <div class="line"><strong>● 単語：</strong> ${correct}</div>
        <div class="line"><strong>● 意味：</strong> ${current.meaning}</div>
        <div class="line"><strong>● 類義語：</strong> ${current.synonym}</div>
        <div class="line"><strong>● 反対語：</strong> ${current.antonym}</div>
      </div>
    `;
    document.getElementById("seikai-sound").play();
  } else {
    correctStreak = 0;
    resultEl.innerHTML = `
      <div class="explain-block incorrect">
        <div class="title">❌ <strong>不正解…</strong></div>
        <div class="line"><strong>● 正解：</strong> ${correct}</div>
        <div class="line"><strong>● 意味：</strong> ${current.meaning}</div>
        <div class="line"><strong>● 類義語：</strong> ${current.synonym}</div>
        <div class="line"><strong>● 反対語：</strong> ${current.antonym}</div>
      </div>
    `;
    document.getElementById("fuseikai-sound").play();
  }

  speak(correct);
  setTimeout(() => speak(sentenceWithWord), 1000);
  nextBtn.style.display = 'block';
}

nextBtn.onclick = () => {
  window.speechSynthesis.cancel();
  currentQuestion++;
  if (currentQuestion >= QUESTIONS_PER_GAME) {
    showResult();
  } else {
    showQuestion();
  }
};

function showResult() {
  const ratio = score / QUESTIONS_PER_GAME;
  let name = "あなた";
  let quote = "";

  if (ratio === 1) {
    name = "Steve Jobs";
    quote = "Stay hungry. Stay foolish.";
  } else if (ratio >= 0.9) {
    name = "Martin Luther King Jr.";
    quote = "I have a dream.";
  } else if (ratio >= 0.8) {
    name = "Marie Curie";
    quote = "Be less curious about people and more curious about ideas.";
  } else if (ratio >= 0.7) {
    name = "Mark Twain";
    quote = "The secret of getting ahead is getting started.";
  } else if (ratio >= 0.6) {
    name = "J.K. Rowling";
    quote = "It is our choices that show who we truly are.";
  } else if (ratio >= 0.5) {
    name = "Helen Keller";
    quote = "Keep your face to the sunshine and you cannot see a shadow.";
  } else if (ratio >= 0.4) {
    name = "Thomas Edison";
    quote = "I have not failed. I've just found 10,000 ways that won't work.";
  } else if (ratio >= 0.3) {
    name = "Walt Disney";
    quote = "All our dreams can come true, if we have the courage to pursue them.";
  } else if (ratio >= 0.2) {
    name = "Abraham Lincoln";
    quote = "The best way to predict your future is to create it.";
  } else {
    name = "Albert Einstein";
    quote = "A person who never made a mistake never tried anything new.";
  }

  questionEl.innerHTML = `
    🎉 <strong>結果発表！</strong><br>
    スコア：${score} / ${QUESTIONS_PER_GAME}<br>
    君は <strong>${name}</strong> だ！<br>
    <em>"${quote}"</em>
  `;
  choicesEl.innerHTML = '';
  resultEl.innerHTML = '';
  restartBtn.style.display = 'block';
  nextBtn.style.display = 'none';
  document.getElementById("bgm").pause();
}

restartBtn.onclick = () => {
  restartGame();
};

function restartGame() {
  currentQuestion = 0;
  score = 0;
  correctStreak = 0;
  gameQuestions = allQuizData.sort(() => Math.random() - 0.5).slice(0, QUESTIONS_PER_GAME);
  showQuestion();
  resultEl.innerHTML = '';
  restartBtn.style.display = 'none';
  nextBtn.style.display = 'none';
  document.getElementById("bgm").play();
}

// 初期化
window.onload = () => {
  document.getElementById("bgm").volume = 0.1;

  // 読み上げ対応（onvoiceschanged対策）
  window.speechSynthesis.onvoiceschanged = () => speak("");

  fetch("questions.fixed.json")
    .then(res => res.json())
    .then(data => {
      allQuizData = data;
      restartGame();
    })
    .catch(err => {
      questionEl.innerHTML = "クイズデータの読み込みに失敗しました。";
      console.error(err);
    });

  document.body.addEventListener("click", function startAudioOnce() {
    document.getElementById("bgm").play();
    document.body.removeEventListener("click", startAudioOnce);
  });
};
