import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import QnA from "./QnA";
import QnA2 from "./QnA2.js";

const QuestionForm = (props) => {
  const [currentStep, setCurrentStep] = useState(1);
  const [questionData, setQuestionData] = useState({});
  const [subjectiveQsnData, setSubjectiveQsnData] = useState({});
  const [questions, setQuestions] = useState([]);

  const navigate = useNavigate();

  useEffect(() => {
    fetch("http://localhost:8000/list-questions/")
      .then((response) => response.json())
      .then((result) => setQuestions(result));
  }, []);

  const next = () => setCurrentStep((currentStep) => currentStep + 1);

  const prev = () => setCurrentStep((currentStep) => currentStep - 1);

  const handleSubmit = () => {
    fetch("http://localhost:8000/cheer-me-up/", {
      method: "POST",
      body: JSON.stringify({
        age: 29,
        gender: "Male",
        one_word_question: questionData,
        subjective_question: subjectiveQsnData,
      }),

      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((response) => response.json())
      .then((response) =>
        navigate("/success", { state: { params: response } }, { replace: true })
      );
  };

  const handleQsnData = (e, question) => {
    const data = {};
    data[question] = e.target.value;
    setQuestionData({ ...questionData, ...data });
  };

  const handleSubjectiveQsnData = (e, question) => {
    const data = {};
    data[question] = e.target.value;
    setSubjectiveQsnData({ ...subjectiveQsnData, ...data });
  };

  const renderData = () => {
    switch (currentStep) {
      case 1:
        return (
          <QnA
            next={next}
            handleData={handleQsnData}
            questionList={questions}
          />
        );
      case 2:
        return (
          <QnA2
            handleSubmit={handleSubmit}
            handleData={handleSubjectiveQsnData}
            prev={prev}
            questionList={questions}
          />
        );
      default:
        return;
    }
  };

  return <div className="qsnForm">{renderData()}</div>;
};

export default QuestionForm;
