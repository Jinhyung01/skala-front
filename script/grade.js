const gradeButton = document.querySelector('#calculateGrade');
const gradeResult = document.querySelector('#gradeResult');

gradeButton.addEventListener('click', function () {
    const subjects = ['HTML', 'CSS', 'JavaScript'];
    const scores = [];
    let total = 0;

    for (let i = 0; i < subjects.length; i += 1) {
        let score;

        while (true) {
            const input = prompt(`${subjects[i]} 점수를 입력하세요. (0~100)`);

            if (input === null) {
                gradeResult.textContent = '성적 계산을 취소했습니다.';
                return;
            }

            score = Number(input);

            if (input.trim() !== '' && Number.isFinite(score) && score >= 0 && score <= 100) {
                break;
            }

            alert('0부터 100 사이의 점수를 숫자로 입력해 주세요!');
        }

        scores.push(score);
        total += score;
    }

    const average = total / subjects.length;
    const isPassed = average >= 60;
    const passMessage = isPassed ? '합격입니다! 🎉' : '불합격입니다. 조금 더 힘내세요! 💪';

    alert(`총점: ${total}점\n평균: ${average.toFixed(1)}점\n결과: ${passMessage}`);
    showGradeResult(subjects, scores, average, isPassed);
});

function showGradeResult(subjects, scores, average, isPassed) {
    const scoreList = document.createElement('div');
    scoreList.className = 'score-list';

    subjects.forEach(function (subject, index) {
        const scoreItem = document.createElement('div');
        const subjectName = document.createElement('strong');
        const subjectScore = document.createElement('span');

        scoreItem.className = 'score-item';
        subjectName.textContent = subject;
        subjectScore.textContent = `${scores[index]}점`;
        scoreItem.append(subjectName, subjectScore);
        scoreList.append(scoreItem);
    });

    const summary = document.createElement('div');
    const averageText = document.createElement('span');
    const resultText = document.createElement('span');

    summary.className = 'grade-summary';
    averageText.textContent = `평균 ${average.toFixed(1)}점`;
    resultText.className = isPassed ? 'pass' : 'fail';
    resultText.textContent = isPassed ? '합격 🎉' : '불합격 💪';
    summary.append(averageText, resultText);

    gradeResult.replaceChildren(scoreList, summary);
}
