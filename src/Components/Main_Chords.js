import React from 'react'
import "./Main_Chords.css"

export default function Main_Chords(props) {
    return (
        <div className="borderMain">
            <div className="mixcontainermain">
                <span className="mixiconmain"/>
                <div className="mixsectionmain">Mix Chords</div>
            </div>
            <div className="chordsgrid">

                <div className="note">{props.text[0]}
                
                    <div className="notation" id="odd">I</div>
                    <div className="key">M</div>
                    <div className="biarrow"></div>
                    <div className="connection"></div>
                </div>
                <div className="note">{props.text[1]}
                
                    <div className="notation">vi</div>
                    <div className="key">m</div>
                </div>
                <div className="note">{props.text[2]}
                
                    <div className="notation" id="odd">IV</div>
                    <div className="key">M</div>
                    <div className="biarrow"></div>
                    <div className="connection"></div>
            
                </div>
                <div className="note">{props.text[3]}
                
                    <div className="notation">ii</div>
                    <div className="key">m</div>
                </div>
                <div className="note">{props.text[4]}
                
                    <div className="notation" id="odd">V</div>
                    <div className="key">M</div>
                    <div className="biarrow"></div>
                    <div className="connection"></div>
                </div>
                <div className="note">{props.text[5]}
                
                    <div className="notation">iii</div>
                    <div className="key">m</div>
                </div>

            </div>
            
            <div className="chordstag">Main Chords</div>
    
        </div>
    )
}
