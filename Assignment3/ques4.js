//Write a JavaScript function that capitalizes the first letter of each word in a sentence.


function capitalWords(sentence) {
    const words = sentence.split(' ');
    const capitalWords1 = words.map(word => {
      if (word.length > 0) {
        return word.charAt(0).toUpperCase() + word.slice(1);
      } else {
        return word; 
      }
    });
    const capitalSentence = capitalWords1.join(' ');
  
    return capitalSentence;
  }
  const sentence1 = "my name is roopali";
  const result = capitalWords(sentence1);
  
  console.log(result); 
  
