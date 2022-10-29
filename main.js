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
    render();//to call render function
     
}
)
function render(){
    const container=document.getElementById('listbox')
    container.innerHTML='';
    //to iterate each task one by one
    arry.forEach((taskk)=>{
        const task = document.createElement('div');//to make first div elements
        task.classList.add('listbox1');//adding class in the DIV
        container.appendChild(task);//adding task into a container
        const input=document.createElement('input');//creating input type 
        input.classList.add('list1');
        input.value=taskk.text;//taskk in a text
        const btnedit=document.createElement('button');
        btnedit.classList.add('edit1');
        btnedit.innerText='Edit'//creating edit text
        const deltask=document.createElement('button');
        deltask.classList.add('delete1');
        deltask.innerText='remove';
        task.append(input,btnedit,deltask);//combining above input ,btnedit & deltask

        
    
    })
}
