import React, { useState } from 'react'
import Btn from './Btn'
import Frontend from './Frontend'
import Backend from './Backend'
import Other from './Other'

function Skill() {

  const [showskill, setShowskill] = useState('')

  const handleChange = (value) => {
    setShowskill(value)
  }
  return (
    <div className='skill w-full h-full bg-slate-400 flex justify-center place-items-center'>
        <section className=' sm:w-[50%] sm:h-[60%] w-[90%] h-[70%] bg-slate-500 rounded-xl overflow-hidden flex flex-col justify-center place-items-center'>
            <div className='catagory w-full h-[18%] flex space-x-8 sm:place-items-center sm:justify-center overflow-x-scroll sm:overflow-hidden place-items-center pl-16 pr-16 sm:pl-0 sm:pr-0'>
                <button  onClick={() => handleChange('frontend')}><Btn text = "Front End"/></button>
                <button onClick={() => handleChange('backend')}><Btn text = "Back End"/></button>
                <button  onClick={() => handleChange('other')}><Btn text = "Version Controll"/></button>
            </div>

            <div className='show-skill sm:w-[50%] w-[80%] h-[82%]'>
                { showskill && (showskill === 'frontend' ? (<Frontend />) : (showskill === 'backend' ? (<Backend />) : <Other /> ))}
                {!showskill && <h1 className=' text-3xl font-bold text-center mt-5 font-mono text-white'>Click the button to show my skill</h1>}
            </div>
        </section>
    </div>
  )
}

export default Skill