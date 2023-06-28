async function populate() { 
    const requestURL = 'https://raw.githubusercontent.com/Nineikro/myDatabase/main/vbsSongs/aunNoBeats.json';
    const request = new Request(requestURL);

    const response = await fetch(request);
    const kanjiText = await response.text();

    const kanjiData = JSON.parse(kanjiText);
    populateHeader(kanjiData);
    populateContent(kanjiData);
    console.log(kanjiData)
}

function populateHeader(obj) {
    const header = document.querySelector('header');
    const myH1 = document.createElement('h1');
    myH1.textContent = obj.name;
    header.appendChild(myH1);
  
    const myPara = document.createElement('p');
    myPara.textContent = `Creator: ${obj.creator} // Formed: ${obj.createdOn}`;
    header.appendChild(myPara);
  }

function populateContent(obj) {
    const kanjis = obj.kanji;

    
}