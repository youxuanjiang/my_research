import { v4 } from "uuid";

const Scenario = ({ test, scenario, image, scenarioArrCount }) => {
  const isMobile = window.innerWidth <= 500;
  if(scenarioArrCount != -1){
    if (isMobile) {
      return (
        <div className="mobile_scenario">
          <div className="mobile_scenarioContent">
            <p className='test'>{test}</p>
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
          <div className="scenarioContent">
            <p className='test'>{test}</p>
            <p>{ scenario.map((sentance) => {
                return(<span key={v4()}>{sentance}<br/></span>)
              }) }</p>
            <img
            src={image}
            style={{ width: "95%", margin: "30px 0" }}
            />
          </div>
        </div>
      );
    }
  };
}


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
