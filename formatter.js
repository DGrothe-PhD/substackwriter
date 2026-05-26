/* formatter.js */
const inputArea = document.getElementById("userinput");
const outputArea = document.getElementById("output");
const feedback = document.getElementById("feedback");

const btn = document.getElementById('toggle-btn');
const flexParent = document.querySelector(".flex-parent");
const icons = { left: 'align-left', 'space-around': 'align-justify' };
let current = 'left';
lucide.createIcons();


function togglePage(){
  current = current === 'left' ? 'space-around' : 'left';
  flexParent.style.justifyContent = current;
  btn.innerHTML = `<i data-lucide="${icons[current]}"></i>`;
  lucide.createIcons();
}

function prettify(){
  let newBlogDraft = inputArea.value;
  inputArea.setAttribute("rows", 3);
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

function clearAll(){
  inputArea.value = "";
  outputArea.innerHTML = "";
}

function removeEmptyLines(){
  let newBlogDraft = inputArea.value;
  let linewise = newBlogDraft.split(/\r\n|\r|\n/);
  
  for(let x in linewise){
    if(x == linewise.length -1){
      linewise[x] += "</p>";
      break;
    }
    if(linewise[x] === ""){
      continue;
    }
    else{
      linewise[x] += "<br>";
    }
  }
  outputArea.innerHTML = "<p>" + linewise.join("");
}