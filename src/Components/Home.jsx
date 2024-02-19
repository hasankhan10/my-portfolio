
function Home() {
  return (
    <div className="home h-screen w-screen flex">
        <section className="detail h-full w-[50%] flex justify-center flex-col place-items-center">
            <section className="w-[80%] flex flex-col gap-6">
                <h1 className=" text-8xl font-bold text-yellow-50">Hi,</h1>
                <p className=" text-5xl font-semibold text-black">I'm Mehedi Hasan / Full Stack Web Developer</p>
            </section>
        </section>
        <section className="photo h-full w-[50%] flex justify-center place-items-center">
            <div className=" w-[60%] h-[60%] rounded-full border-4 border-gray-800">
                <img className=" rounded-full h-full w-full" src="https://www.slazzer.com/downloads/73566558-cf31-11ee-a89c-42010a80000a/mehedi-removebg_prev_ui.png" alt="img" />
            </div>
        </section>
    </div>
  )
}

export default Home