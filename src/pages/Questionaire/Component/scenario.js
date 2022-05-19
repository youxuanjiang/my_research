import { v4 } from "uuid";

const Scenario = ({ number, scenario, image, highline }) => {
  return (
    <div className="scenario">
      <h1 className="title">情境 { number }</h1>
      <div className="scenarioContent">
        <img
        src={image}
        style={{ width: "100%", margin: "30px 0" }}
        />
        <p>{ scenario.map((sentance) => {
            return(<span key={v4()}>{sentance}<br/></span>)
          }) }</p>
        <h3>重點條件整理(請先詳細閱讀上方情境)</h3>
        <p className='highLine'>{ highline.map((sentance) => {
            return(<span key={v4()}>{sentance}<br/></span>)
          }) }</p>
      </div>
    </div>
  );
};

export default Scenario;
