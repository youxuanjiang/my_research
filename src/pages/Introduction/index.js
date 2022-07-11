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
        <h3 className="mobile_title">實驗簡介</h3>
        <p className="mobile_content">這是一份由國立陽明交通大學多媒體工程所江友軒碩士生所發起的實驗，主要研究在使用者在不同情境底下查詢他處的資訊時
          （如：餐廳人潮、即時路況、公車即時資訊等），若該資訊與您本身的認知有落差時，是否會需要有人提供額外的資訊來幫助您釐清這段落差？<br/><br/>
          開始作答時，請先詳細閱讀頁面上方的情境說明，接著根據情境來回答問題。一共有20個不同的情境，隨機出題，每個情境皆有7個問題，其中部分情境會有些類似
          ，但還是有些許不同之處，因此請仔細閱讀。<br/><br/>有關填答者的權益都在參與者研究說明書中詳細載明，請務必仔細閱讀。<br/><br/>再次感謝您熱心協助，
          謹致上十二萬分的謝意！若您想詢問本問卷內容或有興趣得知研究結果，歡迎您依照下述聯絡方式索取研究結果摘要。<br/><br/>國立交通大學多媒體工程研究所
          <br/>指導教授：張永儒 博士<br/>碩士生：江友軒 敬上<br/>聯絡信箱：youxuanjiang.cs07@nycu.edu.tw</p>
        <button
          className="mobile_illustrate"
          onClick={clickButton}
        >開始閱讀參與者研究說明書</button>
      </div>
    );
  }
  else{
    return (
      <div className="introduction">
        <h3 className="title">實驗簡介</h3>
        <p className="content">這是一份由國立陽明交通大學多媒體工程所江友軒碩士生所發起的實驗，主要研究在使用者在不同情境底下查詢他處的資訊時
          （如：餐廳人潮、即時路況、公車即時資訊等），若該資訊與您本身的認知有落差時，是否會需要有人提供額外的資訊來幫助您釐清這段落差？<br/><br/>
          開始作答時，請先詳細閱讀頁面上方的情境說明，接著根據情境來回答問題。一共有20個不同的情境，隨機出題，每個情境皆有7個問題，其中部分情境會有些類似
          ，但還是有些許不同之處，因此請仔細閱讀。<br/><br/>有關填答者的權益都在研究說明書中詳細載明，請務必仔細閱讀。<br/><br/>再次感謝您熱心協助，
          謹致上十二萬分的謝意！若您想詢問本問卷內容或有興趣得知研究結果，歡迎您依照下述聯絡方式索取研究結果摘要。<br/><br/>國立交通大學多媒體工程研究所
          <br/>指導教授：張永儒 博士<br/>碩士生：江友軒 敬上<br/>聯絡信箱：youxuanjiang.cs07@nycu.edu.tw</p>
        <button
          className="illustrate"
          onClick={clickButton}
        >開始閱讀參與者研究說明書</button>
      </div>
    );
  }
};

export default Introduction;
