import React from "react";
import Home from "./components/Home";
import Quiz from "./components/Quiz";

function App() {
  const [beginQuiz, setBeginQuiz] = React.useState(false)
  const [quiz, setQuiz] = React.useState([]);

  React.useEffect(() => {
      fetch("https://opentdb.com/api.php?amount=5&category=27&difficulty=easy&type=multiple")
          .then(res => res.json())
          .then(data => {
              setQuiz(data.results)
          })
  }, [])

  const questions = quiz.map(question => <p>{question.question}</p>)

  function startQuiz() {
    setBeginQuiz(prevBeginQuiz => !prevBeginQuiz)
}

  return (
    <div className="App">
      <main>
        {beginQuiz ? <Quiz questions={questions}/> : <Home />}
        <button className="btn-primary" onClick={startQuiz}>Start quiz</button>
      </main>
    </div>
  );
}

export default App;
