//First generating an object with all the values and attributes needed
const mixedMessage = {
    
    wordsList:  {
                startWords :['I','You','He','She','We','They'],
                midPartOneWords :['should','must','can'],
                midPartTwoWords :['eat','drive','run','believe','dance','think','learn','laugh'],
                endWords :['more','faster','less']
                },
    generateRandomMessage(){
        let message = '';
        for (key in this.wordsList){
            message += this.wordsList[key][Math.floor(Math.random()* this.wordsList[key].length)] +' ';
        }
        return console.log(message); 
    }

}
 


mixedMessage.generateRandomMessage();