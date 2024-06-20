import axios from "axios";
import { useEffect, useState } from "react"


const Statistics = ({month ,}) => {
  const[stats , setstats] = useState([])
 

  function convertNumberToMonth(monthNumber) {
    const date = new Date(2000, monthNumber - 1, 1);
    const monthName = date.toLocaleString('default', { month: 'long' });
    return monthName;
}

 const Monthname = convertNumberToMonth(month)
 

  useEffect(()=>{
    try {
        const fetchstats = async() => {
        
            const res = await axios.get('http://localhost:5000/api/v1/productdata/Statsdata' , { params: {month} })
            setstats(res.data.SaleInfo)   
           
         }    
         fetchstats()

    } catch (error) {
        console.log('error while fetching stats')
    }
         
  },[month])


  return (
    <div className="p-6 m-10 bg-gray-200 text-center font-sans flex flex-col w-[60%] justify-center mx-auto rounded-md" >

        <p className="text-3xl font-bold mb-4"> Statistics - {Monthname} <span> (Selected month name from dropdown)</span></p>
        
        { stats.length >0  && 

            (stats.map((item ,index)=> {
               return (<div key={index}> 
                   
                   <p className="text-lg"> {`total sale  : ${item.totalsale}`} </p>
                   <p className="text-lg"> {`total sold  : ${item.totalsold}`} </p>
                   <p className="text-lg"> {`total Unsold :  ${item.totalunsold}`} </p>
               </div>)
            })
           )
        }
        
    </div>
  )
}

export default Statistics