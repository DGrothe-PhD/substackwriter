/* formatter.js */
const inputArea = document.getElementById("userinput");
const outputArea = document.getElementById("output");
const feedback = document.getElementById("feedback");

function prettify(){
  let newBlogDraft = inputArea.value;
  let linewise = newBlogDraft.split(/\r\n|\r|\n/);
  
  for(let x in linewise){
    if(x == linewise.length -1){
      linewise[x] += "</p>";
      break;
    }
    if(linewise[x] === ""){
      linewise[x] = "<p>";
      continue;
    }
    if(linewise[x+1] === ""){
      linewise[x] += "</p>";
    }
    else{
      linewise[x] += "<br>";
    }
  }
  outputArea.innerHTML = "<p>" + linewise.join("");
	console.log("<p>" + linewise.join(""));
}

function copyText() {
  feedback.innerHTML = "";

  if (outputArea) {
    const range = document.createRange();
    range.selectNodeContents(outputArea);
    const sel = window.getSelection();
    sel.removeAllRanges();
    sel.addRange(range);
    document.execCommand("copy");
    sel.removeAllRanges();
  } else {
    feedback.innerHTML = "Oopsi.";
  }

  feedback.innerHTML = "✔️ Copied!";
}