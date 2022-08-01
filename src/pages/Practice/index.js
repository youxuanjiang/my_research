import { useState, useEffect, useRef } from "react";
import { CSSTransition } from 'react-transition-group';
import { useBeforeunload } from 'react-beforeunload';
import { API_HOST } from "../../global/constants";
import Scenario from "./Component/scenario";
import Survey from "./Component/survey";
import "./index.css";

const axios = require('axios');
let questions = [{
  'Test':'熱門時段預期人會很多，但即時資訊卻都顯示沒什麼人',
  'Category':'撞球館',
  'Question':'設想現在是假日晚上，你打算去附近的撞球館打撞球。\r\n\r\n由於假日晚上是熱門時段，你預期現在人應該會很多，因此想先確定一下該撞球館的即時資訊。\r\n\r\n即時資訊有提供「撞球館內即時人潮」（如圖一）以及「球桌即時使用狀況」（如圖二）。\r\n\r\n最晚兩個小時後到達球館，也還有充裕的時間可以再球館休息前打完球。',
  'ImageURL':'https://imgur.com/zfwvWyr.jpg'
},{
  'Test':'本身沒有預期且兩種即時資訊相互矛盾',
  'Category':'撞球館',
  'Question':'設想你最近剛搬到新的城市，打算去附近的撞球館打撞球。\r\n\r\n由於不確定現在人多不多，因此出門前想先確定一下該撞球館的即時資訊。\r\n\r\n即時資訊有提供「撞球館內即時人潮」（如圖一）以及「球桌即時使用狀況」（如圖二）。\r\n\r\n最晚半小時後要到達球館，不然會沒有足夠的時間可以打球。',
  'ImageURL':'https://imgur.com/EH1gKZR.jpg'
}];
const result = [];
var scenarioArrCount = 0;
// import "./index.css";

function delay(n){
    return new Promise(function(resolve){
        setTimeout(resolve,n*1000);
    });
}

const Practice = ({setPages}) => {

  // 重新整理、上一頁下一頁、離開時再次詢問。
  const [category, setCategory] = useState('');
  const [scenario, setScenario] = useState([]);
  const [test, setTest] = useState([]);
  const [imageUrl, setImageUrl] = useState([]);
  const [scenarioEntered, setScenarioEntered] = useState(false);
  const [buttonValue, setButtonValue] = useState('下一題');
  const [count, setCount] = useState(1);

  const [urgency, setUrgency] = useState(0);
  const [consistancy, setConsistancy] = useState(0);
  const [expection, setExpection] = useState('');
  const [plausibility, setPlausibility] = useState('');
  const [crowdsourcingType, setCrowdsourcingType] = useState('');
  const [crowdsourcingTypeWUrgency, setCrowdsourcingTypeWUrgency] = useState('');
  const [crowdsourcingTypeWPay, setCrowdsourcingTypeWPay] = useState('');

  const fecthStatus = useRef(true);
  useEffect(() => {
    setTest(questions[scenarioArrCount].Test);
    setCategory(questions[scenarioArrCount].Category);
    setScenario(questions[scenarioArrCount].Question.split('\r\n'));
    setImageUrl(questions[scenarioArrCount].ImageURL);
  }, []);
  useEffect(() => {
    // if(!fecthStatus.current) return;
    setScenarioEntered(true);
  }, scenario);

  const isMobile = window.innerWidth <= 500;
  let links;

  if (!isMobile) {
    links = [
      <a href="https://www.youtube.com/watch?v=97oWUYic3DY" target="_blank" rel="noreferrer">
        <button
          className="videolink"
        >實驗說明影片</button>
      </a>,
      <a href="https://drive.google.com/file/d/10DqAU2s2Zj0fQ77x9ZMJknUYYeuqoIlb/view?usp=sharing" target="_blank" rel="noreferrer">
        <button
          className="introductionlink"
        >參與者說明書</button>
      </a>,
      <a href="https://drive.google.com/file/d/1k6_s6C9dNCq6UtsyaCCQFXhjAjyDwWfp/view?usp=sharing" target="_blank" rel="noreferrer">
        <button
          className="examplelink"
        >驗證補充簡易範例</button>
      </a>
    ];
  }

  else {
    links = [
      <a href="https://www.youtube.com/watch?v=97oWUYic3DY" target="_blank" rel="noreferrer">
        <button
          className="mobile_videolink"
        >實驗說明影片</button>
      </a>,
      <a href="https://drive.google.com/file/d/10DqAU2s2Zj0fQ77x9ZMJknUYYeuqoIlb/view?usp=sharing" target="_blank" rel="noreferrer">
        <button
          className="mobile_introductionlink"
        >參與者說明書</button>
      </a>,
      <a href="https://drive.google.com/file/d/1k6_s6C9dNCq6UtsyaCCQFXhjAjyDwWfp/view?usp=sharing" target="_blank" rel="noreferrer">
        <button
          className="mobile_examplelink"
        >驗證補充簡易範例</button>
      </a>
    ];
  }


  async function clickPrevButton() {
    if (scenarioArrCount === 0) {
      alert("這是第一題，沒有上一題了啦！")
    }
    else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      if (buttonValue === "開始填寫問卷") {
        setButtonValue("下一題")
      }
      setScenarioEntered(false);
      // wait for animation
      await delay(0.4);
      setCount((prev) => {
        return prev - 1;
      });

      result[scenarioArrCount] = {
        "tag":{
          "Category":questions[scenarioArrCount].Category,
          "Plausibility":questions[scenarioArrCount].Plausibility,
          "Urgency":questions[scenarioArrCount].Urgency
        },
        "urgencyScore":urgency,
        "consistancyScore":consistancy,
        "userExpection":expection,
        "userPlausibility":plausibility,
        "crowdsourcingType":crowdsourcingType,
        "crowdsourcingTypeWUrgency":crowdsourcingTypeWUrgency,
        "crowdsourcingTypeWPay":crowdsourcingTypeWPay
      };

      scenarioArrCount -= 1;
      setTest(questions[scenarioArrCount].Test);
      setImageUrl(questions[scenarioArrCount].ImageURL);
      setScenario(questions[scenarioArrCount].Question.split('\r\n'));
      setCategory(questions[scenarioArrCount].Category);

      setUrgency(result[scenarioArrCount].urgencyScore);
      setConsistancy(result[scenarioArrCount].consistancyScore);
      setExpection(result[scenarioArrCount].userExpection);
      setPlausibility(result[scenarioArrCount].userPlausibility);
      setCrowdsourcingType(result[scenarioArrCount].crowdsourcingType);
      setCrowdsourcingTypeWUrgency(result[scenarioArrCount].crowdsourcingTypeWUrgency);
      setCrowdsourcingTypeWPay(result[scenarioArrCount].crowdsourcingTypeWPay);
    }
  }

  async function clickButton() {
    // if (!(urgency && importance && effort)){
    //   alert("問題要填！");
    // }
    // else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      if (scenarioArrCount < result.length) {
        result[scenarioArrCount] = {
          "tag":{
            "Category":questions[scenarioArrCount].Category,
            "Plausibility":questions[scenarioArrCount].Plausibility,
            "Urgency":questions[scenarioArrCount].Urgency
          },
          "urgencyScore":urgency,
          "consistancyScore":consistancy,
          "userExpection":expection,
          "userPlausibility":plausibility,
          "crowdsourcingType":crowdsourcingType,
          "crowdsourcingTypeWUrgency":crowdsourcingTypeWUrgency,
          "crowdsourcingTypeWPay":crowdsourcingTypeWPay
        };
      }else{
        result.push({
          "tag":{
            "Category":questions[scenarioArrCount].Category,
            "Plausibility":questions[scenarioArrCount].Plausibility,
            "Urgency":questions[scenarioArrCount].Urgency
          },
          "urgencyScore":urgency,
          "consistancyScore":consistancy,
          "userExpection":expection,
          "userPlausibility":plausibility,
          "crowdsourcingType":crowdsourcingType,
          "crowdsourcingTypeWUrgency":crowdsourcingTypeWUrgency,
          "crowdsourcingTypeWPay":crowdsourcingTypeWPay
        });
      }
      if (buttonValue === '下一題') {
        setScenarioEntered(false);
        // wait for animation
        await delay(0.4);
        // console.log(result[scenarioArrCount]);
        scenarioArrCount += 1;
        setCount((prev) => {
          return prev + 1;
        });

        if (questions.length === scenarioArrCount+1){
          setButtonValue('開始填寫問卷')
        }
        // console.log(scenarioArrCount);
        // console.log(questions[scenarioArrCount].Question.split('\n'));
        setImageUrl(questions[scenarioArrCount].ImageURL);

        setTest(questions[scenarioArrCount].Test);
        setScenario(questions[scenarioArrCount].Question.split('\r\n'));
        setCategory(questions[scenarioArrCount].Category);
        if (scenarioArrCount < result.length) {
          setUrgency(result[scenarioArrCount].urgencyScore);
          setConsistancy(result[scenarioArrCount].consistancyScore);
          setExpection(result[scenarioArrCount].userExpection);
          setPlausibility(result[scenarioArrCount].userPlausibility);
          setCrowdsourcingType(result[scenarioArrCount].crowdsourcingType);
          setCrowdsourcingTypeWUrgency(result[scenarioArrCount].crowdsourcingTypeWUrgency);
          setCrowdsourcingTypeWPay(result[scenarioArrCount].crowdsourcingTypeWPay);
        }
        else{
          setUrgency(0);
          setConsistancy(0);
          setExpection('');
          setPlausibility('');
          setCrowdsourcingType('');
          setCrowdsourcingTypeWUrgency('');
          setCrowdsourcingTypeWPay('');
        }
      }else {
        setPages(4);
      }
    }
  // }
  return (
    <div>
      {
        links.map((link) => {
            return(<span>{link}</span>)
        })
      }
      <CSSTransition
        in={scenarioEntered}
        classNames="scenarioEntered"
        timeout={500}
        unmountOnExit={false}
      >
        <Scenario
          number={`${count}`}
          test={test}
          scenario={scenario}
          image={imageUrl}
        />
      </CSSTransition>
      <Survey
        category={category}
        urgency={urgency}
        setUrgency={setUrgency}
        consistancy={consistancy}
        setConsistancy={setConsistancy}
        expection={expection}
        setExpection={setExpection}
        plausibility={plausibility}
        setPlausibility={setPlausibility}
        crowdsourcingType={crowdsourcingType}
        setCrowdsourcingType={setCrowdsourcingType}
        crowdsourcingTypeWUrgency={crowdsourcingTypeWUrgency}
        setCrowdsourcingTypeWUrgency={setCrowdsourcingTypeWUrgency}
        crowdsourcingTypeWPay={crowdsourcingTypeWPay}
        setCrowdsourcingTypeWPay={setCrowdsourcingTypeWPay}
      />
      <button
        className="prev"
        onClick={clickPrevButton}
      >上一題</button>
      <button
        className="next"
        onClick={clickButton}
      >{buttonValue}</button>
    </div>
  );
};

export default Practice;
