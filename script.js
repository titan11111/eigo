const quizData = [
    {
        jp: "ぼっちはステージに上がる前、いつもパニックになる。",
        sentence: "Bocchi always (   ) before going on stage.",
        answer: "panics",
        choices: ["panics", "sleeps", "smiles", "dances"],
        meaning: "パニックになる",
        synonym: "freaks out",
        antonym: "stays calm"
    },
    {
        jp: "ぼっちは観客の前でギターをしっかり抱えて立っていた。",
        sentence: "Bocchi stood on stage, (   ) her guitar tightly.",
        answer: "holding",
        choices: ["holding", "throwing", "breaking", "ignoring"],
        meaning: "抱えている",
        synonym: "gripping",
        antonym: "releasing"
    },
    {
        jp: "観客が歓声を上げたとき、ぼっちは緊張しながら微笑んだ。",
        sentence: "Bocchi (   ) nervously when the crowd cheered.",
        answer: "smiled",
        choices: ["smiled", "cried", "fainted", "ran"],
        meaning: "微笑んだ",
        synonym: "grinned",
        antonym: "frowned"
    },
    {
        jp: "ぼっちは練習中によくコードをミスする。",
        sentence: "Bocchi often (   ) chords during practice.",
        answer: "misses",
        choices: ["misses", "perfects", "masters", "ignores"],
        meaning: "ミスする",
        synonym: "fails",
        antonym: "succeeds"
    },
    {
        jp: "フリーレンは人間は短命すぎると思っている。",
        sentence: "Frieren thinks humans are too (   ).",
        answer: "short-lived",
        choices: ["short-lived", "immortal", "dangerous", "quiet"],
        meaning: "短命な",
        synonym: "brief",
        antonym: "lasting"
    },
    {
        jp: "星空の下、フリーレンは静かに座り、昔を思い出していた。",
        sentence: "Under the stars, Frieren (   ) quietly, remembering old times.",
        answer: "sat",
        choices: ["sat", "ran", "shouted", "danced"],
        meaning: "座った",
        synonym: "rested",
        antonym: "stood"
    },
    {
        jp: "フリーレンは珍しい魔導書を見つけた。",
        sentence: "Frieren (   ) a rare magic book in the library.",
        answer: "found",
        choices: ["found", "burned", "lost", "forgot"],
        meaning: "見つけた",
        synonym: "discovered",
        antonym: "misplaced"
    },
    {
        jp: "五条悟は「僕、最強だから」と言う。",
        sentence: "Gojo says, “I’m (   ).”",
        answer: "the strongest",
        choices: ["the strongest", "the weakest", "a student", "a teacher"],
        meaning: "最強",
        synonym: "invincible",
        antonym: "weak"
    },
    {
        jp: "虎杖は呪霊を殴るために前に突っ込んだ。",
        sentence: "Yuji (   ) forward to punch the curse.",
        answer: "rushed",
        choices: ["rushed", "slept", "waited", "hid"],
        meaning: "突っ込んだ",
        synonym: "charged",
        antonym: "retreated"
    },
    {
        jp: "宿儺は「オレを支配できると思うなよ」と警告する。",
        sentence: "Sukuna warns, “Don’t think you can (   ) me.”",
        answer: "control",
        choices: ["control", "ignore", "help", "trust"],
        meaning: "支配する",
        synonym: "dominate",
        antonym: "submit"
    },
    // ...（続きは次のメッセージ Part 2 で送ります！）
];
quizData.push(
    {
        jp: "アーニャはテストでカンニングしようとした。",
        sentence: "Anya tried to (   ) on the test.",
        answer: "cheat",
        choices: ["cheat", "study", "succeed", "fail"],
        meaning: "カンニングする",
        synonym: "copy",
        antonym: "study honestly"
    },
    {
        jp: "ロイドは敵を倒す必要があった。",
        sentence: "Loid needed to (   ) the enemy.",
        answer: "defeat",
        choices: ["defeat", "join", "help", "follow"],
        meaning: "倒す",
        synonym: "beat",
        antonym: "lose to"
    },
    {
        jp: "なでしこは焚き火の火を見つめた。",
        sentence: "Nadeshiko (   ) the campfire.",
        answer: "watched",
        choices: ["watched", "ignored", "ran from", "fought"],
        meaning: "見つめた",
        synonym: "observed",
        antonym: "ignored"
    },
    {
        jp: "リンはキャンプ中に平和を感じた。",
        sentence: "Rin felt (   ) during the camp.",
        answer: "peace",
        choices: ["peace", "fear", "anger", "sadness"],
        meaning: "平和",
        synonym: "calm",
        antonym: "chaos"
    },
    {
        jp: "フリーレンは古代魔法を研究する。",
        sentence: "Frieren (   ) ancient magic.",
        answer: "studies",
        choices: ["studies", "destroys", "forgets", "hates"],
        meaning: "研究する",
        synonym: "researches",
        antonym: "ignores"
    },
    {
        jp: "五条悟は強さを誇らしげに見せた。",
        sentence: "Gojo showed his strength (   ).",
        answer: "proudly",
        choices: ["proudly", "shyly", "quietly", "secretly"],
        meaning: "誇らしげに",
        synonym: "confidently",
        antonym: "modestly"
    },
    {
        jp: "虎杖は仲間を守るために立ち上がった。",
        sentence: "Yuji stood up to (   ) his friends.",
        answer: "defend",
        choices: ["defend", "abandon", "ignore", "betray"],
        meaning: "守る",
        synonym: "protect",
        antonym: "harm"
    },
    {
        jp: "アーニャは母の料理を楽しんだ。",
        sentence: "Anya (   ) her mother’s cooking.",
        answer: "enjoyed",
        choices: ["enjoyed", "disliked", "ignored", "feared"],
        meaning: "楽しんだ",
        synonym: "loved",
        antonym: "hated"
    },
    {
        jp: "ロイドは任務のために時間を管理した。",
        sentence: "Loid (   ) time for his mission.",
        answer: "managed",
        choices: ["managed", "wasted", "forgot", "ignored"],
        meaning: "管理した",
        synonym: "organized",
        antonym: "mismanaged"
    },
    {
        jp: "ヨルはアーニャを励まそうとした。",
        sentence: "Yor tried to (   ) Anya.",
        answer: "encourage",
        choices: ["encourage", "scare", "ignore", "criticize"],
        meaning: "励ます",
        synonym: "cheer up",
        antonym: "discourage"
    },
    {
        jp: "ヨルは家族と過ごす時間を大切にしている。",
        sentence: "Yor (   ) the time spent with her family.",
        answer: "cherishes",
        choices: ["cherishes", "wastes", "ignores", "avoids"],
        meaning: "大切にする",
        synonym: "treasures",
        antonym: "neglects"
    },
    {
        jp: "アーニャは父に褒められて喜んだ。",
        sentence: "Anya (   ) when her father praised her.",
        answer: "smiled",
        choices: ["smiled", "cried", "ran", "hid"],
        meaning: "微笑んだ",
        synonym: "grinned",
        antonym: "frowned"
    },
    {
        jp: "ロイドは任務を完璧に遂行した。",
        sentence: "Loid (   ) his mission perfectly.",
        answer: "completed",
        choices: ["completed", "ignored", "failed", "avoided"],
        meaning: "完了した",
        synonym: "finished",
        antonym: "abandoned"
    },
    {
        jp: "なでしこは星空を見上げた。",
        sentence: "Nadeshiko (   ) up at the starry sky.",
        answer: "looked",
        choices: ["looked", "ran", "slept", "hid"],
        meaning: "見上げた",
        synonym: "gazed",
        antonym: "ignored"
    },
    {
        jp: "リンは焚き火の匂いを楽しんだ。",
        sentence: "Rin (   ) the smell of the campfire.",
        answer: "enjoyed",
        choices: ["enjoyed", "avoided", "hated", "ignored"],
        meaning: "楽しんだ",
        synonym: "appreciated",
        antonym: "disliked"
    },
    {
        jp: "フリーレンは長い旅の後に休息を取った。",
        sentence: "Frieren (   ) after a long journey.",
        answer: "rested",
        choices: ["rested", "ran", "fought", "hid"],
        meaning: "休息した",
        synonym: "relaxed",
        antonym: "worked"
    },
    {
        jp: "五条悟は仲間に信頼されている。",
        sentence: "Gojo is (   ) by his teammates.",
        answer: "trusted",
        choices: ["trusted", "ignored", "feared", "avoided"],
        meaning: "信頼されている",
        synonym: "relied on",
        antonym: "distrusted"
    },
    {
        jp: "虎杖は全力で戦った。",
        sentence: "Yuji (   ) with all his strength.",
        answer: "fought",
        choices: ["fought", "ran", "hid", "surrendered"],
        meaning: "戦った",
        synonym: "battled",
        antonym: "surrendered"
    },
    {
        jp: "アーニャは学校でたくさんの友達を作った。",
        sentence: "Anya (   ) many friends at school.",
        answer: "made",
        choices: ["made", "lost", "ignored", "avoided"],
        meaning: "作った",
        synonym: "formed",
        antonym: "lost"
    },
    {
        jp: "ロイドは家族の幸せを願っている。",
        sentence: "Loid (   ) for his family’s happiness.",
        answer: "wishes",
        choices: ["wishes", "fights", "avoids", "ignores"],
        meaning: "願う",
        synonym: "hopes",
        antonym: "rejects"
    }
);

// ロジック部分

let currentQuestion = 0;
let score = 0;

const jpEl = document.getElementById('jp-translation');
const questionEl = document.getElementById('question');
const choicesEl = document.getElementById('choices');
const resultEl = document.getElementById('result');
const meaningEl = document.getElementById('meaning');
const synonymEl = document.getElementById('synonym');
const antonymEl = document.getElementById('antonym');
const restartBtn = document.getElementById('restart-btn');
const bgm = document.getElementById('bgm');

bgm.volume = 1.0;
bgm.play();

function showQuestion() {
    const quiz = quizData[currentQuestion];
    jpEl.textContent = quiz.jp;
    questionEl.textContent = quiz.sentence;
    choicesEl.innerHTML = '';

    quiz.choices.forEach(choice => {
        const button = document.createElement('button');
        button.textContent = choice;
        button.addEventListener('click', () => selectAnswer(choice));
        choicesEl.appendChild(button);
    });

    meaningEl.textContent = '';
    synonymEl.textContent = '';
    antonymEl.textContent = '';
    resultEl.textContent = '';
}

function selectAnswer(choice) {
    const quiz = quizData[currentQuestion];
    if (choice === quiz.answer) {
        score++;
        resultEl.textContent = '正解！さすがねっ！💕';
        playSound('sound/seikai.mp3');
    } else {
        resultEl.textContent = '不正解…べ、別に落ち込んでないわよ！';
        playSound('sound/fuseikai.mp3');
    }

    meaningEl.textContent = `単語の意味: ${quiz.meaning}`;
    synonymEl.textContent = `類義語: ${quiz.synonym}`;
    antonymEl.textContent = `反対語: ${quiz.antonym}`;

    speakWord(quiz.answer);
    setTimeout(nextQuestion, 3000);
}

function nextQuestion() {
    currentQuestion++;
    if (currentQuestion % 10 === 0 || currentQuestion === quizData.length) {
        showResult();
    } else {
        showQuestion();
    }
}

function showResult() {
    jpEl.textContent = '';
    questionEl.textContent = '';
    choicesEl.innerHTML = '';
    meaningEl.textContent = '';
    synonymEl.textContent = '';
    antonymEl.textContent = '';
    resultEl.innerHTML = `ここまでのスコア: ${score} / ${currentQuestion}<br>ツンデレ風に言うけど…よ、よくやったじゃない！💕`;
    restartBtn.style.display = 'block';
}

restartBtn.addEventListener('click', () => {
    currentQuestion = 0;
    score = 0;
    restartBtn.style.display = 'none';
    showQuestion();
});

function playSound(src) {
    const audio = new Audio(src);
    audio.volume = 1.0;
    audio.play();
}

function speakWord(word) {
    const utterance = new SpeechSynthesisUtterance(word);
    utterance.lang = 'en-US';
    speechSynthesis.speak(utterance);
}

showQuestion();
