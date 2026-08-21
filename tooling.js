/* tooling.js */
//const inputArea = document.getElementById("userinput");
//const outputArea = document.getElementById("output");
//const feedback = document.getElementById("feedback");

function numberOfWords(){
	let newBlogDraft = inputArea.value;
	feedback.innerHTML = "";
	let wordCount = 0;
	let linewise = newBlogDraft.split(/\r\n|\r|\n/);
	console.log(linewise.length);
	for(let x of linewise){
		if(x.length < 3) {continue;}
		let wordseq = x.split(" ");
		wordCount += wordseq.length;
	}
	feedback.innerHTML = `${wordCount} words found.`;
	return wordCount;
}