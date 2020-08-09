window.onload = function () {
    show(0);
}
let Questions = [
    {
        id: 1,
        question: "What is the color of strawberry?",
        answer: "Red",
        options: [
            "Pink",
            "Purple",
            "Red",
            "yellow"
        ]
    },



    {
        id: 2,
        question: "Full form of RGB",
        answer: "Red Green Blue",
        options: [
            "Red Green Blue",
            "Red Gray Blue",
            "Red Orange Blue",
            "Red Sky Blue"
        ]

    },
    {
        id: 3,
        question: "What is the color of sky?",
        answer: "Blue",
        options: [
            "Pink",
            "Purple",
            "Blue",
            "yellow"

        ]

    },

    {
        id: 4,
        question: "What is the color of Tree?",
        answer: "Green & Brown",
        options: [
            "Green & Brown",
            "Green & purple",
            "Red & Brown",
            "yellow"

        ]

    },
    {
        id: 5,
        question: "Addition of 2 +2",
        answer: "4",
        options: [
            "1",
            "2",
            "4",
            "5"

        ]

    },
]



function submitform(e) {
    e.preventDefault();
    let name = document.forms["welcome_form"]["name"].value;
    console.log(name);
}
let question_count = 0;
//for increase points
let points = 0;


function next() {
    let user_answer = document.querySelector("li.option.active").innerHTML;

    //check answer by the user
    if (user_answer == Questions[question_count].answer) {
        points += 10;
        sessionStorage.setItem("points", points);
    }

    // for jump final page
    if (question_count == Questions.length - 1) {
        sessionStorage.setItem("time", `${minutes} minutes and ${seconds} seconds`);
        clearInterval(mytime);

        location.href = "end.html";
        return;
    }
    /*--------------to get answer-start--*/
    //console.log(user_answer);
    /*--------------to get answer--finish-*/

    question_count++;
    show(question_count);

}

function show(count) {
    let question = document.getElementById("questions");

    // question.innerHTML = "<h2>" + Questions[count].question + "</h2>";
    question.innerHTML = `
   <h2>Q${question_count + 1}.${Questions[count].question}</h2>
   <ul class="option-group">
   <li class="option">${Questions[count].options[0]}</li>
   <li class="option">${Questions[count].options[1]}</li>
   <li class="option">${Questions[count].options[2]}</li>
   <li class="option">${Questions[count].options[3]}</li>
</ul>
     
  
   `;
    toggleActive();

}
/*---------------for option select start---------------------*/
function toggleActive() {
    let option = document.querySelectorAll("li.option");
    for (let i = 0; i < option.length; i++) {
        option[i].onclick = function () {
            /*-for one option select--*/
            for (let j = 0; j < option.length; j++) {
                if (option[j].classList.contains("active")) {
                    option[j].classList.remove("active")
                }
            }
            option[i].classList.add("active");
        }
    }
}
/*---------------for option select finish---------------------*/













