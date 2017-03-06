$(function() {

  $('form').on('submit', function(event){
    event.preventDefault();

    // When user selects answer from multiple choice list

  	var questionTexting = $('input[name=texting]:checked').val();

  	var questionEffort = $('input[name=effort]:checked').val();

  	var questionOnlineDating = $('input[name=onlineDating]:checked').val();

  	var questionFirstDate = $('input[name=firstDate]:checked').val();
  	
  	var questionFuturePlans = $('input[name=futurePlans]:checked').val();

    // store user selections in an array

  	var userAnswers = [questionTexting, questionEffort, questionOnlineDating, questionFirstDate, questionFuturePlans];

    // run through the array of strings and convert into numbers

  	var userAnswersInNumbers = userAnswers.map(function(item){
  		return parseInt(item, 6);
  	});

    // add numbers together to get user's total score
  	var userAnswersTotal = userAnswersInNumbers.reduce(function(a, b){
  		return a + b;
  	});

    // variables for result content

    var drumRoll = "Drum roll please...";

  	var yes = "Yes! All signs indicate that they like you! So if you like them in return, go forth and see where this relationship takes you. Good luck and have fun!";

  	var maybe = "Maybe… it’s too soon to tell whether or not they like you. If you are still interested, ask them to out again and see where it goes. And remember that if someone likes you, they will message you as soon as they can, make plans to hang out with you and find ways to get to know you. Good luck and have fun!";

  	var no = "No! They are just not that into you and you need to move on. Have you been on Tinder lately? Or another dating app? There’s a ton of other people waiting for you to swipe right. And next time, you will know that they like you because they make it obvious. Like being available to you and going out of their way to hang out with you. So go out, celebrate your awesome self and have some fun. Don’t waste your time with someone who wastes your time. Good luck and have fun!";

  	var missing = "Please fill in all the fields to get your result.";

    // determine user's result based on the total score of answers and reveal result content on page

    if (userAnswersTotal > 10){
         $('.results').html(`<h2>${drumRoll}</h2> <p>${yes}</p>`).addClass('results__yes');

    } else if (userAnswersTotal >= 8 ){
         $('.results').html(`<h2>${drumRoll}</h2> <p>${maybe}</p>`).addClass('results__maybe');

    } else if (userAnswersTotal >= 5) {
         $('.results').html(`<h2>${drumRoll}</h2> <p>${no}</p>`).addClass('results__no');
    } else {
         $('.results').html(`<h2>${missing}</h2>`).addClass('results__noresults');
    }

  });

});
