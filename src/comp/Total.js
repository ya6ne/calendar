
import { useEffect, useState } from 'react'

function Total({jour,cart , setCart}) {


    let matin = localStorage.getItem(jour +' matin'+' M'),
    aprem = localStorage.getItem(jour + ' aprém' + ' M')

    let sum
    if(matin & aprem){
        sum = +matin + +aprem
    } else if(matin){
        sum = +matin
    } else if(aprem){
        sum = +aprem
    }
     if(matin < 0) {
        sum ='🥴 Fatigué?'
     } else if (aprem<0){
        sum ='🥴 Fatigué?'
     }
     
    
    return (
        <div style={{fontWeight:700, color:"green"}}>
            {!isNaN(sum) ? (sum-sum%60)/60 +"h"+(sum%60<10 ? "0"+ sum%60 : sum%60) : sum}
        </div>
    )
}

export default Total;