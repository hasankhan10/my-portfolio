import React from 'react'

function Frontend() {
  return (
    <div className=' flex flex-col gap-3 w-[100%]'>
        <div className=' w-full h-[18%] bg-cyan-800 flex rounded-2xl justify-center place-items-center'>
            <section className='pic h-full w-[40%] flex justify-center place-items-center'>
                <img className='w-[3rem] h-[3rem]' src="https://cdn-icons-png.flaticon.com/512/1051/1051277.png" alt="" />
            </section>
            <section className='pic-name h-full w-[60%] text-white text-2xl p-3 flex justify-center place-items-center font-bold font-mono'>HTML
            </section>
        </div>

        <div className=' w-full h-[18%] bg-cyan-800 flex space-x-1 rounded-2xl justify-center place-items-center'>
            <section className='pic h-full w-[40%] flex justify-center place-items-center'>
                <img className='w-[3rem] h-[3rem]' src="https://cdn-icons-png.flaticon.com/512/732/732190.png" alt="" />
            </section>
            <section className='pic-name h-full w-[60%] text-white text-2xl p-3 flex justify-center place-items-center font-bold font-mono'>CSS
            </section>
        </div>
        <div className=' w-full h-[18%] bg-cyan-800 flex space-x-1 rounded-2xl justify-center place-items-center'>
            <section className='pic h-full w-[40%] flex justify-center place-items-center'>
                <img className='w-[3rem] h-[3rem]' src="https://cdn-icons-png.flaticon.com/512/5968/5968292.png" alt="" />
            </section>
            <section className='pic-name h-full w-[60%] text-white text-2xl p-3 flex justify-center place-items-center font-bold font-mono'>JAVASCRIPT
            </section>
        </div>
        <div className=' w-full h-[18%] bg-cyan-800 flex space-x-1 rounded-2xl justify-center place-items-center'>
            <section className='pic h-full w-[40%] flex justify-center place-items-center'>
                <img className='w-[3rem] h-[3rem]' src="	https://cdn-icons-png.flaticon.com/512/3393/3393920.png" alt="" />
            </section>
            <section className='pic-name h-full w-[60%] text-white text-2xl p-3 flex justify-center place-items-center font-bold font-mono'>REACT
            </section>
        </div>
        <div className=' w-full h-[18%] bg-cyan-800 flex space-x-1 rounded-2xl justify-center place-items-center'>
            <section className='pic h-full w-[40%] flex justify-center place-items-center'>
                <img className='w-[3rem] h-[3rem] rounded-full' src="https://w7.pngwing.com/pngs/87/586/png-transparent-next-js-hd-logo.png" alt="" />
            </section>
            <section className='pic-name h-full w-[60%] text-white text-2xl p-3 flex justify-center place-items-center font-bold font-mono'>NEXT
            </section>
        </div>
    </div>

    
  )
}

export default Frontend