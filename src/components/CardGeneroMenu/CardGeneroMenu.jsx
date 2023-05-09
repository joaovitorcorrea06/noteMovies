/* eslint-disable react/prop-types */
import "./CardGeneroMenu.css"

const CardGeneroMenu = ({nome}) => {
  return (
    <div className='filmCard'>
      <p className='textCard'>{nome}</p>
    </div>
  )
}

export default CardGeneroMenu