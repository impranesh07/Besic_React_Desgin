import React from 'react'

// receave data in {details} and print data in position
const Cards = ({detail}) => {
  return (
    <div>
         <div className="box bg-blue-500 w-64  p-6 ">
            <div className="logo w-[40px] h-[40px] text-teal-500 border-none rounded-sm bg-orange-100 p-0.5 flex items-center justify-center">
                {detail.imoge}
            </div>
            <div className="data pt-3 pb-4">
                <h5 className='font-medium tracking-wide text-[14px] font-bold'>{detail.titile}</h5>
            </div>
            <hr></hr>
            <div className="stats pb-2 pt-3.5">
                <p className='font-serif text-teal-200 text-[10px] text-left'>
                    {detail.des}</p>
            </div>
         </div>
    </div>
  )
}

export default Cards
