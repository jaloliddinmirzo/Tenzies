import { useEffect, useState } from 'react'
import Dice from './Dice'




function App() {
  const [selectedNumber, setNumber] = useState(null)
  const [dices, setDice] = useState([])
  const [gameOver, setGameOver] = useState(false)

  useEffect(() => {
    const new_arr = []
    for (let i = 0; i < 10; i++) {
      new_arr.push({
        id: i,
        number: Math.ceil(Math.random() * 10),
        selected: false
      })

    }
    setDice(new_arr)


  }, [])

  useEffect(() => {
    checkOver()
  }, [dices])

  const checkOver = () => {
    let win = true
    if (dices.length > 0) {
      dices.forEach(dice => {
        if (!dice.selected) {
          win = false
        }
      })
      if (win) {
        setGameOver(true)
      }
    }
  }

  const reset = () => {
    setNumber(null)
    setGameOver(false)
    setDice(prev => {
      return prev.map(p => {
        return {
          ...p,
          number: Math.ceil(Math.random() * 10),
          selected: false
        }
      })
    })
  }

  const roll = () => {
    setDice(prev => {
      return prev.map(p => {
        if (!p.selected) {
          return {
            ...p,
            number: Math.ceil(Math.random() * 10)
          }
        } else return p
      })

    })
  }

  console.log(selectedNumber);
  return (
    <div className='card'>
      <div className="wrap">
        <h1 className="title">Tenzies</h1>
        <p className="text">Roll until all dice are the same. Click each die to freeze it at its current value between rolls.</p>

        <div className="grid">
          {dices.map((dice, i) =>
            <Dice key={i}
              selectedNumber={selectedNumber}
              setDice={setDice} id={dice.id}
              selected={dice.selected}
              setNumber={setNumber}
              number={dice.number}
              checkOver={checkOver}
            ></Dice>)}

        </div>
        <a href="#" onClick={!gameOver ? roll : reset} className="button">{gameOver ? "Reset" : "Roll"}</a>
      </div>

    </div>
  )
}

export default App
