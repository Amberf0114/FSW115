document.getElementById('btn').addEventListener('click', function() {
    

    axios.get('http://api.bryanuniversity.edu/amber-freeman3/list/')
        .then(response => {


            for(let i=0; i< response.data.length; i++){
                let itemName = document.createElement('h1')
                 itemName.textContent = response.data[i].name
                 document.body.appendChild(itemName)
     
             }
        })
        .catch(err => console.log(err))
        
})