
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
        dataContainer.appendChild(names)

        if (data[i].isComplete === true){
            names.style.backgroundColor = 'brown'
        }

        let prices = document.createElement('p')
        prices.textContent = data[i].price
        dataContainer.appendChild(prices)
        
        let descriptions = document.createElement('p')
        descriptions.textContent = data[i].description
        dataContainer.appendChild(descriptions)

        // PUT code
        const checkbox = document.createElement('input')
        checkbox.type = 'checkbox'
        dataContainer.appendChild(checkbox)
        checkbox.addEventListener('click', function(e){
            e.preventDefault()
            alert(data[i]._id)

            let id = data[i]._id
            let hold 

            if(data[i].isComplete === true){
                hold = {
                    isComplete : false
                }
                names.style.backgroundColor = 'red'
            } else {
                hold = {
                    isComplete : true
                }
                names.style.backgroundColor = 'blue'

 
            }

            axios.put('http://api.bryanuniversity.edu/amber-freeman/list/' + id, hold)
            .then(response => console.log(data[i].isComplete)) 
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
        price: myForm.price.value,
        description: myForm.description.value
    }
    
    myForm.name.value = '',
    myForm.price.value = ''
    myForm.description.value = ''

    axios.post('http://api.bryanuniversity.edu/amber-freeman/list', postData)
    .then(response => list(response.data)) 
    .catch(error => console.log(error))
})

