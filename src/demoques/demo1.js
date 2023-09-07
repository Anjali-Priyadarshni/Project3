function Demo1() {

    let userDetails = [
        {
            userName:'Anjali',
            userId :1234,
            userEmail:'aba@',
            userPhn :4567891234

        },
        {
            userName:'Amit',
            userId :2123,
            userEmail:'abac@',
            userPhn :4567891264

        },
        {
            userName:'Bharti',
            userId :6778,
            userEmail:'abad@',
            userPhn :4567891298

        },
        {
            userName:'Bhumi',
            userId :1432,
            userEmail:'daba@',
            userPhn :4567891262

        },
    ];

    userDetails.forEach((lmn)=>{
        //console.log(lmn)
    
    }
    )
     
    
   // let a=document.write(x)

    let arr1=["Anjali","Anu","Amit","Arushi"]

    let y=arr1.valueOf()
    let x=arr1.toString()
    arr1.unshift("Deepal","Deepa");
    let a=arr1.toString()
    let z= arr1.shift()
    let aa=arr1.pop()
    let as=arr1.push("Arushi")
    
{/* Old way 
    let a = arr1[0];
    let b = arr1[1];
    let c = arr1[2];
    let d = arr1[3];
 //destructuring
    let [l,m,n,o]=arr1;

    console.log(l);
    console.log(a);

   arr1.forEach((a)=>{
        console.log (a)
     })


      //console.log(arr1.at(2));

      //console.log(3+4+6+8+'9');

      //console.log(3+4+'6'+8+9);

      //console.log('3'+'4'+6+8+'9');

      //console.log(false==3);

      //console.log(false==0);

      //console.log(true==0);

      //console.log(true==1);

    let ages=[32,33,16,40] ;

    let x = ages.filter((age)=>{
        return age>32;
    });

*/}

    

{/*return(
    
<>

{x}<br/>
{a}<br/>
{y}<br/>
{z}<br/>
{aa}<br/>
{as}<br/>
{userDetails[2].userEmail}
---------------------------------------------------------
{
    userDetails.map((lmn)=>{
        return(
            <>
            <div>{lmn.userEmail}</div>
                
            <div>{lmn.userName}</div>

            <div>{lmn.userId}</div>

            <div>{lmn.userPhn}</div>
            </>
             

        )
    
    })
} 

</>
);*/}

}

export default Demo1;