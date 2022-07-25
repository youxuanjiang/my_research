import { v4 } from "uuid";

const Scenario = ({ number, test, scenario, image }) => {
  const isMobile = window.innerWidth <= 500;

  if (isMobile) {
    return (
      <div className="mobile_scenario">
        <h1 className="mobile_title">範例 { number }：{test}</h1>
        <div className="mobile_scenarioContent">
          <p>{ scenario.map((sentance) => {
              return(<span key={v4()}>{sentance}<br/></span>)
            }) }</p>
          <img
          src={image}
          style={{ width: "100%", margin: "30px 0" }}
          />
        </div>
      </div>
    );
  }
  else {
    return (
      <div className="scenario">
        <h1 className="title">範例 { number }：{test}</h1>
        <div className="scenarioContent">
          <p>{ scenario.map((sentance) => {
              return(<span key={v4()}>{sentance}<br/></span>)
            }) }</p>
          <img
          src={image}
          style={{ width: "70%", margin: "30px 0" }}
          />
        </div>
      </div>
    );
  }
};

export default Scenario;

// <div className="scenarioContent">
//   <h3>重點條件整理(請先詳細閱讀上方情境)</h3>
//   <p className='highLine'>{ highline.map((sentance) => {
//       return(<span key={v4()}>{sentance}<br/></span>)
//     }) }</p>
// </div>

// <div className="mobile_scenarioContent">
//   <h3>重點條件整理(請先詳細閱讀上方情境)</h3>
//   <p className='highLine'>{ highline.map((sentance) => {
//       return(<span key={v4()}>{sentance}<br/></span>)
//     }) }</p>
// </div>
