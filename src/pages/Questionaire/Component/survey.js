import { v4 } from "uuid";

const Survey = ({urgency, setUrgency, importance, setImportance, effort, setEffort, payment, setPayment}) => {
  const questionList = [
    <div>
      <p className="surveyQuestion"> 1. 您認為您還剩下多少等待答案的時間呢？</p>
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
      <p className="surveyQuestion"> 2. 若沒有解決問題所造成的代價，您認為的嚴重程度為何？</p>
      <div>
        小小不便
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
      <p className="surveyQuestion"> 3. 我認為要回答我再app上的發問，對方所感受到的麻煩程度為何？</p>
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
      <p className="surveyQuestion"> 4. 您能透過給予現金的方式，讓任何能回答你的問題的人能夠<span className="highLine">立即</span>回答的話，根據目前的情況，您願意提供多少新台幣呢？</p>
      <div>
        <input
          type="radio"
          checked={payment === 1}
          onChange={() => setPayment(1)}
        />0
        <input
          type="radio"
          checked={payment === 2}
          onChange={() => setPayment(2)}
        />10
        <input
          type="radio"
          checked={payment === 3}
          onChange={() => setPayment(3)}
        />20
        <input
          type="radio"
          checked={payment === 4}
          onChange={() => setPayment(4)}
        />30
        <input
          type="radio"
          checked={payment === 5}
          onChange={() => setPayment(5)}
        />40
        <input
          type="radio"
          checked={payment === 6}
          onChange={() => setPayment(6)}
        />50
        <input
          type="radio"
          checked={payment === 7}
          onChange={() => setPayment(7)}
        />60+
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
