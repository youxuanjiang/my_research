import {useState} from 'react';
import "./index.css";

const Video = ({ setPages }) => {
  const [checked, setChecked] = useState(false);

  function clickButton() {
    if (checked) {
      console.log('page 2-3');
      setPages(3);
    }

    else {
      alert("說明影片要好好看完唷！");
    }
  }

  const isMobile = window.innerWidth <= 500;

  if (isMobile) {
    return (
      <div className="mobile_video">
        <h3 className="mobile_title">實驗簡介</h3>
        <p className="mobile_content"><iframe width="100%" src="https://www.youtube.com/embed/97oWUYic3DY" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></p>
        <div className="checked">
          <input
            type="checkbox"
            checked={checked === true}
            onChange={() => setChecked(
              (prev) => {
                return !prev
              }
            )}
          />我已詳看完說明影片並清楚知道實驗流程與內容
        </div>
        <button
          className="mobile_example"
          onClick={clickButton}
        >開始填寫範例題</button>
      </div>
    );
  }
  else{
    if (window.innerWidth <= 1120) {
      return (
        <div className="video">
          <h3 className="title">實驗說明影片</h3>
          <p className="content"><iframe width="100%" src="https://www.youtube.com/embed/97oWUYic3DY" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></p>
          <div className="checked">
            <input
              type="checkbox"
              checked={checked === true}
              onChange={() => setChecked(
                (prev) => {
                  return !prev
                }
              )}
            />我已詳看完說明影片並清楚知道實驗流程與內容
          </div>
          <button
            className="example"
            onClick={clickButton}
          >開始填寫範例題</button>
        </div>
      );
    }
    else {
      return (
        <div className="video">
          <h3 className="title">實驗說明影片</h3>
          <iframe width="1020" height="630" src="https://www.youtube.com/embed/97oWUYic3DY" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
          <div className="checked">
            <input
              type="checkbox"
              checked={checked === true}
              onChange={() => setChecked(
                (prev) => {
                  return !prev
                }
              )}
            />我已詳看完說明影片並清楚知道實驗流程與內容
          </div>
          <button
            className="example"
            onClick={clickButton}
          >開始填寫範例題</button>
        </div>
      );
    }
  }
};

export default Video;
