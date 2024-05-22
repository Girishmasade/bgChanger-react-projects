import { useState } from "react"


function App() {

  const [color, setColor] = useState("gray")

  return (
    <div className="w-full h-screen duration-200" style={{backgroundColor: color}}>
      <div className="flex flex-wrap justify-center insset-x-0 px-5 absolute inset-x-0 bottom-0 h-16">
        <div className="flex flex-wrap gap-3 justify-center px-3 py-2 rounded-3xl bg-white shadow:lg">
          <button onClick={() => setColor("Red")} className="outline-none px-4 py-1 rounded-full text-white shadow-lg" style={{backgroundColor: "red"}}>Red</button>
          <button onClick={() => setColor("Blue")} className="outline-none px-4 py-1 rounded-full text-white shadow-lg" style={{backgroundColor: "blue"}}>Blue</button>
          <button onClick={() => setColor("Green")} className="outline-none px-4 py-1 rounded-full text-white shadow-lg" style={{backgroundColor: "green"}}>Green</button>
          <button onClick={() => setColor("Yellow")} className="outline-none px-4 py-1 rounded-full text-black shadow-lg" style={{backgroundColor: "yellow"}}>Yellow</button>
          <button onClick={() => setColor("Black")} className="outline-none px-4 py-1 rounded-full text-white shadow-lg" style={{backgroundColor: "black"}}>Black</button>
          <button onClick={() => setColor("White")} className="outline-none px-4 py-1 rounded-full text-black shadow-lg" style={{backgroundColor: "white"}}>White</button>

        </div>
      </div>
    </div>
  )
}

export default App
