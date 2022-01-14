import Input from "./Input";
import Input2 from "./Input2";
import Total from "./Total";
import { useState } from 'react';
import Totals from "./Totals";
import Navbar from "./Navbar";
import Affiche from "./Affiche";





function Main() {

    const [cart, setCart] = useState(1)
    

    let date = new Date(),
        dateDuJour = date.getDate(),
        d = date.getDay(),
        lundi,
        mardi,
        mercredi,
        jeudi,
        vendredi,
        week = ["lundi", "mardi", "mercredi", "jeudi", "vendredi"],
        today = <svg style={{color:"green"}} xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-caret-right" viewBox="0 0 16 16">
        <path d="M6 12.796V3.204L11.481 8 6 12.796zm.659.753 5.48-4.796a1 1 0 0 0 0-1.506L6.66 2.451C6.011 1.885 5 2.345 5 3.204v9.592a1 1 0 0 0 1.659.753z"/>
        </svg>; 

    for (let i = 1; i < 8; i++) {
        if (d == i) {
            lundi = dateDuJour + (1 - d);
            mardi = dateDuJour + (2 - d);
            mercredi = dateDuJour + (3 - d);
            jeudi = dateDuJour + (4 - d);
            vendredi = dateDuJour + (5 - d);
        }
    }

    let html = week.map((x, y, z) => (
        <tr key={x.toString()}>
            <td>
            {d == y + 1 ? today : " "}{x[0].toLocaleUpperCase() + x.slice(1)} {eval(x) + "/" + date.getMonth() + 1 + "/" + date.getFullYear()}
            </td>
            <td><Input classe={x +' '+ "matin"} jour={x} cart={cart} setCart={setCart} /></td>
            <td><Input2 classe={x +' '+ "aprém"} jour={x}  cart={cart} setCart={setCart} /></td>
            <td><Total jour={x} cart={cart} setCart={setCart} /></td>
        </tr>
    ));

    return (
        <div className="container">
            <div className="row">
                <Navbar />
            </div>
            <div className="row">
                <table className="table table-striped">
                    <thead className="thead-dark">
                        <tr>
                            <th scope="col" className="col-md-2">Jour</th>
                            <th scope="col">Matin</th>
                            <th scope="col">Après-midi</th>
                            <th scope="col" className="col-md-2">Totale (h)</th>
                        </tr>
                    </thead>
                    <tbody>{html}</tbody> 
                </table>
            </div>
            <div className="row">
                <Totals />
                <div className="col-md-4"></div>
                <Affiche />
            </div>
            <div className="row">
                footer
            </div>
        </div>
    );
}

export default Main;
