import "./index.css";

const Introduction = ({ setPages }) => {
  function clickButton() {
    console.log('page 0-1');
    setPages(1);
  }

  const isMobile = window.innerWidth <= 500;

  if (isMobile) {
    return (
      <div className="mobile_introduction">
        <h1 className="mobile_title">探討使用者在不同的資源需求程度下與給予資源提供者報酬金額關係之研究</h1>
        <p className="mobile_content">這是一份由國立陽明交通大學資訊工程學系張永儒副教授和多媒體工程所江友軒碩士生所發起的實驗問卷，
          主要調查使用者在不同情境底下查詢他處的資訊時（如：餐廳人潮、即時路況、公車即時資訊等），若得到不甚滿意的答案，會願意提供多少金額作為回報來請在現場的人來幫你回答你想知道的資訊。<br/><br/>
          此研究未來發表於學位論文或期刊當中時，亦無衍生的商業利益。請您自由決定是否填寫，亦可中途放棄填寫，無需感到壓力。為表謝意，本研究將於問卷收集完成後，將未通過過濾題、未填正確電子信箱者排除，
          再來會提供一百元新台幣作為酬勞。<br/><br/>若確認為有效問卷，最晚會在問卷截止後一個月內收到email通知，再次感謝您熱心協助，謹致上十二萬分的謝意！若您想詢問本問卷內容或有興趣得知研究結果，
          歡迎您依照下述聯絡方式索取研究結果摘要。<br/><br/>國立交通大學多媒體工程研究所<br/>指導教授：張永儒 博士<br/>碩士生：江友軒 敬上<br/>聯絡信箱：youxuanjiang.cs07@nycu.edu.tw</p>
        <button
          className="mobile_illustrate"
          onClick={clickButton}
        >開始閱讀參與者同意書</button>
      </div>
    );
  }
  else{
    return (
      <div className="introduction">
        <h1 className="title">探討使用者在不同的資源需求程度下與給予資源提供者報酬金額關係之研究</h1>
        <p className="content">這是一份由國立陽明交通大學資訊工程學系張永儒副教授和多媒體工程所江友軒碩士生所發起的實驗問卷，
          主要調查使用者在不同情境底下查詢他處的資訊時（如：餐廳人潮、即時路況、公車即時資訊等），若得到不甚滿意的答案，會願意提供多少金額作為回報來請在現場的人來幫你回答你想知道的資訊。<br/><br/>
          此研究未來發表於學位論文或期刊當中時，亦無衍生的商業利益。請您自由決定是否填寫，亦可中途放棄填寫，無需感到壓力。為表謝意，本研究將於問卷收集完成後，將未通過過濾題、未填正確電子信箱者排除，
          再來會提供一百元新台幣作為酬勞。<br/><br/>若確認為有效問卷，最晚會在問卷截止後一個月內收到email通知，再次感謝您熱心協助，謹致上十二萬分的謝意！若您想詢問本問卷內容或有興趣得知研究結果，
          歡迎您依照下述聯絡方式索取研究結果摘要。<br/><br/>國立交通大學多媒體工程研究所<br/>指導教授：張永儒 博士<br/>碩士生：江友軒 敬上<br/>聯絡信箱：youxuanjiang.cs07@nycu.edu.tw</p>
        <button
          className="illustrate"
          onClick={clickButton}
        >開始閱讀參與者同意書</button>
      </div>
    );
  }
};

export default Introduction;
