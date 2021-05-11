const getUserChoice = userInput => {
    userInput = userInput.toLowerCase();
     if(userInput === 'rock'){
       return userInput;
    }else if(userInput === 'paper'){
      return userInput;
    }else if(userInput === 'scissors'){
      return userInput;
    } else {
      console.log('Error: Invalid Input')
    }
  };
  
  function getComputerChoice () {
    randomNumber = Math.floor(Math.random() * 3);
      switch(randomNumber){
        case 0:
        return 'rock';
        break;
        case 1:
        return'paper';
        break;
        case 2:
        return'scissors';
        break;
    } 
    console.log("computer error")
  }
  
  function determineWinner(userChoice, computerChoice){
    if(userChoice === computerChoice ){
      return'It\'s a Tie';
    }else if( userChoice ==='rock' &&  computerChoice ==='paper'){
      return'Computer Wins!! paper wrap up Rock!';
      }else if(userChoice ==='paper' && ComputerChoice === 'rock'){
        return'Player Wins!! paper wrap up Rock!';
        }else if(userChoice === 'rock' && computerChoice === 'scissors'){
          return 'Player Wins!! Rock breaks Scissors';
        }else if(userChoice === 'scissors' && computerChoice === 'rock'){
          return 'Computer Wins!! Rock breaks Scissors';
        }else if(userChoice === 'paper' && computerChoice === 'scissors'){
          return 'Computer Wins!! Scissors cut tru paper';
        } else if (userChoice === 'scissors' && computerChoice === 'paper'){
          return 'Player Wins!! Scissors cut tru paper';
          }
  } 
  
  const playGame = () => {
    const userChoice = getUserChoice('rock');
    const computerChoice = getComputerChoice();
    console.log('You threw: ' + userChoice);
    console.log('The computer threw:' + computerChoice);
    console.log(determineWinner(userChoice, computerChoice));
  };
  playGame()
  