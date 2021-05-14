document.getElementById('btn').addEventListener('click', function() {
    axios.get('http://api.bryanuniversity.edu/amber-freeman/list/')
        .then(response => {
            for(i=0; i< response.data.length; i++){
                let list = document.createElement('li')
                 list.textContent = response.data[i].name
                 document.body.appendChild(list)
     
             }
        })
        
})
        .catch()