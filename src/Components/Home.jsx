
function Home() {
  return (
    <div className="home h-full w-full flex">
        <section className="detail h-full w-[50%] flex justify-center flex-col place-items-center">
            <section className="w-[80%] flex flex-col gap-6">
                <h1 className=" text-8xl font-bold text-yellow-50">Hi,</h1>
                <p className=" text-5xl font-semibold text-black">I'm Mehedi Hasan / Full Stack Web Developer</p>
            </section>
        </section>
        <section className="photo h-full w-[50%] flex justify-center place-items-center">
            <div className=" w-[60%] h-[60%] rounded-full border-4 border-gray-800">
                <img className="pic rounded-full h-full w-full" src="https://www.slazzer.com/downloads/46c9d3a4-cfe9-11ee-8fe2-42010a800009/mehedi-removebg_prev_ui.png" alt="img" />
            </div>
        </section>
    </div>
  )
}

export default Home