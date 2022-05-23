import { v4 } from "uuid";

const Survey = ({urgency, setUrgency, importance, setImportance, effort, setEffort, payment, setPayment}) => {
  const questionList = [
    <div>
      <p className="surveyQuestion"> 1. 我已經<span className="highLine">快沒有時間</span>去等人來回覆我，若沒有現在拿到答案的話就來不及了。</p>
      <div>
        非常不同意
        <input
          type="radio"
          checked={urgency[0] === 1}
          onChange={() => setUrgency(
            (prev) => {
              return [1, prev[1]];
            }
          )}
        />
        <input
          type="radio"
          checked={urgency[0] === 2}
          onChange={() => setUrgency(
            (prev) => {
              return [2, prev[1]];
            }
          )}
        />
        <input
          type="radio"
          checked={urgency[0] === 3}
          onChange={() => setUrgency(
            (prev) => {
              return [3, prev[1]];
            }
          )}
        />
        <label> - </label>
        <input
          type="radio"
          checked={urgency[0] === 4}
          onChange={() => setUrgency(
            (prev) => {
              return [4, prev[1]];
            }
          )}
        />
        <label> - </label>
        <input
          type="radio"
          checked={urgency[0] === 5}
          onChange={() => setUrgency(
            (prev) => {
              return [5, prev[1]];
            }
          )}
        />
        <input
          type="radio"
          checked={urgency[0] === 6}
          onChange={() => setUrgency(
            (prev) => {
              return [6, prev[1]];
            }
          )}
        />
        <input
          type="radio"
          checked={urgency[0] === 7}
          onChange={() => setUrgency(
            (prev) => {
              return [7, prev[1]];
            }
          )}
        />
        非常同意
      </div>
    </div>,
    <div>
      <p className="surveyQuestion"> 2. 目前等待的時間<span className="highLine">還非常充裕</span>，還不需要立刻拿到答案。</p>
      <div>
        非常不同意
        <input
          type="radio"
          checked={urgency[1] === 7}
          onChange={() => setUrgency(
            (prev) => {
              return [prev[0], 7];
            }
          )}
        />
        <input
          type="radio"
          checked={urgency[1] === 6}
          onChange={() => setUrgency(
            (prev) => {
              return [prev[0], 6];
            }
          )}
        />
        <input
          type="radio"
          checked={urgency[1] === 5}
          onChange={() => setUrgency(
            (prev) => {
              return [prev[0], 5];
            }
          )}
        />
        <label> - </label>
        <input
          type="radio"
          checked={urgency[1] === 4}
          onChange={() => setUrgency(
            (prev) => {
              return [prev[0], 4];
            }
          )}
        />
        <label> - </label>
        <input
          type="radio"
          checked={urgency[1] === 3}
          onChange={() => setUrgency(
            (prev) => {
              return [prev[0], 3];
            }
          )}
        />
        <input
          type="radio"
          checked={urgency[1] === 2}
          onChange={() => setUrgency(
            (prev) => {
              return [prev[0], 2];
            }
          )}
        />
        <input
          type="radio"
          checked={urgency[1] === 1}
          onChange={() => setUrgency(
            (prev) => {
              return [prev[0], 1];
            }
          )}
        />
        非常同意
      </div>
    </div>,
    <div>
      <p className="surveyQuestion"> 3. 若沒有在事情來不及之前解決問題的話，所造成的代價是<span className="highLine">非常嚴重</span>的，足以影響你長期的人生規劃。</p>
      <div>
        非常不同意
        <input
          type="radio"
          checked={importance[0] === 1}
          onChange={() => setImportance(
            (prev) => {
              return [1, prev[1]];
            }
          )}
        />
        <input
          type="radio"
          checked={importance[0] === 2}
          onChange={() => setImportance(
            (prev) => {
              return [2, prev[1]];
            }
          )}
        />
        <input
          type="radio"
          checked={importance[0] === 3}
          onChange={() => setImportance(
            (prev) => {
              return [3, prev[1]];
            }
          )}
        />
        <label> - </label>
        <input
          type="radio"
          checked={importance[0] === 4}
          onChange={() => setImportance(
            (prev) => {
              return [4, prev[1]];
            }
          )}
        />
        <label> - </label>
        <input
          type="radio"
          checked={importance[0] === 5}
          onChange={() => setImportance(
            (prev) => {
              return [5, prev[1]];
            }
          )}
        />
        <input
          type="radio"
          checked={importance[0] === 6}
          onChange={() => setImportance(
            (prev) => {
              return [6, prev[1]];
            }
          )}
        />
        <input
          type="radio"
          checked={importance[0] === 7}
          onChange={() => setImportance(
            (prev) => {
              return [7, prev[1]];
            }
          )}
        />
        非常同意
      </div>
    </div>,
    <div>
      <p className="surveyQuestion"> 4. 就算沒有在事情來不及之前解決問題，所造成的代價其實也<span className="highLine">不會造成什麼影響</span>。</p>
      <div>
        非常不同意
        <input
          type="radio"
          checked={importance[1] === 7}
          onChange={() => setImportance(
            (prev) => {
              return [prev[0], 7];
            }
          )}
        />
        <input
          type="radio"
          checked={importance[1] === 6}
          onChange={() => setImportance(
            (prev) => {
              return [prev[0], 6];
            }
          )}
        />
        <input
          type="radio"
          checked={importance[1] === 5}
          onChange={() => setImportance(
            (prev) => {
              return [prev[0], 5];
            }
          )}
        />
        <label> - </label>
        <input
          type="radio"
          checked={importance[1] === 4}
          onChange={() => setImportance(
            (prev) => {
              return [prev[0], 4];
            }
          )}
        />
        <label> - </label>
        <input
          type="radio"
          checked={importance[1] === 3}
          onChange={() => setImportance(
            (prev) => {
              return [prev[0], 3];
            }
          )}
        />
        <input
          type="radio"
          checked={importance[1] === 2}
          onChange={() => setImportance(
            (prev) => {
              return [prev[0], 2];
            }
          )}
        />
        <input
          type="radio"
          checked={importance[1] === 1}
          onChange={() => setImportance(
            (prev) => {
              return [prev[0], 1];
            }
          )}
        />
        非常同意
      </div>
    </div>,
    <div>
      <p className="surveyQuestion"> 5. 我認為要回答這些問題是<span className="highLine">會讓對方感到非常麻煩</span>的。</p>
      <div>
        非常不同意
        <input
          type="radio"
          checked={effort[0] === 1}
          onChange={() => setEffort(
            (prev) => {
              return [1, prev[1]];
            }
          )}
        />
        <input
          type="radio"
          checked={effort[0] === 2}
          onChange={() => setEffort(
            (prev) => {
              return [2, prev[1]];
            }
          )}
        />
        <input
          type="radio"
          checked={effort[0] === 3}
          onChange={() => setEffort(
            (prev) => {
              return [3, prev[1]];
            }
          )}
        />
        <label> - </label>
        <input
          type="radio"
          checked={effort[0] === 4}
          onChange={() => setEffort(
            (prev) => {
              return [4, prev[1]];
            }
          )}
        />
        <label> - </label>
        <input
          type="radio"
          checked={effort[0] === 5}
          onChange={() => setEffort(
            (prev) => {
              return [5, prev[1]];
            }
          )}
        />
        <input
          type="radio"
          checked={effort[0] === 6}
          onChange={() => setEffort(
            (prev) => {
              return [6, prev[1]];
            }
          )}
        />
        <input
          type="radio"
          checked={effort[0] === 7}
          onChange={() => setEffort(
            (prev) => {
              return [7, prev[1]];
            }
          )}
        />
      非常同意
      </div>
    </div>,
    <div>
      <p className="surveyQuestion"> 6. 我認為要回答這些問題對<span className="highLine">對方來說是非常容易</span>的。</p>
      <div>
        非常不同意
        <input
          type="radio"
          checked={effort[1] === 7}
          onChange={() => setEffort(
            (prev) => {
              return [prev[0], 7];
            }
          )}
        />
        <input
          type="radio"
          checked={effort[1] === 6}
          onChange={() => setEffort(
            (prev) => {
              return [prev[0], 6];
            }
          )}
        />
        <input
          type="radio"
          checked={effort[1] === 5}
          onChange={() => setEffort(
            (prev) => {
              return [prev[0], 5];
            }
          )}
        />
        <label> - </label>
        <input
          type="radio"
          checked={effort[1] === 4}
          onChange={() => setEffort(
            (prev) => {
              return [prev[0], 4];
            }
          )}
        />
        <label> - </label>
        <input
          type="radio"
          checked={effort[1] === 3}
          onChange={() => setEffort(
            (prev) => {
              return [prev[0], 3];
            }
          )}
        />
        <input
          type="radio"
          checked={effort[1] === 2}
          onChange={() => setEffort(
            (prev) => {
              return [prev[0], 2];
            }
          )}
        />
        <input
          type="radio"
          checked={effort[1] === 1}
          onChange={() => setEffort(
            (prev) => {
              return [prev[0], 1];
            }
          )}
        />
      非常同意
      </div>
    </div>,
    <div>
      <p className="surveyQuestion"> 7. 您能透過給予現金的方式，讓任何能回答你的問題的人能夠<span className="highLine">立即</span>回答的話，根據目前的情況，您願意提供多少新台幣呢？</p>
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
