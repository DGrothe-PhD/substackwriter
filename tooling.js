/* tooling.js */
//const inputArea = document.getElementById("userinput");
//const outputArea = document.getElementById("output");
//const feedback = document.getElementById("feedback");

function isAlphaNumeric(str) {
  return /^[\p{L}\p{N}]+$/u.test(str);
}

function numberOfWords(){
	let newBlogDraft = inputArea.value;
	feedback.innerHTML = "";
	let wordCount = 0;
	let linewise = newBlogDraft.split(/\r\n|\r|\n/);

	for(let x of linewise){
		if(x.length < 3) {continue;}
		let wordseq = x.split(" ").filter(x => /[\p{L}\p{N}]/u.test(x));
    wordCount+= wordseq.length;
	}
	feedback.innerHTML = `${wordCount} words found.`;
	return wordCount;
}