const xhr = new XMLHttpRequest()

xhr.open("GET","",true)
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
    
}