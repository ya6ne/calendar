import img from '../img/one.jpg'

function Affiche(){
    return (
        <div className='col-md-4'>
            <div >
                <img src={img} className="card-img-top" alt="Responsive image" />
            </div>
        </div>
    )
}

export default Affiche;