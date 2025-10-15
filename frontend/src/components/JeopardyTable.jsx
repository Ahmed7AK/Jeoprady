import { use, useState } from "react";
import PlayerInput from "./PlayerInput.jsx";
import "./JeopardyTable.css";

const showQA = (jeopardyClue) => {
    
    console.log(`Question: ${jeopardyClue.question}\nAnswer: ${jeopardyClue.answer}`)
    
}

const JeopardyRow = ({category, clues}) => {
    return (
            <div className="j-row">
                <div className="j-cat">
                    <h1>{category}</h1>
                </div>
                {
                    clues.map((clue, index) => (
                        <div key={index} className="j-clue" onClick={() => showQA(clue)}>
                            <p>${clue.clue_value}</p>
                        </div>
                    ))
                }   
            </div>
    )
}

const JeopardyTable = ({jeopardyRound}) => {

    return (
        <div className="j-table">
            {
                jeopardyRound.map((row, index) => (
                    <JeopardyRow key={index} category={row.category} clues={row.clues} />
                ))            
            }

        </div>
    )
}

export default JeopardyTable;