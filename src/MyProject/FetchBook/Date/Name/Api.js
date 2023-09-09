import axios from "axios";
import { useState,useEffect } from "react";

export function FetchApi(){

    const[userData,setData]=useState([]);

    useEffect(()=>{
        axios.get("https://api.nytimes.com/svc/books/v3/lists/2019-01-20/hardcover-fiction.json?api-key=hZDmCFWeM7QC4iJej0UPAE29S3crLIqP")
        .then((response)=>{
           setData(response.data.results.books)
           console.log(response);

        })

    },[])


    const str=console.log("Anjali")
    console.log(typeof str)
    return (
        <div>
            {userData.map((bookData)=>{
                return(
                    <div>
                        {bookData.author}
                        <img src={bookData.book_image}></img>
                        {bookData.book_review_link}
                        {bookData.book_uri}
                    </div>
                )
            }
            )
        }
        </div>
        
    )
}
