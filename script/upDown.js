const startButton = document.querySelector('#startGame');
const gameStatus = document.querySelector('#gameStatus');

startButton.addEventListener('click', function () {
    var computerNum = Math.floor(Math.random() * 50) + 1;
    let attempts = 0;

    showGameStatus('게임 진행 중', '1~50 사이의 숫자를 입력해 주세요.', 'playing');

    while (true) {
        const answer = prompt('1부터 50 사이의 숫자를 입력하세요.\n게임을 끝내려면 취소를 누르세요.');

        if (answer === null) {
            showGameStatus('게임을 취소했습니다.', `정답은 ${computerNum}이었습니다.`, 'cancelled');
            return;
        }

        const userNum = Number(answer);

        if (!Number.isInteger(userNum) || userNum < 1 || userNum > 50) {
            alert('1부터 50 사이의 정수만 입력해 주세요!');
            continue;
        }

        attempts += 1;

        if (userNum > computerNum) {
            alert('Down! 조금 더 작은 숫자입니다.');
        } else if (userNum < computerNum) {
            alert('Up! 조금 더 큰 숫자입니다.');
        } else {
            alert(`축하합니다! ${attempts}번 만에 맞췄습니다.`);
            showGameStatus(`정답 ${computerNum}! 🎉`, `${attempts}번 만에 성공했습니다.`, 'success');
            return;
        }
    }
});

function showGameStatus(title, detail, state) {
    const titleElement = document.createElement('strong');
    const detailElement = document.createElement('span');

    titleElement.className = 'result-title';
    detailElement.className = 'result-detail';
    titleElement.textContent = title;
    detailElement.textContent = detail;
    gameStatus.className = `tool-result game-status ${state}`;
    gameStatus.replaceChildren(titleElement, detailElement);
}
