import {useState} from 'react';
import "./index.css";

const ParticipantIllustrate = ({ setPages }) => {
  const [checked, setChecked] = useState(false);

  function clickButton() {
    if (checked) {
      setPages(2);
    }

    else {
      alert("內容要好好看唷！");
    }
  }

  const isMobile = window.innerWidth <= 500;

  if (isMobile) {
    return (
      <div className="mobile_introduction">
        <h1 className="mobile_title">參與者研究說明書</h1>
        <div className="mobile_content"><h2>研究計畫資料</h2>
          <p>計畫名稱：事件偵測追蹤與文字可信度辨識技術開發 - 探討使用者對於地點即時資訊的群眾外包資源需求以及類型偏好<br/>
          執行單位：國立陽明交通大學資訊工程系<br/>
          研究經費來源：科技部<br/>
          研究人員：江友軒<br/>
          聯絡電話：0903054901<br/>
          聯絡信箱：youxuanjiang.cs07@nycu.edu.tw<br/>
          職責：碩士生<br/><br/>
          計畫主持人：張永儒<br/>
          聯絡電話：(03) 5712121 #56632<br/>
          職責：監督研究計畫之實施<br/>
          信箱：armuro@cs.nctu.edu.tw<br/><br/>
          24小時緊急聯絡人(或研究計畫聯絡人)：江友軒<br/>
          聯絡電話：0903054901<br/>
          聯絡信箱：youxuanjiang.cs07@nycu.edu.tw
          </p>
        </div>
        <p></p>
        <div className="mobile_content"><h3>一、研究背景</h3>
          <p>
            群眾外包(Crowdsourcing)是一種獲取資源的方式，指的是利用一大群人來獲取需要的資訊或服務。在我們所生活的智慧城市(Smart City)中，當地點即時資訊與使用者的認知不一致時，
            可透過群眾外包單純「驗證」即時資訊，或是「補充」更詳細的資訊來幫助使用者填補這段落差。例如：當你因為app上的公車即時動態跟表定時刻不一致而感到疑惑時，
            你可以透過群眾外包平台找到正在現場或是最近有搭乘該班公車經驗的人，請他們告訴你公車的確切發車時間，或者即時資訊跟表定時刻不一樣的原因。<br/><br/>
            根據過去研究指出，在許多不同種類的資訊中，當使用者為其感到疑惑時，透過群眾外包確實能幫助使用者更有效率的填補資訊與認知的落差。但尚未有研究針對智慧城市中的地點即時資訊，
            探討使用者在什麼情況下有透過群眾外包來幫助自己理解的需求。由於越詳細的資訊需要更多的時間等待回覆，因此得以進一步的去探討使用者在不同情境以及時間考量下，
            對於群眾外包所提供的資訊類型的取捨。我們希望透過這個研究問題，可以幫助提供地點即時資訊的平台，依據不同的資訊提供適當的群眾外包資源來幫助使用者，以此幫助平台使用者更有效率的規劃行程。
          </p>
        </div>
        <p></p>
        <div className="mobile_content"><h3>二、研究目的</h3>
          <p>
            本研究探討使用者在不同情境下觀看地點即時資訊時，該資訊的合理性以及時間考量會如何影響群眾外包資訊的需求與種類偏好。
          </p>
        </div>
        <p></p>
        <div className="mobile_content"><h3>三、研究參與者納入與排除條件</h3>
          <p>
            此研究將招募20-60歲曾經透過任何平台查詢即時狀態資料的使用者（如：查看店家或景點的即時人潮資訊、即時路況資訊、公車即時資訊、共享汽機車位置等），
            包含但不限於：Google Maps、高速公路1968、台北等公車、公車站牌資訊、iRent等平台。此研究排除與主持人有利害關係的學生，包含開課學生與指導學生。
          </p>
        </div>
        <p></p>
        <div className="mobile_content"><h3>四、研究方法、程序及參與者須配合的事項</h3>
          <p>
            1. 此實驗大約耗時一個小時，請您想像題目的情境並依照自身想法填寫。您所填答的資料僅供學術研究參考，不會轉至其他用途。<br/><br/>
            2. 此研究含有過濾題，用以篩檢無效的回覆，因此請認真作答。<br/><br/>
            3. 為感謝您參與本研究的時間與付出，我們會提供150新台幣酬勞。若您有意願領取，請於問券末填寫Email。<br/><br/>
            4. 確認完為有效問卷後，我們會與您聯絡，並將領據email給您（依學校規定，領據中需要填寫姓名、手機、身分證字號、 公司、職稱與戶籍地址等個資，
            以利申報所得稅，處理完報帳事宜後我們會將這些個資刪除），請您填寫之後email寄回，我們確認收到之後會將酬勞透過行動支付或銀行匯款給您。<br/><br/>
            5. 我們會透過過濾題與填答時間合理性作為判斷是否為有效問卷的基準，若判定為無效問卷則填寫者不會收到email通知。
            若為有效問卷，填寫者最晚會在問卷截止後一個月內收到通知，期間有任何問題都歡迎email詢問。
          </p>
        </div>
        <p></p>
        <div className="mobile_content"><h3>五、蒐集之資料及其結果使用規劃、保存方式、保存年限及後續使用</h3>
          <p>
            (一)使用規劃<br/>
            本研究會要您提供性別、年齡、職業、最高學歷，以及電子信箱。在問卷填寫完畢且系統確認完為有效問卷之後，系統會將聯絡資料以及其他資訊分開儲存，
            因此研究人員無法將填答者的問卷內容以及聯絡資料做直接連結，亦無法透過問卷內容間接識別填答者的身份，待報酬事宜處理完之後就會將聯絡資料刪除。
            只留下去連結後的資料保留用於進一步研究，且僅發表於學術論文。<br/><br/>
            (二)保存方式、年限及後續使用<br/>
            在研究中收集的所有數據將以密碼保護在電腦中，只能由研究團隊的成員存取。
          </p>
        </div>
        <p></p>
        <div className="mobile_content"><h3>六、可能產生之風險或副作用、發生率及處理方式</h3>
          <p>
            過去許多人機互動學者使用網路問卷探討群眾外包的相關研究，其研究過程所涉及的風險及副作用極小。
            若受試者在研究進行中或進行完成後因本研究所所進行的主題有任何疑問，都可隨時詢問本計畫的研究人員。
          </p>
        </div>
        <p></p>
        <div className="mobile_content"><h3>七、參與者權益</h3>
          <p>
            (一)酬勞<br/>於問卷末留下Email作為連絡資料，確認為有效問卷後會提供您150元台幣酬勞。若您中途退出實驗，我們將無法提供您酬勞。<br/><br/>(二)損害賠償<br/>
            若您因參與本計畫而發生不良反應或損害，您仍受法律保障，本計畫主持人張永儒依法負責，並提供本研究相關訊息記諮詢，但本同意書上所記載之可預期不良反應，原則上不予補償。
            <br/><br/>(三)個人資料保護機制<br/>本研究計畫主持人會確保個別資料的機密與參與者的隱私。本研究收集電子信箱用途僅作為報酬聯絡事宜，待處理完之後就會將聯絡資料刪除。
            <br/><br/>(四)如果您在研究過程中，對於參與者權利有意見、懷疑或因參與研究而受害時，可與國立陽明交通大學人體與行為研究倫理委員會聯絡請求諮詢，其電話號碼為：03-5712121轉53270；
            email：rec@nctu.edu.tw；住址：300新竹市大學路1001號人體與行為研究倫理委員會。
          </p>
        </div>
        <p></p>
        <div className="mobile_content"><h3>八、研究預期效益及可能衍生的商業利益及其應用之約定</h3>
          <p>
            您將幫助研究人員透過量化方式了解使用者在地點即時資訊與認知在不同程度的落差中，對於群眾外包資訊的需求與種類的偏好，這將幫助即時資訊平台未來可以提供更合適的資訊給使用者。您將會受益於這項服務。
          </p>
        </div>
        <p></p>
        <div className="mobile_content"><h3>九、研究之退出及中止</h3>
          <p>
            您可自由決定是否參與本研究，過程中您不須要任何理由，隨時可停止或拒絕進行，且不會引起任何不愉快更不影響您的權益，或影響日後研究主持人對您的評價。
          </p>
        </div>
        <div className="checked">
          <input
            type="checkbox"
            checked={checked === true}
            onChange={() => setChecked(
              (prev) => {
                return !prev
              }
            )}
          />我已詳細閱讀以上內容以及自身權利
        </div>
        <button
          className="mobile_start"
          onClick={clickButton}
        >實驗問卷填寫說明</button>
      </div>
    );
  }
  else{
    return (
      <div className="introduction">
        <h1 className="title">參與者研究說明書</h1>
        <div className="content"><h2>研究計畫資料</h2>
          <p>計畫名稱：事件偵測追蹤與文字可信度辨識技術開發 - 探討使用者對於地點即時資訊的群眾外包資源需求以及類型偏好<br/>
          執行單位：國立陽明交通大學資訊工程系<br/>
          研究經費來源：科技部<br/>
          研究人員：江友軒<br/>
          聯絡電話：0903054901<br/>
          聯絡信箱：youxuanjiang.cs07@nycu.edu.tw<br/>
          職責：碩士生<br/><br/>
          計畫主持人：張永儒<br/>
          聯絡電話：(03) 5712121 #56632<br/>
          職責：監督研究計畫之實施<br/>
          信箱：armuro@cs.nctu.edu.tw<br/><br/>
          24小時緊急聯絡人(或研究計畫聯絡人)：江友軒<br/>
          聯絡電話：0903054901<br/>
          聯絡信箱：youxuanjiang.cs07@nycu.edu.tw
          </p>
        </div>
        <p></p>
        <div className="content"><h3>一、研究背景</h3>
          <p>
            群眾外包(Crowdsourcing)是一種獲取資源的方式，指的是利用一大群人來獲取需要的資訊或服務。在我們所生活的智慧城市(Smart City)中，當地點即時資訊與使用者的認知不一致時，
            可透過群眾外包單純「驗證」即時資訊，或是「補充」更詳細的資訊來幫助使用者填補這段落差。例如：當你因為app上的公車即時動態跟表定時刻不一致而感到疑惑時，
            你可以透過群眾外包平台找到正在現場或是最近有搭乘該班公車經驗的人，請他們告訴你公車的確切發車時間，或者即時資訊跟表定時刻不一樣的原因。<br/><br/>
            根據過去研究指出，在許多不同種類的資訊中，當使用者為其感到疑惑時，透過群眾外包確實能幫助使用者更有效率的填補資訊與認知的落差。但尚未有研究針對智慧城市中的地點即時資訊，
            探討使用者在什麼情況下有透過群眾外包來幫助自己理解的需求。由於越詳細的資訊需要更多的時間等待回覆，因此得以進一步的去探討使用者在不同情境以及時間考量下，
            對於群眾外包所提供的資訊類型的取捨。我們希望透過這個研究問題，可以幫助提供地點即時資訊的平台，依據不同的資訊提供適當的群眾外包資源來幫助使用者，以此幫助平台使用者更有效率的規劃行程。
          </p>
        </div>
        <p></p>
        <div className="content"><h3>二、研究目的</h3>
          <p>
            本研究探討使用者在不同情境下觀看地點即時資訊時，該資訊的合理性以及時間考量會如何影響群眾外包資訊的需求與種類偏好。
          </p>
        </div>
        <p></p>
        <div className="content"><h3>三、研究參與者納入與排除條件</h3>
          <p>
            此研究將招募20-60歲曾經透過任何平台查詢即時狀態資料的使用者（如：查看店家或景點的即時人潮資訊、即時路況資訊、公車即時資訊、共享汽機車位置等），
            包含但不限於：Google Maps、高速公路1968、台北等公車、公車站牌資訊、iRent等平台。此研究排除與主持人有利害關係的學生，包含開課學生與指導學生。
          </p>
        </div>
        <p></p>
        <div className="content"><h3>四、研究方法、程序及參與者須配合的事項</h3>
          <p>
            1. 此實驗大約耗時一個小時，請您想像題目的情境並依照自身想法填寫。您所填答的資料僅供學術研究參考，不會轉至其他用途。<br/><br/>
            2. 此研究含有過濾題，用以篩檢無效的回覆，因此請認真作答。<br/><br/>
            3. 為感謝您參與本研究的時間與付出，我們會提供150新台幣酬勞。若您有意願領取，請於問券末填寫Email。<br/><br/>
            4. 確認完為有效問卷後，我們會與您聯絡，並將領據email給您（依學校規定，領據中需要填寫姓名、手機、身分證字號、 公司、職稱與戶籍地址等個資，
            以利申報所得稅，處理完報帳事宜後我們會將這些個資刪除），請您填寫之後email寄回，我們確認收到之後會將酬勞透過行動支付或銀行匯款給您。<br/><br/>
            5. 我們會透過過濾題與填答時間合理性作為判斷是否為有效問卷的基準，若判定為無效問卷則填寫者不會收到email通知。
            若為有效問卷，填寫者最晚會在問卷截止後一個月內收到通知，期間有任何問題都歡迎email詢問。
          </p>
        </div>
        <p></p>
        <div className="content"><h3>五、蒐集之資料及其結果使用規劃、保存方式、保存年限及後續使用</h3>
          <p>
            (一)使用規劃<br/>
            本研究會要您提供性別、年齡、職業、最高學歷，以及電子信箱。在問卷填寫完畢且系統確認完為有效問卷之後，系統會將聯絡資料以及其他資訊分開儲存，
            因此研究人員無法將填答者的問卷內容以及聯絡資料做直接連結，亦無法透過問卷內容間接識別填答者的身份，待報酬事宜處理完之後就會將聯絡資料刪除。
            只留下去連結後的資料保留用於進一步研究，且僅發表於學術論文。<br/><br/>
            (二)保存方式、年限及後續使用<br/>
            在研究中收集的所有數據將以密碼保護在電腦中，只能由研究團隊的成員存取。
          </p>
        </div>
        <p></p>
        <div className="content"><h3>六、可能產生之風險或副作用、發生率及處理方式</h3>
          <p>
            過去許多人機互動學者使用網路問卷探討群眾外包的相關研究，其研究過程所涉及的風險及副作用極小。
            若受試者在研究進行中或進行完成後因本研究所所進行的主題有任何疑問，都可隨時詢問本計畫的研究人員。
          </p>
        </div>
        <p></p>
        <div className="content"><h3>七、參與者權益</h3>
          <p>
            (一)酬勞<br/>於問卷末留下Email作為連絡資料，確認為有效問卷後會提供您150元台幣酬勞。若您中途退出實驗，我們將無法提供您酬勞。<br/><br/>(二)損害賠償<br/>
            若您因參與本計畫而發生不良反應或損害，您仍受法律保障，本計畫主持人張永儒依法負責，並提供本研究相關訊息記諮詢，但本同意書上所記載之可預期不良反應，原則上不予補償。
            <br/><br/>(三)個人資料保護機制<br/>本研究計畫主持人會確保個別資料的機密與參與者的隱私。本研究收集電子信箱用途僅作為報酬聯絡事宜，待處理完之後就會將聯絡資料刪除。
            <br/><br/>(四)如果您在研究過程中，對於參與者權利有意見、懷疑或因參與研究而受害時，可與國立陽明交通大學人體與行為研究倫理委員會聯絡請求諮詢，其電話號碼為：03-5712121轉53270；
            email：rec@nctu.edu.tw；住址：300新竹市大學路1001號人體與行為研究倫理委員會。
          </p>
        </div>
        <p></p>
        <div className="content"><h3>八、研究預期效益及可能衍生的商業利益及其應用之約定</h3>
          <p>
            您將幫助研究人員透過量化方式了解使用者在地點即時資訊與認知在不同程度的落差中，對於群眾外包資訊的需求與種類的偏好，這將幫助即時資訊平台未來可以提供更合適的資訊給使用者。您將會受益於這項服務。
          </p>
        </div>
        <p></p>
        <div className="content"><h3>九、研究之退出及中止</h3>
          <p>
            您可自由決定是否參與本研究，過程中您不須要任何理由，隨時可停止或拒絕進行，且不會引起任何不愉快更不影響您的權益，或影響日後研究主持人對您的評價。
          </p>
        </div>
        <div className="checked">
          <input
            type="checkbox"
            checked={checked === true}
            onChange={() => setChecked(
              (prev) => {
                return !prev
              }
            )}
          />我已詳細閱讀以上內容以及自身權利
        </div>
        <button
          className="start"
          onClick={clickButton}
        >實驗問卷填寫說明</button>
      </div>
    );
  }
};

export default ParticipantIllustrate;
