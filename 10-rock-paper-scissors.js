     let score = JSON.parse(localStorage.getItem('score')) || {
        wins : 0,
        losses : 0,
        ties : 0
    };

    updateScoreElement()

    /* if (score === null) {
        score ={
            wins : 0,
            losses : 0,
            ties : 0,
        };
    }
    */


    function playGame(playerMove) {
        const computerMove = pickComputerMove();

    let result = ''
    if (playerMove = 'scissors') {
        if (computerMove === 'rock') {
    result = 'you lose';
    }
    else if (computerMove === 'paper') {
    result = 'you win'
    }
    else if (computerMove === 'scissors') {
    result = 'Tie'
    
    }

    }else if (playerMove = 'paper') {
                    if (computerMove === 'rock') {
    result = 'you win';
    }
    else if (computerMove === 'paper') {
    result = 'Tie'
    }
    else if (computerMove === 'scissors') {
    result = 'you lose'
    }

    }
    else if (playerMove = 'rock') {
            
    if (computerMove === 'rock') {
        result = 'Tie.';
    }
    else if (computerMove === 'paper') {
        result = 'you lose'
    }
    else if (computerMove === 'scissors') {
        result = 'you win'


    }
    }

    if( result === 'you win') {
        score.wins +=1
    } else if (result === 'you lose') {
        score.losses +=1
    }
    else if (result === 'Tie') {
        score.ties += 1
    }

    localStorage.setItem('score', JSON.stringify(score));
    updateScoreElement()

    document.querySelector('.js-result').innerHTML = result;
    document.querySelector('.js-moves').innerHTML = `you
    <img class="move-icon" src="${playerMove}-emoji.png">
    <img class="move-icon" src="${computerMove}-emoji.png">
    computer`;
        

    alert(`You picked ${playerMove}. Computer picked ${computerMove}. ${result}
    Wins: ${score.wins}, losses: ${score.losses}, Ties: ${score.ties} `);
    
    }

    function updateScoreElement() {
        document.querySelector('.js-score').innerHTML = ` Wins: ${score.wins}, losses: ${score.losses}, Ties: ${score.ties}`;

    }



    let computerMove = '';

    function pickComputerMove() {
        const randonNumber = Math.random();
    if (randonNumber >=0 && randonNumber < 1/3) {
        computerMove = 'rock'
    }
    else if (randonNumber >= 1/3 && randonNumber < 2/3) {
        computerMove = 'paper'}
    else if (randonNumber >= 2/3 && randonNumber < 1) {
        computerMove = 'scissors' }
        return computerMove
        }