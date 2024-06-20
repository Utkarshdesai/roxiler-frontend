import { useEffect, useState } from 'react'
import Tableheader from './Tableheader'
import './table.css'
import axios from 'axios'
import Tablebody from './Tablebody'
import Statistics from './Statistics'


const Table = () => {
  const [month , setmonth] = useState(3)
  const [search , setsearch] = useState('')
  const [currentpage , setcurrentpage] = useState(1)
  const [transaction ,settransaction] = useState([]) 

 console.log(search)
 console.log(typeof month)

 const handlemonth = (e) => {
   setmonth(e.target.value)
 }

 const nextbtn = () =>  
 {
    setcurrentpage(currentpage+1)
 }

 const backbtn = () =>  
    {
       setcurrentpage(currentpage - 1)
    }

 const handlesearch =  async() => {
  
     const data = await axios.get('http://localhost:5000/api/v1/productdata/Transactiondata' , { params: {month ,search } })
     console.log(data)
     settransaction(data.data.products)
      
     
 }

 useEffect(()=>{
   handlesearch()
   
 },[month])


 console.log(currentpage)

  return (
    <div className='flex flex-col'>
      <div className='flex justify-between items-center ml-5 mr-5'> 
        <div className='mt-[40px] '>
            <input
               type='text'
               value={search}
               onChange={(e)=>setsearch(e.target.value)}
               placeholder='enter produts/title/price/description'
               className='px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500'
            />
 
            <button onClick={handlesearch}
             className='ml-2 px-4 py-2 bg-blue-500 text-white rounded-md shadow-sm hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50'
            > Search </button>
        </div>

        <div >
        
           <select id='monthname'  value ={month} onChange={handlemonth}
             className='px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500'
           > 
              <option value=''> select month </option>
              <option value={1}> January </option>
              <option value={2}> February </option>    
              <option value={3}> March </option>
              <option value={4}> April </option>
              <option value={5}> May </option>
              <option value={6}> June </option>
              <option value={7}> July </option>
              <option value={8}> August </option>
              <option value={9}> September </option>
              <option value={10}>  Octomber </option>
              <option value={11}> November </option>
              <option value={12}> December </option>
            </select>
        </div>


      </div >

      <Tableheader ></Tableheader>
      <Tablebody transaction = {transaction}> </Tablebody>

      <div className='flex mt-10 justify-around'>
      <button onClick={backbtn} disabled={currentpage===1}> Back </button>

      <button onClick={nextbtn} disabled={currentpage===10}> Next </button>

      </div>
     

       <Statistics month = {month} setmonth={setmonth}> </Statistics> 

      
    </div>
  )
}

export default Table