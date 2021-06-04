
let dataContainer = document.getElementById('dataContainer')

const getData = async () => {

    const complete = await axios.get('http://api.bryanuniversity.edu/amber-freeman4/list/')
    const todo = await axios.get('http://api.bryanuniversity.edu/amber-freeman3/list/')

    const completeData = complete.data
    const todoData = todo.data
    console.log(todoData)
    putData(completeData, todoData)
}


putData = (completeData, todoData) => {

    
        
    for(let i=0; i < todoData.length; i++){
        const li = document.createElement('li')
        li.textContent = todoData[i].description
        li.style.listStyle = 'none'
        li.style.fontSize = '32px'
        dataContainer.appendChild(li)
        
        const checkbox = document.createElement('input')
        checkbox.type = 'checkbox'
        li.appendChild(checkbox)                               
        checkbox.addEventListener('click', function(e){
            
            // e.preventDefault()
            //  for(i=0; i < completeData.length; i++){
                let completeId = completeData[i]._id
                let hold 
            
                    if(completeData[i].isComplete === true){                 
                        hold = {
                            isComplete : false,                      
                            // checkbox: 'unchecked'
                        }
                        li.style.textDecoration = 'none'
                        checkbox.checked === false
                    } else {
                        hold = {
                            isComplete : true,
                            // checkbox : 'checked'
                        }
                        li.style.textDecoration = 'line-through'
                        checkbox.checked === true
                }
                
                axios.put('http://api.bryanuniversity.edu/amber-freeman4/list/' + completeId, hold)
                .then(response => console.log(completeData[i])) 
                .catch(error => console.log(error))
            // }
    
        })

        var button = document.createElement('button')
        button.textContent ='Remove'
        button.style.backgroundColor = 'rgb(165, 55, 55)'
        dataContainer.appendChild(button)
        button.addEventListener('click', function(){
        
            let todoId = todoData[i]._id 

            axios.delete('http://api.bryanuniversity.edu/amber-freeman/list/' + todoId)
            .then(response => console.log(todoData[i])) 
            .catch(error => console.log(error))
        })
    }
}

const myForm = document.getElementById('formContainer')
myForm.addEventListener('submit', function(event) {     //need to review event listeners
    
    event.preventDefault()
    
    const postData = {
        description: myForm.description.value
    }
    
    myForm.description.value = ''

    axios.post('http://api.bryanuniversity.edu/amber-freeman3/list', postData)
    .then(response => list(response.data)) 
    .catch(error => console.log(error))
})


// const todoItems = (todoData) => {
// }

//     todoItems(todoData)


    getData()