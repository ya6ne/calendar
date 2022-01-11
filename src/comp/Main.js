function Main() {
    let date = new Date(),
    dateDuJour = date.getDate(),
    d = date.getDay(),

    lundi, mardi , mercredi , jeudi , vendredi,
    week = ["lundi","mardi","mercredi","jeudi","vendredi"]

    for(let i=1 ; i<8; i++){
      if(d == i) {
      lundi = dateDuJour + (1-d)
      mardi = dateDuJour + (2-d)
      mercredi = dateDuJour + (3-d)
      jeudi = dateDuJour +  (4-d)
      vendredi = dateDuJour + (5-d)
    }}


    
    return (
        <div className='container'>
            <div className='row'>
            <table className="table">
  <thead className="thead-dark">
    <tr>
      <th scope="col">Jour</th>
      <th scope="col">Matin</th>
      <th scope="col">Après-midi</th>
      <th scope="col">Totale (h)</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Lundi {lundi+'/'+ date.getMonth() + 1+ '/' + date.getFullYear()}</td>
      <td>Otto</td>
      <td>@mdo</td>
      <td>@fat</td>
    </tr>
    <tr>
      <td>Mardi {mardi+'/'+ date.getMonth() + 1+ '/' + date.getFullYear()}</td>
      <td>Thornton</td>
      <td>@fat</td>
      <td>@fat</td>
    </tr>
    <tr>
      <td>Mercredi {mercredi+'/'+ date.getMonth() + 1+ '/' + date.getFullYear()}</td>
      <td>Thornton</td>
      <td>@fat</td>
      <td>@fat</td>
    </tr>
    <tr>
      <td>Jeudi {jeudi+'/'+ date.getMonth() + 1+ '/' + date.getFullYear()}</td>
      <td>Thornton</td>
      <td>@fat</td>
      <td>@fat</td>
    </tr>
    <tr>
      <td>Vendredi {vendredi+'/'+ date.getMonth() + 1+ '/' + date.getFullYear()}</td>
      <td>Thornton</td>
      <td>@fat</td>
      <td>@fat</td>
    </tr>
  </tbody>
</table>
            </div>
        </div>
    )
}

export default Main;