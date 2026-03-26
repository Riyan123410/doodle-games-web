import { useEffect, useState, type Dispatch, type SetStateAction } from "react";

interface Props {
    turn: number
    dropped: { x: number; y: number; player: number; }[]
    setDropped: Dispatch<SetStateAction<{ x: number; y: number; player: number; }[]>>
    setTurn: Dispatch<SetStateAction<number>>
}

const ActiveCoin = ({turn,dropped,setDropped,setTurn}: Props) => {

    const [column, setColumn] = useState(0)
    const [row, setRow] = useState<number | undefined>(undefined)
    
    const handleKeyDown = (e: { keyCode: number; }) => {
        if(e.keyCode === 37 && column > 0 ){
            setColumn(column-1)
        }
        else if(e.keyCode === 39){
            if (column === undefined)
                setColumn(1)
            else if (column < 6)
                setColumn(column+1)
        }
        else if(e.keyCode === 32 || e.keyCode === 13){
            if (dropped.find(drop => drop.x === 0 && drop.y === (column || 0))){
                return
            }
            else {
                const len = 5 - dropped.filter(drop => drop.y === (column || 0)).length
                setRow(len)
                setTimeout(() => {
                    setDropped([
                        ...dropped,
                        {x : len || 0, y:column || 0, player: turn}
                    ])
                    setTurn(turn === 1 ? 2 : 1)
                },500)
            }
        }
    }

    useEffect(() => {
        setColumn(0)
        setRow(undefined)
    },[turn])

    useEffect(() => {
        document.addEventListener("keyup", handleKeyDown, false);
        return () => document.removeEventListener("keyup", handleKeyDown);
    })

    return <div className={`active p${turn} column-${column||'-'} row-${row===undefined ? '-' : row}`} />
}

export default ActiveCoin