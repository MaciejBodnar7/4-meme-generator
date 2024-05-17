import React from "react"
import { useState } from "react"
import "./Global.css"
import memeData from "./memeData.js"

function App() {
  function clickHandle(e) {
    e.preventDefault()

    const memes = memeData.data.memes
    const randomObject = memes[Math.floor(Math.random() * memeData.data.memes.length) + 1]
    const url = randomObject.url

    setMemeImg(prevState => {
      return (prevState = url)
    })
  }

  const [memeImg, setMemeImg] = React.useState("../src/assets/memeimg.png")

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
          <button onClick={clickHandle} className="gradient py-4 text-white rounded-lg mt-8 font-bold" type="submit">
            Get a new meme image
          </button>
        </form>
        <div>
          <div id="img-meme" className="w-full mt-8 relative mb-8">
            <img className="w-full img-meme" src={memeImg} alt="" />
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
