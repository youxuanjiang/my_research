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


async function createPilotCode() {
  try {
    const res = await axios.get(API_HOST + '/pilotinfo');
    const userNum = res.data.length + 1;
    return 'Pilot_' + userNum;
  } catch (e) {
    console.log(e);
    return 'error create pilot code';
  }
}

function shuffle(array) {
  let currentIndex = array.length,  randomIndex;

  // While there remain elements to shuffle.
  while (currentIndex != 0) {

    // Pick a remaining element.
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    // And swap it with the current element.
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex], array[currentIndex]];
  }

  return array;
}

async function fetchData(setScenario, setTest, setImageUrl, fecthStatus) {
  fecthStatus.current = false;
  // 若沒辦法成功送出request看這篇：https://shubo.io/what-is-cors/
  try {
    const res = await axios.get(API_HOST + '/questionaire');
    const crowd_occupancy_order = Math.floor( Math.random() * 5 ) + 1;
    const question_crowd_occupancy = [];
    const location_time_order = Math.floor( Math.random() * 5 ) + 1;
    const question_location_time = [];
    res.data.forEach((question) => {
      // 從資料庫篩選真正要用的題目
      if (question.Category.includes('房') || question.Category.includes('餐') || question.Category.includes('館') || question.Category.includes('停車')) {
        try {
          if (crowd_occupancy_order === 1) {
            if (question.Category.includes('健身房')) {
              if (question.Expected.data[0] === 1 && question.Plausibility === 'AB' && question.Urgency === 'HIGH') {
                question_crowd_occupancy.push(question);
              }
              if (question.Expected.data[0] === 1 && question.Plausibility === 'AA' && question.Urgency === 'LOW') {
                question_crowd_occupancy.push(question);
              }
            }
            if (question.Category.includes('圖書館')) {
              if (question.Expected.data[0] === 1 && question.Plausibility === 'AB' && question.Urgency === 'LOW') {
                question_crowd_occupancy.push(question);
              }
              if (question.Expected.data[0] === 0 && question.Plausibility === 'AB' && question.Urgency === 'HIGH') {
                question_crowd_occupancy.push(question);
              }
            }
            if (question.Category.includes('桌球館')) {
              if (question.Expected.data[0] === 1 && question.Plausibility === 'BB' && question.Urgency === 'HIGH') {
                question_crowd_occupancy.push(question);
              }
              if (question.Expected.data[0] === 0 && question.Plausibility === 'AB' && question.Urgency === 'LOW') {
                question_crowd_occupancy.push(question);
              }
            }
            if (question.Category.includes('餐廳')) {
              if (question.Expected.data[0] === 1 && question.Plausibility === 'BB' && question.Urgency === 'LOW') {
                question_crowd_occupancy.push(question);
              }
              if (question.Expected.data[0] === 0 && question.Plausibility === 'AA' && question.Urgency === 'HIGH') {
                question_crowd_occupancy.push(question);
              }
            }
            if (question.Category.includes('停車場')) {
              if (question.Expected.data[0] === 1 && question.Plausibility === 'AA' && question.Urgency === 'HIGH') {
                question_crowd_occupancy.push(question);
              }
              if (question.Expected.data[0] === 0 && question.Plausibility === 'AA' && question.Urgency === 'LOW') {
                question_crowd_occupancy.push(question);
              }
            }
          }
          if (crowd_occupancy_order === 2) {
            if (question.Category.includes('圖書館')) {
              if (question.Expected.data[0] === 1 && question.Plausibility === 'AB' && question.Urgency === 'HIGH') {
                question_crowd_occupancy.push(question);
              }
              if (question.Expected.data[0] === 1 && question.Plausibility === 'AA' && question.Urgency === 'LOW') {
                question_crowd_occupancy.push(question);
              }
            }
            if (question.Category.includes('桌球館')) {
              if (question.Expected.data[0] === 1 && question.Plausibility === 'AB' && question.Urgency === 'LOW') {
                question_crowd_occupancy.push(question);
              }
              if (question.Expected.data[0] === 0 && question.Plausibility === 'AB' && question.Urgency === 'HIGH') {
                question_crowd_occupancy.push(question);
              }
            }
            if (question.Category.includes('餐廳')) {
              if (question.Expected.data[0] === 1 && question.Plausibility === 'BB' && question.Urgency === 'HIGH') {
                question_crowd_occupancy.push(question);
              }
              if (question.Expected.data[0] === 0 && question.Plausibility === 'AB' && question.Urgency === 'LOW') {
                question_crowd_occupancy.push(question);
              }
            }
            if (question.Category.includes('停車場')) {
              if (question.Expected.data[0] === 1 && question.Plausibility === 'BB' && question.Urgency === 'LOW') {
                question_crowd_occupancy.push(question);
              }
              if (question.Expected.data[0] === 0 && question.Plausibility === 'AA' && question.Urgency === 'HIGH') {
                question_crowd_occupancy.push(question);
              }
            }
            if (question.Category.includes('健身房')) {
              if (question.Expected.data[0] === 1 && question.Plausibility === 'AA' && question.Urgency === 'HIGH') {
                question_crowd_occupancy.push(question);
              }
              if (question.Expected.data[0] === 0 && question.Plausibility === 'AA' && question.Urgency === 'LOW') {
                question_crowd_occupancy.push(question);
              }
            }
          }
          if (crowd_occupancy_order === 3) {
            if (question.Category.includes('桌球館')) {
              if (question.Expected.data[0] === 1 && question.Plausibility === 'AB' && question.Urgency === 'HIGH') {
                question_crowd_occupancy.push(question);
              }
              if (question.Expected.data[0] === 1 && question.Plausibility === 'AA' && question.Urgency === 'LOW') {
                question_crowd_occupancy.push(question);
              }
            }
            if (question.Category.includes('餐廳')) {
              if (question.Expected.data[0] === 1 && question.Plausibility === 'AB' && question.Urgency === 'LOW') {
                question_crowd_occupancy.push(question);
              }
              if (question.Expected.data[0] === 0 && question.Plausibility === 'AB' && question.Urgency === 'HIGH') {
                question_crowd_occupancy.push(question);
              }
            }
            if (question.Category.includes('停車場')) {
              if (question.Expected.data[0] === 1 && question.Plausibility === 'BB' && question.Urgency === 'HIGH') {
                question_crowd_occupancy.push(question);
              }
              if (question.Expected.data[0] === 0 && question.Plausibility === 'AB' && question.Urgency === 'LOW') {
                question_crowd_occupancy.push(question);
              }
            }
            if (question.Category.includes('健身房')) {
              if (question.Expected.data[0] === 1 && question.Plausibility === 'BB' && question.Urgency === 'LOW') {
                question_crowd_occupancy.push(question);
              }
              if (question.Expected.data[0] === 0 && question.Plausibility === 'AA' && question.Urgency === 'HIGH') {
                question_crowd_occupancy.push(question);
              }
            }
            if (question.Category.includes('圖書館')) {
              if (question.Expected.data[0] === 1 && question.Plausibility === 'AA' && question.Urgency === 'HIGH') {
                question_crowd_occupancy.push(question);
              }
              if (question.Expected.data[0] === 0 && question.Plausibility === 'AA' && question.Urgency === 'LOW') {
                question_crowd_occupancy.push(question);
              }
            }
          }
          if (crowd_occupancy_order === 4) {
            if (question.Category.includes('餐廳')) {
              if (question.Expected.data[0] === 1 && question.Plausibility === 'AB' && question.Urgency === 'HIGH') {
                question_crowd_occupancy.push(question);
              }
              if (question.Expected.data[0] === 1 && question.Plausibility === 'AA' && question.Urgency === 'LOW') {
                question_crowd_occupancy.push(question);
              }
            }
            if (question.Category.includes('停車場')) {
              if (question.Expected.data[0] === 1 && question.Plausibility === 'AB' && question.Urgency === 'LOW') {
                question_crowd_occupancy.push(question);
              }
              if (question.Expected.data[0] === 0 && question.Plausibility === 'AB' && question.Urgency === 'HIGH') {
                question_crowd_occupancy.push(question);
              }
            }
            if (question.Category.includes('健身房')) {
              if (question.Expected.data[0] === 1 && question.Plausibility === 'BB' && question.Urgency === 'HIGH') {
                question_crowd_occupancy.push(question);
              }
              if (question.Expected.data[0] === 0 && question.Plausibility === 'AB' && question.Urgency === 'LOW') {
                question_crowd_occupancy.push(question);
              }
            }
            if (question.Category.includes('圖書館')) {
              if (question.Expected.data[0] === 1 && question.Plausibility === 'BB' && question.Urgency === 'LOW') {
                question_crowd_occupancy.push(question);
              }
              if (question.Expected.data[0] === 0 && question.Plausibility === 'AA' && question.Urgency === 'HIGH') {
                question_crowd_occupancy.push(question);
              }
            }
            if (question.Category.includes('桌球館')) {
              if (question.Expected.data[0] === 1 && question.Plausibility === 'AA' && question.Urgency === 'HIGH') {
                question_crowd_occupancy.push(question);
              }
              if (question.Expected.data[0] === 0 && question.Plausibility === 'AA' && question.Urgency === 'LOW') {
                question_crowd_occupancy.push(question);
              }
            }
          }
          if (crowd_occupancy_order === 5) {
            if (question.Category.includes('停車場')) {
              if (question.Expected.data[0] === 1 && question.Plausibility === 'AB' && question.Urgency === 'HIGH') {
                question_crowd_occupancy.push(question);
              }
              if (question.Expected.data[0] === 1 && question.Plausibility === 'AA' && question.Urgency === 'LOW') {
                question_crowd_occupancy.push(question);
              }
            }
            if (question.Category.includes('健身房')) {
              if (question.Expected.data[0] === 1 && question.Plausibility === 'AB' && question.Urgency === 'LOW') {
                question_crowd_occupancy.push(question);
              }
              if (question.Expected.data[0] === 0 && question.Plausibility === 'AB' && question.Urgency === 'HIGH') {
                question_crowd_occupancy.push(question);
              }
            }
            if (question.Category.includes('圖書館')) {
              if (question.Expected.data[0] === 1 && question.Plausibility === 'BB' && question.Urgency === 'HIGH') {
                question_crowd_occupancy.push(question);
              }
              if (question.Expected.data[0] === 0 && question.Plausibility === 'AB' && question.Urgency === 'LOW') {
                question_crowd_occupancy.push(question);
              }
            }
            if (question.Category.includes('桌球館')) {
              if (question.Expected.data[0] === 1 && question.Plausibility === 'BB' && question.Urgency === 'LOW') {
                question_crowd_occupancy.push(question);
              }
              if (question.Expected.data[0] === 0 && question.Plausibility === 'AA' && question.Urgency === 'HIGH') {
                question_crowd_occupancy.push(question);
              }
            }
            if (question.Category.includes('餐廳')) {
              if (question.Expected.data[0] === 1 && question.Plausibility === 'AA' && question.Urgency === 'HIGH') {
                question_crowd_occupancy.push(question);
              }
              if (question.Expected.data[0] === 0 && question.Plausibility === 'AA' && question.Urgency === 'LOW') {
                question_crowd_occupancy.push(question);
              }
            }
          }
        } catch (e) {
          console.log('error while add question: ' + e);
        }
      }
      else {
        try {
          if (location_time_order === 1) {
            if (question.Category.includes('火車')) {
              if (question.Expected.data[0] === 1 && question.Plausibility === 'AB' && question.Urgency === 'HIGH') {
                question_location_time.push(question);
              }
              if (question.Expected.data[0] === 1 && question.Plausibility === 'AA' && question.Urgency === 'LOW') {
                question_location_time.push(question);
              }
            }
            if (question.Category.includes('公車')) {
              if (question.Expected.data[0] === 1 && question.Plausibility === 'AB' && question.Urgency === 'LOW') {
                question_location_time.push(question);
              }
              if (question.Expected.data[0] === 0 && question.Plausibility === 'AB' && question.Urgency === 'HIGH') {
                question_location_time.push(question);
              }
            }
            if (question.Category.includes('客運')) {
              if (question.Expected.data[0] === 1 && question.Plausibility === 'BB' && question.Urgency === 'HIGH') {
                question_location_time.push(question);
              }
              if (question.Expected.data[0] === 0 && question.Plausibility === 'AB' && question.Urgency === 'LOW') {
                question_location_time.push(question);
              }
            }
            if (question.Category.includes('船')) {
              if (question.Expected.data[0] === 1 && question.Plausibility === 'BB' && question.Urgency === 'LOW') {
                question_location_time.push(question);
              }
              if (question.Expected.data[0] === 0 && question.Plausibility === 'AA' && question.Urgency === 'HIGH') {
                question_location_time.push(question);
              }
            }
            if (question.Category.includes('飛機')) {
              if (question.Expected.data[0] === 1 && question.Plausibility === 'AA' && question.Urgency === 'HIGH') {
                question_location_time.push(question);
              }
              if (question.Expected.data[0] === 0 && question.Plausibility === 'AA' && question.Urgency === 'LOW') {
                question_location_time.push(question);
              }
            }
          }
          if (location_time_order === 2) {
            if (question.Category.includes('公車')) {
              if (question.Expected.data[0] === 1 && question.Plausibility === 'AB' && question.Urgency === 'HIGH') {
                question_location_time.push(question);
              }
              if (question.Expected.data[0] === 1 && question.Plausibility === 'AA' && question.Urgency === 'LOW') {
                question_location_time.push(question);
              }
            }
            if (question.Category.includes('客運')) {
              if (question.Expected.data[0] === 1 && question.Plausibility === 'AB' && question.Urgency === 'LOW') {
                question_location_time.push(question);
              }
              if (question.Expected.data[0] === 0 && question.Plausibility === 'AB' && question.Urgency === 'HIGH') {
                question_location_time.push(question);
              }
            }
            if (question.Category.includes('船')) {
              if (question.Expected.data[0] === 1 && question.Plausibility === 'BB' && question.Urgency === 'HIGH') {
                question_location_time.push(question);
              }
              if (question.Expected.data[0] === 0 && question.Plausibility === 'AB' && question.Urgency === 'LOW') {
                question_location_time.push(question);
              }
            }
            if (question.Category.includes('飛機')) {
              if (question.Expected.data[0] === 1 && question.Plausibility === 'BB' && question.Urgency === 'LOW') {
                question_location_time.push(question);
              }
              if (question.Expected.data[0] === 0 && question.Plausibility === 'AA' && question.Urgency === 'HIGH') {
                question_location_time.push(question);
              }
            }
            if (question.Category.includes('火車')) {
              if (question.Expected.data[0] === 1 && question.Plausibility === 'AA' && question.Urgency === 'HIGH') {
                question_location_time.push(question);
              }
              if (question.Expected.data[0] === 0 && question.Plausibility === 'AA' && question.Urgency === 'LOW') {
                question_location_time.push(question);
              }
            }
          }
          if (location_time_order === 3) {
            if (question.Category.includes('客運')) {
              if (question.Expected.data[0] === 1 && question.Plausibility === 'AB' && question.Urgency === 'HIGH') {
                question_location_time.push(question);
              }
              if (question.Expected.data[0] === 1 && question.Plausibility === 'AA' && question.Urgency === 'LOW') {
                question_location_time.push(question);
              }
            }
            if (question.Category.includes('船')) {
              if (question.Expected.data[0] === 1 && question.Plausibility === 'AB' && question.Urgency === 'LOW') {
                question_location_time.push(question);
              }
              if (question.Expected.data[0] === 0 && question.Plausibility === 'AB' && question.Urgency === 'HIGH') {
                question_location_time.push(question);
              }
            }
            if (question.Category.includes('飛機')) {
              if (question.Expected.data[0] === 1 && question.Plausibility === 'BB' && question.Urgency === 'HIGH') {
                question_location_time.push(question);
              }
              if (question.Expected.data[0] === 0 && question.Plausibility === 'AB' && question.Urgency === 'LOW') {
                question_location_time.push(question);
              }
            }
            if (question.Category.includes('火車')) {
              if (question.Expected.data[0] === 1 && question.Plausibility === 'BB' && question.Urgency === 'LOW') {
                question_location_time.push(question);
              }
              if (question.Expected.data[0] === 0 && question.Plausibility === 'AA' && question.Urgency === 'HIGH') {
                question_location_time.push(question);
              }
            }
            if (question.Category.includes('公車')) {
              if (question.Expected.data[0] === 1 && question.Plausibility === 'AA' && question.Urgency === 'HIGH') {
                question_location_time.push(question);
              }
              if (question.Expected.data[0] === 0 && question.Plausibility === 'AA' && question.Urgency === 'LOW') {
                question_location_time.push(question);
              }
            }
          }
          if (location_time_order === 4) {
            if (question.Category.includes('船')) {
              if (question.Expected.data[0] === 1 && question.Plausibility === 'AB' && question.Urgency === 'HIGH') {
                question_location_time.push(question);
              }
              if (question.Expected.data[0] === 1 && question.Plausibility === 'AA' && question.Urgency === 'LOW') {
                question_location_time.push(question);
              }
            }
            if (question.Category.includes('飛機')) {
              if (question.Expected.data[0] === 1 && question.Plausibility === 'AB' && question.Urgency === 'LOW') {
                question_location_time.push(question);
              }
              if (question.Expected.data[0] === 0 && question.Plausibility === 'AB' && question.Urgency === 'HIGH') {
                question_location_time.push(question);
              }
            }
            if (question.Category.includes('火車')) {
              if (question.Expected.data[0] === 1 && question.Plausibility === 'BB' && question.Urgency === 'HIGH') {
                question_location_time.push(question);
              }
              if (question.Expected.data[0] === 0 && question.Plausibility === 'AB' && question.Urgency === 'LOW') {
                question_location_time.push(question);
              }
            }
            if (question.Category.includes('公車')) {
              if (question.Expected.data[0] === 1 && question.Plausibility === 'BB' && question.Urgency === 'LOW') {
                question_location_time.push(question);
              }
              if (question.Expected.data[0] === 0 && question.Plausibility === 'AA' && question.Urgency === 'HIGH') {
                question_location_time.push(question);
              }
            }
            if (question.Category.includes('客運')) {
              if (question.Expected.data[0] === 1 && question.Plausibility === 'AA' && question.Urgency === 'HIGH') {
                question_location_time.push(question);
              }
              if (question.Expected.data[0] === 0 && question.Plausibility === 'AA' && question.Urgency === 'LOW') {
                question_location_time.push(question);
              }
            }
          }
          if (location_time_order === 5) {
            if (question.Category.includes('飛機')) {
              if (question.Expected.data[0] === 1 && question.Plausibility === 'AB' && question.Urgency === 'HIGH') {
                question_location_time.push(question);
              }
              if (question.Expected.data[0] === 1 && question.Plausibility === 'AA' && question.Urgency === 'LOW') {
                question_location_time.push(question);
              }
            }
            if (question.Category.includes('火車')) {
              if (question.Expected.data[0] === 1 && question.Plausibility === 'AB' && question.Urgency === 'LOW') {
                question_location_time.push(question);
              }
              if (question.Expected.data[0] === 0 && question.Plausibility === 'AB' && question.Urgency === 'HIGH') {
                question_location_time.push(question);
              }
            }
            if (question.Category.includes('公車')) {
              if (question.Expected.data[0] === 1 && question.Plausibility === 'BB' && question.Urgency === 'HIGH') {
                question_location_time.push(question);
              }
              if (question.Expected.data[0] === 0 && question.Plausibility === 'AB' && question.Urgency === 'LOW') {
                question_location_time.push(question);
              }
            }
            if (question.Category.includes('客運')) {
              if (question.Expected.data[0] === 1 && question.Plausibility === 'BB' && question.Urgency === 'LOW') {
                question_location_time.push(question);
              }
              if (question.Expected.data[0] === 0 && question.Plausibility === 'AA' && question.Urgency === 'HIGH') {
                question_location_time.push(question);
              }
            }
            if (question.Category.includes('船')) {
              if (question.Expected.data[0] === 1 && question.Plausibility === 'AA' && question.Urgency === 'HIGH') {
                question_location_time.push(question);
              }
              if (question.Expected.data[0] === 0 && question.Plausibility === 'AA' && question.Urgency === 'LOW') {
                question_location_time.push(question);
              }
            }
          }
        } catch (e) {
          console.log('error while add question: ' + e);
        }
      }
    });
    shuffle(question_crowd_occupancy);
    shuffle(question_location_time);
    for (let i = 0; i < question_crowd_occupancy.length; i++) {
      questions.push(question_crowd_occupancy[i]);
      questions.push(question_location_time[i])
    }
  } catch (e) {
    console.log('error while get API: ' + e);
  }
  let _expected, _plausibility;
  if (questions[scenarioArrCount].Expected.data[0] === 1) {
    _expected = '有預期Ａ';
    _plausibility = questions[scenarioArrCount].Plausibility;
  }else {
    _expected = '沒預期'
    if (questions[scenarioArrCount].Plausibility === 'AA') {
      _plausibility = '相符'
    }else {
      _plausibility = '不相符'
    }
  }
  setTest(_expected + '，結果' + _plausibility + '，緊急程度' + questions[scenarioArrCount].Urgency);
  setScenario(questions[scenarioArrCount].Question.split('\r\n'));
  setImageUrl(questions[scenarioArrCount].ImageURL);
}

function delay(n){
    return new Promise(function(resolve){
        setTimeout(resolve,n*1000);
    });
}

const Questionaire = ({setPages, setSurveyResult, setBasicInfo}) => {

  // 重新整理、上一頁下一頁、離開時再次詢問。
  useBeforeunload(() => {
    return '確定要離開頁面嗎？'
  });

  const [scenario, setScenario] = useState([]);
  const [test, setTest] = useState([]);
  const [imageUrl, setImageUrl] = useState([]);
  const [scenarioEntered, setScenarioEntered] = useState(false);
  const [buttonValue, setButtonValue] = useState('下一題');
  const [count, setCount] = useState(1);
  const [subCount, setSubCount] = useState(1);
  const [plausibility, setPlausibility] = useState(0);
  const [urgency, setUrgency] = useState(0);
  const [importance, setImportance] = useState(0);
  const [effort, setEffort] = useState(0);
  const [crowdsourcingType, setCrowdsourcingType] = useState('');
  const [payment, setPayment] = useState(0);

  const fecthStatus = useRef(true);

  // 第一次渲染畫面的時候，只會執行一次
  useEffect(() => {
    if(!fecthStatus.current) return;
    fetchData(setScenario, setTest, setImageUrl, fecthStatus);
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
      setCount((prev) => {
        return prev - 1;
      });

      result[scenarioArrCount] = {
        "tag":{
          "Category":questions[scenarioArrCount].Category,
          "Plausibility":questions[scenarioArrCount].Plausibility,
          "Importance":questions[scenarioArrCount].Importance,
          "Urgency":questions[scenarioArrCount].Urgency
        },
        "plausibilityScore":plausibility,
        "urgencyScore":urgency,
        "importanceScore":importance,
        "effortScore":effort,
        "crowdsourcingType":crowdsourcingType,
        "payment":payment
      };

      scenarioArrCount -= 1;
      let _expected, _plausibility;
      if (questions[scenarioArrCount].Expected.data[0] === 1) {
        _expected = '有預期Ａ';
        _plausibility = questions[scenarioArrCount].Plausibility;
      }else {
        _expected = '沒預期'
        if (questions[scenarioArrCount].Plausibility === 'AA') {
          _plausibility = '相符'
        }else {
          _plausibility = '不相符'
        }
      }
      setTest(_expected + '，結果' + _plausibility + '，緊急程度' + questions[scenarioArrCount].Urgency);
      setImageUrl(questions[scenarioArrCount].ImageURL);
      setScenario(questions[scenarioArrCount].Question.split('\r\n'));
      setPlausibility(result[scenarioArrCount].plausibilityScore);
      setUrgency(result[scenarioArrCount].urgencyScore);
      setImportance(result[scenarioArrCount].importanceScore);
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
            "Importance":questions[scenarioArrCount].Importance,
            "Urgency":questions[scenarioArrCount].Urgency
          },
          "plausibilityScore":plausibility,
          "urgencyScore":urgency,
          "importanceScore":importance,
          "effortScore":effort,
          "crowdsourcingType":crowdsourcingType,
          "payment":payment
        };
      }else{
        result.push({
          "tag":{
            "Category":questions[scenarioArrCount].Category,
            "Plausibility":questions[scenarioArrCount].Plausibility,
            "Importance":questions[scenarioArrCount].Importance,
            "Urgency":questions[scenarioArrCount].Urgency
          },
          "plausibilityScore":plausibility,
          "urgencyScore":urgency,
          "importanceScore":importance,
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
          setButtonValue('填寫基本資料')
        }
        // console.log(scenarioArrCount);
        // console.log(questions[scenarioArrCount].Question.split('\n'));
        setImageUrl(questions[scenarioArrCount].ImageURL);
        let _expected, _plausibility;
        if (questions[scenarioArrCount].Expected.data[0] === 1) {
          _expected = '有預期Ａ';
          _plausibility = questions[scenarioArrCount].Plausibility;
        }else {
          _expected = '沒預期'
          if (questions[scenarioArrCount].Plausibility === 'AA') {
            _plausibility = '相符'
          }else {
            _plausibility = '不相符'
          }
        }
        setTest(_expected + '，結果' + _plausibility + '，緊急程度' + questions[scenarioArrCount].Urgency);
        setScenario(questions[scenarioArrCount].Question.split('\r\n'));
        if (scenarioArrCount < result.length) {
          setPlausibility(result[scenarioArrCount].plausibilityScore);
          setUrgency(result[scenarioArrCount].urgencyScore);
          setImportance(result[scenarioArrCount].importanceScore);
          setEffort(result[scenarioArrCount].effortScore);
          setCrowdsourcingType(result[scenarioArrCount].crowdsourcingType);
          setPayment(result[scenarioArrCount].payment);
        }
        else{
          setPlausibility(0);
          setUrgency(0);
          setImportance(0);
          setEffort(0);
          setCrowdsourcingType('');
          setPayment(0);
        }
      }else {
        if(window.confirm("確定要提交問卷了嗎？提交之後就沒辦法再修改了唷！")){
          const pilot = await createPilotCode();
          console.log(result);
          setSurveyResult(result);
          setBasicInfo({
            "pilot":pilot
          });
          setPages(4);
        }
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
        plausibility={plausibility}
        setPlausibility={setPlausibility}
        urgency={urgency}
        setUrgency={setUrgency}
        importance={importance}
        setImportance={setImportance}
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

export default Questionaire;
