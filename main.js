//To make a or to gget the data from the form using js
const forms=document.querySelector( "#formid");
let arry=[];
const forminput=document.querySelector("#form1");
// console.log(forminput,forms);
//to look if the event is happening or not
forms.addEventListener("submit",(event)=>{
    event.preventDefault();//to manage data while reloading or refreshin
    const task=forminput.value;
    if(task === '' || task===null) return;
    const newtask={
        id:Date.now(),
        text:task
    }; 
    arry.push(newtask);
    forminput.value='';
    // console.log(arry);
     
}
)
