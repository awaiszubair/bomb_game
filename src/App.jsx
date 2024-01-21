import React, { useEffect, useState, useRef } from 'react'
import Boxes from './Boxes/Boxes'
import three from './assets/six.gif'
import four from './assets/walking_bomb_enemy_game_character.gif'
import './index.css'
var count = 0;
const temper = [];
var arr = [];
for (var i = 0; i <= 5; i++) {
  arr.push(i);
}

function App() {
  const [steps, setSteps] = useState(0);
  const [random, setRandom] = useState(0);
  const [alternate, setAlternate] = useState(false);
  const [detect, setDetect] = useState(false);
  const [id, setId] = useState(0);
  function generateRandomValue() {
    setRandom(Math.floor(Math.random() * arr.length));
  }

  function Player(e) {
    setId(e.target.dataset.id);
  }


  return (
    <div style={{ marginLeft: '30rem' }}>
      <h2 style={{ marginTop: '3rem', marginBottom: '2rem' }}>Steps: {steps}</h2>
      <div className='main_box' style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <div>
          {
            detect ? <h1>Sorry You lost in Step: {steps}</h1> : steps == 10 ? <h1>Congratulation You Won</h1> : steps !== 0 && random == id
              ? setDetect(true)
              :
              arr.map((dt, index) => {

                if (index == random) {
                  return <Boxes Player={Player} three={three} setSteps={setSteps} steps={steps} generateRandomValue={generateRandomValue}
                    random={random} temper={temper} index={index}
                  />
                }
                if (index == id) {

                  return <Boxes className="red" Player={Player} four={four} setSteps={setSteps} steps={steps} generateRandomValue={generateRandomValue}
                    random={random} temper={temper} index={index}
                  />
                }
                return <Boxes setSteps={setSteps} steps={steps}
                  Player={Player}
                  generateRandomValue={generateRandomValue}
                  random={random}
                  temper={temper}
                  index={index}
                />
              })

          }
        </div>

      </div>
    </div>
  )
}

export default App