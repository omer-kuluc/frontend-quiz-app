const data = {
  "quizzes": [
    {
      "title": "HTML",
      "icon": "/images/icon-html.svg",
      "questions": [
        {
          "question": "What does HTML stand for?",
          "options": [
            "Hyper Trainer Marking Language",
            "Hyper Text Marketing Language",
            "Hyper Text Markup Language",
            "Hyper Text Markup Leveler"
          ],
          "answer": "Hyper Text Markup Language"
        },
        {
          "question": "Which of the following is the correct structure for an HTML document?",
          "options": [
            "<html><head></head><body></body></html>",
            "<head><html></html><body></body></head>",
            "<body><head></head><html></html></body>",
            "<html><body></body><head></head></html>"
          ],
          "answer": "<html><head></head><body></body></html>"
        },
        {
          "question": "Which HTML element is used to define the title of a document?",
          "options": ["<head>", "<title>", "<header>", "<top>"],
          "answer": "<title>"
        },
        {
          "question": "What is the purpose of the <body> tag in HTML?",
          "options": [
            "It defines the document's head section.",
            "It contains all the content such as text, images, and links.",
            "It is used to define the main content of an HTML document.",
            "It specifies the body of the email content in HTML."
          ],
          "answer": "It contains all the content such as text, images, and links."
        },
        {
          "question": "Which HTML tag is used to create a hyperlink?",
          "options": ["<hyperlink>", "<link>", "<a>", "<href>"],
          "answer": "<a>"
        },
        {
          "question": "Which tag is used to display images in HTML?",
          "options": ["<img>", "<image>", "<src>", "<pic>"],
          "answer": "<img>"
        },
        {
          "question": "What attribute is used to provide the path of an image in the <img> tag?",
          "options": ["link", "src", "href", "url"],
          "answer": "src"
        },
        {
          "question": "Which HTML tag is used to create an unordered list?",
          "options": ["<ul>", "<ol>", "<list>", "<li>"],
          "answer": "<ul>"
        },
        {
          "question": "What does the <br> tag do?",
          "options": [
            "It breaks the text into two sections.",
            "It creates a bold text.",
            "It inserts a line break.",
            "It adds a new row in a table."
          ],
          "answer": "It inserts a line break."
        },
        {
          "question": "In HTML, what does the `fieldset` tag do?",
          "options": [
            "It is used to group related data in a form.",
            "It sets the field to a fixed size.",
            "It automatically validates the fields within a form.",
            "It hides the fields in a form."
          ],
          "answer": "It is used to group related data in a form."
        },

      ]
    },
    {
      "title": "CSS",
      "icon": "/images/icon-css.svg",
      "questions": [
        {
          "question": "What does CSS stand for?",
          "options": [
            "Colorful Style Sheets",
            "Computer Style Sheets",
            "Cascading Style Sheets",
            "Creative Style Sheets"
          ],
          "answer": "Cascading Style Sheets"
        },
        {
          "question": "Which HTML attribute is used to define inline styles?",
          "options": ["styles", "style", "class", "font-style"],
          "answer": "style"
        },
        {
          "question": "How do you insert a comment in a CSS file?",
          "options": [
            "// this is a comment //",
            "/* this is a comment */",
            "-- this is a comment --",
            "<!-- this is a comment -->"
          ],
          "answer": "/* this is a comment */"
        },
        {
          "question": "Which property is used to change the background color of an element?",
          "options": [
            "color",
            "bgcolor",
            "background-color",
            "background"
          ],
          "answer": "background-color"
        },
        {
          "question": "How do you apply a style to all <p> elements?",
          "options": ["p { }", ".p { }", "#p { }", "all.p { }"],
          "answer": "p { }"
        },
        {
          "question": "Which property is used to change the font of an element?",
          "options": [
            "font-style",
            "text-style",
            "font-family",
            "typeface"
          ],
          "answer": "font-family"
        },
        {
          "question": "How do you make each word in a text start with a capital letter?",
          "options": [
            "text-transform: capitalize",
            "text-transform: uppercase",
            "text-style: capital",
            "font-transform: capitalize"
          ],
          "answer": "text-transform: capitalize"
        },
        {
          "question": "How do you select an element with the class name 'header'?",
          "options": [".header", "#header", "header", "*header"],
          "answer": ".header"
        },
        {
          "question": "What is the default value of the 'position' property?",
          "options": ["relative", "fixed", "absolute", "static"],
          "answer": "static"
        },
        {
          "question": "What is the purpose of the z-index property in CSS?",
          "options": [
            "To count the number of elements",
            "To set the magnification level of an element",
            "To specify the stack order of an element",
            "To create a zoom effect"
          ],
          "answer": "To specify the stack order of an element"
        },

      ]
    },
    {
      "title": "JavaScript",
      "icon": "/images/icon-js.svg",
      "questions": [
        {
          "question": "Which syntax is correct to output 'Hello World' in an alert box?",
          "options": [
            "alertBox('Hello World');",
            "msg('Hello World');",
            "alert('Hello World');",
            "msgBox('Hello World');"
          ],
          "answer": "alert('Hello World');"
        },
        {
          "question": "How do you call a function named 'myFunction'?",
          "options": [
            "call function myFunction()",
            "call myFunction()",
            "myFunction()",
            "execute myFunction()"
          ],
          "answer": "myFunction()"
        },
        {
          "question": "How to write an IF statement in JavaScript?",
          "options": [
            "if i = 5 then",
            "if (i == 5)",
            "if i == 5",
            "if i = 5"
          ],
          "answer": "if (i == 5)"
        },
        {
          "question": "How to write an IF statement for executing some code if 'i' is NOT equal to 5?",
          "options": [
            "if (i <> 5)",
            "if i =! 5 then",
            "if (i != 5)",
            "if i not = 5"
          ],
          "answer": "if (i != 5)"
        },
        {
          "question": "How does a FOR loop start?",
          "options": [
            "for (i = 0; i <= 5)",
            "for i = 1 to 5",
            "for (i <= 5; i++)",
            "for (i = 0; i <= 5; i++)"
          ],
          "answer": "for (i = 0; i <= 5; i++)"
        },
        {
          "question": "How can you add a single-line comment in JavaScript?",
          "options": [
            "'This is a single-line comment",
            "//This is a single-line comment",
            "<!--This is a single-line comment-->",
            "/* This is a single-line comment */"
          ],
          "answer": "//This is a single-line comment"
        },
        {
          "question": "What is the correct way to write a JavaScript array?",
          "options": [
            "var colors = (1:'red', 2:'green', 3:'blue')",
            "var colors = ['red', 'green', 'blue']",
            "var colors = 'red', 'green', 'blue'",
            "var colors = 1 = ('red'), 2 = ('green'), 3 = ('blue')"
          ],
          "answer": "var colors = ['red', 'green', 'blue']"
        },
        {
          "question": "How do you find the number with the highest value of x and y?",
          "options": [
            "Math.ceil(x, y)",
            "top(x, y)",
            "Math.max(x, y)",
            "Math.highest(x, y)"
          ],
          "answer": "Math.max(x, y)"
        },
        {
          "question": "Which operator is used to assign a value to a variable?",
          "options": ["-", "*", "=", "x"],
          "answer": "="
        },
        {
          "question": "What is the correct way to write a JavaScript object?",
          "options": [
            "var person = {firstName: 'John', lastName: 'Doe'};",
            "var person = {firstName = 'John', lastName = 'Doe'};",
            "var person = (firstName: 'John', lastName: 'Doe');",
            "var person = (firstName = 'John', lastName = 'Doe');"
          ],
          "answer": "var person = {firstName: 'John', lastName: 'Doe'};"
        },

      ]
    },
    {
      "title": "Accessibility",
      "icon": "/images/icon-accessibility.svg",
      "questions": [
        {
          "question": "What does 'WCAG' stand for?",
          "options": [
            "Web Content Accessibility Guidelines",
            "Web Compliance Accessibility Guide",
            "Web Content Accessibility Goals",
            "Website Compliance and Accessibility Guidelines"
          ],
          "answer": "Web Content Accessibility Guidelines"
        },
        {
          "question": "Which element is used to provide alternative text for images for screen reader users?",
          "options": [
            "<alt>",
            "<figcaption>",
            "<description>",
            "<img alt='description'>"
          ],
          "answer": "<img alt='description'>"
        },
        {
          "question": "What does ARIA stand for in web development?",
          "options": [
            "Accessible Rich Internet Applications",
            "Advanced Responsive Internet Assistance",
            "Accessible Responsive Internet Applications",
            "Automated Responsive Internet Actions"
          ],
          "answer": "Accessible Rich Internet Applications"
        },
        {
          "question": "Which of the following is not a principle of the WCAG?",
          "options": [
            "Perceivable",
            "Dependable",
            "Operable",
            "Understandable"
          ],
          "answer": "Dependable"
        },
        {
          "question": "Which of these color contrast ratios defines the minimum WCAG 2.1 Level AA requirement for normal text?",
          "options": ["3:1", "4.5:1", "7:1", "2:1"],
          "answer": "4.5:1"
        },
        {
          "question": "Which of the following elements is inherently focusable, meaning it can receive focus without a 'tabindex' attribute?",
          "options": ["<div>", "<span>", "<a href='#'>", "<p>"],
          "answer": "<a href='#'>"
        },
        {
          "question": "What is the purpose of the 'lang' attribute in an HTML page?",
          "options": [
            "To specify the scripting language",
            "To define the character set",
            "To indicate the language of the page content",
            "To declare a language pack"
          ],
          "answer": "To indicate the language of the page content"
        },
        {
          "question": "Which guideline ensures that content is accessible by keyboard as well as by mouse?",
          "options": [
            "Keyboard Accessible",
            "Mouse Independence",
            "Device Independence",
            "Operable Controls"
          ],
          "answer": "Keyboard Accessible"
        },
        {
          "question": "What is the role of 'skip navigation' links in web accessibility?",
          "options": [
            "To skip over primary navigation to the main content",
            "To provide shortcuts to different sections of the website",
            "To help users skip unwanted sections like advertisements",
            "To bypass broken links in the navigation"
          ],
          "answer": "To skip over primary navigation to the main content"
        },
        {
          "question": "Which of these tools can help in checking the accessibility of a website?",
          "options": [
            "W3C Validator",
            "Google Lighthouse",
            "CSS Validator",
            "JavaScript Console"
          ],
          "answer": "Google Lighthouse"
        },

      ]
    }
  ]
}

const introArea = document.querySelector('.intro');

const cards = document.querySelectorAll('.card');

const container = document.querySelector('.inner-container');

const questionArea = document.querySelector('.question-area');


questionArea.classList.add('d-none');

let title = '';

let questions = [];

let q = [];

let cardInnerText = '';
let img;

for (const card of cards) {
  card.addEventListener('click', handlecardBtn);

}

function handlecardBtn() {
  cardInnerText = this.innerText;
  console.log(cardInnerText);
  questionArea.classList.remove('d-none');

  title = this.innerText;
  container.classList.add('d-none');
  questions = selectOption(title);
  handleQuestions(questions);
}

function selectOption(title) {
  for (const area of data.quizzes) {
    if (title === area.title) {
      return area.questions;
    }
  }

}

let index = 1;

function handleQuestions(questions) {
  for (const que of questions) {
    q.push({
      number: index,
      question: que.question,
      selects: que.options,
      answer: que.answer
    });
    index++;

  }
  renderQuestions();
}

let i = 0;

let correctAnswerCounter = 0;


function renderQuestions() {
  const headerArea = document.querySelector('.header');

  headerArea.innerHTML = `
      <div class = "topicSection">
        <img src="assets/img/${cardInnerText.toLocaleLowerCase('en')}-icon.svg" alt="">
        <p class = "area-text">${cardInnerText}</p>
      </div>
      <div class = "header-images">
      <img src="assets/img/light-theme.svg" alt="Light theme">
      <img src="assets/img/dark-theme.svg" alt="Dark theme">
      </div>
  </div>
  `
  questionArea.innerHTML = `

  <div class = "general-question-area">
    <div class = "que-area">
    <p class = "question-number">Question ${q[i].number} of 10</p>
    <p class= "question-text">${q[i].question}</p>
    
    <div class="progressBar">
        <div class="progressBarInner"></div>
    </div>

    </div>
    <div class="buttons-section">
      <p>${selectsClarify(q[i].selects)}</p>
      <div class="button-bottom-part">
        <button class="submitBtn">Submit</button>

          <div class = "warn-area">
              <img  class = "cross-icon" src="assets/img/cross-icon.svg" alt="">
              <h6 class="warnTxt">Please select an option</h6>
          </div>
      </div>
    </div>
  </div>
  `
  const warnArea = document.querySelector('.warn-area');
  warnArea.classList.add('d-none');


  const warnTxt = document.querySelector('.warnTxt');
  warnTxt.classList.add('d-none');

  const crossIcon = document.querySelector('.cross-icon');
  crossIcon.classList.add('d-none');


  const progressBar = document.querySelector('.progressBarInner');
  let progress = i + 1;
  progressBar.style.width = (progress * 10) + '%';



  const submitBtn = document.querySelector('.submitBtn');
  const options = document.querySelectorAll('.option');

  let selectedOption = null;

  for (const option of options) {
    option.addEventListener('click', function () {
      // Daha önce seçili olan butonu kaldırıyoruz.
      if (selectedOption) {
        selectedOption.classList.remove('selected');

      }
      // Yeni seçimi kaydediyoruz ve stil ekliyoruz.
      selectedOption = option;
      selectedOption.classList.add('selected');
    });

  }

  // options.forEach((option) => {
  //   if (option !== submitBtn) { // Submit butonunu hariç tut
  //     option.addEventListener('click', () => {
  //       // Tüm butonların border'ını sıfırla
  //       options.forEach(btn => btn.classList.remove('br-purple'));
  //       // Tıklanan butona mor border ekle
  //       option.classList.add('br-purple');
  //     });
  //   }
  // });



  submitBtn.addEventListener('click', function () {
    const allOptionBtns = document.querySelectorAll('.option');

    if (selectedOption) {
      console.log(document.activeElement);

      const selectedText = selectedOption.innerText.split("| ")[1].trim();
      const correctAnswer = q[i].answer;


      if (selectedText === correctAnswer) {
        selectedOption.classList.remove('red');

        selectedOption.classList.add('green');
        // console.log('doğru')
        correctAnswerCounter++;
      } else {

        selectedOption.classList.remove('green');
        selectedOption.classList.add('red');

        allOptionBtns.forEach((btn) => {
          if (btn.innerText.split("| ")[1].trim() === correctAnswer) {
            btn.classList.add('green');
          }
        });
      }


      setTimeout(() => {
        i++;
        if (i < q.length) {
          renderQuestions();
        } else {
          questionArea.innerHTML = `
          <div class = "result-section" >

            <div class = "result-intro">
              <h2>Quiz completed</h2>
              <h3>You scored...</h3>
            </div>
            <div class = "desktop-right-result">
              <div class = "result-card">
                <div class = "result-area">
                <img src="assets/img/${cardInnerText.toLocaleLowerCase()}-icon.svg" alt="">
                <p class="area-text">${cardInnerText}</p>
                </div>
                <p class = "score">${correctAnswerCounter}</p>
                <p class= "outOfTen">out of 10</p>
              </div>
              <button class="playAgainBtn"><a href = "/">Play again</a></button>
            </div>
          </div>
          `
          // headerArea.classList.add('w-640');
          alert("Test tamamlandı!");

        }
      }, 250);
    } else {

      warnArea.classList.remove('d-none');
      warnArea.classList.add('d-flex');

      warnTxt.classList.remove('d-none');
      warnTxt.classList.add('d-block');
      crossIcon.classList.remove('d-none');
      crossIcon.classList.add('d-block');

    }

  });


}



// function handleSubmit() {


//   i++;
//   renderQuestions();

// }


function selectsClarify(selects) {
  let optionsHTML = '';
  const selections = ["A", "B", "C", "D"];
  selects.forEach((option, index) => {
    const optionText = option.replace(/</g, "&lt;").replace(/>/g, "&gt;");
    optionsHTML += `
        <div class="option-buttons">
          <button class="option">
          <span> ${selections[index]}</span> | ${optionText}
          </button >
        </div > `;
  });

  // for (const element of selects) {
  //   const x = element.replace(/</g, "&lt;").replace(/>/g, "&gt;");




  return optionsHTML;
  // }


}
//alternatif
// function selectsClarify() {
//   for (const select of q[i].selects) {

//     return `< div class="option-buttons" >
//               <button class = "option"><span> A  </span> : ${q[i].selects[0]}</button><br>
//               <button class = "option"><span> B  </span> : ${q[i].selects[1]}</button><br>
//               <button class = "option"><span> C  </span> : ${q[i].selects[2]}</button><br>
//               <button class = "option"><span> D  </span> : ${q[i].selects[3]}</button><br>
//             </>
//            `
//   }

// }


