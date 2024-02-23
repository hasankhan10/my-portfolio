import { Typewriter } from 'react-simple-typewriter'
function Home() {
  return (
    <div className="home h-full w-full flex flex-col-reverse sm:flex-row justify-center place-items-center">
        <section className="detail h-full sm:w-[50%] w-[100%] flex sm:justify-center flex-col place-items-center">
            <section className="w-[80%] flex flex-col gap-6 ml-6">
                <h1 className=" text-8xl font-bold text-yellow-50 text-center sm:text-start">Hi,</h1>
                <p className=" text-5xl font-semibold text-black text-center sm:text-start capitalize">I'm <span className=' text-red-800 font-bold'>
                    
                    <Typewriter 
                        words={["Mehedi Hasan", "Full Stack Web Developer"]}
                        loop={Infinity}
                        cursor
                        cursorStyle='|'
                        typeSpeed={70}
                        deleteSpeed={50}
                        delaySpeed={1000}
                    />

                    </span>
                    </p>
            </section>
        </section>
        <section className="photo h-full w-[50%] flex justify-center place-items-center">
            <div className=" sm:w-[60%] sm:h-[60%] w-[100%] h-[50%] rounded-full border-4 border-gray-800">
                <img className="pic rounded-full h-full w-full" src="https://scontent.fccu16-1.fna.fbcdn.net/v/t39.30808-6/428324871_1137338047425358_438163210893669198_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=efb6e6&_nc_ohc=HJSH8hqUqoQAX8AjUBB&_nc_ht=scontent.fccu16-1.fna&oh=00_AfBz7mecvJz-bt-q2Un2V5TfYVV-fYuipq8sytU08VFGPA&oe=65DB2EFB" alt="img" />
            </div>
        </section>
    </div>
  )
}

export default Home