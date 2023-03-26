const QnA = ({ handleData, next, questionList }) => {
  return (
    <div className="form1">
      {questionList.questions?.map((question) => (
        <div className="qsn" key={question}>
          {question}
          <div className="radioBtn">
            <input
              type="radio"
              id="yes"
              name="yes"
              value="yes"
              onChange={(e) => handleData(e, question)}
            />
              <label htmlFor="yes">Yes</label>
            <input
              type="radio"
              id="no"
              name="no"
              value="no"
              onChange={(e) => handleData(e, question)}
            />
              <label htmlFor="no">No</label> {" "}
            <input
              type="radio"
              id="notAtAll"
              name="notAtAll"
              value="notAtAll"
              onChange={(e) => handleData(e, question)}
            />
              <label htmlFor="notAtAll">not at all</label>
          </div>
        </div>
      ))}

      <button type="button" onClick={next}>
        next
      </button>
    </div>
  );
};

export default QnA;
