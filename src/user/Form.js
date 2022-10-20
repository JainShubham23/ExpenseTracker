import React from 'react'

export default function Form() {
  return (
    <div className="form max-w-sm mx-auto w-96">
      <h1 className='font-bold pb-4 text-xl'>Transaction</h1>
    <form id = 'form'>
    <div className='grid gap-4'>
        <div className='input-group'>
            <input type = "text" placeholder='Sallary,House Rent, SIP' className='form-input'></input>
            {/* <select>
                <option value="Investment" defaultValue>
                    Investment
                </option>
                <option value="Expense" defaultValue>
                Expense
                </option>
                <option value="Savings" defaultValue>
                Savings
                </option>
            </select>
            <div className='input-group'>
            <input type = "text" placeholder='Amount' className='form-input'></input>
            </div>
            <div className='submit-btn'>
            <button className='border py-2 text-white bg-indigo-500 w-full'>Make Transaction</button>
            </div> */}
        </div>
    </div>
    </form>
    </div>
  )
}
