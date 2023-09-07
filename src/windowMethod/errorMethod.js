
function ErrorDemo() {
    const obj1 = {name:"Amit",age:32};
    const arr=[
        {id:0,firstName:"Anjali", marks: 85},

        {id:1,firstName:"Preeti",marks:50}
    ] 
    //obj.splice(1,arr1);
    console.log(arr); 
    return(
    arr.map((arrobj)=>{

        return(
        
            <div>
                {arrobj.id}
              <b>{arrobj.firstName}</b>
              <b>{arrobj.marks}</b>
              
            </div>
        )

    }))
 
   
}
export default ErrorDemo;