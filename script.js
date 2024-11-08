const add_but = document.querySelector(".bi-plus-square-dotted")
const add_area = document.querySelector(".add-new");
const other_elements = document.querySelector(".hidelements");
add_but.addEventListener("click",()=>{
    add_area.style.display = "flex";
    other_elements.style.display = "block";
})
const save_but = document.querySelector(".add-but");
save_but.addEventListener("click", ()=>{
    let i = localStorage.length;
    let title = document.getElementById("title").value;
    let body = document.getElementById("body").value;
    if (title.length === 0){
        alert("title required")
    }
    else{
        
        let data_array = {
            title: title,
            body: body
        }
        data_array = JSON.stringify(data_array);
        localStorage.setItem(i,data_array);
        i = i + 1;
        add_area.style.display = "none";
        other_elements.style.display = "none";
        document.getElementById("title").value = "";
        document.getElementById("body").value = "";
        load_data()
    }
})


function load_data(){
    let storage = localStorage;
    const display = document.getElementById("task-container");
    if (storage.length !== '0'){
        display.innerHTML = "";
        for(a=0;a < storage.length; a++){
            let item = JSON.parse(storage.getItem(a))
            let result = document.createElement("div");
            result.classList.add("task");

            let title = document.createElement("h4");
            title.innerText = item.title;
            let body = document.createElement("p")
            body.innerText =  item.body;
    
            result.appendChild(title);
            result.appendChild(body);
            
            display.appendChild(result);
        }   
    }
}
window.onload = load_data;


function clear(){
    localStorage.clear();
    document.getElementById("task-container").innerHTML = "";
}

document.querySelector(".bi-trash-fill").addEventListener("click",clear);
document.querySelector(".bi-x").addEventListener("click",()=>{
    add_area.style.display = "none";
    other_elements.style.display = "none";
});
