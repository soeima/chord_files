import React from 'react'
import "./Secondary_Dominants.css"

export default function Secondary_Dominants(props) {
    return (
        <div className="borderSecondary">

            <div className="mixcontainersecondary">
                <span className="mixiconsecondary"/>
                <div className="mixsectionsecondary">Don't Mix Chords</div>
            </div>

            <div className="secondarygrid">

                <div className="note">{props.text[0]}
                    
                    <div className="notation">V<sub>I</sub></div>
                    <div className="seventh">7</div>
                    <div className="arrowicon"></div>
                </div>
                <div className="note">{props.text[1]}
                
                    <div className="notation">V<sub>vi</sub></div>
                    <div className="seventh">7</div>
                    <div className="arrowicon"></div>
                </div>
                <div className="note">{props.text[2]}
                
                    <div className="notation">V<sub>IV</sub></div>
                    <div className="seventh">7</div>
                    <div className="arrowicon"></div>
                </div>
                <div className="note">{props.text[3]}
                
                    <div className="notation">V<sub>ii</sub></div>
                    <div className="seventh">7</div>
                    <div className="arrowicon"></div>
                </div>
                <div className="note">{props.text[4]}
                
                    <div className="notation">V<sub>V</sub></div>
                    <div className="seventh">7</div>
                    <div className="arrowicon"></div>
                </div>
                <div className="note">{props.text[5]}
                
                    <div className="notation">V<sub>iii</sub></div>
                    <div className="seventh">7</div>
                    <div className="arrowicon"></div>
            
                </div>

            </div>

            <div className="dominantstag">Secondary Dominants</div>
        </div>
    )
}

