const drawButton = document.querySelector('#drawButton');
const resultDisplay = document.querySelector('#resultDisplay');

drawButton.addEventListener('click', () => {

    // 紙吹雪を一度消す
    document.querySelectorAll('.confetti').forEach(confetti => {
        confetti.remove();
    });

    // 0から1未満のランダムな数字を生成する
    const randomNumber = Math.random();

    console.log(randomNumber);

    if (randomNumber < 0.1) {
        resultDisplay.textContent = '大吉';

        // 大吉だったら紙吹雪を出す
        createConfetti();

    } else if (randomNumber < 0.3) {
        resultDisplay.textContent = '中吉';

    } else if (randomNumber < 0.6) {
        resultDisplay.textContent = '吉';

    } else {
        resultDisplay.textContent = '大凶';
    }

});


// 紙吹雪を作る関数
function createConfetti() {

    for (let i = 0; i < 80; i++) {

        const confetti = document.createElement('div');

        confetti.classList.add('confetti');

        // ランダムな位置
        confetti.style.left = Math.random() * 100 + 'vw';

        // ランダムな色
        const colors = ['#ff6b6b', '#ffd93d', '#6bcB77', '#4d96ff', '#c77dff'];
        confetti.style.backgroundColor =
            colors[Math.floor(Math.random() * colors.length)];

        // ランダムな大きさ
        const size = Math.random() * 8 + 5;
        confetti.style.width = size + 'px';
        confetti.style.height = size * 0.6 + 'px';

        // ランダムな落下時間
        confetti.style.animationDuration =
            Math.random() * 2 + 2 + 's';

        // ランダムな開始位置
        confetti.style.animationDelay =
            Math.random() * 0.5 + 's';

        document.body.appendChild(confetti);
    }
}
