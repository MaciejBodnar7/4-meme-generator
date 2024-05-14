import "./Global.css"

export default function Navbar() {
  return (
    <>
      <nav className="gradient h-20 flex items-center">
        <div className="container-custom flex justify-between items-center text-white">
          <div className="flex items-center">
            <img className="w-14" src="../src/assets/Troll Face.png" alt="" />
            <p className="text-2xl font-bold ml-4">Meme genrator</p>
          </div>
          <p className="react-course">React Course - Project 4</p>
        </div>
      </nav>
    </>
  )
}
