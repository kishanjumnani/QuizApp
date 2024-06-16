import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'


function App() {
  const [questions, setquestion] = useState({})
  const fetchquestion = () => {
    fetch('https://opentdb.com/api.php?amount=10')
      .then((response) => response.json())
      .then((data) => {
        if (data.response_code == 0)
          ``
        setquestion(data.results);
      })
      .catch((error) => console.log(error))
  }

  useEffect(() => {
    fetchquestion();
  }, [])
  let index = 0;
  console.log(questions);



  return (
    <>
      <div className="conatiner">
        <h1>Lets have quiz</h1>
        <h2>question{ }</h2>
        {questions.response_code==  0 ? <div className="questions">
          <p>{questions[index].question}</p>
        </div> : null
        }

      </div>
    </>

  )
}

export default App
