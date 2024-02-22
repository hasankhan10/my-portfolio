import React from 'react'

function Contact() {
  return (
    <div className='contact w-full h-full bg-slate-500 flex justify-center place-items-center font-mono'>
        <section className=' w-[90%] h-[70%] bg-slate-400 rounded-3xl overflow-hidden sm:w-[60%] sm:h-[50%]'>
            <h1 className=' w-[100%] h-[20%] flex justify-center place-items-center text-3xl font-bold sm:h-[30%]'>My Contact Link</h1>
            <section className=' w-full h-[80%] bg-slate-300 flex flex-col justify-center place-items-center gap-4 sm:h-[70%] sm:gap-16 sm:flex-row'>

                    <a href="https://github.com/hasankhan10" target="_blank" className=' w-26 h-26 flex flex-col justify-center place-items-center cursor-pointer'>
                        <img className=' w-14 h-14' src="https://cdn-icons-png.flaticon.com/512/2111/2111432.png" alt="" />
                        <h1 className=' text-xl font-semibold'>Github</h1>
                    </a>

                    <a href="https://www.linkedin.com/in/mehedi-hasan110/" target="_blank" className=' w-26 h-26 flex flex-col justify-center place-items-center cursor-pointer'>
                        <img className=' w-14 h-14' src="https://cdn-icons-png.flaticon.com/512/2504/2504923.png" alt="" />
                        <h1 className=' text-xl font-semibold'>LinkedIn</h1>
                    </a>

                    <a href="mailto:mehedihas110@gmail.com" target="_blank" className=' w-26 h-26 flex flex-col justify-center place-items-center cursor-pointer'>
                        <img className=' w-14 h-14' src="https://cdn-icons-png.flaticon.com/512/6806/6806987.png" alt="" />
                        <h1 className=' text-xl font-semibold'>Email</h1>
                    </a>

                    <a href="https://docs.google.com/document/d/1N2Z-YC1n0SQJ0WoX2yXMW497EH-DWEZBf4GRf6flBr8/edit#heading=h.5rf9wr4r3no2" target="_blank" className=' w-26 h-26 flex flex-col justify-center place-items-center cursor-pointer'>
                        <img className=' w-14 h-14' src="https://cdn-icons-png.flaticon.com/512/9522/9522153.png" alt="" />
                        <h1 className=' text-xl font-semibold'>Resume</h1>
                    </a>

            </section>
        </section>
    </div>
  )
}

export default Contact