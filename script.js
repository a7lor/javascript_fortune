const drawButton = document.querySelector('#drawButton');
const resultDisplay = document.querySelector('#resultDisplay');

drawButton.addEventListener('click', () => {

    // 0から1未満のランダムな数字を生成する
    const randomNumber = Math.random();

    console.log(randomNumber);

    // 大吉
    if (randomNumber < 0.1) {
        resultDisplay.textContent = '大吉';

        // 大吉だったら紙吹雪を出す
        createConfetti();

    // 中吉
    } else if (randomNumber < 0.3) {
        resultDisplay.textContent = '中吉';

    // 吉
    } else if (randomNumber < 0.6) {
        resultDisplay.textContent = '吉';

    // 大凶
    } else {
        resultDisplay.textContent = '大凶';
    }

});


// 紙吹雪を作る関数
function createConfetti() {

    // 紙吹雪を100個作る
    for (let i = 0; i < 100; i++) {

        const confetti = document.createElement('div');

        // 紙吹雪用のクラスを追加
        confetti.classList.add('confetti');

        // 画面の横方向のランダムな位置
        confetti.style.left = Math.random() * 100 + 'vw';

        // 紙吹雪の色
        const colors = [
            '#ff6b6b',
            '#ffd93d',
            '#6bcB77',
            '#4d96ff',
            '#c77dff'
        ];

        confetti.style.backgroundColor =
            colors[Math.floor(Math.random() * colors.length)];

        // 紙吹雪の大きさ
        const size = Math.random() * 8 + 5;

        confetti.style.width = size + 'px';
        confetti.style.height = size * 0.6 + 'px';

        // 落ちるスピードをランダムにする
        confetti.style.animationDuration =
            (Math.random() * 2 + 2) + 's';

        // 落ち始めるタイミングを少しずつずらす
        confetti.style.animationDelay =
            (Math.random() * 0.5) + 's';

        // bodyに紙吹雪を追加
        document.body.appendChild(confetti);

        // アニメーション終了後に削除
        setTimeout(() => {
            confetti.remove();
        }, 4000);
    }
}
