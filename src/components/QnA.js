const QnA = ({ handleData, next }) => {
  return (
    <div className="form1">
      <div className="qna">
        <div className="qsn">Little interest or pleasure in doing things?</div>
        <input
          type="radio"
          id="yes"
          name="yes"
          value="yes"
          onChange={handleData}
        />
          <label for="yes">Yes</label>
        <input
          type="radio"
          id="no"
          name="no"
          value="no"
          onChange={handleData}
        />
          <label for="no">No</label> {" "}
        <input
          type="radio"
          id="notAtAll"
          name="notAtAll"
          value="notAtAll"
          onChange={handleData}
        />
          <label for="notAtAll">not at all</label>
      </div>
      <div className="qna">
        <div className="qsn">Feeling down, depressed, or hopeless?</div>
        <input
          type="radio"
          id="yes"
          name="yes"
          value="yes"
          onChange={handleData}
        />
          <label for="yes">Yes</label>
        <input
          type="radio"
          id="no"
          name="no"
          value="no"
          onChange={handleData}
        />
          <label for="no">No</label> {" "}
        <input
          type="radio"
          id="notAtAll"
          name="notAtAll"
          value="notAtAll"
          onChange={handleData}
        />
          <label for="notAtAll">not at all</label>
      </div>
      <button type="button" onClick={next}>
        next
      </button>
    </div>
  );
};

export default QnA;
