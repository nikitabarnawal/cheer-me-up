const QnA2 = ({ handleSubmit }) => {
  return (
    <div className="form2">
      <div className="qna2">
        <p>what brings you in today?</p>
        <textarea />
      </div>
      <button type="buton" onClick={handleSubmit}>
        Submit
      </button>
    </div>
  );
};

export default QnA2;
