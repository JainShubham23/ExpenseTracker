import { data } from 'autoprefixer'
import React from 'react'

const obj = [{
    color: 'yellow',
    type: 'Savings',
    percent: 45
}
,
{
    color: 'yellow',
    type: 'Investment',
    percent: 20
},

{
    color: 'yellow',
    type: 'Expense',
    percent: 10
}]


export default function Labels() {
  return (
    <div>
      <>
      {obj.map((v,i) => <LabelComponent key={i} data = {v}></LabelComponent>)}
      </>
    </div>
  )
}

function LabelComponent({data}){
    if(!data) return<></>
    return(
        <div className='labels flex justify-between'>
            <div className='flex gap-2'>
                <div className='w-2 h-2 rounded py-3' style={{background: data.color ?? 'yellow'}}></div>
                <h3 className='text-md'>{data.type ?? ''}</h3>

            </div>
            <h3 className='font-bold'>{data.percent ?? 0}%</h3>
        </div>
    )
}
