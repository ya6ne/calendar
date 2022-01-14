

function Totals(){

    let tot = [];
    tot.push(localStorage.getItem("lundi matin M"),localStorage.getItem("lundi aprém M"))
    console.log(tot)
    function total(){

    }

    return (
        <div className="table-secondary col-md-4" style={{fontSize:"25px"}}>
            total:
        </div>
    )
}

export default Totals;