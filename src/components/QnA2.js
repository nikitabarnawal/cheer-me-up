const QnA2 = ({ prev, handleSubmit, handleData, questionList }) => {
  return (
    <div className="form2">
      {questionList?.subjective_questions.map((question) => (
        <div className="qsn" key={question}>
          {question}
          <input type="text" onChange={(e) => handleData(e, question)} />
        </div>
      ))}
      <button type="buton" onClick={prev}>
        Prev
      </button>
      <button type="buton" onClick={handleSubmit}>
        Submit
      </button>
    </div>
  );
};

export default QnA2;
