import React from 'react'
import Info from './Components/Info'
import Clickme from './Components/Clickme'
import Cards from './Components/Cards'
import {CheckCheck} from 'lucide-react'
import {Meh} from 'lucide-react'
import {CreditCard } from 'lucide-react'

const App = () => {
  //creating array and passing to child
  const data=[{
    imoge:<Meh/>,
    titile:"tranning cources",
    des:"Lorem ipsum dolor sit amet adipisicing elit Reprehenderit"
  },
  {
   imoge:<CheckCheck />,
    titile:"2769 online courses",
    des:"Lorem ipsum dolor sit amet adipisicing elit Reprehenderit"
  },
  {
    imoge:<CreditCard />,
    titile:"tranning courses",
    des:"Lorem ipsum dolor sit amet adipisicing elit Reprehenderit"
  }]
   /* loop to show all data 
  {data.map((elem)=>{
    console.log(elem); 
  })}  */

  return (
    <>
     <div className="body min-h-screen bg-blue-950 text-amber-50 p-[20px] ">
       <Info/>
       <Clickme/>

       <div className=" w-full p-8 flex flex-wrap gap-5 justify-center">
          
          {data.map( (elem)=>{
            return <Cards detail={elem} />
          } )}
       </div>
       
     </div>
    </>
  )
}

export default App
