import { useState } from "react";
import { API_HOST } from "../../global/constants";
import "./index.css";

const axios = require('axios');

async function createUserCode() {
  try {
    const res = await axios.get(API_HOST + '/userinfo');
    const userNum = res.data.length + 1;
    return 'USER_' + userNum;
  } catch (e) {
    console.log(e);
    return 'error create user code';
  }
}

const BasicInfo = ({setPages, setBasicInfo}) => {
  const [sex, setSex] = useState('');
  const [age, setAge] = useState('');
  const [carrier, setCarrier] = useState('');
  const [education, setEducation] = useState('');
  const [email, setEmail] = useState('');

  async function clickButton() {
    if (!(sex && age && carrier && education)){
      alert("資訊要好好填喔你這小淘氣！");
    }
    else {
      if (email !== '' && !email.includes('@')) {
        alert("要填信箱的話記得要填對唷小淘氣～");
      }
      else {
        const user = await createUserCode();
        setBasicInfo({
          "user":user,
          "sex":sex,
          "age":age,
          "carrier":carrier,
          "education":education,
          "email":email
        });
        setPages(4);
      }
    }
  }
  return (
    <div className="basicInfo">
      <h1>基本資料</h1>
      <div>
        <h3>性別</h3>
        <div>
          <input
            type="radio"
            checked={sex === '男性'}
            onChange={() => setSex('男性')}
          />
          男性
          <input
            type="radio"
            checked={sex === '女性'}
            onChange={() => setSex('女性')}
          />
          女性
          <input
            type="radio"
            checked={sex === '其他'}
            onChange={() => setSex('其他')}
          />
          其他
        </div>
      </div>
      <div>
        <h3>年齡</h3>
        <div>
          <input
            type="radio"
            checked={age === '20~29歲'}
            onChange={() => setAge('20~29歲')}
          />
          20-29歲
          <input
            type="radio"
            checked={age === '30~39歲'}
            onChange={() => setAge('30~39歲')}
          />
          30-39歲
          <input
            type="radio"
            checked={age === '40~49歲'}
            onChange={() => setAge('40~49歲')}
          />
          40-49歲
          <input
            type="radio"
            checked={age === '50~59歲'}
            onChange={() => setAge('50~59歲')}
          />
          50-59歲
          <input
            type="radio"
            checked={age === '60以上'}
            onChange={() => setAge('60以上')}
          />
          60以上
        </div>
      </div>
      <div>
        <h3>職業</h3>
        <div>
          <input
            type="radio"
            checked={carrier === '學生'}
            onChange={() => setCarrier('學生')}
          />
          學生
          <input
            type="radio"
            checked={carrier === '軍公教'}
            onChange={() => setCarrier('軍公教')}
          />
          軍公教
          <input
            type="radio"
            checked={carrier === '醫務人員'}
            onChange={() => setCarrier('醫務人員')}
          />
          醫務人員
          <input
            type="radio"
            checked={carrier === '金融保險業'}
            onChange={() => setCarrier('金融保險業')}
          />
          金融保險業
          <input
            type="radio"
            checked={carrier === '服務業'}
            onChange={() => setCarrier('服務業')}
          />
          服務業
        </div>
        <div>
          <input
            type="radio"
            checked={carrier === '資訊業'}
            onChange={() => setCarrier('資訊業')}
          />
          資訊業
          <input
            type="radio"
            checked={carrier === '電子業'}
            onChange={() => setCarrier('電子業')}
          />
          電子業
          <input
            type="radio"
            checked={carrier === '營造業'}
            onChange={() => setCarrier('營造業')}
          />
          營造業
          <input
            type="radio"
            checked={carrier === '農林漁牧業'}
            onChange={() => setCarrier('農林漁牧業')}
          />
          農林漁牧業
          <input
            type="radio"
            checked={carrier === '商業'}
            onChange={() => setCarrier('商業')}
          />
          商業
        </div>
        <div>
          <input
            type="radio"
            checked={carrier === '大眾傳播'}
            onChange={() => setCarrier('大眾傳播')}
          />
          大眾傳播
          <input
            type="radio"
            checked={carrier === '製造業'}
            onChange={() => setCarrier('製造業')}
          />
          製造業
          <input
            type="radio"
            checked={carrier === '家管'}
            onChange={() => setCarrier('家管')}
          />
          家管
          <input
            type="radio"
            checked={carrier === '自由業'}
            onChange={() => setCarrier('自由業')}
          />
          自由業
          <input
            type="radio"
            checked={carrier === '其他'}
            onChange={() => setCarrier('其他')}
          />
          其他
        </div>
      </div>
      <div>
        <h3>教育程度</h3>
        <div>
          <input
            type="radio"
            checked={education === '國中(含)以下'}
            onChange={() => setEducation('國中(含)以下')}
          />
          國中(含)以下
          <input
            type="radio"
            checked={education === '高中職'}
            onChange={() => setEducation('高中職')}
          />
          高中職
          <input
            type="radio"
            checked={education === '大學'}
            onChange={() => setEducation('大學')}
          />
          大學
          <input
            type="radio"
            checked={education === '研究所(含)以上'}
            onChange={() => setEducation('研究所(含)以上')}
          />
          研究所(含)以上
        </div>
        <div>
          <h3>電子郵件(選填)</h3>
          <input
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
      </div>
      <button className="submit" onClick={clickButton}>填寫完成</button>
    </div>
  );
};

export default BasicInfo;
