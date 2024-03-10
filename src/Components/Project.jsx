import React from 'react'

function Project() {
  return (
    <div className='project w-full h-full bg-slate-500 flex flex-col justify-center place-items-center gap-10'>
        <h1 className=' text-[70px] font-bold text-white text-center'>MY ALL PROJECTS</h1>
        <section className=' sm:w-fit sm:h-fit sm:p-8 bg-cyan-900 rounded-2xl flex gap-6 w-[90%]  h-[50%] overflow-scroll sm:overflow-hidden justify-center place-items-center flex-wrap'>
            <div className=' w-60 h-60 bg-white rounded-xl flex justify-center place-items-center text-3xl font-semibold mt-4 sm:mt-0'>
                <a className=' bg-red-600 p-2 rounded-xl hover:scale-105' href="https://frontentquiz.netlify.app"><u>Frontend Quiz</u></a>
            </div>
            
            <div className=' w-60 h-60 bg-white rounded-xl flex justify-center place-items-center text-3xl font-semibold mb-4 sm:mb-0'>Coming soon</div>
            
        </section>
    </div>
  )
}

export default Project