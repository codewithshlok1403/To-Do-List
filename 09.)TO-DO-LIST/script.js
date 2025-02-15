let input=document.querySelector('#input');
let button=document.querySelector('.button');
let remove=document.querySelector(".delete")
const addTask=()=>{
    let value=input.value;
    if(value){
        let listItem=document.createElement('li');
        listItem.innerText=value;
        document.getElementById('list').append(listItem);
        let span=document.createElement('span');
        listItem.appendChild(span);
        span.innerText='x';
        span.addEventListener("click",()=>{
            listItem.remove();
        })
        listItem.addEventListener("click",(e)=>{

            e.target.classList.toggle("checked");
        })
        remove.addEventListener("click", () => {
             list.innerHTML = ""; 
            });
        
    }
    else{
        alert("Please enter a value");
    }
   input.value=""
}
button.addEventListener("click",()=>{
  addTask()
})

input.addEventListener("keypress",(event)=>{
    if(event.keyCode===13){
        addTask()
    }
})
