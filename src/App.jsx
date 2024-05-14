import "./Global.css"

function App() {
  return (
    <>
      <main className="container-custom">
        <form action="" className="flex flex-col w-full mt-16">
          <div className="flex justify-between gap-12">
            <div className="flex flex-col w-full">
              <label htmlFor="top-text">Top text</label>
              <input className="py-4 px-2" type="text" name="top-text" id="top-text" placeholder="Shut up" />
            </div>
            <div className="flex flex-col w-full">
              <label htmlFor="bottom-text">Bottom text</label>
              <input
                className="py-4 px-2"
                type="text"
                name="bottom-text"
                id="bottom-text"
                placeholder="and take my money"
              />
            </div>
          </div>
          <button className="gradient py-4 text-white rounded-lg mt-8 font-bold" type="submit">
            Get a new meme image
          </button>
        </form>
        <div>
          <div id="img-meme" className="w-full mt-8">
            <img src="" alt="" />
          </div>
        </div>
      </main>
    </>
  )
}

export default App
