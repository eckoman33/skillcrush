$(document).ready(function() {

	var magic8ball = {};

magic8ball.listOfAnswers = ["it is certain", "without a doubt", "yes definitely", "ask again later", "better not tell you now", "don't count on it", "my reply is no", "outlook not so good"];

	$("#answer").hide();

magic8ball.askQuestion = function(question) {

	$("#8ball").effect("shake");
	$("#8ball").attr("src", "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/magic8ballAnswer.png");
	$("#answer").fadeIn(1000);
	var randomNumber = Math.random();
	var randomNumberForListOfAnswers = randomNumber * this.listOfAnswers.length;
	var randomIndex = Math.floor(randomNumberForListOfAnswers);
	var answer = this.listOfAnswers[randomIndex];
	$("#answer").text( answer );
	console.log(question);
	console.log(answer);
};
	var onClick = function() {

	$("#answer").hide();
	var question = prompt("ASK A YES/NO QUESTION!");
		magic8ball.askQuestion(question);
	};

	$("#questionButton").click(onClick);
	$("#answer").hide();
	$("#8ball").attr("src", "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/magic8ballQuestion.png");

   setTimeout(
       function() {
       }, 1000);
});
