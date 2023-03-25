import { useState } from "react";
import QnA from "./QnA";
import QnA2 from "./QnA2.js";

const QuestionForm = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState([]);

  const handleSubmit = () => console.log(1);

  const next = () => setCurrentStep((currentStep) => currentStep + 1);

  const handleData = (e) => {};

  switch (currentStep) {
    case 1:
      return <QnA data={formData} next={next} handleData={handleData} />;
    case 2:
      return <QnA2 data={formData} handleSubmit={handleSubmit} />;
    default:
      return;
  }
};

export default QuestionForm;
