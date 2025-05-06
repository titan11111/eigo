let allQuestions = [];
let correctlyAnswered = [];
let current = 0;
let score = 0;
let questions = [];
let clearCount = localStorage.getItem('clearCount') ? parseInt(localStorage.getItem('clearCount')) : 0;

const bgm = document.getElementById('bgm');
bgm.volume = 0.5;
const questionNumber = document.getElementById('question-number');
const questionText = document.getElementById('question-text');
const translationText = document.getElementById('translation-text');
const choicesDiv = document.getElementById('choices');
const resultDiv = document.getElementById('result');
const infoDiv = document.getElementById('info');
const retryBtn = document.getElementById('retry-btn');
const playButton = document.getElementById('play-bgm');
const finalResultDiv = document.getElementById('final-result');
const characterImg = document.getElementById('character-img');
const seikaiSound = document.getElementById('seikai-sound');
const fuseikaiSound = document.getElementById('fuseikai-sound');
const extraMusic = document.getElementById('extra-music');

setCharacterImage();

fetch('./questions.json')
    .then(response => response.json())
    .then(data => {
        allQuestions = data;
        startGame();
        playButton.addEventListener('click', () => {
            if (bgm.paused) {
                bgm.play().catch(e => console.error('BGM再生エラー:', e));
                playButton.textContent = 'BGM停止';
            } else {
                bgm.pause();
                playButton.textContent = 'BGM再生';
            }
        });
    })
    .catch(error => {
        console.error('問題データ読み込みエラー:', error);
        finalResultDiv.textContent = "問題データの読み込みに失敗しました。";
    });

function setCharacterImage() {
    const imagePaths = ['image/image1.png', 'image/image2.png', 'image/image3.png'];
    characterImg.src = imagePaths[Math.min(clearCount, imagePaths.length - 1)];
}

function startGame() {
    let available = allQuestions;
    questions = shuffleArray([...available]).slice(0, 10);
    current = 0;
    score = 0;
    finalResultDiv.textContent = "";
    retryBtn.style.display = "none";
    showQuestion();
}

function showQuestion() {
    const q = questions[current];
    questionNumber.textContent = `Q${current + 1}`;
    const blanked = q.sentence.replace("( ___ )", "( ___ )");
    questionText.textContent = blanked;
    translationText.textContent = q.translation;
    resultDiv.textContent = "";
    infoDiv.innerHTML = "";
    choicesDiv.innerHTML = "";

    const choices = getUniqueChoices(q.answer, 4);
    choices.forEach(choice => {
        const btn = document.createElement('button');
        btn.className = 'choice-btn';
        btn.textContent = choice;
        btn.addEventListener('click', () => checkAnswer(choice, q));
        choicesDiv.appendChild(btn);
    });
}

function checkAnswer(selected, q) {
    resultDiv.textContent = q.answer.toLowerCase();
    if (selected === q.answer) {
        score++;
        seikaiSound.play().catch(e => console.error('正解音再生エラー:', e));
    } else {
        fuseikaiSound.play().catch(e => console.error('不正解音再生エラー:', e));
    }

    Array.from(choicesDiv.children).forEach(btn => btn.disabled = true);

    const fullSentence = q.sentence.replace("( ___ )", q.answer);

    infoDiv.innerHTML = `
        <div><strong>意味:</strong> ${q.meaning_ja}</div>
        <div><strong>類義語:</strong> ${q.synonyms.join(', ')}</div>
        <div><strong>反対語:</strong> ${q.antonyms.join(', ')}</div>
    `;

    speakWord(q.answer, () => {
        setTimeout(() => {
            speakSentence(fullSentence, () => {
                setTimeout(() => {
                    current++;
                    if (current >= questions.length) {
                        showFinalResult();
                    } else {
                        showQuestion();
                    }
                }, 500);
            });
        }, 1000);
    });
}

retryBtn.addEventListener('click', startGame);

function showFinalResult() {
    questionNumber.textContent = "";
    questionText.textContent = "";
    translationText.textContent = "";
    choicesDiv.innerHTML = "";
    resultDiv.textContent = "";
    infoDiv.innerHTML = "";

    if (score === questions.length) {
        clearCount++;
        localStorage.setItem('clearCount', clearCount);
        setCharacterImage();
        finalResultDiv.innerHTML = `<div class="paripi">🎉 PERFECT!!! YOU ARE AMAZING!!! 🎉</div>`;
        extraMusic.play().catch(e => console.error('お祝い音楽再生エラー:', e));
    } else {
        finalResultDiv.textContent = `スコア：${score} / ${questions.length}`;
    }
    retryBtn.style.display = "block";
}

function shuffleArray(array) {
    return array.sort(() => Math.random() - 0.5);
}

function getUniqueChoices(correct, count) {
    const allAnswers = [...new Set(allQuestions.map(q => q.answer).filter(a => a !== correct))];
    const choices = shuffleArray(allAnswers).slice(0, count - 1);
    choices.push(correct);
    return shuffleArray(choices);
}

function speakWord(word, callback) {
    if (!window.speechSynthesis) {
        callback();
        return;
    }
    const voices = window.speechSynthesis.getVoices().filter(v => v.lang.startsWith('en'));
    const voice = voices.find(v => /Google|Samantha|Alex|Karen/.test(v.name)) || voices[0];
    const utterance = new SpeechSynthesisUtterance(word);
    utterance.voice = voice;
    utterance.lang = voice.lang;
    utterance.volume = 1.0;
    utterance.onend = callback;
    speechSynthesis.speak(utterance);
}

function speakSentence(sentence, callback) {
    if (!window.speechSynthesis) {
        callback();
        return;
    }
    const voices = window.speechSynthesis.getVoices().filter(v => v.lang.startsWith('en'));
    const voice = voices.find(v => /Google|Samantha|Alex|Karen/.test(v.name)) || voices[0];
    const utterance = new SpeechSynthesisUtterance(sentence);
    utterance.voice = voice;
    utterance.lang = voice.lang;
    utterance.volume = 1.0;
    utterance.onend = callback;
    speechSynthesis.speak(utterance);
}
