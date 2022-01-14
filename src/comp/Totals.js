

function Totals(){

    let tot = [];
    tot.push(localStorage.getItem("lundi matin M"),localStorage.getItem("lundi aprém M"),localStorage.getItem("mardi matin M"),localStorage.getItem("mardi aprém M"),
    localStorage.getItem("mercredi matin M"),localStorage.getItem("mercredi aprém M"),
    localStorage.getItem("jeudi matin M"),localStorage.getItem("jeudi aprém M"),
    localStorage.getItem("vendredi matin M"),localStorage.getItem("vendredi aprém M"))
    let totale = tot.reduce((a,b)=> +a + +b)
   

    return (
        <div className="table-secondary col-md-4" style={{fontSize:"25px", color:"red"}}>
            total: { (totale-totale%60)/60 +"h"+(totale%60<10 ? "0"+ totale%60 : totale%60)}
        </div>
    )
}

export default Totals;