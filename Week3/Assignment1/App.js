const xhr = new XMLHttpRequest()

xhr.open("GET","https://pokeapi.co/api/v2/pokemon-species",true)
xhr.send()

xhr.onreadystatechange = function(){
    if (xhr.readyState === 4 && xhr.status === 200) {
        let data=JSON.parse(xhr.responseText)
        showData(data)
    } else if (xhr.readyState === 4 && xhr.status !== 200){
        console.log(xhr.responseText)
    }
}

function showData(data){
    console.log(data)
    let list = document.createElement('ul')
    document.body.appendChild(list)
    for(var i in data.results) {
        let item = document.createElement('li')
        item.textContent = data.results[i].name
        document.body.appendChild(item)
 


    }
 }