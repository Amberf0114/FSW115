
//GET code

let dataContainer = document.getElementById('dataContainer')

function getData() {
    axios.get('http://api.bryanuniversity.edu/amber-freeman/list/')
        .then(response => list(response.data))
        .catch(error => console.log(error))
}


function list(data) {
    for (let i = 0; i < data.length; i++){
       let names = document.createElement('h1')
        names.textContent = data[i].name
        names.style.textDecoration = 'underline'
        dataContainer.appendChild(names)

        
        let descriptions = document.createElement('h2')
        descriptions.textContent = data[i].description
        descriptions.style.color = 'grey'
        dataContainer.appendChild(descriptions)

        // PUT code                                                  //HELP: getting checkmark to show up & finshing DELETE
        const label = document.createElement('label')
        label.textContent= "Complete:"
        label.style.fontStyle = 'italic'
        dataContainer.appendChild(label)
        const checkbox = document.createElement('input')
        checkbox.type = 'checkbox'
        dataContainer.appendChild(checkbox)
        checkbox.addEventListener('click', function(e){
            e.preventDefault()

            let id = data[i]._id
            let hold 

            if(data[i].isComplete === true){                 
                hold = {
                    isComplete : false,                      
                    // checkbox: 'unchecked'
                }
                names.style.textDecoration = 'none'
                checkbox.checked === false
            } else {
                hold = {
                    isComplete : true,
                    // checkbox : 'checked'
                }
                names.style.textDecoration = 'line-through'
                checkbox.checked === true


 
            }

            axios.put('http://api.bryanuniversity.edu/amber-freeman/list/' + id, hold)
            .then(response => console.log(data[i].isComplete)) 
            .catch(error => console.log(error))
        
        })

        // DELETE code
        var button = document.createElement('button')
        button.textContent ='Remove'
        button.style.backgroundColor = 'rgb(165, 55, 55)'
        dataContainer.appendChild(button)
        button.addEventListener('click', function(){
        
            let id = data[i]._id

            axios.delete('http://api.bryanuniversity.edu/amber-freeman/list/' + id)
            .then(response => console.log(data[i])) 
            .catch(error => console.log(error))
        })
    }

    
}

getData()


// POST code

const myForm = document.frm
myForm.addEventListener('submit', function(event) {     //need to review event listeners
    
    event.preventDefault()
    
    const postData = {
        name: myForm.name.value,
        description: myForm.description.value
    }
    
    myForm.name.value = '',
    myForm.description.value = ''

    axios.post('http://api.bryanuniversity.edu/amber-freeman/list', postData)
    .then(response => list(response.data)) 
    .catch(error => console.log(error))
})

// DELETE code

// let endPoint = getEndpoint = ()=> {
    //for(i=0; i<[url].length; i++){
        //code to grab endpoints via [0], [1], etc...
    //}
//};

//Switch statement? Such as if [0] was clicked, grab endpoint, and execute >>>
    // axios.delete('http://api.bryanuniversity.edu/amber-freeman/list' + '/' + endPoint)
    //     .then(response => alert('Item Deleted))
    //     .catch(err => console.log(err))