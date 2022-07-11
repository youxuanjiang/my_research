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
  'Question':'你今天打算去附近的撞球館打撞球，由於假日晚上是熱門時段，因此想先確定一下該撞球館的即時資訊，如果人太多的話就去稍微遠一點的另外一間（距離關係如圖一），即時資訊有提供即時人潮資訊（如圖二）以及球桌使用狀況（如圖三）。\r\n\r\n此時兩間撞球館都剩兩個半小時打烊，另外你必須預留一個小時的打球時間。',
  'ImageURL':'https://imgur.com/HW0gS6D.jpg'
},{
  'Test':'本身沒有預期且兩種即時資訊相互矛盾',
  'Category':'撞球館',
  'Question':'你今天打算去附近的撞球館打撞球，由於假日晚上是熱門時段，因此想先確定一下該撞球館的即時資訊，如果人太多的話就去稍微遠一點的另外一間（距離關係如圖一），即時資訊有提供即時人潮資訊（如圖二）以及球桌使用狀況（如圖三）。\r\n\r\n此時兩間撞球館都剩一個半小時打烊，另外你必須預留一個小時的打球時間。',
  'ImageURL':'https://imgur.com/TRKh6G1.jpg'
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
  const [effort, setEffort] = useState(0);
  const [payment, setPayment] = useState(0);

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
        "effortScore":effort,
        "crowdsourcingType":crowdsourcingType,
        "payment":payment
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
      setEffort(result[scenarioArrCount].effortScore);
      setCrowdsourcingType(result[scenarioArrCount].crowdsourcingType);
      setPayment(result[scenarioArrCount].payment);
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
          "effortScore":effort,
          "crowdsourcingType":crowdsourcingType,
          "payment":payment
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
          "effortScore":effort,
          "crowdsourcingType":crowdsourcingType,
          "payment":payment
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
          setEffort(result[scenarioArrCount].effortScore);
          setCrowdsourcingType(result[scenarioArrCount].crowdsourcingType);
          setPayment(result[scenarioArrCount].payment);
        }
        else{
          setUrgency(0);
          setConsistancy(0);
          setExpection('');
          setPlausibility('');
          setEffort(0);
          setCrowdsourcingType('');
          setPayment(0);
        }
      }else {
        setPages(3);
      }
    }
  // }
  return (
    <div>
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
        effort={effort}
        setEffort={setEffort}
        payment={payment}
        setPayment={setPayment}
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
