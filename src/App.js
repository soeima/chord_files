import Secondary_Dominants from "./Components/Secondary_Dominants";
import Main_Chords from "./Components/Main_Chords";
import Modal_Interchange from "./Components/Modal_Interchange";
import DragScaleBar from "./Components/DragScaleBar"
import './App.css'
import React, {useState} from "react";

function App(){

  const [key, setKey] = useState([])

  function keySelector(value){

    var tmp

    // splitting the dragbar into 12 keys, setting the state and generating the new chords

    if(value <= 100/12){

      tmp = 'C'
      generate_chord_files(tmp)
      setKey(tmp)

    }else if(100/12 < value && value <= 200/12){

      tmp = 'Db'
      generate_chord_files(tmp)
      setKey(tmp)

    }else if(200/12 < value && value <= 300/12){

      tmp = 'D'
      generate_chord_files(tmp)
      setKey(tmp)

    }else if(300/12 < value && value <= 400/12){

      tmp = 'Eb'
      generate_chord_files(tmp)
      setKey(tmp)

    }else if(400/12 < value && value <= 500/12){

      tmp = 'E'
      generate_chord_files(tmp)
      setKey(tmp)

    }else if(500/12 < value && value <= 600/12){

      tmp = 'F'
      generate_chord_files(tmp)
      setKey(tmp)

    }else if(600/12 < value && value <= 700/12){

      tmp = 'Gb'
      generate_chord_files(tmp)
      setKey(tmp)

    }else if(700/12 < value && value <= 800/12){

      tmp = 'G'
      generate_chord_files(tmp)
      setKey(tmp)

    }else if(800/12 < value && value <= 900/12){

      tmp = 'Ab'
      generate_chord_files(tmp)
      setKey(tmp)

    }else if(900/12 < value && value <= 1000/12){

      tmp = 'A'
      generate_chord_files(tmp)
      setKey(tmp)

    }else if(1000/12 < value && value <= 1100/12){

      tmp = 'Bb'
      generate_chord_files(tmp)
      setKey(tmp)

    }else

    tmp = 'B'
    generate_chord_files(tmp)
    setKey(tmp)

  }


  return (
    <div className="wrapper">
      <div className="halfcircle"></div>
      <div className="contentwrapper">

        <div className="instructions">Down:Follow The Arrows <span className="arrowdown"></span></div>
        <Secondary_Dominants text = {secondary_dominants}/>
        <div className="instructionsmiddle">Start <br></br>Here <span className="arrowmid"></span></div>
        <Main_Chords text = {chords}/>
        <div className="instructions">Up:to any <br></br>of Three <span className="arrowup"></span></div>
        <Modal_Interchange text = {aeolian_chords}/>
        <div className="upinstructions">Up:To<br></br> Any Chord</div>
        <div className="arrow"></div>
        <div className="downinstructions">Down:To Any<br></br> of Four</div>
      </div>
      <div className="examplewrapper">

        <div className="exampletitle">Example in C:</div>
        <div className="chordswrapper">
          <div className="gridel">
            <div>A<sub>m</sub></div>
            <div>F<sub>M</sub></div>
            <div>G<sub>M</sub></div>
            <div>C<sub>M</sub></div>

          </div>
          <div className="gridelright">Main Chords</div>
          <div className="gridel">
            <div>C<sub>m</sub></div>
            <div className="el">C<sup>7</sup></div>
            <div>F<sub>M</sub></div>
            <div>G<sub>M</sub></div>
          </div>
          <div className="gridelright">Add Secondary Dominant</div>
          <div className="gridel">

            <div>F<sub>M</sub></div>
            <div>G<sub>M</sub></div>
            <div className="el2">B<sub>bM</sub></div>
            <div className="exception">C<sub>M</sub></div>

          </div>
          <div className="gridelright">Add modal Interchange</div>
          <div className="gridel">
            <div>C<sub>m</sub></div>
            <div className="el">C<sup>7</sup></div>
            <div>F<sub>M</sub></div>
            <div className="el2">A<sub>bM</sub></div>
          </div>
          <div className="gridelright">Add Sec. dominant and Modal Interchange</div>
        </div>

      </div>
      <div className="keywrapper">
          <div>B</div>
          <div>Bb</div>
          <div>A</div>
          <div>Ab</div>
          <div>G</div>
          <div>Gb</div>
          <div>F</div>
          <div>E</div>
          <div>Eb</div>
          <div>D</div>
          <div>Db</div>
          <div>C</div>
      </div>
      <div className="setKey">Set The Key</div>
      <div className="dragbar">
        <DragScaleBar width = {480} className = "rotated" handleValue = {value => keySelector(value)} outBorder = {false} fillColor="#201a16" />
      </div>
      <div className="dummy">
        <DragScaleBar width = {480} className = "rotated" outBorder = {false} fillColor="#201a16" />
      </div>
      <div className="title">chord_files</div>
    </div>
  )
}

// logic functions

const chromatic_scale = ['C', 'Db', 'D', 'Eb', 'E', 'F', 'Gb', 'G', 'Ab', 'A', 'Bb', 'B', 'C', 'Db', 'D', 'Eb', 'E', 'F', 'Gb', 'G', 'Ab', 'A', 'Bb']
const maj_steps = [2, 2, 1, 2, 2, 2, 1]
const aeolian_steps = [2, 1, 2, 2, 1, 2, 2]
var chords = ['C', 'A', 'F', 'D', 'G', 'E']
var secondary_dominants = ['G', 'E', 'C', 'A', 'D', 'B']
var aeolian_chords = ['Eb', 'Ab', 'F', 'Bb']

function generate_chord_files(root){

  chords = []
  secondary_dominants = []
  aeolian_chords = []
  chords = get_scale(root)
  secondary_dominants = get_secondary_dominants(chords)
  aeolian_chords = get_modal_interchange(root)

}

function get_scale(root){

  var root_position = chromatic_scale.indexOf(root)
  var i = 0

  while(i < 6){

    chords.push(chromatic_scale[root_position])
    root_position += maj_steps[i]
    i++

  }

  // I vi IV ii V iii
  var temp = [chords[0], chords[5], chords[3], chords[1], chords[4], chords[2]]
  chords = temp
  return chords;

}

function get_secondary_dominants(chords){

  var fifth
  var i = 0

  while (i < chords.length){

    var tmp = chromatic_scale.indexOf(chords[i])+7
    fifth = chromatic_scale[tmp]
    secondary_dominants.push(fifth)
    i++

  }
    
  return secondary_dominants

}


function get_modal_interchange(root){

  var root_position = chromatic_scale.indexOf(root)
  var i = 0

  while(i < 7){

    aeolian_chords.push(chromatic_scale[root_position])
    root_position += aeolian_steps[i]
    i++

  }

  // III VI iv VII
  var temp = [aeolian_chords[2], aeolian_chords[5], aeolian_chords[3], aeolian_chords[6]]
  aeolian_chords = temp
  return aeolian_chords

}

export default App;
