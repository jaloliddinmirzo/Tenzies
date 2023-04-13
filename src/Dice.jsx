

const Dice = ({ number, selected,checkOver, selectedNumber, id, setDice, setNumber }) => {
    const click = () => {
        if (selectedNumber) {
            setDice(prev => {
                return prev.map(p => {
                    if (p.id == id && p.number == selectedNumber) {
                        return {
                            ...p,
                            selected: true
                        }
                    } else return p
                })

            })
        } else {
            setDice(prev => {
                return prev.map(p => {
                    if (p.id == id ) {
                        return {
                            ...p,
                            selected: true
                        }
                    } else return p
                })

            })
        }
        setNumber(prev => {
            if (prev) {
                return prev
            } else return number
        })
    }

    return (
        <div className='dice'
            onClick={click}
            style={{
                background: selected ? "#59E391" : "white"
            }}
        >
            {number}
        </div>
    )
}

export default Dice;