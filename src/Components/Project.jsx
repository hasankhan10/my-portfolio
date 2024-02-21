import React from 'react'

function Project() {
  return (
    <div className='project w-full h-full bg-slate-500 flex flex-col justify-center place-items-center gap-10'>
        <h1 className=' text-[70px] font-bold text-white'>MY ALL PROJECT</h1>
        <section className=' w-fit h-fit p-8 bg-cyan-900 rounded-2xl flex gap-6'>
            <div className=' w-80 h-80 bg-white rounded-xl flex justify-center place-items-center text-3xl font-semibold'>Coming soon</div>
            <div className=' w-80 h-80 bg-white rounded-xl flex justify-center place-items-center text-3xl font-semibold'>Conming soon</div>
        </section>
    </div>
  )
}

export default Project