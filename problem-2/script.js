//1. List all of the post titles having more than six words
fetch('http://jsonplaceholder.typicode.com/posts')
.then((response) => response.json())
.then((json) => json.forEach( (element) => {
	if (element.title.split(" ").length >= 6){
		console.log(element.title)
	}
}));


//2. Show a word frequency map for all of the body contents of the posts
fetch('http://jsonplaceholder.typicode.com/posts')
.then((response) => response.json())
.then((json) => json.forEach( (element) => {wordFrequency(element.title)}));

var frequencyMap = {};

function wordFrequency(string) {
	var body = string.replace(/[.]/g, ' ').split(/\s/);
	
	body.forEach(function(postsBody){
		if(!frequencyMap[postsBody]){
			frequencyMap[postsBody] = 0;
		}
		frequencyMap[postsBody] += 1;
	});	
}

console.log(frequencyMap);