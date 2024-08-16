import { useState } from "react"
import MtnTransaction from "../resources/mtn";
import AirtelTransaction from "../resources/airtel";

function Bank({defaultLine}){
    const [line,setLine] = useState(defaultLine)


    const [content,setContent] = useState('Start')
    const [amount,setAmount] = useState('')
        
    function mtnFilter(){
        setLine('mtn')
        const mtnTransaction = new MtnTransaction(amount,'mtn')
        const result = mtnTransaction.bankTransferCharge()
          setContent(result);
     }
    function airtelFilter(){
       setLine('airtel')
       const airtelTransaction = new AirtelTransaction(amount,'airtel')
       const result = airtelTransaction.bankTransferCharge()
          setContent(result);
    }
    
      function handleChange(e) {
        let value = e.target.value
        let amount = +value
        if (!isNaN(amount)) {
            setAmount(amount)
            const airtelTransaction = new AirtelTransaction(amount,'airtel')
            const mtnTransaction = new MtnTransaction(amount,'mtn')
            const result = line === 'mtn' ? mtnTransaction.bankTransferCharge() : airtelTransaction.bankTransferCharge()
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

export default Bank