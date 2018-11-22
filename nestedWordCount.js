// gray -> gray, grays
// grays -> grays
// ray -> ray, rays, gray, grays, strays
// rays -> rays, grays, strays
// strays -> strays

// For each word
  // check aaginst all other words
    // does this word contain the other word?
      // yes -> increment count for this word

function nestedWordCount (wordList) {

  let dict = {};
  let maxWord = 0;
  let res='';
  for(let word of wordList) {
    for(let cmpWord of wordList) {
      if(  word !== cmpWord && cmpWord.includes(word)) {
        dict[cmpWord] = dict[cmpWord] ? dict[cmpWord]+1 : 1;
        if(dict[cmpWord] > maxWord ) {
          res = cmpWord;
          maxWord = dict[cmpWord];
        }
      }
    }
  }

  return res;

} 

// console.log(nestedWordCount(["gray", "grays", "ray", "rays", "strays" ])) // ==> grays
console.log(nestedWordCount(["blue","back","up","and","going","javascript","much","provides","book","series","new","many","complete","background","years","necessary","those","limited","sufficiently","easy","toward","mechanisms","operators","function","types","including","first","sufficiently","easy","books","overview","unicorn","bear","bee","box","cat","gorilla","giant","gear","goal","home","ache","fantastic","exuberant","ice","hollow","happy","healthy","homily","cold","hot","yellow","orange","green","complacent","super","monster","bull","horse","pig","another","one","to","test","you","guys","out","how","like","me","now","son"])); // => background
