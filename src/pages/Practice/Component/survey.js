import { v4 } from "uuid";

const Survey = ({category, urgency, setUrgency, consistancy, setConsistancy, expection, setExpection, plausibility, setPlausibility, crowdsourcingType, setCrowdsourcingType, effort, setEffort, payment, setPayment}) => {
  let question3and4 = [
    <div>
      <p className="surveyQuestion"> 3. 請問下列哪一個敘述最接近您的想法？</p>
      <div>
        <input
          type="radio"
          checked={expection.trim() === 'BOTH'}
          onChange={() => setExpection('BOTH')}
        />兩種即時資訊都跟我預期的差不多<br/>
        <input
          type="radio"
          checked={expection.trim() === 'CROWD'}
          onChange={() => setExpection('CROWD')}
        />只有<span className="highLine">即時人潮資訊</span>跟我預期的差不多<br/>
        <input
          type="radio"
          checked={expection.trim() === 'OCCUPANCY'}
          onChange={() => setExpection('OCCUPANCY')}
        />只有<span className="highLine">即時球桌使用狀況</span>跟我預期的差不多<br/>
        <input
          type="radio"
          checked={expection.trim() === 'NONE'}
          onChange={() => setExpection('NONE')}
        />兩種即時資訊都跟我預期的有差距<br/>
      </div>
    </div>,
    <div>
      <p className="surveyQuestion"> 4. 請問您認為現場情況最接近下列哪一個敘述？</p>
      <div>
        <input
          type="radio"
          checked={plausibility.trim() === 'BOTH'}
          onChange={() => setPlausibility('BOTH')}
        />現場情況與兩種即時資訊都差不多<br/>
        <input
          type="radio"
          checked={plausibility.trim() === 'CROWD'}
          onChange={() => setPlausibility('CROWD')}
        />現場情況只與<span className="highLine">即時人潮資訊</span>差不多<br/>
        <input
          type="radio"
          checked={plausibility.trim() === 'OCCUPANCY'}
          onChange={() => setPlausibility('OCCUPANCY')}
        />現場情況只與<span className="highLine">即時球桌使用狀況</span>差不多<br/>
        <input
          type="radio"
          checked={plausibility.trim() === 'NONE'}
          onChange={() => setPlausibility('NONE')}
        />現場情況與兩種即時資訊都有差距<br/>
      </div>
    </div>
  ]

  let question6and7;
  if (crowdsourcingType.trim() === 'VERIFICATION' || crowdsourcingType.trim() === 'COMPLEMENT') {
    question6and7 = [
      <div>
        <p className="surveyQuestion"> 6. 若要準確的回答您想詢問的問題，您認為需要耗費回答者多少心力呢？</p>
        <div>
          不耗費心力
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
        非常耗費心力
        </div>
      </div>,
      <div>
        <p className="surveyQuestion"> 7. 根據您目前的狀況，您願意<span className="highLine">額外</span>支出多少點數來提升對方回答的效率以及意願呢？</p>
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
          <br/>額外提供對方 {payment} 點
        </div>
      </div>
    ]
  }
  else {
    setEffort(0);
    setPayment(0);
    question6and7 = [
      <div>
        <p className="lock"> 6. 若要準確的回答您想詢問的問題，您認為需要耗費回答者多少心力呢？</p>
        <div className="lock">
          不耗費心力
          <input
            type="radio"
            checked={effort === 8}
            onChange={() => setEffort(0)}
          />
          <input
            type="radio"
            checked={effort === 8}
            onChange={() => setEffort(0)}
          />
          <input
            type="radio"
            checked={effort === 8}
            onChange={() => setEffort(0)}
          />
          <label> - </label>
          <input
            type="radio"
            checked={effort === 8}
            onChange={() => setEffort(0)}
          />
          <label> - </label>
          <input
            type="radio"
            checked={effort === 8}
            onChange={() => setEffort(5)}
          />
          <input
            type="radio"
            checked={effort === 8}
            onChange={() => setEffort(0)}
          />
          <input
            type="radio"
            checked={effort === 8}
            onChange={() => setEffort(0)}
          />
        非常耗費心力
        </div>
      </div>,
      <div>
        <p className="lock"> 7. 根據您目前的狀況，您願意額外支出多少點數來提升對方回答的效率以及意願呢？</p>
        <div className="lock">
          0
          <input
            className="slider-width"
            type="range"
            min="0"
            max="1000"
            step="1"
            onMouseUp={(e) => setPayment(0)}
            value={payment}
          />
          1000
          <br/>額外提供對方 {payment} 點
        </div>
      </div>
    ]
  }
  const questionList = [
    <div>
      <p className="surveyQuestion"> 1. 根據上述情境，請問您有多急著想知道現場情況？</p>
      <div>
        不急
        <input
          type="radio"
          checked={urgency === 1}
          onChange={() => setUrgency(1)}
        />
        <input
          type="radio"
          checked={urgency === 2}
          onChange={() => setUrgency(2)}
        />
        <input
          type="radio"
          checked={urgency === 3}
          onChange={() => setUrgency(3)}
        />
        <label> - </label>
        <input
          type="radio"
          checked={plausibility === 4}
          onChange={() => setUrgency(4)}
        />
        <label> - </label>
        <input
          type="radio"
          checked={urgency === 5}
          onChange={() => setUrgency(5)}
        />
        <input
          type="radio"
          checked={urgency === 6}
          onChange={() => setUrgency(6)}
        />
        <input
          type="radio"
          checked={urgency === 7}
          onChange={() => setUrgency(7)}
        />
        非常急
      </div>
    </div>,
    <div>
      <p className="surveyQuestion"> 2. 請問您認為兩種即時資訊的一致程度為何？</p>
      <div>
        非常不一致
        <input
          type="radio"
          checked={consistancy === 1}
          onChange={() => setConsistancy(1)}
        />
        <input
          type="radio"
          checked={consistancy === 2}
          onChange={() => setConsistancy(2)}
        />
        <input
          type="radio"
          checked={consistancy === 3}
          onChange={() => setConsistancy(3)}
        />
        <label> - </label>
        <input
          type="radio"
          checked={consistancy === 4}
          onChange={() => setConsistancy(4)}
        />
        <label> - </label>
        <input
          type="radio"
          checked={consistancy === 5}
          onChange={() => setConsistancy(5)}
        />
        <input
          type="radio"
          checked={consistancy === 6}
          onChange={() => setConsistancy(6)}
        />
        <input
          type="radio"
          checked={consistancy === 7}
          onChange={() => setConsistancy(7)}
        />
      非常一致
      </div>
    </div>,
    ...question3and4,
    <div>
      <p className="surveyQuestion"> 5. 假設你現在能透過app去請任何能幫助您的人回答問題的話，您會希望對方提供怎樣的資訊？</p>
      <div>
        <input
          type="radio"
          checked={crowdsourcingType.trim() === 'VERIFICATION'}
          onChange={() => setCrowdsourcingType('VERIFICATION')}
        />請對方單純幫我<span className="highLine">驗證</span>即時資訊<br/>
        <input
          type="radio"
          checked={crowdsourcingType.trim() === 'COMPLEMENT'}
          onChange={() => setCrowdsourcingType('COMPLEMENT')}
        />請對方幫我<span className="highLine">補充</span>詳細資訊<br/>
        <input
          type="radio"
          checked={crowdsourcingType.trim() === 'NONE'}
          onChange={() => setCrowdsourcingType('NONE')}
        />我不需要其他人的協助<br/><br/>

      </div>
    </div>,
    ...question6and7
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
