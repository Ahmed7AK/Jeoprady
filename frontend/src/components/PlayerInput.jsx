import "./PlayerInput.css";

const PlayerInput = ({clue}) => {
    <div className="player-input">
        <div className="question">
            <p>{clue.question}</p>
        </div>
        <div className="answer-input">
            <input type="text" name="" id="" />
            <input type="button" value="Submit" />
        </div>
    </div>
}

export default PlayerInput;