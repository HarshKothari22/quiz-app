const Questions = [
    {
        'que' : 'Which of the following is the markup language ?',  
        'a' : 'HTML',
        'b' : 'CSS',
        'c' : 'JavaScript', 
        'd' : 'PHP',
        'correct' : 'a' 
    },

    {
        'que' : 'Inside which HTML element do we put the JavaScript? ?',  
        'a' : '<script>',
        'b' : '<javascript>',
        'c' : '<scripting>', 
        'd' : '<js>',
        'correct' : 'a' 
    },

    {
        'que' : 'How can you get the type of arguments passed to a function?',  
        'a' : 'using typeof operator',
        'b' : 'using getType function',
        'c' : 'Both of the above.', 
        'd' : 'None of the above',
        'correct' : 'a' 
    },

    {
        'que' : 'Which built-in method combines the text of two strings and returns a new string?',  
        'a' : 'append()',
        'b' : 'concat()',
        'c' : 'attach()', 
        'd' : 'None of the above',
        'correct' : 'b' 
    },

    {
        'que' : 'Which of the following code creates an object?',  
        'a' : 'var book = Object();',
        'b' : 'var book = new Object();',
        'c' : 'var book = new OBJECT();', 
        'd' : 'var book = new Book();',
        'correct' : 'b' 
    },

    {
        'que' : 'Which of the following function of String object combines the text of two strings and returns a new string?',  
        'a' : 'add()',
        'b' : 'merge()',
        'c' : 'concat()', 
        'd' : 'append()',
        'correct' : 'c' 
    },

    {
        'que' : 'Which of the following function of String object returns the calling string value converted to lower case?',  
        'a' : 'toLocaleLowerCase()',
        'b' : 'toLowerCase()',
        'c' : 'toString()', 
        'd' : 'substring()',
        'correct' : 'b' 
    },

    {
        'que' : 'Which of the following function of Array object represents the source code of an object?',  
        'a' : 'unshift()',
        'b' : 'toString()',
        'c' : 'splice()', 
        'd' : 'toSource()',
        'correct' : 'd' 
    },

    {
        'que' : 'Which of the following function of String object causes a string to be displayed in the specified color as if it were in a <font color="color"> tag?',  
        'a' : 'blink()',
        'b' : 'fixed()',
        'c' : 'fontcolor()', 
        'd' : 'bold()',
        'correct' : 'c' 
    },

    {
        'que' : 'Which of the following function of Array object returns the last (greatest) index of an element within the array equal to the specified value, or -1 if none is found?',  
        'a' : 'indexOf()',
        'b' : 'lastIndexOf()',
        'c' : 'join()', 
        'd' : 'map()',
        'correct' : 'b' 
    },
]

let index = 0;
let total = Questions.length;
let correct = 0 , incorrect = 0;
const quesBox = document.getElementById("quesBox");
const optionInputs = document.querySelectorAll(".options");
const loadQuestion = () => {
    if(index === total){
        return endQuiz()
    }
    reset()
    const data = Questions[index]
    //console.log(data)
    quesBox.innerText = `${index + 1}) ${data.que}`;

    optionInputs[0].nextElementSibling.innerText = data.a;
    optionInputs[1].nextElementSibling.innerText = data.b;
    optionInputs[2].nextElementSibling.innerText = data.c;
    optionInputs[3].nextElementSibling.innerText = data.d;
};

const submitQuiz = () => {
    const data = Questions[index];
    const ans = getAnswer();
    if(ans === data.correct){
        correct++;
    }else{
        incorrect++;
    }
    index++;
    loadQuestion();
    return;
}

const getAnswer = () => {
    let answer;
    optionInputs.forEach((input) => {
            if(input.checked){
               answer = input.value; 
            }
        });
    return answer;
};

const reset = () => {
    optionInputs.forEach(
        (input) => {
                input.checked = false;
        });
};

const endQuiz = () => {
    document.getElementById("box").innerHTML = `
    <div style= "text-align:center">
    <h3> Thankyou for playing the quiz</h3>
    <h2>${correct} / ${total} are correct </h2>
    </div>
    `; 
};
loadQuestion();