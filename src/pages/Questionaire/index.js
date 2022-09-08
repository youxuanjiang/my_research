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


// async function createPilotCode() {
//   try {
//     const res = await axios.get(API_HOST + '/pilotinfo');
//     const userNum = res.data.length + 1;
//     return 'Pilot_' + userNum;
//   } catch (e) {
//     console.log(e);
//     return 'error create pilot code';
//   }
// }

// How to use:
// var conditions = ["A", "B", "C", "D"];
// balancedLatinSquare(conditions, 0)  //=> ["A", "B", "D", "C"]
// balancedLatinSquare(conditions, 1)  //=> ["B", "C", "A", "D"]
// balancedLatinSquare(conditions, 2)  //=> ["C", "D", "B", "A"]
// ...
function balancedLatinSquare(array, participantId) {
	let result = [];
	// Based on "Bradley, J. V. Complete counterbalancing of immediate sequential effects in a Latin square design. J. Amer. Statist. Ass.,.1958, 53, 525-528. "
	for (var i = 0, j = 0, h = 0; i < array.length; ++i) {
		var val = 0;
		if (i < 2 || i % 2 != 0) {
			val = j++;
		} else {
			val = array.length - h - 1;
			++h;
		}
		var idx = (val + participantId) % array.length;
		result.push(array[idx]);
	}

	if (array.length % 2 != 0 && participantId % 2 != 0) {
		result = result.reverse();
	}

	return result;
}

async function fetchData(setCategory, setScenario, setTest, setImageUrl, fecthStatus, setQuestions) {
  fecthStatus.current = false;
  // 若沒辦法成功送出request看這篇：https://shubo.io/what-is-cors/
  try {
    const res = await axios.get(API_HOST + '/questionaire');
    const question_order = Math.floor( Math.random() * 5 ) + 1;
    const question_crowd_occupancy = [];
    const question_location_time = [];
    res.data.forEach((question) => {
      // 從資料庫篩選真正要用的題目
      if (question.Category.includes('房') || question.Category.includes('餐') || question.Category.includes('館') || question.Category.includes('停車')) {
        try {
          if (question_order === 1) {
            if (question.Category.includes('健身房')) {
              if (question.Expected === 1 && question.Plausibility === 'AB' && question.Urgency === 'HIGH') {
                question_crowd_occupancy.push(question);
              }
              if (question.Expected === 1 && question.Plausibility === 'AA' && question.Urgency === 'LOW') {
                question_crowd_occupancy.push(question);
              }
            }
            if (question.Category.includes('圖書館')) {
              if (question.Expected === 1 && question.Plausibility === 'AB' && question.Urgency === 'LOW') {
                question_crowd_occupancy.push(question);
              }
              if (question.Expected === 0 && question.Plausibility === 'AB' && question.Urgency === 'HIGH') {
                question_crowd_occupancy.push(question);
              }
            }
            if (question.Category.includes('桌球館')) {
              if (question.Expected === 1 && question.Plausibility === 'BB' && question.Urgency === 'HIGH') {
                question_crowd_occupancy.push(question);
              }
              if (question.Expected === 0 && question.Plausibility === 'AB' && question.Urgency === 'LOW') {
                question_crowd_occupancy.push(question);
              }
            }
            if (question.Category.includes('餐廳')) {
              if (question.Expected === 1 && question.Plausibility === 'BB' && question.Urgency === 'LOW') {
                question_crowd_occupancy.push(question);
              }
              if (question.Expected === 0 && question.Plausibility === 'AA' && question.Urgency === 'HIGH') {
                question_crowd_occupancy.push(question);
              }
            }
            if (question.Category.includes('停車場')) {
              if (question.Expected === 1 && question.Plausibility === 'AA' && question.Urgency === 'HIGH') {
                question_crowd_occupancy.push(question);
              }
              if (question.Expected === 0 && question.Plausibility === 'AA' && question.Urgency === 'LOW') {
                question_crowd_occupancy.push(question);
              }
            }
          }
          if (question_order === 2) {
            if (question.Category.includes('圖書館')) {
              if (question.Expected === 1 && question.Plausibility === 'AB' && question.Urgency === 'HIGH') {
                question_crowd_occupancy.push(question);
              }
              if (question.Expected === 1 && question.Plausibility === 'AA' && question.Urgency === 'LOW') {
                question_crowd_occupancy.push(question);
              }
            }
            if (question.Category.includes('桌球館')) {
              if (question.Expected === 1 && question.Plausibility === 'AB' && question.Urgency === 'LOW') {
                question_crowd_occupancy.push(question);
              }
              if (question.Expected === 0 && question.Plausibility === 'AB' && question.Urgency === 'HIGH') {
                question_crowd_occupancy.push(question);
              }
            }
            if (question.Category.includes('餐廳')) {
              if (question.Expected === 1 && question.Plausibility === 'BB' && question.Urgency === 'HIGH') {
                question_crowd_occupancy.push(question);
              }
              if (question.Expected === 0 && question.Plausibility === 'AB' && question.Urgency === 'LOW') {
                question_crowd_occupancy.push(question);
              }
            }
            if (question.Category.includes('停車場')) {
              if (question.Expected === 1 && question.Plausibility === 'BB' && question.Urgency === 'LOW') {
                question_crowd_occupancy.push(question);
              }
              if (question.Expected === 0 && question.Plausibility === 'AA' && question.Urgency === 'HIGH') {
                question_crowd_occupancy.push(question);
              }
            }
            if (question.Category.includes('健身房')) {
              if (question.Expected === 1 && question.Plausibility === 'AA' && question.Urgency === 'HIGH') {
                question_crowd_occupancy.push(question);
              }
              if (question.Expected === 0 && question.Plausibility === 'AA' && question.Urgency === 'LOW') {
                question_crowd_occupancy.push(question);
              }
            }
          }
          if (question_order === 3) {
            if (question.Category.includes('桌球館')) {
              if (question.Expected === 1 && question.Plausibility === 'AB' && question.Urgency === 'HIGH') {
                question_crowd_occupancy.push(question);
              }
              if (question.Expected === 1 && question.Plausibility === 'AA' && question.Urgency === 'LOW') {
                question_crowd_occupancy.push(question);
              }
            }
            if (question.Category.includes('餐廳')) {
              if (question.Expected === 1 && question.Plausibility === 'AB' && question.Urgency === 'LOW') {
                question_crowd_occupancy.push(question);
              }
              if (question.Expected === 0 && question.Plausibility === 'AB' && question.Urgency === 'HIGH') {
                question_crowd_occupancy.push(question);
              }
            }
            if (question.Category.includes('停車場')) {
              if (question.Expected === 1 && question.Plausibility === 'BB' && question.Urgency === 'HIGH') {
                question_crowd_occupancy.push(question);
              }
              if (question.Expected === 0 && question.Plausibility === 'AB' && question.Urgency === 'LOW') {
                question_crowd_occupancy.push(question);
              }
            }
            if (question.Category.includes('健身房')) {
              if (question.Expected === 1 && question.Plausibility === 'BB' && question.Urgency === 'LOW') {
                question_crowd_occupancy.push(question);
              }
              if (question.Expected === 0 && question.Plausibility === 'AA' && question.Urgency === 'HIGH') {
                question_crowd_occupancy.push(question);
              }
            }
            if (question.Category.includes('圖書館')) {
              if (question.Expected === 1 && question.Plausibility === 'AA' && question.Urgency === 'HIGH') {
                question_crowd_occupancy.push(question);
              }
              if (question.Expected === 0 && question.Plausibility === 'AA' && question.Urgency === 'LOW') {
                question_crowd_occupancy.push(question);
              }
            }
          }
          if (question_order === 4) {
            if (question.Category.includes('餐廳')) {
              if (question.Expected === 1 && question.Plausibility === 'AB' && question.Urgency === 'HIGH') {
                question_crowd_occupancy.push(question);
              }
              if (question.Expected === 1 && question.Plausibility === 'AA' && question.Urgency === 'LOW') {
                question_crowd_occupancy.push(question);
              }
            }
            if (question.Category.includes('停車場')) {
              if (question.Expected === 1 && question.Plausibility === 'AB' && question.Urgency === 'LOW') {
                question_crowd_occupancy.push(question);
              }
              if (question.Expected === 0 && question.Plausibility === 'AB' && question.Urgency === 'HIGH') {
                question_crowd_occupancy.push(question);
              }
            }
            if (question.Category.includes('健身房')) {
              if (question.Expected === 1 && question.Plausibility === 'BB' && question.Urgency === 'HIGH') {
                question_crowd_occupancy.push(question);
              }
              if (question.Expected === 0 && question.Plausibility === 'AB' && question.Urgency === 'LOW') {
                question_crowd_occupancy.push(question);
              }
            }
            if (question.Category.includes('圖書館')) {
              if (question.Expected === 1 && question.Plausibility === 'BB' && question.Urgency === 'LOW') {
                question_crowd_occupancy.push(question);
              }
              if (question.Expected === 0 && question.Plausibility === 'AA' && question.Urgency === 'HIGH') {
                question_crowd_occupancy.push(question);
              }
            }
            if (question.Category.includes('桌球館')) {
              if (question.Expected === 1 && question.Plausibility === 'AA' && question.Urgency === 'HIGH') {
                question_crowd_occupancy.push(question);
              }
              if (question.Expected === 0 && question.Plausibility === 'AA' && question.Urgency === 'LOW') {
                question_crowd_occupancy.push(question);
              }
            }
          }
          if (question_order === 5) {
            if (question.Category.includes('停車場')) {
              if (question.Expected === 1 && question.Plausibility === 'AB' && question.Urgency === 'HIGH') {
                question_crowd_occupancy.push(question);
              }
              if (question.Expected === 1 && question.Plausibility === 'AA' && question.Urgency === 'LOW') {
                question_crowd_occupancy.push(question);
              }
            }
            if (question.Category.includes('健身房')) {
              if (question.Expected === 1 && question.Plausibility === 'AB' && question.Urgency === 'LOW') {
                question_crowd_occupancy.push(question);
              }
              if (question.Expected === 0 && question.Plausibility === 'AB' && question.Urgency === 'HIGH') {
                question_crowd_occupancy.push(question);
              }
            }
            if (question.Category.includes('圖書館')) {
              if (question.Expected === 1 && question.Plausibility === 'BB' && question.Urgency === 'HIGH') {
                question_crowd_occupancy.push(question);
              }
              if (question.Expected === 0 && question.Plausibility === 'AB' && question.Urgency === 'LOW') {
                question_crowd_occupancy.push(question);
              }
            }
            if (question.Category.includes('桌球館')) {
              if (question.Expected === 1 && question.Plausibility === 'BB' && question.Urgency === 'LOW') {
                question_crowd_occupancy.push(question);
              }
              if (question.Expected === 0 && question.Plausibility === 'AA' && question.Urgency === 'HIGH') {
                question_crowd_occupancy.push(question);
              }
            }
            if (question.Category.includes('餐廳')) {
              if (question.Expected === 1 && question.Plausibility === 'AA' && question.Urgency === 'HIGH') {
                question_crowd_occupancy.push(question);
              }
              if (question.Expected === 0 && question.Plausibility === 'AA' && question.Urgency === 'LOW') {
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
          if (question_order === 1) {
            if (question.Category.includes('火車')) {
              if (question.Expected === 1 && question.Plausibility === 'AB' && question.Urgency === 'HIGH') {
                question_location_time.push(question);
              }
              if (question.Expected === 1 && question.Plausibility === 'AA' && question.Urgency === 'LOW') {
                question_location_time.push(question);
              }
            }
            if (question.Category.includes('公車')) {
              if (question.Expected === 1 && question.Plausibility === 'AB' && question.Urgency === 'LOW') {
                question_location_time.push(question);
              }
              if (question.Expected === 0 && question.Plausibility === 'AB' && question.Urgency === 'HIGH') {
                question_location_time.push(question);
              }
            }
            if (question.Category.includes('客運')) {
              if (question.Expected === 1 && question.Plausibility === 'BB' && question.Urgency === 'HIGH') {
                question_location_time.push(question);
              }
              if (question.Expected === 0 && question.Plausibility === 'AB' && question.Urgency === 'LOW') {
                question_location_time.push(question);
              }
            }
            if (question.Category.includes('船')) {
              if (question.Expected === 1 && question.Plausibility === 'BB' && question.Urgency === 'LOW') {
                question_location_time.push(question);
              }
              if (question.Expected === 0 && question.Plausibility === 'AA' && question.Urgency === 'HIGH') {
                question_location_time.push(question);
              }
            }
            if (question.Category.includes('高鐵')) {
              if (question.Expected === 1 && question.Plausibility === 'AA' && question.Urgency === 'HIGH') {
                question_location_time.push(question);
              }
              if (question.Expected === 0 && question.Plausibility === 'AA' && question.Urgency === 'LOW') {
                question_location_time.push(question);
              }
            }
          }
          if (question_order === 2) {
            if (question.Category.includes('公車')) {
              if (question.Expected === 1 && question.Plausibility === 'AB' && question.Urgency === 'HIGH') {
                question_location_time.push(question);
              }
              if (question.Expected === 1 && question.Plausibility === 'AA' && question.Urgency === 'LOW') {
                question_location_time.push(question);
              }
            }
            if (question.Category.includes('客運')) {
              if (question.Expected === 1 && question.Plausibility === 'AB' && question.Urgency === 'LOW') {
                question_location_time.push(question);
              }
              if (question.Expected === 0 && question.Plausibility === 'AB' && question.Urgency === 'HIGH') {
                question_location_time.push(question);
              }
            }
            if (question.Category.includes('船')) {
              if (question.Expected === 1 && question.Plausibility === 'BB' && question.Urgency === 'HIGH') {
                question_location_time.push(question);
              }
              if (question.Expected === 0 && question.Plausibility === 'AB' && question.Urgency === 'LOW') {
                question_location_time.push(question);
              }
            }
            if (question.Category.includes('高鐵')) {
              if (question.Expected === 1 && question.Plausibility === 'BB' && question.Urgency === 'LOW') {
                question_location_time.push(question);
              }
              if (question.Expected === 0 && question.Plausibility === 'AA' && question.Urgency === 'HIGH') {
                question_location_time.push(question);
              }
            }
            if (question.Category.includes('火車')) {
              if (question.Expected === 1 && question.Plausibility === 'AA' && question.Urgency === 'HIGH') {
                question_location_time.push(question);
              }
              if (question.Expected === 0 && question.Plausibility === 'AA' && question.Urgency === 'LOW') {
                question_location_time.push(question);
              }
            }
          }
          if (question_order === 3) {
            if (question.Category.includes('客運')) {
              if (question.Expected === 1 && question.Plausibility === 'AB' && question.Urgency === 'HIGH') {
                question_location_time.push(question);
              }
              if (question.Expected === 1 && question.Plausibility === 'AA' && question.Urgency === 'LOW') {
                question_location_time.push(question);
              }
            }
            if (question.Category.includes('船')) {
              if (question.Expected === 1 && question.Plausibility === 'AB' && question.Urgency === 'LOW') {
                question_location_time.push(question);
              }
              if (question.Expected === 0 && question.Plausibility === 'AB' && question.Urgency === 'HIGH') {
                question_location_time.push(question);
              }
            }
            if (question.Category.includes('高鐵')) {
              if (question.Expected === 1 && question.Plausibility === 'BB' && question.Urgency === 'HIGH') {
                question_location_time.push(question);
              }
              if (question.Expected === 0 && question.Plausibility === 'AB' && question.Urgency === 'LOW') {
                question_location_time.push(question);
              }
            }
            if (question.Category.includes('火車')) {
              if (question.Expected === 1 && question.Plausibility === 'BB' && question.Urgency === 'LOW') {
                question_location_time.push(question);
              }
              if (question.Expected === 0 && question.Plausibility === 'AA' && question.Urgency === 'HIGH') {
                question_location_time.push(question);
              }
            }
            if (question.Category.includes('公車')) {
              if (question.Expected === 1 && question.Plausibility === 'AA' && question.Urgency === 'HIGH') {
                question_location_time.push(question);
              }
              if (question.Expected === 0 && question.Plausibility === 'AA' && question.Urgency === 'LOW') {
                question_location_time.push(question);
              }
            }
          }
          if (question_order === 4) {
            if (question.Category.includes('船')) {
              if (question.Expected === 1 && question.Plausibility === 'AB' && question.Urgency === 'HIGH') {
                question_location_time.push(question);
              }
              if (question.Expected === 1 && question.Plausibility === 'AA' && question.Urgency === 'LOW') {
                question_location_time.push(question);
              }
            }
            if (question.Category.includes('高鐵')) {
              if (question.Expected === 1 && question.Plausibility === 'AB' && question.Urgency === 'LOW') {
                question_location_time.push(question);
              }
              if (question.Expected === 0 && question.Plausibility === 'AB' && question.Urgency === 'HIGH') {
                question_location_time.push(question);
              }
            }
            if (question.Category.includes('火車')) {
              if (question.Expected === 1 && question.Plausibility === 'BB' && question.Urgency === 'HIGH') {
                question_location_time.push(question);
              }
              if (question.Expected === 0 && question.Plausibility === 'AB' && question.Urgency === 'LOW') {
                question_location_time.push(question);
              }
            }
            if (question.Category.includes('公車')) {
              if (question.Expected === 1 && question.Plausibility === 'BB' && question.Urgency === 'LOW') {
                question_location_time.push(question);
              }
              if (question.Expected === 0 && question.Plausibility === 'AA' && question.Urgency === 'HIGH') {
                question_location_time.push(question);
              }
            }
            if (question.Category.includes('客運')) {
              if (question.Expected === 1 && question.Plausibility === 'AA' && question.Urgency === 'HIGH') {
                question_location_time.push(question);
              }
              if (question.Expected === 0 && question.Plausibility === 'AA' && question.Urgency === 'LOW') {
                question_location_time.push(question);
              }
            }
          }
          if (question_order === 5) {
            if (question.Category.includes('高鐵')) {
              if (question.Expected === 1 && question.Plausibility === 'AB' && question.Urgency === 'HIGH') {
                question_location_time.push(question);
              }
              if (question.Expected === 1 && question.Plausibility === 'AA' && question.Urgency === 'LOW') {
                question_location_time.push(question);
              }
            }
            if (question.Category.includes('火車')) {
              if (question.Expected === 1 && question.Plausibility === 'AB' && question.Urgency === 'LOW') {
                question_location_time.push(question);
              }
              if (question.Expected === 0 && question.Plausibility === 'AB' && question.Urgency === 'HIGH') {
                question_location_time.push(question);
              }
            }
            if (question.Category.includes('公車')) {
              if (question.Expected === 1 && question.Plausibility === 'BB' && question.Urgency === 'HIGH') {
                question_location_time.push(question);
              }
              if (question.Expected === 0 && question.Plausibility === 'AB' && question.Urgency === 'LOW') {
                question_location_time.push(question);
              }
            }
            if (question.Category.includes('客運')) {
              if (question.Expected === 1 && question.Plausibility === 'BB' && question.Urgency === 'LOW') {
                question_location_time.push(question);
              }
              if (question.Expected === 0 && question.Plausibility === 'AA' && question.Urgency === 'HIGH') {
                question_location_time.push(question);
              }
            }
            if (question.Category.includes('船')) {
              if (question.Expected === 1 && question.Plausibility === 'AA' && question.Urgency === 'HIGH') {
                question_location_time.push(question);
              }
              if (question.Expected === 0 && question.Plausibility === 'AA' && question.Urgency === 'LOW') {
                question_location_time.push(question);
              }
            }
          }
        } catch (e) {
          console.log('error while add question: ' + e);
        }
      }
    });
    for (let i = 0; i < question_crowd_occupancy.length/2; i++) {
      if (i%2 === 0) {
        questions.push(question_crowd_occupancy[i]);
        questions.push(question_location_time[9-i]);
        questions.push(question_location_time[i]);
        questions.push(question_crowd_occupancy[9-i]);
      }
      else {
        questions.push(question_crowd_occupancy[i]);
        questions.push(question_location_time[i]);
        questions.push(question_location_time[9-i]);
        questions.push(question_crowd_occupancy[9-i]);
      }
    }
    // const square_order = [4,9,18,19];
    questions = balancedLatinSquare(questions, Math.floor( Math.random() * 20 ));
  } catch (e) {
    console.log('error while get API: ' + e);
  }
  let _urgency, _expected, _plausibility = questions[scenarioArrCount].Plausibility;
  if (questions[scenarioArrCount].Urgency == 'HIGH') {
    _urgency = 'H';
  }else {
    _urgency = 'L';
  }
  if (questions[scenarioArrCount].Expected === 1) {
    _expected = 'Y';
  }else {
    _expected = 'N';
  }

  setTest(_urgency + _expected + _plausibility);
  setCategory(questions[scenarioArrCount].Category);
  setScenario(questions[scenarioArrCount].Question.split('\r\n'));
  setImageUrl(questions[scenarioArrCount].ImageURL);
  setQuestions(questions);
}

function delay(n){
    return new Promise(function(resolve){
        setTimeout(resolve,n*1000);
    });
}

const Questionaire = ({setPages, setSurveyResult, setQuestions}) => {

  // 重新整理、上一頁下一頁、離開時再次詢問。
  useBeforeunload(() => {
    return '確定要離開頁面嗎？'
  });
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

  const fecthStatus = useRef(true);

  // 第一次渲染畫面的時候，只會執行一次
  useEffect(() => {
    if(!fecthStatus.current) return;
    fetchData(setCategory, setScenario, setTest, setImageUrl, fecthStatus, setQuestions);
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
          "Expected":questions[scenarioArrCount].Expected,
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
      let _urgency, _expected, _plausibility = questions[scenarioArrCount].Plausibility;
      if (questions[scenarioArrCount].Urgency == 'HIGH') {
        _urgency = 'H';
      }else {
        _urgency = 'L';
      }
      if (questions[scenarioArrCount].Expected === 1) {
        _expected = 'Y';
      }else {
        _expected = 'N';
      }

      setTest(_urgency + _expected + _plausibility);
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
            "Expected":questions[scenarioArrCount].Expected,
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
            "Expected":questions[scenarioArrCount].Expected,
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
          setButtonValue('填寫完畢進行訪談')
        }
        // console.log(scenarioArrCount);
        // console.log(questions[scenarioArrCount].Question.split('\n'));
        setImageUrl(questions[scenarioArrCount].ImageURL);
        let _urgency, _expected, _plausibility = questions[scenarioArrCount].Plausibility;
        if (questions[scenarioArrCount].Urgency == 'HIGH') {
          _urgency = 'H';
        }else {
          _urgency = 'L';
        }
        if (questions[scenarioArrCount].Expected === 1) {
          _expected = 'Y';
        }else {
          _expected = 'N';
        }

        setTest(_urgency + _expected + _plausibility);
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
				console.log(result);
				setSurveyResult(result);
				setPages(5);
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

export default Questionaire;
