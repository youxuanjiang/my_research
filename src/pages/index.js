import { useState } from "react";
import Introduction from './Introduction';
import ParticipantIllustrate from './ParticipantIllustrate';
import Background from './Background'
import Practice from './Practice'
import Questionaire from './Questionaire';
import BasicInfo from './BasicInfo';
import ThankPage from './ThankPage';
const Pages = () => {
  const [pages, setPages] = useState(0);
  const [surveyResult, setSurveyResult] = useState([]);
  const [basicInfo, setBasicInfo] = useState([]);
  if (pages === 0){
    return (
      <Introduction
        setPages={setPages}
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
      <Practice
        setPages={setPages}
      />
    );
  }
  else if (pages === 3){
    window.scrollTo({ top: 0, behavior: 'smooth' });
    return (
      <Questionaire
        setPages={setPages}
        setSurveyResult={setSurveyResult}
        setBasicInfo={setBasicInfo}
      />
    );
  }

  else if (pages === 4) {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    return (
      <BasicInfo
        setPages={setPages}
        setBasicInfo={setBasicInfo}
      />
    );
  }

  else if (pages === 5){
    window.scrollTo({ top: 0, behavior: 'smooth' });
    return (
      <ThankPage
        surveyResult={surveyResult}
        basicInfo={basicInfo}
      />
    );
  }
};

export default Pages;
