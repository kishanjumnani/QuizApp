import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'


function App() {
  const [questions, setquestion] = useState([]);
  const [index, setindex] = useState(0);
  const [score, setscore] = useState(0);
  const [time,settime] =useState(5);
  const fetchquestion = () => {
    fetch('https://opentdb.com/api.php?amount=10')
      .then((response) => response.json())
      .then((data) => {
        if (data.response_code == 0)

          setquestion(data.results);
      })
      .catch((error) => console.log(error))
  }

  useEffect(() => {
    fetchquestion();
  }, [])

  console.log(questions);

  function validateanswer(correct) {
    if (correct) {
      setscore(score + 1);
    }
    if (index <= 9)
      setindex(index + 1);
  }
  if (index == 10) {

  }

  return (
    <>
      {
        (index <= 9) ? (
          <div className="wrapquiz">
            <div className="conatiner">
              <h1>Lets have quiz</h1>
              <h2>question :{index + 1}</h2>
              {questions.length > 0 ? <div className="questions">
                <p>{questions[index].question}</p>
                <div className="answer">
                  {questions[index].incorrect_answers.map((items, ind) => {
                    return <button onClick={() => validateanswer(false)} key={ind}>{items}</button>
                  })
                  }
                  <button onClick={() => validateanswer(true)}>{questions[index].correct_answer}</button>
                </div>
                <p style={{display:'none'}}>{setTimeout(() =>setindex(index+1),5000)} </p>
                <h3 > time left :{setInterval(() => settime(time-1),5000)}</h3>
                  
             
     
              </div> : null

              }
              <div className="skip">
                <button onClick={() => setindex(index + 1)}>Skip</button>
              </div>

            </div>
          </div>) : (<div className="wrapscore">
            <h1>quiz is over</h1>
            <h2> your score is : {score}/10</h2>
          </div>)

      }



    </>

  )
}

export default App
