import "./index.css";
import { v4 } from "uuid";
import { useState } from "react";

const story = require('./Component/story');
var count = 0;

const Background = ({ setPages }) => {
  const isMobile = window.innerWidth <= 500;
  const [background, setBackground] = useState(story[0].split('<image>')[0].split('\n'));
  const [imageUrl, setImageUrl] = useState(story[0].split('<image>')[1]);
  const [introCount, setIntroCount] = useState(1);
  const [buttonValue, setButtonValue] = useState('下一頁');

  async function clickPrevButton() {
    if (introCount === 1) {
      alert("這是第一頁了喔！沒有上一頁了啦！")
    }
    else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      if (buttonValue === "開始填寫問卷") {
        setButtonValue("下一頁")
      }

      count -= 1;
      setIntroCount((prev) => {
        return prev - 1;
      });
      console.log(story[count]);
      console.log(count);
      setImageUrl(story[count].split('<image>')[1]);
      setBackground(story[count].split('<image>')[0].split('\n'));

    }
  }

  async function clickButton() {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      if (buttonValue === '下一頁') {
        count += 1;
        console.log(story[count]);
        console.log(count);
        // console.log(result[scenarioArrCount]);
        setIntroCount((prev) => {
          return prev + 1;
        });

        if (story.length === count+1){
          setButtonValue('開始填寫問卷');
        }
        setImageUrl(story[count].split('<image>')[1]);
        setBackground(story[count].split('<image>')[0].split('\n'));
      }else {
        setPages(3);
      }
    }

  if (isMobile) {
    if (imageUrl === undefined) {
      return (
        <div className="mobile_background">
          <h1 className="mobile_title">背景介紹</h1>
          <div className="mobile_backgroundContent">
            <p>{ background.map((sentance) => {
                return(<span key={v4()}>{sentance}<br/></span>)
              }) }</p>
          </div>
          <button
            className="prev"
            onClick={clickPrevButton}
          >上一頁</button>
          <button
            className="next"
            onClick={clickButton}
          >{buttonValue}</button>
          <p className="mobile_page">{introCount} / 7</p>
        </div>
      );
    }
    else{
      return (
        <div className="mobile_background">
          <h1 className="mobile_title">背景介紹</h1>
          <div className="mobile_backgroundContent">
            <img
            src={imageUrl}
            style={{ width: "100%", margin: "30px 0" }}
            />
            <p>{ background.map((sentance) => {
                return(<span key={v4()}>{sentance}<br/></span>)
              }) }</p>
          </div>
          <button
            className="prev"
            onClick={clickPrevButton}
          >上一頁</button>
          <button
            className="next"
            onClick={clickButton}
          >{buttonValue}</button>
          <p className="mobile_page">{introCount} / 7</p>
        </div>
      );
    }
  }
  else {
    console.log(imageUrl);
    if (imageUrl === undefined) {
      return (
        <div className="background">
          <h1 className="title">背景介紹</h1>
          <div className="backgroundContent">
            <p>{ background.map((sentance) => {
                  return(<span key={v4()}>{sentance}<br/></span>)
                }) }</p>
          </div>
          <button
            className="prev"
            onClick={clickPrevButton}
          >上一頁</button>
          <button
            className="next"
            onClick={clickButton}
          >{buttonValue}</button>
          <p className="page">{introCount} / 7</p>
        </div>
      );
    }
    else {
      return (
        <div className="background">
          <h1 className="title">背景介紹</h1>
          <div className="backgroundContent">
            <img
            src={imageUrl}
            style={{ width: "100%", margin: "30px 0" }}
            />
            <p>{ background.map((sentance) => {
                  return(<span key={v4()}>{sentance}<br/></span>)
                }) }</p>
          </div>
          <button
            className="prev"
            onClick={clickPrevButton}
          >上一頁</button>
          <button
            className="next"
            onClick={clickButton}
          >{buttonValue}</button>
          <p className="page">{introCount} / 7</p>
        </div>
      );
    }
  }
};

export default Background;
