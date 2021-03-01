// let postMan = {
//     "people": "http://swapi.dev/api/people/",
//     "planets": "http://swapi.dev/api/planets/",
//     "films": "http://swapi.dev/api/films/",
//     "species": "http://swapi.dev/api/species/",
//     "vehicles": "http://swapi.dev/api/vehicles/",
//     "starships": "http://swapi.dev/api/starships/"
// }

// let list = document.getElementById("list")

// for (var i = 0; i < postMan.length; i++){
    
//     //let items = document.createElement("li")
//     //items.textContent = postMan[i].people  //<<<What is wrong here?
//     //list.appendChild(items)
//     list.innerHTML += "<li>" + postMan[i]
// }  


let varName = `{
    "response_code": 0,
    "results": [
        {
            "category": "Entertainment: Music",
            "type": "multiple",
            "difficulty": "medium",
            "question": "The song &quot;Caramelldansen&quot; is commonly mistaken as a Japanese song, what language is the song actually sung in?",
            "correct_answer": "Swedish"
        },
        {
            "category": "Entertainment: Music",
            "type": "multiple",
            "difficulty": "medium",
            "question": "Which song made by MAN WITH A MISSION was used as the opening for the anime &quot;Log Horizon&quot;?",
            "correct_answer": "&quot;Database&quot;"
        },
        {
            "category": "Entertainment: Film",
            "type": "multiple",
            "difficulty": "hard",
            "question": "The film Mad Max: Fury Road features the Dies Irae  from which composer&#039;s requiem?",
            "correct_answer": "Verdi"
        }
    ]
}`

//create a for loop to make show up as a list on webpage



var newVar = JSON.parse(varName)
let list = document.getElementById("list")
// console.log(newVar.results.length)
for (i=0; i < newVar.results.length; i++) {

    let categories = document.createElement("h3")
    let types = document.createElement("p")
    let difficulties = document.createElement("p")
    let questions = document.createElement("p")
    let correctAnswers = document.createElement("p")

    categories.textContent =newVar.results[i].category
    types.textContent =newVar.results[i].type
    difficulties.textContent =newVar.results[i].difficulty
    questions.textContent =newVar.results[i].question
    correctAnswers.textContent =newVar.results[i].correct_answer

    document.body.append(categories)
    document.body.append(types)
    document.body.append(difficulties)
    document.body.append(questions)
    document.body.append(correctAnswers)
}







// console.log(newVar.results[0].category)    //example

