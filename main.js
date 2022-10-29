const forms=document.querySelector( "#formid");
let arry=[];
const forminput=document.querySelector("#form1");
// console.log(forminput,forms);
forms.addEventListener("submit",(event)=>{
    event.preventDefault();
    const task=forminput.value;
    if(task === '' || task===null) return;
    const newtask={
        id:Date.now(),
        text:task
    } 
    arry.push(newtask);
    forminput.value='';
    // console.log(arry);
    render();
     
}
)
function render(){
    const container=document.getElementById('listbox')
    container.innerHTML='';
    arry.forEach((taskk)=>{

        const task = document.createElement('div')
        task.classList.add('listbox1')
        container.appendChild(task)
        const input=document.createElement('input');
        input.classList.add('list1')
        input.value=taskk.text;
        const btnedit=document.createElement('button')
        btnedit.classList.add('edit1')
        btnedit.innerText='Edit'
        const deltask=document.createElement('button')
        deltask.classList.add('delete1')
        deltask.innerText='remove'
        task.append(input,btnedit,deltask)

         // For edit
         //first removing readonly property & again appending after edit is complete
         btnedit.addEventListener('click',()=>{
            input.removeAttribute('readonly')
            input.focus()
            input.addEventListener('blur',()=>{
                input.setAttribute('readonly',true)
            })
        })
    
    })
}
