import React from 'react'

function Backend() {
  return (
    <div className=' flex flex-col gap-3'>
        <div className=' w-full h-[18%] bg-cyan-800 flex rounded-2xl justify-center place-items-center'>
            <section className='pic h-full w-[40%] flex justify-center place-items-center'>
                <img className='w-[3rem] h-[3rem]' src="https://cdn-icons-png.flaticon.com/512/5968/5968322.png" alt="" />
            </section>
            <section className='pic-name h-full w-[60%] text-white text-2xl p-3 flex justify-center place-items-center font-bold font-mono'>NODE
            </section>
        </div>

        <div className=' w-full h-[18%] bg-cyan-800 flex space-x-1 rounded-2xl justify-center place-items-center'>
            <section className='pic h-full w-[40%] flex justify-center place-items-center'>
                <img className='w-[3rem] h-[3rem]' src="https://e7.pngegg.com/pngimages/247/558/png-clipart-node-js-javascript-express-js-npm-react-github-angle-text.png" alt="" />
            </section>
            <section className='pic-name h-full w-[60%] text-white text-2xl p-3 flex justify-center place-items-center font-bold font-mono'>EXPRESS
            </section>
        </div>
        <div className=' w-full h-[18%] bg-cyan-800 flex space-x-1 rounded-2xl justify-center place-items-center'>
            <section className='pic h-full w-[40%] flex justify-center place-items-center'>
                <img className='w-[3rem] h-[3rem]' src="https://cdn-icons-png.flaticon.com/512/2906/2906274.png" alt="" />
            </section>
            <section className='pic-name h-full w-[60%] text-white text-2xl p-3 flex justify-center place-items-center font-bold font-mono'>MONGODB
            </section>
        </div>
    </div>
  )
}

export default Backend