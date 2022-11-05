import { questions } from './data.js'
import { questionData } from './data.js';
import { result } from './data.js';



const formDiv = document.getElementById("form-div")
const form = document.getElementById("form")
const h2 = document.getElementById("h2")
const inputContainer = document.getElementById('input-container')
const resultDiv = document.getElementById('result-div')

form.addEventListener("submit", function(e) {
    formDiv.style.display = "none"
    e.preventDefault()
    const consentForm = new FormData(form)
    const consentFormName = consentForm.get("fullName")
    h2.textContent = `${consentFormName}, Your Personality Type Is:`
    getFormData()

})

function renderRadios() {
    for(let i = 0; i < questions.length; i++) {
        inputContainer.innerHTML += `
        <h3>${questionData[i].sentence}</h3>
        <div class="radios">
            <label for="${questions[i].name}">${questions[i].options}</label>
            <input 
                type="radio"
                name="${questions[i].name}"
                id="${questions[i].options}"
                class="${questions[i].options}"
                >
                
                
        </div>`
    }
}
function getFormData() {
    const firstSelectedRadio = document.querySelector('input[type="radio"][name="q1"]:checked').id
    const secondSelectedRadio = document.querySelector('input[type="radio"][name="q2"]:checked').id
    const thirdSelectedRadio = document.querySelector('input[type="radio"][name="q3"]:checked').id
    const fourthSelectedRadio = document.querySelector('input[type="radio"][name="q4"]:checked').id
    const fifthSelectedRadio = document.querySelector('input[type="radio"][name="q5"]:checked').id
    const yes = 'yes'
    const no = 'no'
    
    if (firstSelectedRadio === no && secondSelectedRadio === no && thirdSelectedRadio === yes
         && fourthSelectedRadio === no && fifthSelectedRadio === yes) {
        h2.innerText += ' Boris Johnson/Bozo'
        resultDiv.innerHTML = `<img src="${result[0].src}" alt="${result[0].name}">
                               <p>${result[0].text}</p>`
    }
    else if (firstSelectedRadio === yes && secondSelectedRadio === no && thirdSelectedRadio === no
        && fourthSelectedRadio === yes && fifthSelectedRadio === no) {
            h2.innerText += ' Sir Keir Starmer'
            resultDiv.innerHTML = `<img src="${result[1].src}" alt="${result[1].name}">
                                   <p>${result[1].text}</p>`
        }
    else if(firstSelectedRadio === no && secondSelectedRadio === yes && thirdSelectedRadio === yes
        && fourthSelectedRadio === no && fifthSelectedRadio === no) {
            h2.innerText += ' Suella Braverman'
            resultDiv.innerHTML = `<img src="${result[2].src}" alt="${result[2].name}">
                                   <p>${result[2].text}</p>`
        }
    else if(firstSelectedRadio === no && secondSelectedRadio === yes && thirdSelectedRadio === yes
        && fourthSelectedRadio === yes && fifthSelectedRadio === yes) {
            h2.innerText += ' Liz Truss'
            resultDiv.innerHTML =  `<img src="${result[3].src}" alt="${result[3].name}">
                                    <p>${result[3].text}</p>`
        }
    else if(firstSelectedRadio === no && secondSelectedRadio === no && thirdSelectedRadio === no
        && fourthSelectedRadio === no && fifthSelectedRadio === no) {
            h2.innerText += 'Nigel Farage'
            resultDiv.innerHTML =  `<img src="${result[4].src}" alt="${result[4].name}">
                                    <p>${result[4].text}</p>`
        }
    else if(firstSelectedRadio === yes && secondSelectedRadio === no && thirdSelectedRadio === yes
        && fourthSelectedRadio === no && fifthSelectedRadio === yes) {
            h2.innerText += 'Theresa May'
            resultDiv.innerHTML =  `<img src="${result[5].src}" alt="${result[5].name}">
                                    <p>${result[5].text}</p>`
        }
    
    
    
}
renderRadios()
