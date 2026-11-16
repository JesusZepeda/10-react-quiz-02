import Options from "./Options.jsx";

function Question({ question, dispatch, answer }) {
  // console.log("question: ", question);
  return (
    <div className="question">
      <h4>{question.question}</h4>

      {/* <div className="options">
        {question.options.map((option, index) => (
          <button className="btn btn-option" key={index}>
            {option}
          </button>
        ))}
      </div> */}
      <Options question={question} dispatch={dispatch} answer={answer} />
    </div>
  );
}

export default Question;
