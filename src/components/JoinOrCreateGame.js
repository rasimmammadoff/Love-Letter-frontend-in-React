import React  from 'react'
import cancel from '../images/vector_cancel.svg'
import dayday from '../images/Dayday_IceKing.svg'
import purple_vector from '../images/vector_puple_vector.svg'
import { Link } from 'react-router-dom'
import "../style/JoinOrCreateGame.css"



const JoinOrCreateGame = () => {
    return (
        <div className="gamemode">
            <div className="choose-mode">Join or Create a game</div>
            <button className="btn-close"><img src={cancel} /></button>
            <div className="mode">
                <Link to="/">
                    <button className="btn-mode" >Join Game</button>
                </Link>
                <Link to="/create-a-game">
                    <button className="btn-mode" >Create Game</button>
                    </Link>
            </div>
            <img className="right_vector" src={dayday} alt="Not Found" />
            <div className="help">Help&FAQ</div>
            <img className="purple-vector" src={purple_vector} alt="Not Found" />
        </div>
    )
}


export default JoinOrCreateGame