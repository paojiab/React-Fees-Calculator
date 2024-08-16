import { useState } from "react"
import PaymentProvider from "../resources/payment"

function Payment({defaultLine}){
  const [line,setLine] = useState(defaultLine)

  const [transaction,setTransaction] = useState('payment')

  const [content,setContent] = useState('Start')
  const [amount,setAmount] = useState('')

  
      
  function mtnFilter(){
      setLine('mtn')
      const mtnPayment = new PaymentProvider(amount,'mtn')
      const result = transaction === 'payment' ? mtnPayment.depositCharge() : mtnPayment.utilityPayment()
        setContent(result);
   }
  function airtelFilter(){
     setLine('airtel')
     
     const airtelPayment = new PaymentProvider(amount,'airtel')
     const result = transaction === 'payment' ? airtelPayment.depositCharge() : airtelPayment.utilityPayment()
        setContent(result);
  }

  function onSwitch(){
    setTransaction('bill')
    let result;
    if (line === 'mtn') {
      const mtnPayment = new PaymentProvider(amount,'mtn')
     result = mtnPayment.utilityPayment()
    } else if (line === 'airtel') {
      const airtelPayment = new PaymentProvider(amount,'airtel')
    result = airtelPayment.utilityPayment()
    }
      setContent(result);
  }

  function offSwitch(){
    setTransaction('payment')
    let result;
    if (line === 'mtn') {
      const mtnPayment = new PaymentProvider(amount,'mtn')
     result = mtnPayment.depositCharge()
    } else if (line === 'airtel') {
      const airtelPayment = new PaymentProvider(amount,'airtel')
    result = airtelPayment.depositCharge()
    }
      setContent(result);
  }
  
    function handleChange(e) {
      let value = e.target.value
      let amount = +value
      if (!isNaN(amount)) {
        setAmount(amount)
        let result;
        if (line === 'mtn') {
          const mtnPayment = new PaymentProvider(amount,'mtn')
         result = transaction === 'payment' ? mtnPayment.depositCharge() : mtnPayment.utilityPayment()
        } else if (line === 'airtel') {
          const airtelPayment = new PaymentProvider(amount,'airtel')
        result = transaction === 'payment' ? airtelPayment.depositCharge() : airtelPayment.utilityPayment()
        }
          setContent(result);
      }
      
    }
    function clear() {
      setAmount('')
      setContent('Start');
    }
    return (
        <>
         <div className="content">
            <div className="part-1">
            {
                    line === 'mtn'
                    ? <div className="filter-chips">
                    <button type="button" onClick={()=>mtnFilter()} className="filter-chip filter-chip-active">
                        <p><span className="material-symbols-outlined">
                            check
                            </span></p>
                        <p>MTN</p>
                        </button>
                    <button type="button" onClick={()=>airtelFilter()} className="filter-chip">
                        <p>Airtel</p>
                    </button>
                </div>
                : <div className="filter-chips">
               <button type="button" onClick={()=>mtnFilter()} className="filter-chip">
                        <p>MTN</p>
                    </button>
                <button type="button" onClick={()=>airtelFilter()} className="filter-chip filter-chip-active">
                <p><span className="material-symbols-outlined">
                            check
                            </span></p>
                        <p>Airtel</p>
                </button>
            </div>
                }
                <div id="switchComponent" className="switch-component">
                  <p>Goods and Services</p>
                  {
                    transaction === 'payment'
                    ? <div className="toggle-off show" id="togglingOff">
                    <button type="button" onClick={()=>onSwitch()} className="switch-button"><span id="toggleOff" className="material-symbols-outlined">
                        toggle_off
                        </span></button>
                </div>
                    : <div className="toggle-on show" id="togglingOn">
                    <button type="button" onClick={()=>offSwitch()} className="switch-button"><span id="toggleOn" className="material-symbols-outlined">
                        toggle_on
                        </span></button>
                </div>
                  }
                 
                 
                 
                      
                      <p>Utility Bills</p>
              </div>
          
              
            
            <div className="flexibility">
                <div id="box" className="box">
                    <p style={{whiteSpace:'pre-wrap'}}>{content}</p>
                </div>
            </div>
            </div>
            <div className="part-2">
                <div className="flexibility">
                    <div className="tunnel">
                    <input maxLength={7} value={amount === 0 ? '' : amount} onChange={e=>handleChange(e)} type="text" name="amount" id="amountField" className="form-control" placeholder="Amount" />
                        {
                          amount !== ''?
                            <button id="cancelButton" className="cancel-button" onClick={()=>clear()}><span className="material-symbols-outlined">
                            cancel
                            </span></button>
                          :null
                        }
                           
                            </div>
                    
            
                </div>
            </div>
        </div>
        </>
    )
  }


export default Payment