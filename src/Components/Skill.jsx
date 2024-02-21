import React from 'react'
import Btn from './Btn'

function Skill() {
  return (
    <div className='skill w-full h-full bg-slate-400 flex justify-center place-items-center'>
        <section className=' w-[50%] h-[60%] bg-slate-500 rounded-xl overflow-hidden flex flex-col justify-center place-items-center'>
            <div className='catagory w-full h-[18%] flex space-x-8 place-items-center justify-center'>
                <button><Btn text = "Front End"/></button>
                <button><Btn text = "Back End"/></button>
                <button><Btn text = "Version Controll"/></button>
            </div>

            <div className='show-skill w-[50%] h-[82%]'>
                
            </div>
        </section>
    </div>
  )
}

export default Skill