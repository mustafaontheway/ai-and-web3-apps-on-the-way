import { useState } from "react"

function App() {

  const [year, setYear] = useState(2025)

  const [number, setNumber] = useState(5)

  function yearUp() {

    setYear(year + 1)
  }

  function yearDown() {

    setYear(year - 1)
  }

  function numberUp() {

    setNumber(number + 1)
  }
  
  return (
    <>

      <h3>In {year}, his fav number is {number}</h3>

      <div>
        <button onClick={yearUp}>Year +</button>

        <button onClick={yearDown}>Year -</button>
      </div>

      <div>
        <button onClick={numberUp}>Number + 1</button>
      </div>

    </>
  )
}

export default App
