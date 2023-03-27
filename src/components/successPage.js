import { useLocation } from "react-router-dom";

const Success = (route) => {
  const state = useLocation();

  const anxiety = state.state.params.anxiety;
  const depressed = state.state.params.depression;
  const suicidal = state.state.params.suicidal;

  const happy =
    anxiety === "Not Anxiety" ||
    depressed === "Not Depressed" ||
    suicidal === "Not Suicidal";
  const sad =
    anxiety === "Moderate Anxiety" ||
    depressed === "Moderate Depressed" ||
    suicidal === "Moderate Suicidal";
  const vSad =
    anxiety === "Anxiety" ||
    depressed === "Depressed" ||
    suicidal === "Suicidal";

  return (
    <div className="result">
      {sad || vSad ? (
        <>
          <p>
            I think you are feeling low today. Here is a quote to cheer you up.
          </p>
          <p>
            Every day may not be good... but there is something good in every
            day!
          </p>
          <p>Be there for others but never leave yourself behind!</p>
          <p>{`Boy: Where are you going now?
Girl: for suicide..
Boy: Then, Why so much make-up?
Girl: You idiot... Tomorrow my photo will come in newspapper!
`}</p>
        </>
      ) : (
        <>
          <p>You are doing greate today.</p>"Enjoy your day"
        </>
      )}
    </div>
  );
};

export default Success;
