import React from 'react'

export const Input = ({label , invalid , ...props}) => {
  return (
    <p>
        <label className='block mb-2 textt-xs font-bold trackign-wide text-stone-200 uppercase' >{label}</label>
        <input className='w-full px-3 py-2 leading-tight bg-stone-300 text-gray-700 border rounded shadow ' {...props} />
    </p>
  )
}
