import { useState } from "react";
import Introduction from './Introduction';
import ParticipantIllustrate from './ParticipantIllustrate';
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
    return (
      <ParticipantIllustrate
        setPages={setPages}
      />
    );
  }
  else if (pages === 2){
    return (
      <Questionaire
        setPages={setPages}
        setSurveyResult={setSurveyResult}
      />
    );
  }

  else if (pages === 3) {
    return (
      <BasicInfo
        setPages={setPages}
        setBasicInfo={setBasicInfo}
      />
    );
  }

  else if (pages === 4){
    return (
      <ThankPage
        surveyResult={surveyResult}
        basicInfo={basicInfo}
      />
    );
  }
};

export default Pages;
