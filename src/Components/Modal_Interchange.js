import React from 'react'
import "./Modal_Interchange.css"

export default function Modal_Interchange(props) {
    return (
        <div className="border">
            <div className="mixcontainer">
                <span className="mixicon"/>
                <div className="mixsection">Mix Chords</div>

            </div>

            <div className="modalgrid">

                <div className="note">{props.text[0]}
                
                    <div className="notation">bIII</div>
                    <div className="key">M</div>
                </div>
                <div className="note" id="invisible">
                
                    
                </div>
                <div className="note">{props.text[1]}
                
                    <div className="notation">bIV</div>
                    <div className="key">M</div>
            
                </div>
                <div className="note">{props.text[2]}
                
                    <div className="notation">iv</div>
                    <div className="key">m</div>
                </div>
                <div className="note">{props.text[3]}
                
                    <div className="notation">bVII</div>
                    <div className="key">M</div>
                </div>
                <div className="note" id="invisible">

                </div>

            </div>
            
            <div className="tag">Modal Interchange</div>
        </div>
        
    )
}
