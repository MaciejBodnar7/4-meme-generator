import React from "react"
import { useState } from "react"
import "./Global.css"
import memeData from "./memeData.js"

function App() {
  function clickHandle(e) {
    e.preventDefault()

    const memes = allMemeImages.data.memes
    const randomObject = memes[Math.floor(Math.random() * memes.length) + 1]
    const url = randomObject.url

    setMemeImg(prevMeme => {
      return {
        ...prevMeme,
        randomImage: url,
      }
    })
  }

  function handleChange(event) {
    const { name, value } = event.target
    setMemeImg(prevMeme => {
      return {
        ...prevMeme,
        [name]: value,
      }
    })
  }

  const [memeImg, setMemeImg] = React.useState({
    topText: "Shut up",
    bottomText: "And take my money",
    randomImage: "http://i.imgflip.com/1bij.jpg",
  })

  const [allMemeImages, setAllMemeImages] = React.useState(memeData)

  return (
    <>
      <main className="container-custom">
        <form action="" className="flex flex-col w-full mt-16">
          <div className="container-media flex justify-between">
            <div className="flex flex-col w-full">
              <label htmlFor="top-text">Top text</label>
              <input
                className="py-4 px-4"
                type="text"
                name="topText"
                id="top-text"
                placeholder="Shut up"
                value={memeImg.topText}
                onChange={handleChange}
              />
            </div>
            <div className="flex flex-col w-full">
              <label htmlFor="bottom-text">Bottom text</label>
              <input
                className="py-4 px-4"
                type="text"
                name="bottomText"
                id="bottom-text"
                placeholder="And take my money"
                value={memeImg.bottomText}
                onChange={handleChange}
              />
            </div>
          </div>
          <button onClick={clickHandle} className="gradient py-4 text-white rounded-lg mt-8 font-bold" type="submit">
            Get a new meme image
          </button>
        </form>
        <div>
          <div id="img-meme" className="w-full mt-8 relative mb-8">
            <img className="w-full img-meme" src={memeImg.randomImage} alt="" />
            <p className="absolute img-p-one top-0 left-0 text-white font-bold w-full text-center">{memeImg.topText}</p>
            <p className="absolute img-p-two bottom-0 left-0 text-white font-bold w-full text-center">
              {memeImg.bottomText}
            </p>
          </div>
        </div>
      </main>
    </>
  )
}

export default App
