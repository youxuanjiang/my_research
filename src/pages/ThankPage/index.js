import { API_HOST } from "../../global/constants";
const axios = require('axios');

async function addUserInfo(basicInfo) {
  try {
    const res = await axios.post(API_HOST + '/userinfo', basicInfo);
    console.log(`Post Status Code: ${res.status}`);
  } catch (e) {
    console.log(e);
  }
}

async function addResult(surveyResult, user) {
  try {
    const res = await axios.post(API_HOST + '/result', {
      ...surveyResult,
      'User': user
    });
    console.log(`Post Status Code: ${res.status}`);
  } catch (e) {

  }
}

const ThankPage = ( {surveyResult, basicInfo} ) => {
  console.log('thank page');
  addUserInfo(basicInfo);
  addResult(surveyResult, basicInfo.user);
  return(
    <div>
      <h1>謝謝您的填寫</h1>
      <div>{ JSON.stringify(surveyResult) }</div>
      <div>{ JSON.stringify(basicInfo) }</div>
    </div>
  );
}

export default ThankPage;
