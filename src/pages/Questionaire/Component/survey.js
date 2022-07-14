import { v4 } from "uuid";

const Survey = ({category, urgency, setUrgency, consistancy, setConsistancy, expection, setExpection, plausibility, setPlausibility, crowdsourcingType, setCrowdsourcingType, crowdsourcingTypeWPay, setCrowdsourcingTypeWPay, additionalPayWill, setAdditionalPayWill}) => {
  let question3and4;
  if (category.trim().includes('健身房')) {
    question3and4 = [
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
          />只有<span className="highLine">即時器材使用狀況</span>跟我預期的差不多<br/>
          <input
            type="radio"
            checked={expection.trim() === 'NONE'}
            onChange={() => setExpection('NONE')}
          />兩種即時資訊都跟我預期的有差距<br/>
        </div>
      </div>,
      <div>
        <p className="surveyQuestion"> 4. 請問您覺得下列哪一個敘述最能描述現場情況？</p>
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
          />現場情況只與<span className="highLine">即時器材使用狀況</span>差不多<br/>
          <input
            type="radio"
            checked={plausibility.trim() === 'NONE'}
            onChange={() => setPlausibility('NONE')}
          />現場情況與兩種即時資訊都有差距<br/>
        </div>
      </div>
    ]
  }
  else if (category.trim().includes('餐廳') || category.trim().includes('圖書館')) {
    question3and4 = [
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
          />只有<span className="highLine">即時座位使用狀況</span>跟我預期的差不多<br/>
          <input
            type="radio"
            checked={expection.trim() === 'NONE'}
            onChange={() => setExpection('NONE')}
          />兩種即時資訊都跟我預期的有差距<br/>
        </div>
      </div>,
      <div>
        <p className="surveyQuestion"> 4. 請問您覺得下列哪一個敘述最能描述現場情況？</p>
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
          />現場情況只與<span className="highLine">即時座位使用狀況</span>差不多<br/>
          <input
            type="radio"
            checked={plausibility.trim() === 'NONE'}
            onChange={() => setPlausibility('NONE')}
          />現場情況與兩種即時資訊都有差距<br/>
        </div>
      </div>
    ]
  }
  else if (category.trim().includes('桌球')) {
    question3and4 = [
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
        <p className="surveyQuestion"> 4. 請問您覺得下列哪一個敘述最能描述現場情況？</p>
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
  }
  else if (category.trim().includes('停車')) {
    question3and4 = [
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
          />只有<span className="highLine">即時車輛數資訊</span>跟我預期的差不多<br/>
          <input
            type="radio"
            checked={expection.trim() === 'OCCUPANCY'}
            onChange={() => setExpection('OCCUPANCY')}
          />只有<span className="highLine">即時車位使用狀況</span>跟我預期的差不多<br/>
          <input
            type="radio"
            checked={expection.trim() === 'NONE'}
            onChange={() => setExpection('NONE')}
          />兩種即時資訊都跟我預期的有差距<br/>
        </div>
      </div>,
      <div>
        <p className="surveyQuestion"> 4. 請問您覺得下列哪一個敘述最能描述現場情況？</p>
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
          />現場情況只與<span className="highLine">即時車輛數資訊</span>差不多<br/>
          <input
            type="radio"
            checked={plausibility.trim() === 'OCCUPANCY'}
            onChange={() => setPlausibility('OCCUPANCY')}
          />現場情況只與<span className="highLine">即時車位使用狀況</span>差不多<br/>
          <input
            type="radio"
            checked={plausibility.trim() === 'NONE'}
            onChange={() => setPlausibility('NONE')}
          />現場情況與兩種即時資訊都有差距<br/>
        </div>
      </div>
    ]
  }
  else {
    question3and4 = [
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
            checked={expection.trim() === 'TIME'}
            onChange={() => setExpection('TIME')}
          />只有<span className="highLine">剩餘時間資訊</span>跟我預期的差不多<br/>
          <input
            type="radio"
            checked={expection.trim() === 'LOCATION'}
            onChange={() => setExpection('LOCATION')}
          />只有<span className="highLine">即時位置狀況</span>跟我預期的差不多<br/>
          <input
            type="radio"
            checked={expection.trim() === 'NONE'}
            onChange={() => setExpection('NONE')}
          />兩種即時資訊都跟我預期的有差距<br/>
        </div>
      </div>,
      <div>
        <p className="surveyQuestion"> 4. 請問您覺得下列哪一個敘述最能描述現場情況？</p>
        <div>
          <input
            type="radio"
            checked={plausibility.trim() === 'BOTH'}
            onChange={() => setPlausibility('BOTH')}
          />現場情況與兩種即時資訊都差不多<br/>
          <input
            type="radio"
            checked={plausibility.trim() === 'TIME'}
            onChange={() => setPlausibility('TIME')}
          />現場情況只與<span className="highLine">剩餘時間資訊</span>差不多<br/>
          <input
            type="radio"
            checked={plausibility.trim() === 'LOCATION'}
            onChange={() => setPlausibility('LOCATION')}
          />現場情況只與<span className="highLine">即時位置狀況</span>差不多<br/>
          <input
            type="radio"
            checked={plausibility.trim() === 'NONE'}
            onChange={() => setPlausibility('NONE')}
          />現場情況與兩種即時資訊都有差距<br/>
        </div>
      </div>
    ]
  }
  let question6;
  if (crowdsourcingType.trim() === 'VERIFICATION' || crowdsourcingType.trim() === 'COMPLEMENT') {
    question6 = [
      <div>
        <p className="surveyQuestion"> 6. 若在考慮點數花費的情況下，您會想要得到怎樣的資訊呢？</p>
          <div>
            <input
              type="radio"
              checked={crowdsourcingTypeWPay.trim() === 'VERIFICATION'}
              onChange={() => setCrowdsourcingTypeWPay('VERIFICATION')}
            />我想得到<span className="highLine">驗證</span>的資訊<br/>
            <input
              type="radio"
              checked={crowdsourcingTypeWPay.trim() === 'COMPLEMENT'}
              onChange={() => setCrowdsourcingTypeWPay('COMPLEMENT')}
            />我想得到<span className="highLine">補充</span>的資訊<br/>
            <input
              type="radio"
              checked={crowdsourcingTypeWPay.trim() === 'NONE'}
              onChange={() => setCrowdsourcingTypeWPay('NONE')}
            />我不需要其他人的協助
          </div>
      </div>
    ];
  }
  else {
    setCrowdsourcingTypeWPay('');
    question6 = [
      <div>
        <p className="lock"> 6. 若在考慮點數花費的情況下，您會想要得到怎樣的資訊呢？</p>
        <div className="lock">
          <input
            type="radio"
            checked={crowdsourcingTypeWPay.trim() === 'VERIFICATION'}
            onChange={() => setCrowdsourcingTypeWPay('VERIFICATION')}
          />我想得到驗證的資訊<br/>
          <input
            type="radio"
            checked={crowdsourcingTypeWPay.trim() === 'COMPLEMENT'}
            onChange={() => setCrowdsourcingTypeWPay('COMPLEMENT')}
          />我想得到補充的資訊<br/>
          <input
            type="radio"
            checked={crowdsourcingTypeWPay.trim() === 'NONE'}
            onChange={() => setCrowdsourcingTypeWPay('NONE')}
          />我不需要其他人的協助
        </div>
      </div>
    ]
  }

  let question7;
  if (crowdsourcingTypeWPay.trim() === 'VERIFICATION' || crowdsourcingTypeWPay.trim() === 'COMPLEMENT') {
    question7 = [
      <div>
        <p className="surveyQuestion"> 7. 您願意增加花費的點數，來縮短等待的時間嗎？</p>
          <div>
            非常不願意
            <input
              type="radio"
              checked={additionalPayWill === 1}
              onChange={() => setAdditionalPayWill(1)}
            />
            <input
              type="radio"
              checked={additionalPayWill === 2}
              onChange={() => setAdditionalPayWill(2)}
            />
            <input
              type="radio"
              checked={additionalPayWill === 3}
              onChange={() => setAdditionalPayWill(3)}
            />

            <input
              type="radio"
              checked={additionalPayWill === 4}
              onChange={() => setAdditionalPayWill(4)}
            />

            <input
              type="radio"
              checked={additionalPayWill === 5}
              onChange={() => setAdditionalPayWill(5)}
            />
            <input
              type="radio"
              checked={additionalPayWill === 6}
              onChange={() => setAdditionalPayWill(6)}
            />
            <input
              type="radio"
              checked={additionalPayWill === 7}
              onChange={() => setAdditionalPayWill(7)}
            />
            非常急
          </div>
      </div>
    ]
  }
  else {
    setAdditionalPayWill(0);
    question7 = [
      <div>
        <p className="lock"> 7. 您願意增加花費的點數，來縮短等待的時間嗎？</p>
          <div className="lock">
            非常不願意
            <input
              type="radio"
              checked={additionalPayWill === 1}
              onChange={() => setAdditionalPayWill(0)}
            />
            <input
              type="radio"
              checked={additionalPayWill === 2}
              onChange={() => setAdditionalPayWill(0)}
            />
            <input
              type="radio"
              checked={additionalPayWill === 3}
              onChange={() => setAdditionalPayWill(0)}
            />

            <input
              type="radio"
              checked={additionalPayWill === 4}
              onChange={() => setAdditionalPayWill(0)}
            />

            <input
              type="radio"
              checked={additionalPayWill === 5}
              onChange={() => setAdditionalPayWill(0)}
            />
            <input
              type="radio"
              checked={additionalPayWill === 6}
              onChange={() => setAdditionalPayWill(0)}
            />
            <input
              type="radio"
              checked={additionalPayWill === 7}
              onChange={() => setAdditionalPayWill(0)}
            />
            非常急
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

        <input
          type="radio"
          checked={urgency === 4}
          onChange={() => setUrgency(4)}
        />

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
      <p className="surveyQuestion"> 2. 請問您覺得兩種即時資訊的一致程度為何？</p>
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

        <input
          type="radio"
          checked={consistancy === 4}
          onChange={() => setConsistancy(4)}
        />

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
      <p className="surveyQuestion"> 5. 假設您現在能透過app去請現場的人回答問題，在不考慮點數花費的情況下，您會想要得到怎樣的資訊呢？</p>
      <div>
        <input
          type="radio"
          checked={crowdsourcingType.trim() === 'VERIFICATION'}
          onChange={() => setCrowdsourcingType('VERIFICATION')}
        />我想得到<span className="highLine">驗證</span>的資訊<br/>
        <input
          type="radio"
          checked={crowdsourcingType.trim() === 'COMPLEMENT'}
          onChange={() => setCrowdsourcingType('COMPLEMENT')}
        />我想得到<span className="highLine">補充</span>的資訊<br/>
        <input
          type="radio"
          checked={crowdsourcingType.trim() === 'NONE'}
          onChange={() => setCrowdsourcingType('NONE')}
        />我不需要其他人的協助
      </div>
    </div>,
    ...question6,
    ...question7
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
