import "./index.css";

const Introduction = ({ setPages }) => {
  function clickButton() {
    console.log('page 0-1');
    setPages(1);
  }
  return (
    <div className="introduction">
      <h1 className="title">實驗介紹</h1>
      <p className="content">這是一份由國立陽明交通大學資訊工程學系張永儒副教授和多媒體工程所江友軒碩士生所發起的匿名調查問卷，
        主要調查在不同情境底下查詢他處的資訊時（如：餐廳人潮、公車即時位置資訊等），若得到不甚滿意的答案時，會願意提供多少金額作為回報來請在現場的人來幫你回答你想知道的資訊。<br/><br/>
        本問卷採不記名制度，除了電子信箱作為抽獎聯絡用途，抽獎後刪除該資訊。此研究未來發表於學位論文或期刊當中時，亦無衍生的商業利益。請您自由決定是否填寫，亦可中途放棄填寫，
        無需感到壓力。為表謝意，本研究將於問卷收集完成後，將題目亂答(例如:每題答案都一樣)、未填正確電子信箱者排除，再來隨機抽出得獎者。
        <br/><br/>抽獎項目：<br/>星巴克禮卷(價值兩百元，共２５名)<br/><br/>中獎者會以e-mail，進行得獎通知，再次感謝您熱心協助，謹致上十二萬分的謝意！若您想詢問本問卷內容或有興趣得知研究結果，
        歡迎您依照下述聯絡方式索取研究結果摘要。<br/><br/>國立交通大學多媒體工程研究所<br/>指導教授：張永儒 博士<br/>碩士生：江友軒 敬上<br/>聯絡信箱：youxuanjiang.cs07@nycu.edu.tw</p>
      <button
        className="illustrate"
        onClick={clickButton}
      >開始閱讀參與者匿名之研究說明書</button>
    </div>
  );
};

export default Introduction;
