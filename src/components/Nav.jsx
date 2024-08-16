import { useState } from "react";
import IconButton from "./IconButton";
import Withdraw from "./Withdraw";
import Bank from "./Bank";
import Payment from "./Payment";

function Nav () {
    const [currentTab, setCurrentTab] = useState('withdraw')
    const [defaultLine, setDefaultLine] = useState(
        ()=>{
            const savedLine = localStorage.getItem('defaultLine') || 'mtn'
            return savedLine
        }
    )

    function makeDefault(line) {
        localStorage.setItem("defaultLine", line);
        setDefaultLine(line)
    }

    function handleMe(){
        setMenu(value => !value);
        
    }
    

    const mtnActiveText ='MTN <span style="font-size: x-small;">Default</span>';
    const airtelActiveText ='Airtel <span style="font-size: x-small;">Default</span>';
    const [menu, setMenu] = useState(false);

    function showWithdraw(){
        setCurrentTab('withdraw')
    }
    function showPayment(){
        setCurrentTab('payment')
    }
    function showBank(){
        setCurrentTab('bank')
    }
    return (
        
        <>
        <nav>
      <div className="flexibility">
          <div className="nav">
                <IconButton iconId="darkBtn" iconName="dark_mode" />
              <p className="brand">Kaliculator</p>

              <button type="button" onMouseEnter={()=>handleMe()} className="icon-button">
            <span id="settingsButton" className="material-symbols-outlined">
                 settings
                  </span>
                  </button>
              { 
          menu 
          ?<div id="settingsMenu" className="drop-down" onMouseLeave={()=>handleMe()}> 
          {
            defaultLine === 'mtn'
            ?
            <div className="drop-inner">
            <button id="mtnDefault" className="drop-down-item drop-down-active"
  dangerouslySetInnerHTML={{ __html: mtnActiveText }}
  ></button>
    <button onClick={()=>makeDefault('airtel')} id="airtelDefault" className= "drop-down-item"
  >
      Airtel
  </button>
            </div>
            :
            <div className="drop-inner">
            <button onClick={()=>makeDefault('mtn')} id="mtnDefault" className= "drop-down-item"
  >MTN</button>
    <button id="airtelDefault" className= "drop-down-item drop-down-active" 
    dangerouslySetInnerHTML={{ __html: airtelActiveText }}
></button>
            </div>
          }
                 
              </div> 
              : null
              }
               </div>
      </div>
    
      <div className="tabs" id="tabs">
          <div className="tab-holder">
              <button type="button" onClick={()=>showWithdraw()} id="withdraw" className="tab">Withdraw</button>
              {
               currentTab ==='withdraw'?<div id="withdrawDash" className="highlight-dash tab-active"></div>:null
              }
              
          </div>
          <div className="tab-holder">
              <button type="button" onClick={()=>showBank()} id="bank" className="tab">To Bank</button>
              
              {
               currentTab === 'bank' ? <div id="bankDash" className="highlight-dash tab-active"></div>:null
              }
          </div>
          <div className="tab-holder">
              <button type="button" onClick={()=>showPayment()} id="payment" className="tab">Payment</button>
              {
               currentTab === 'payment' ? <div id="paymentDash" className="highlight-dash tab-active"></div> : null
              }
          </div>
          
          
      </div>
  </nav>
  {
    currentTab==='withdraw'
    ?<Withdraw defaultLine={defaultLine}/>
    : currentTab === 'bank'
    ? <Bank defaultLine={defaultLine}/>
    :<Payment defaultLine={defaultLine}/>
  }
  
        </>
    )
}

export default Nav