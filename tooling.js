/* tooling.js */
//const inputArea = document.getElementById("userinput");
//const outputArea = document.getElementById("output");
//const feedback = document.getElementById("feedback");

function isAlphaNumeric_nonUnicode(str) {
  var code, i, len;

  for (i = 0, len = str.length; i < len; i++) {
    code = str.charCodeAt(i);
    if (!(code > 47 && code < 58) && // numeric (0-9)
        !(code > 64 && code < 91) && // upper alpha (A-Z)
        !(code > 96 && code < 123)) { // lower alpha (a-z)
      return false;
    }
  }
  return true;
};

function isAlphaNumeric(str) {
  return /^[\p{L}\p{N}]+$/u.test(str);
}

//const isAlphaNumeric = x => /^[a-zA-Z0-9]+$/.test(x);
//const shouldDrop = x => x === "" || x.length < 3 || !isAlphaNumeric(x);

//let wordseq = sometext.split(" ").filter(x => !shouldDrop(x));

function numberOfWords(){
	let newBlogDraft = inputArea.value;
	feedback.innerHTML = "";
	let wordCount = 0;
  let testwordcount=0;
	let linewise = newBlogDraft.split(/\r\n|\r|\n/);

	for(let x of linewise){
		if(x.length < 3) {continue;}
		let wordseq = x.split(" ").filter(x => /[a-zA-Z0-9]/.test(x));
		let wordseqtest = x.split(" ").filter(x => /[\p{L}\p{N}]/u.test(x));
		wordCount += wordseq.length;
    testwordcount+= wordseqtest.length;
	}
	feedback.innerHTML = `${wordCount} words or ${testwordcount} found.`;
	return wordCount;
}