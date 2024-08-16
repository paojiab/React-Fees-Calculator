import { useState } from "react";


function IconButton({iconId, iconName}){
    const [defaultLine, setDefaultLine] = useState(
        ()=>{
            const savedLine = localStorage.getItem('defaultLine') || 'mtn'
            return savedLine
        }
    )
    
    
    function toggleDark(){
        if (iconId=="darkBtn") {
            document.getElementById('darkBtn').classList.toggle('icon-outlined');
        
            document.body.classList.toggle('light-theme');
        }
    }

  
    return (
        <>
        <button type="button" onMouseEnter={()=>handleMe()} onClick={()=>toggleDark()} className="icon-button">
            <span id={iconId} className="material-symbols-outlined">
                  {iconName}
                  </span>
                  </button>
        
        </>
    )
}

export default IconButton