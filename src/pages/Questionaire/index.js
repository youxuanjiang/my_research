import { useState, useEffect, useRef } from "react";
import { CSSTransition } from 'react-transition-group';
import { useBeforeunload } from 'react-beforeunload';
import { API_HOST } from "../../global/constants";
import Scenario from "./Component/scenario";
import Survey from "./Component/survey";
import "./index.css";

const axios = require('axios');
let questions = [];
const result = [];
var scenarioArrCount = 0;
// import "./index.css";

async function fetchData(setScenario, setImageUrl, setHighline, fecthStatus) {
  fecthStatus.current = false;
  // 若沒辦法成功送出request看這篇：https://shubo.io/what-is-cors/
  const tmp_questions_group = {};
  const groupTag = [];
  try {
    const res = await axios.get(API_HOST + '/questionaire');
    res.data.forEach((question) => {
      // 從資料庫篩選真正要用的題目
      if (!question.Category.includes('!')) {
        const tmp_groupTag = question.Category + '/' + question.Importance + '/' + question.Effort;
        try {
          tmp_questions_group[tmp_groupTag].push(question);
        } catch (e) {
          groupTag.push(tmp_groupTag);
          tmp_questions_group[tmp_groupTag] = [];
          tmp_questions_group[tmp_groupTag].push(question);
        }
      }
    });
  } catch (e) {
    console.log(e);
  }
  groupTag.forEach((tag) => {
    const urgency = ['high','low'];
    const randomUrgency = urgency[Math.floor(Math.random() * urgency.length)];
    const ifPush = Math.floor(Math.random() * 2)
    if(randomUrgency === 'high'){

      if (ifPush) {
        tmp_questions_group[tag].forEach((question) => {
          if (question.Urgency === 'high' && question.QuestionNo === 1) {
            questions.push(question);
          }
        });
        tmp_questions_group[tag].forEach((question) => {
          if (question.Urgency === 'low' && question.QuestionNo === 2) {
            questions.push(question);
          }
        });
      }

      else {
        tmp_questions_group[tag].forEach((question) => {
          if (question.Urgency === 'low' && question.QuestionNo === 2) {
            questions = [question].concat(questions);
          }
        });
        tmp_questions_group[tag].forEach((question) => {
          if (question.Urgency === 'high' && question.QuestionNo === 1) {
            questions = [question].concat(questions);
          }
        });
      }
    }else{

      if (ifPush) {
        tmp_questions_group[tag].forEach((question) => {
          if (question.Urgency === 'low' && question.QuestionNo === 1) {
            questions.push(question);
          }
        });
        tmp_questions_group[tag].forEach((question) => {
          if (question.Urgency === 'high' && question.QuestionNo === 2) {
            questions.push(question);
          }
        });
      }

      else {
        tmp_questions_group[tag].forEach((question) => {
          if (question.Urgency === 'high' && question.QuestionNo === 2) {
            questions = [question].concat(questions);
          }
        });
        tmp_questions_group[tag].forEach((question) => {
          if (question.Urgency === 'low' && question.QuestionNo === 1) {
            questions = [question].concat(questions);
          }
        });
      }
    }
  });
  setScenario(questions[scenarioArrCount].Question.split("<->\r\n")[0].split('\r\n'));
  setImageUrl(questions[scenarioArrCount].image_url);
  setHighline(questions[scenarioArrCount].Question.split("<->\r\n")[1].split('\r\n'));
}

function delay(n){
    return new Promise(function(resolve){
        setTimeout(resolve,n*1000);
    });
}

const Questionaire = ({setPages, setSurveyResult}) => {

  // 重新整理、上一頁下一頁、離開時再次詢問。
  useBeforeunload(() => {
    return '確定要離開頁面嗎？'
  });

  const [scenario, setScenario] = useState([]);
  const [imageUrl, setImageUrl] = useState([]);
  const [highline, setHighline] = useState([]);
  const [scenarioEntered, setScenarioEntered] = useState(false);
  const [buttonValue, setButtonValue] = useState('下一題');
  const [count, setCount] = useState(1);
  const [subCount, setSubCount] = useState(1);
  const [urgency, setUrgency] = useState(0);
  const [importance, setImportance] = useState(0);
  const [effort, setEffort] = useState(0);
  const [payment, setPayment] = useState(0);

  const fecthStatus = useRef(true);

  // 第一次渲染畫面的時候，只會執行一次
  useEffect(() => {
    if(!fecthStatus.current) return;
    fetchData(setScenario, setImageUrl, setHighline, fecthStatus);
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
      if (buttonValue === "填寫基本資料") {
        setButtonValue("下一題")
      }
      setScenarioEntered(false);
      // wait for animation
      await delay(0.4);
      if (scenarioArrCount % 2 === 0) {
        setCount((prev) => {
          return prev - 1;
        });
      }
      if (scenarioArrCount < result.length) {
        result[scenarioArrCount] = {
          "tag":{
            "Category":questions[scenarioArrCount].Category,
            "Importance":questions[scenarioArrCount].Importance,
            "Effort":questions[scenarioArrCount].Effort,
            "Urgency":questions[scenarioArrCount].Urgency
          },
          "usgencyScore":urgency,
          "importanceScore":importance,
          "effortScore":effort,
          "paymentScore":payment
        };
      }else{
        result.push({
          "tag":{
            "Category":questions[scenarioArrCount].Category,
            "Importance":questions[scenarioArrCount].Importance,
            "Effort":questions[scenarioArrCount].Effort,
            "Urgency":questions[scenarioArrCount].Urgency
          },
          "usgencyScore":urgency,
          "importanceScore":importance,
          "effortScore":effort,
          "paymentScore":payment
        });
      }
      scenarioArrCount -= 1;
      setImageUrl(questions[scenarioArrCount].image_url);
      setScenario(questions[scenarioArrCount].Question.split("<->\r\n")[0].split('\r\n'));
      setHighline(questions[scenarioArrCount].Question.split("<->\r\n")[1].split('\r\n'));
      setSubCount(questions[scenarioArrCount].QuestionNo);
      setUrgency(result[scenarioArrCount].usgencyScore);
      setImportance(result[scenarioArrCount].importanceScore);
      setEffort(result[scenarioArrCount].effortScore);
      setPayment(result[scenarioArrCount].paymentScore);
    }
  }

  async function clickButton() {
    if (!(urgency && importance && effort && payment)){
      alert("問題要填喔你這小淘氣！");
    }
    else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      if (scenarioArrCount < result.length) {
        result[scenarioArrCount] = {
          "tag":{
            "Category":questions[scenarioArrCount].Category,
            "Importance":questions[scenarioArrCount].Importance,
            "Effort":questions[scenarioArrCount].Effort,
            "Urgency":questions[scenarioArrCount].Urgency
          },
          "usgencyScore":urgency,
          "importanceScore":importance,
          "effortScore":effort,
          "paymentScore":payment
        };
      }else{
        result.push({
          "tag":{
            "Category":questions[scenarioArrCount].Category,
            "Importance":questions[scenarioArrCount].Importance,
            "Effort":questions[scenarioArrCount].Effort,
            "Urgency":questions[scenarioArrCount].Urgency
          },
          "usgencyScore":urgency,
          "importanceScore":importance,
          "effortScore":effort,
          "paymentScore":payment
        });
      }
      if (buttonValue === '下一題') {
        setScenarioEntered(false);
        // wait for animation
        await delay(0.4);
        // console.log(result[scenarioArrCount]);
        scenarioArrCount += 1;
        if (scenarioArrCount % 2 === 0) {
          setCount((prev) => {
            return prev + 1;
          });
        }
        if (questions.length === scenarioArrCount+1){
          setButtonValue('填寫基本資料')
        }
        // console.log(scenarioArrCount);
        // console.log(questions[scenarioArrCount].Question.split('\n'));
        setImageUrl(questions[scenarioArrCount].image_url);
        setScenario(questions[scenarioArrCount].Question.split("<->\r\n")[0].split('\r\n'));
        setHighline(questions[scenarioArrCount].Question.split("<->\r\n")[1].split('\r\n'));
        setSubCount(questions[scenarioArrCount].QuestionNo);
        if (scenarioArrCount < result.length) {
          setUrgency(result[scenarioArrCount].usgencyScore);
          setImportance(result[scenarioArrCount].importanceScore);
          setEffort(result[scenarioArrCount].effortScore);
          setPayment(result[scenarioArrCount].paymentScore);
        }
        else{
          setUrgency([0,0]);
          setImportance([0,0]);
          setEffort([0,0]);
          setPayment(0);
        }
      }else {
        if(window.confirm("確定要提交問卷了嗎？提交之後就沒辦法再修改了唷！")){
          console.log(result);
          setSurveyResult(result);
          setPages(3);
        }
      }
    }
  }
  return (
    <div>
      <CSSTransition
        in={scenarioEntered}
        classNames="scenarioEntered"
        timeout={500}
        unmountOnExit={false}
      >
        <Scenario
          number={`${count} - ${subCount}`}
          scenario={scenario}
          image={imageUrl}
          highline={highline}
        />
      </CSSTransition>
      <Survey
        urgency={urgency}
        setUrgency={setUrgency}
        importance={importance}
        setImportance={setImportance}
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

export default Questionaire;
