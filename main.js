let btn = document.getElementById('btn');
let output = document.getElementById('output');

let quotes = [
    "A feminist is anyone who recognizes the equality and full humanity of women and men.",
    "Men should think twice before making widowhood women's only path to power.",
    "Without leaps of imagination or dreaming, we lose the excitement of possibilities. Dreaming, after all is a form of planning.",
    "Women may be the one group that grows more radical with age.",
    "Once we give up searching for approval we often find it easier to earn respect.",
    "We've begun to raise daughters more like sons... but few have the courage to raise our sons more like our daughters.",
    "Feminism has never been about getting a job for one woman. It's about making life more fair for women everywhere. It's not about a piece of the existing pie; there are too many of us for that. It's about baking a new pie.",
    "so whatever you want to do, just do it...Making a damn fool of yourself is absolutely essential.",
    "Any woman who chooses to behave like a full human being should be warned that the armies of the status quo will treat her as something of a dirty joke . . . She will need her sisterhood.",
    "We are becoming the men we wanted to marry",
    "I have yet to hear a man ask for advice on how to combine marriage and a career.",
    "Empathy is the most radical of human emotions",
    "The first problem for all of us, men and women, is not to learn but to unlearn."
    ];
    
    btn.addEventListener('click', function() {
        let randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
        output.innerHTML = randomQuote;
    });  
console.log(randomQuote);  