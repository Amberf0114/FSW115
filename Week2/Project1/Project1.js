let unparsedPostManInfo =
    `{
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

let postManInfo = JSON.parse(unparsedPostManInfo)
let postMan = document.getElementById("postMan")

for(i=0; i < postManInfo.results.length; i++) {
    let item1 = document.createElement("li")
    let item2 = document.createElement("li")
    let item3 = document.createElement("li")
    let item4 = document.createElement("li")
    let item5 = document.createElement("li")

    item1.setAttribute("id", "category")

    item1.textContent = postManInfo.results[i].category
    item2.textContent = postManInfo.results[i].type
    item3.textContent = postManInfo.results[i].difficulty
    item4.textContent = postManInfo.results[i].question
    item5.textContent = postManInfo.results[i].correct_answer


    postMan.append(item1, item2, item3, item4, item5)
    

}