import React from 'react'

function Contact() {
  return (
    <div className='contact w-full h-full bg-slate-500 flex justify-center place-items-center'>
        <section className=' w-[70%] h-[50%] bg-slate-400 rounded-3xl overflow-hidden'>
            <h1 className=' w-[100%] h-[30%] flex justify-center place-items-center text-3xl font-bold'>My Contact Link</h1>
            <section className=' w-full h-[70%] bg-slate-300 flex justify-center place-items-center gap-16'>

                    <a href="https://github.com/hasankhan10" target="_blank" className=' w-28 h-28 flex flex-col justify-center place-items-center cursor-pointer'>
                        <img className=' w-14 h-14' src="https://cdn-icons-png.flaticon.com/512/2111/2111432.png" alt="" />
                        <h1 className=' text-xl font-semibold'>Github</h1>
                    </a>

                    <a href="https://www.linkedin.com/in/mehedi-hasan110/" target="_blank" className=' w-28 h-28 flex flex-col justify-center place-items-center cursor-pointer'>
                        <img className=' w-14 h-14' src="https://cdn-icons-png.flaticon.com/512/2504/2504923.png" alt="" />
                        <h1 className=' text-xl font-semibold'>LinkedIn</h1>
                    </a>

                    <a href="mailto:mehedihas110@gmail.com" target="_blank" className=' w-28 h-28 flex flex-col justify-center place-items-center cursor-pointer'>
                        <img className=' w-14 h-14' src="https://cdn-icons-png.flaticon.com/512/6806/6806987.png" alt="" />
                        <h1 className=' text-xl font-semibold'>Email</h1>
                    </a>

            </section>
        </section>
    </div>
  )
}

export default Contact