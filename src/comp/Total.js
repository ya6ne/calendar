
import { useEffect, useState } from 'react'

function Total({jour}) {

    const [local, setlocal] = useState(1)

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
        sum ='🥴'
     } else if (aprem<0){
        sum ='🥴'
     }
     
     
    
    return (
        <div>
            {!isNaN(sum) ? (sum-sum%60)/60 +"h"+(sum%60<10 ? "0"+ sum%60 : sum%60) : sum}
        </div>
    )
}

export default Total;