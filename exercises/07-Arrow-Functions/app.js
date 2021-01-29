const rapid = (str)=>{
    let newWords = [];
    let vowels = ['a','e','i','o','u'];
    for (let i = 0; i < str.length; i++) {
        if(vowels.includes(str[i])){
            console.log(str[i]);
        }else{
            newWords.push(str[i].toUpperCase());
        }
    }
    return newWords.join('');
}


   // From this line up Do not change code below
   let str = "John";
   console.log(rapid(str));