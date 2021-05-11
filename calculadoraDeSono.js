/*Sleep Debt Calculator
Did you know that giraffes sleep 4.6 hours a day? We humans need more than that. If we don’t sleep enough, 
we accumulate sleep debt. In this project we’ll calculate if you’re getting enough sleep each week using a sleep debt calculator.
The program will determine the actual and ideal hours of sleep for each night of the last week.
Finally, it will calculate, in hours, how far you are from your weekly sleep goal.*/

//Atribute sleep hours to days of the week
const getSleepHours = day =>{
  
    switch(day){
      case 'monday':
      return 8; // input of hours monday
      break;
      case 'tuesday':
      return 5; // input of hours tuesday
      break;
      case 'wednesday':
      return 4; // input of hours wednesday
      break;
      case 'thursday':
      return 6; // input of hours thursday
      break;
      case 'friday':
      return 3; // input of hours friday
      break;
      case 'saturday':
      return 10; // input of hours saturday
      break;
      case'sunday':
      return 9; // input of hours sunday
      break;
      case 'default':
      return'Error day of the week not found';
      break;
      }
  }
  //Function to get real sleep hours 
  const getActualSleepHours = () => 
    getSleepHours('monday') 
    + getSleepHours('tuesday') 
    + getSleepHours('wednesday') 
    + getSleepHours('thursday') 
    + getSleepHours ('friday') 
    + getSleepHours ('saturday') 
    + getSleepHours('sunday') ;
  // Function to get ideal sleep hours
  const getIdealSleepHours = () => {
      const idealHours = 8;
      return idealHours * 7;
  };
  //Sleep Dept Calculator
  const calculateSleepDept = () => {
    const actualSleepHours = getActualSleepHours();
    const idealSleepHours = getIdealSleepHours();
   if (actualSleepHours === idealSleepHours){
    console.log('user got the perfect amount of sleep.');
    } else if(actualSleepHours > idealSleepHours )
    {
      console.log('user got' + (actualSleepHours - idealSleepHours) + 'more sleep than needed.');
    } else if(actualSleepHours < idealSleepHours)
    {
      console.log('user should get some rest.You Slept less'+ (actualSleepHours - idealSleepHours) +'Hours than you should');
    }
  }
  calculateSleepDept();