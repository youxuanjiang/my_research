import { useState, useEffect } from "react";
import { CSSTransition } from 'react-transition-group';
import { useBeforeunload } from 'react-beforeunload';
import Scenario from "./Component/scenario";
import Survey from "./Component/survey";
import "./index.css";

function delay(n){
    return new Promise(function(resolve){
        setTimeout(resolve,n*1000);
    });
}

const QuestionIndex = ({setPages, surveyResult, setSurveyResult, questions}) => {

  // 重新整理、上一頁下一頁、離開時再次詢問。
  useBeforeunload(() => {
    return '確定要離開頁面嗎？'
  });
  const [category, setCategory] = useState('');
  const [scenario, setScenario] = useState([]);
  const [test, setTest] = useState([]);
  const [imageUrl, setImageUrl] = useState([]);
  const [scenarioEntered, setScenarioEntered] = useState(false);

  const [urgency, setUrgency] = useState(0);
  const [consistancy, setConsistancy] = useState(0);
  const [expection, setExpection] = useState('');
  const [plausibility, setPlausibility] = useState('');
  const [crowdsourcingType, setCrowdsourcingType] = useState('');
  const [crowdsourcingTypeWUrgency, setCrowdsourcingTypeWUrgency] = useState('');
  const [crowdsourcingTypeWPay, setCrowdsourcingTypeWPay] = useState('');

	const [scenarioArrCount, setScenarioArrCount] = useState(-1);
	// 每set一次整個頁面就會跑一次，因此result會直接被刷回原本的
	let result = [...surveyResult];

  useEffect(() => {
    // if(!fecthStatus.current) return;
    setScenarioEntered(true);
  }, scenario);

  async function clickButton(count) {
		if (count === -1) {
			return;
		}
    setScenarioEntered(false);
    // wait for animation
    await delay(0.4);

    setImageUrl(questions[count].ImageURL);
    let _urgency, _expected, _plausibility = questions[scenarioArrCount].Plausibility;
    if (questions[count].Urgency === 'HIGH') {
      _urgency = 'H';
    }else {
      _urgency = 'L'
    }
    if (questions[count].Expected === 1) {
      _expected = 'Y';
    }else {
      _expected = 'N';
    }

    setTest(_urgency + _expected + _plausibility);
    setScenario(questions[count].Question.split('\r\n'));
    setCategory(questions[count].Category);
    if (count < result.length) {
      setUrgency(result[count].urgencyScore);
      setConsistancy(result[count].consistancyScore);
      setExpection(result[count].userExpection);
      setPlausibility(result[count].userPlausibility);
      setCrowdsourcingType(result[count].crowdsourcingType);
      setCrowdsourcingTypeWUrgency(result[count].crowdsourcingTypeWUrgency);
      setCrowdsourcingTypeWPay(result[count].crowdsourcingTypeWPay);
    }
  }
  // }
	if (scenarioArrCount >= 0) {
		return (
	    <div>
				<div className="index">
					請選擇頁面
		      <select  onChange={(e)=>{
							if(scenarioArrCount!==-1) {
								setSurveyResult((prev)=>{
									prev[scenarioArrCount]={
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
									return prev;
								});
							}
							setScenarioArrCount(Number(e.target.value)-1);
							clickButton(Number(e.target.value)-1);
						}
					}>
		        <option value='0'>請選擇</option>
		        <option value='1'>1</option>
						<option value='2'>2</option>
						<option value='3'>3</option>
						<option value='4'>4</option>
						<option value='5'>5</option>
						<option value='6'>6</option>
						<option value='7'>7</option>
						<option value='8'>8</option>
						<option value='9'>9</option>
						<option value='10'>10</option>
						<option value='11'>11</option>
						<option value='12'>12</option>
						<option value='13'>13</option>
						<option value='14'>14</option>
						<option value='15'>15</option>
						<option value='16'>16</option>
						<option value='17'>17</option>
						<option value='18'>18</option>
						<option value='19'>19</option>
						<option value='20'>20</option>
		      </select>
				</div>
	      <CSSTransition
	        in={scenarioEntered}
	        classNames="scenarioEntered"
	        timeout={500}
	        unmountOnExit={false}
	      >
	        <Scenario
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
	        onClick={()=>{
						setSurveyResult(result);
						setPages(6);
					}}
	      >確認交卷</button>
	    </div>
	  );
	} else {
		return (
	    <div>
				<div className="index">
					請選擇頁面<br/>
		      <select  onChange={(e)=>{
							if(scenarioArrCount!==-1) {
								setSurveyResult((prev)=>{
									prev[scenarioArrCount]={
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
									return prev;
								});
							}
							setScenarioArrCount(Number(e.target.value)-1);
							clickButton(Number(e.target.value)-1);
						}
					}>
		        <option value='0'>請選擇</option>
		        <option value='1'>1</option>
						<option value='2'>2</option>
						<option value='3'>3</option>
						<option value='4'>4</option>
						<option value='5'>5</option>
						<option value='6'>6</option>
						<option value='7'>7</option>
						<option value='8'>8</option>
						<option value='9'>9</option>
						<option value='10'>10</option>
						<option value='11'>11</option>
						<option value='12'>12</option>
						<option value='13'>13</option>
						<option value='14'>14</option>
						<option value='15'>15</option>
						<option value='16'>16</option>
						<option value='17'>17</option>
						<option value='18'>18</option>
						<option value='19'>19</option>
						<option value='20'>20</option>
		      </select>
				</div>
	      <button
	        className="finish"
	        onClick={()=>{
						if(window.confirm("確定要提交了嗎？這次提交之後就沒辦法再修改了唷！")){
		          // const pilot = await createPilotCode();
							setSurveyResult(result);
							setPages(6);
		        }
					}}
	      >檢查完畢</button>
	    </div>
	  );
	}
}


export default QuestionIndex;
