import "./index.css";

const Introduction = ({ setPages, userCode, setUserCode }) => {
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
        此實驗採問卷形式，一共有20個不同的題組，每個題組有5-7個問題，填答過程需進行「放聲思考」，且填答完成後會根據您填答的內容進行約十分鐘內的小訪談，預計花費一個半小時至兩個小時左右。<br/><br/>有關填答者的權益都在參與者研究說明書中詳細載明，請務必仔細閱讀。<br/><br/>再次感謝您熱心協助，
          謹致上十二萬分的謝意！若您想詢問本問卷內容或有興趣得知研究結果，歡迎您依照下述聯絡方式索取研究結果摘要。<br/><br/>國立交通大學多媒體工程研究所
          <br/>指導教授：張永儒 博士<br/>碩士生：江友軒 敬上<br/>聯絡信箱：youxuanjiang.cs07@nycu.edu.tw</p>
        <div  className="title">
          <p>請輸入受測者代號：</p>
          <input
            type="text"
            value={userCode}
            onChange={(e) => setUserCode(e.target.value)}
          />
        </div>
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
        此實驗採問卷形式，一共有20個不同的題組，每個題組有5-7個問題，填答過程需進行「放聲思考」，且填答完成後會根據您填答的內容進行約十分鐘內的小訪談，預計花費一個半小時至兩個小時左右。<br/><br/>有關填答者的權益都在參與者研究說明書中詳細載明，請務必仔細閱讀。<br/><br/>再次感謝您熱心協助，
          謹致上十二萬分的謝意！若您想詢問本問卷內容或有興趣得知研究結果，歡迎您依照下述聯絡方式索取研究結果摘要。<br/><br/>國立交通大學多媒體工程研究所
          <br/>指導教授：張永儒 博士<br/>碩士生：江友軒 敬上<br/>聯絡信箱：youxuanjiang.cs07@nycu.edu.tw</p>
        <div  className="title">
          <p>請輸入受測者代號：</p>
          <input
            type="text"
            value={userCode}
            onChange={(e) => setUserCode(e.target.value)}
          />
        </div>
        <button
          className="illustrate"
          onClick={clickButton}
        >開始閱讀參與者研究說明書</button>
      </div>
    );
  }
};

export default Introduction;
