const datas = [
    {name:"shubham",salary:"60K"},
    {name:"Figter",salary:"70k"}
];
function getdatas(){
    
    setTimeout(() => {
        let output =" ";
         datas.forEach((data,index)=>{
             output = <li>${data.name}</li>;
             output = <li>${data.index}</li>;
         })
         document.body.innerHTML=output
    }, 1000);
}
function created(newdata){
     setTimeout(() => {
        datas.push(newdata);
        let error = false
           if(!error){
                resolve();
           }
           else
           {
               reject("cool cool")
           }
     }, 5000);
}
async function start(){
    await created({name:"Raja",salary:"60K"});
    getdatas();
}
start();