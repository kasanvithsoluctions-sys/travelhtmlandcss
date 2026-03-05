let navBar = document.querySelector('#header')

document.addEventListener('scroll', ()=>{
    let scrollTop = window.scrollY

    if(scrollTop > 0){
        navBar.classList.add('rolar')
    }else{
         navBar.classList.remove('rolar')
    }
})

const faqs = {
  "Bookings": [
    { question: "How do I book a trip?", answer: "You can book a trip by selecting your destination, dates, and following the booking process on our site." },
    { question: "Can I change my booking?", answer: "Yes, you can modify your booking under 'My Trips' section before the travel date." }
  ],
  "Destinations": [
    { question: "Which destinations are available?", answer: "We offer trips to Europe, Asia, the Americas, and many more exciting locations!" },
    { question: "Do you provide guided tours?", answer: "Yes, guided tours are available for selected destinations. Check each trip for details." }
  ],
  "Payments": [
    { question: "What payment methods are accepted?", answer: "We accept credit cards, PayPal, and bank transfers." },
    { question: "Is my payment secure?", answer: "Yes, all transactions are encrypted and secured using industry-standard protocols." }
  ],
  "Support": [
    { question: "I need technical support", answer: "You can contact our support team via chat or email at support@travelexample.com." },
    { question: "Can I cancel my trip?", answer: "Yes, cancellations are allowed according to the cancellation policy of each booking." }
  ]
};

const chatWidget = document.getElementById("chat-widget");
const chatIcon = document.getElementById("chat-icon");
const chatBox = document.getElementById("chat-box");
const closeBtn = document.getElementById("close-btn");
const messages = document.getElementById("messages");
const options = document.getElementById("options");


chatIcon.addEventListener("click", () => {
  chatIcon.style.display = "none";
  chatBox.style.display = "flex";
  showCategories();
});


closeBtn.addEventListener("click", () => {
  chatBox.style.display = "none";
  chatIcon.style.display = "flex";
});


function showCategories() {
  options.innerHTML = "";
  for (let category in faqs) {
    const btn = document.createElement("button");
    btn.textContent = category;
    btn.className = "option-btn";
    btn.onclick = () => showQuestions(category);
    options.appendChild(btn);
  }
}


function showQuestions(category) {
  options.innerHTML = "";
  faqs[category].forEach(item => {
    const btn = document.createElement("button");
    btn.textContent = item.question;
    btn.className = "option-btn";
    btn.onclick = () => sendQuestion(item.question, item.answer);
    options.appendChild(btn);
  });
}


function sendQuestion(question, answer) {
  messages.innerHTML += `<p>You: ${question}</p>`;
  messages.innerHTML += `<p>Assistant: ${answer}</p>`;
  messages.scrollTop = messages.scrollHeight;
  showCategories();
}

let btnMenuMob = document.querySelector('#btn-menu-mobile')
let line1 = document.querySelector('line-menu-mobile-1')
let line2 = document.querySelector('line-menu-mobile-2')


btnMenuMob.addEventListener("click", ()=>{
    line1.classList.toggle('ativo1')
    line2.classList.toggle('ativo2')


})


