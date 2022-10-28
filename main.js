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
     
}
)
