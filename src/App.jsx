import "./Global.css"

function App() {
  return (
    <>
      <main className="container-custom">
        <form action="" className="flex flex-col w-full mt-16">
          <div className="container-media flex justify-between">
            <div className="flex flex-col w-full">
              <label htmlFor="top-text">Top text</label>
              <input className="py-4 px-4" type="text" name="top-text" id="top-text" placeholder="Shut up" />
            </div>
            <div className="flex flex-col w-full">
              <label htmlFor="bottom-text">Bottom text</label>
              <input
                className="py-4 px-4"
                type="text"
                name="bottom-text"
                id="bottom-text"
                placeholder="And take my money"
              />
            </div>
          </div>
          <button className="gradient py-4 text-white rounded-lg mt-8 font-bold" type="submit">
            Get a new meme image
          </button>
        </form>
        <div>
          <div id="img-meme" className="w-full mt-8 relative">
            <img className="w-full img-meme" src="../src/assets/memeimg.png" alt="" />
            <p className="absolute img-p-one top-0 left-0 text-white font-bold w-full text-center">Shut up</p>
            <p className="absolute img-p-two bottom-0 left-0 text-white font-bold w-full text-center">
              And take my money
            </p>
          </div>
        </div>
      </main>
    </>
  )
}

export default App
