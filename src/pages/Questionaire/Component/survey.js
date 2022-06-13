import { v4 } from "uuid";

const Survey = ({plausibility, setPlausibility, urgency, setUrgency, importance, setImportance, effort, setEffort, crowdsourcingType, setCrowdsourcingType, payment, setPayment}) => {
  // 3. 若要回答上述情境中的問題，您認為回答者所感受到的麻煩程度為何？
  const questionList = [
    <div>
      <p className="surveyQuestion"> 1. 依照上述情境，即時資訊的合理性如何？</p>
      <div>
        毫無道理
        <input
          type="radio"
          checked={plausibility === 7}
          onChange={() => setPlausibility(7)}
        />
        <input
          type="radio"
          checked={plausibility === 6}
          onChange={() => setPlausibility(6)}
        />
        <input
          type="radio"
          checked={plausibility === 5}
          onChange={() => setPlausibility(5)}
        />
        <label> - </label>
        <input
          type="radio"
          checked={plausibility === 4}
          onChange={() => setPlausibility(4)}
        />
        <label> - </label>
        <input
          type="radio"
          checked={plausibility === 3}
          onChange={() => setPlausibility(3)}
        />
        <input
          type="radio"
          checked={plausibility === 2}
          onChange={() => setPlausibility(2)}
        />
        <input
          type="radio"
          checked={plausibility === 1}
          onChange={() => setPlausibility(1)}
        />
        非常合理
      </div>
    </div>,
    <div>
      <p className="surveyQuestion"> 2. 依照上述情境，您認為還剩下多少確定答案的時間呢？</p>
      <div>
        快來不及
        <input
          type="radio"
          checked={urgency === 7}
          onChange={() => setUrgency(7)}
        />
        <input
          type="radio"
          checked={urgency === 6}
          onChange={() => setUrgency(6)}
        />
        <input
          type="radio"
          checked={urgency === 5}
          onChange={() => setUrgency(5)}
        />
        <label> - </label>
        <input
          type="radio"
          checked={urgency === 4}
          onChange={() => setUrgency(4)}
        />
        <label> - </label>
        <input
          type="radio"
          checked={urgency === 3}
          onChange={() => setUrgency(3)}
        />
        <input
          type="radio"
          checked={urgency === 2}
          onChange={() => setUrgency(2)}
        />
        <input
          type="radio"
          checked={urgency === 1}
          onChange={() => setUrgency(1)}
        />
        還很充裕
      </div>
    </div>,
    <div>
      <p className="surveyQuestion"> 3. 在上述情境中，您認為若沒有順利解決問題所造成的代價有多嚴重呢？</p>
      <div>
        毫無影響
        <input
          type="radio"
          checked={importance === 1}
          onChange={() => setImportance(1)}
        />
        <input
          type="radio"
          checked={importance === 2}
          onChange={() => setImportance(2)}
        />
        <input
          type="radio"
          checked={importance === 3}
          onChange={() => setImportance(3)}
        />
        <label> - </label>
        <input
          type="radio"
          checked={importance === 4}
          onChange={() => setImportance(4)}
        />
        <label> - </label>
        <input
          type="radio"
          checked={importance === 5}
          onChange={() => setImportance(5)}
        />
        <input
          type="radio"
          checked={importance === 6}
          onChange={() => setImportance(6)}
        />
        <input
          type="radio"
          checked={importance === 7}
          onChange={() => setImportance(7)}
        />
        非常嚴重
      </div>
    </div>,
    <div>
      <p className="surveyQuestion"> 4. 假設你現在能透過app去請任何能幫助您的人回答問題的話，您會希望他提供怎樣的資訊？</p>
      <div>
        <input
          type="radio"
          checked={crowdsourcingType.trim() === 'VERIFICATION'}
          onChange={() => setCrowdsourcingType('VERIFICATION')}
        />請對方單純幫我<span className="highLine">驗證該資訊</span>的真偽<br/>
        <input
          type="radio"
          checked={crowdsourcingType.trim() === 'COMPLEMENT'}
          onChange={() => setCrowdsourcingType('COMPLEMENT')}
        />請對方告訴我<span className="highLine">為什麼資訊會有差別</span><br/>
        <input
          type="radio"
          checked={crowdsourcingType.trim() === 'NONE'}
          onChange={() => setCrowdsourcingType('NONE')}
        />我不需要其他人的協助<br/><br/>
      <span className="highLine">-----若選擇「我不需要其他人的協助」，則下面兩題不用回答-----</span>
      </div>
    </div>,
    <div>
      <p className="surveyQuestion"> 5. 若要回答您想詢問的問題，您認為回答者會覺得多麻煩呢？</p>
      <div>
        非常容易
        <input
          type="radio"
          checked={effort === 1}
          onChange={() => setEffort(1)}
        />
        <input
          type="radio"
          checked={effort === 2}
          onChange={() => setEffort(2)}
        />
        <input
          type="radio"
          checked={effort === 3}
          onChange={() => setEffort(3)}
        />
        <label> - </label>
        <input
          type="radio"
          checked={effort === 4}
          onChange={() => setEffort(4)}
        />
        <label> - </label>
        <input
          type="radio"
          checked={effort === 5}
          onChange={() => setEffort(5)}
        />
        <input
          type="radio"
          checked={effort === 6}
          onChange={() => setEffort(6)}
        />
        <input
          type="radio"
          checked={effort === 7}
          onChange={() => setEffort(7)}
        />
        非常麻煩
      </div>
    </div>,
    <div>
      <p className="surveyQuestion"> 6. 您能透過給予現金的方式，讓任何能幫助您的人可以<span className="highLine">立即</span>提供資訊的話，根據上述情境，您願意提供多少新台幣呢？</p>
      <div>
        0
        <input
          className="slider-width"
        	type="range"
        	min="0"
        	max="1000"
          step="1"
        	onMouseUp={(e) => setPayment(e.target.value)}
        	defaultValue={payment}
        />
        1000
        <br/>新台幣 {payment} 元
      </div>
    </div>
  ];
  const isMobile = window.innerWidth <= 500;

  if (isMobile) {
    return (
      <div className="mobile_survey">
        {
          questionList.map((question) => {
            return(<span key={v4()}>{question}</span>)
          })
        }
      </div>
    );
  }
  else {
    return (
      <div className="survey">
        {
          questionList.map((question) => {
            return(<span key={v4()}>{question}</span>)
          })
        }
      </div>
    );
  }
};

export default Survey;

// input range如果用onchange會卡住不能拖拉
