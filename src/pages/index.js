import { useState } from "react";
import Introduction from './Introduction';
import ParticipantIllustrate from './ParticipantIllustrate';
import Video from './Video'
import Practice from './Practice'
import Questionaire from './Questionaire';
import QuestionIndex from './QuestionIndex'
import ThankPage from './ThankPage';
const Pages = () => {
  const [pages, setPages] = useState(0);
  const [surveyResult, setSurveyResult] = useState([]);
  const [questions, setQuestions] = useState([]);
  const [userCode, setUserCode] = useState([]);
  if (pages === 0){
    return (
      <Introduction
        setPages={setPages}
        userCode={userCode}
        setUserCode={setUserCode}
      />
    )
  }
  else if (pages === 1) {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    return (
      <ParticipantIllustrate
        setPages={setPages}
      />
    );
  }

  else if (pages === 2){
    window.scrollTo({ top: 0, behavior: 'smooth' });
    return (
      <Video
        setPages={setPages}
      />
    );
  }

  else if (pages === 3){
    window.scrollTo({ top: 0, behavior: 'smooth' });
    return (
      <Practice
        setPages={setPages}
      />
    );
  }

  else if (pages === 4){
    window.scrollTo({ top: 0, behavior: 'smooth' });
    return (
      <Questionaire
        setPages={setPages}
        setSurveyResult={setSurveyResult}
        setQuestions={setQuestions}
      />
    );
  }

  else if (pages === 5){
    window.scrollTo({ top: 0, behavior: 'smooth' });
    console.log(questions);
    return (
      <QuestionIndex
        setPages={setPages}
        surveyResult={surveyResult}
        setSurveyResult={setSurveyResult}
        questions={questions}
      />
    );
  }

  else if (pages === 6){
    window.scrollTo({ top: 0, behavior: 'smooth' });
    return (
      <ThankPage
        surveyResult={surveyResult}
        userCode={userCode}
      />
    );
  }
};

export default Pages;
