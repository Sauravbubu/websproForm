import React from 'react'

const Input = ({label,name,validation}) => {
  return (
    <>
              <div className="w-[50%]">
                <p>
                  {label} <span className="text-red-500">*</span>
                </p>
                <input
                  {...register({name}, validation)}
                  //validation ={
                //     required: " Required",
                //     minLength: {
                //       value: 4,
                //       message: "must be at least 4 characters long",
                //     },
                //   }
                  className=" placeholder:text-slate-400 block bg-white w-full border border-slate-300 rounded-md py-2 pl-4 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm"
                  name={name}
                />
                <p className="text-red-400">{errors.name?.message}</p>
              </div>
              
            </>
  )
}

export default Input