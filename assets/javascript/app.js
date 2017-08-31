$('#start').on('click', function(){
	game.start();
})

$(document).on('click', '#end',function(){
	game.done();
})

var questions = [{
	question:"Sequoia National Park is located in which U.S. state?",
	answers:["Colorado", "Arkansas", "California", "Washington"],
	correctAnswer: "California"
}, {
	question:"The Hoover Damn in the United States is built on what river?",
	answers:["Mississippi River", "Colorado River", "Missouri River", "Rio Grande River"],
	correctAnswer: "Colorado River"	
}, {
	question:"What is the largest ocean on planet earth?",
	answers:["Pacific Ocean", "Atlantic Ocean", "Artic Ocean", "Indian Ocean"],
	correctAnswer: "Toy Story"
}, {
	question:"What is the name of the longest mountain range in North America?",
	answers:["Appalacian Mountains", "Alaska Range", "Rocky Mountains", "Cascade Range"],
	correctAnswer: "Toy Story"
}, {
	question:"What is the color of the five stars found on the flag in China?",
	answers:["Red", "Green", "White", "Yellow"],
	correctAnswer: "Yellow"
}, {
	question:"The Grand Canyon is located in which U.S. state?",
	answers:["Colorado", "Nevada", "Arizona", "California"],
	correctAnswer: "Arizona"
}, {
	question:"What is the largest country in North America?",
	answers:["United States", "Canada", "Mexico", "Cuba"],
	correctAnswer: "Canada"
}, {
	question:"Which of the great lakes does not share a border with Canada?",
	answers:["Lake Superior", "Lake Michigan", "Lake Huron", "Lake Ontario"],
	correctAnswer: "Lake Michigan"
}];

var game = {

	correct: 0,
	incorrect: 0,
	counter: 20,
	countdown: function(){
		game.counter--;
		$('#counter').html(game.counter);
		if(game.counter==0){
			console.log("Time Is Up!");
			game.done();
		}

	},

	start: function(){
		timer = setInterval(game.countdown, 1000);
		$('#subwrapper').prepend('<h2>Time Remaining: <span id="counter">120</span> Seconds</h2>');
		$('#start').remove();
		for(var i=0;i<questions.length;i++){
			$('#subwrapper').append('<h2>'+questions[i].question+'</h2>');
			for(var j=0;j<questions[i].answers.length;j++){
				$('#subwrapper').append("<input type='radio' name='question-"+i+"' value='"+questions[i].answers[j]+"'>"+questions[i].answers[j])
			
			}
		

		}
		$('#subwrapper').append('<br><button id="end">DONE</button>');

	},
	done: function(){
		$.each($("input[name='question-0']: checked"), function(){
			if($(this).val()==questions[0].correctAnswer){
				game.correct++;
			} else {
				game.incorrect++;
			}
		});
		$.each($("input[name='question-1']: checked"), function(){
			if($(this).val()==questions[1].correctAnswer){
				game.correct++;
			} else {
				game.incorrect++;
			}
		});
		$.each($("input[name='question-2']: checked"), function(){
			if($(this).val()==questions[2].correctAnswer){
				game.correct++;
			} else {
				game.incorrect++;
			}
		});
		$.each($("input[name='question-3']: checked"), function(){
			if($(this).val()==questions[3].correctAnswer){
				game.correct++;
			} else {
				game.incorrect++;
			}
		});
		$.each($("input[name='question-4']: checked"), function(){
			if($(this).val()==questions[4].correctAnswer){
				game.correct++;
			} else {
				game.incorrect++;
			}
		});
		$.each($("input[name='question-5']: checked"), function(){
			if($(this).val()==questions[5].correctAnswer){
				game.correct++;
			} else {
				game.incorrect++;
			}
		});
		$.each($("input[name='question-6']: checked"), function(){
			if($(this).val()==questions[6].correctAnswer){
				game.correct++;
			} else {
				game.incorrect++;
			}
		});
		$.each($("input[name='question-7']: checked"), function(){
			if($(this).val()==questions[7].correctAnswer){
				game.correct++;
			} else {
				game.incorrect++;
			}
		});
		this.result();

	},
	result: function(){
		clearInterval(timer);
		$('#subwrapper h2').remove();

		$('#subwrapper').html("<h2>All Done!</h2>");
		$('#subwrapper').append("<h3>Correct Answers: "+this.correct+"</h3>");
		$('#subwrapper').append("<h3>Incorrect Answers: "+this.incorrect+"</h3>");
		$('#subwrapper').append("<h3>Unanswered: "+(questions.length-(this.incorrect+this.correct))+"</h3>");
	}

}





















