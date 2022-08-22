import { API_HOST } from "../../global/constants";
const axios = require('axios');

// async function addUserInfo(basicInfo) {
//   try {
//     const res = await axios.post(API_HOST + '/userinfo', basicInfo);
//     console.log(`Post Status Code: ${res.status}`);
//   } catch (e) {
//     console.log(e);
//   }
// }
//
// async function addResult(surveyResult, user) {
//   try {
//     const res = await axios.post(API_HOST + '/result', {
//       ...surveyResult,
//       'User': user
//     });
//     console.log(`Post Status Code: ${res.status}`);
//   } catch (e) {
//
//   }
// }

// async function addPilotInfo(basicInfo) {
//   try {
//     const res = await axios.post(API_HOST + '/pilotinfo', basicInfo);
//     console.log(`Post Status Code: ${res.status}`);
//   } catch (e) {
//     console.log(e);
//   }
// }

async function addResult(surveyResult, userCode) {
  try {
    const res = await axios.post(API_HOST + '/result', {
      ...surveyResult,
      'UserCode': userCode
    });
    console.log(`Post Status Code: ${res.status}`);
  } catch (e) {

  }
}

const ThankPage = ( {surveyResult, userCode} ) => {
  console.log('thank page');
  // addUserInfo(basicInfo);
  // addResult(surveyResult, basicInfo.user);
  addResult(surveyResult, userCode);
  return(
    <div>
      <h1>非常感謝您的參與本實驗</h1>
    </div>
  );
}

export default ThankPage;
