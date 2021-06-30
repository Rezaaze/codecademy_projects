//First generating 4 Arrays where randomly words will picked out for the mixed message

const startWords = ['I','You','He','She','We','They'];
const midPartOneWords = ['should','must','can'];
const midPartTwoWords = ['eat','drive','run','believe','dance','think','learn','laugh'];
const endWords = ['more','faster','less'];
const wordsList =[startWords,midPartOneWords,midPartTwoWords,endWords];

//define the function that first pick the words and put them together to a message

const messageOutput = (arr) =>{
    let message = '';
    for (key in arr){
        message += arr[key][Math.floor(Math.random()* arr[key].length)] +' ';
    }
    return message;
}