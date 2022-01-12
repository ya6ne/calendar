import { useForm } from "react-hook-form";
import { useState } from 'react'

function Input({classe ,jour}){
    const [local, setlocal] = useState(0)

    const { register, handleSubmit, formState: { errors }} = useForm();
    const onSubmit = data => {
        localStorage.setItem(classe, [data.de , data.a])
    };
    let matin =localStorage.getItem(jour +' '+ "matin")
    
    
    
    return (matin? <div>{"De "+ matin.split(',')[0] + " à " + matin.split(',')[1]} <button onClick={()=>localStorage.removeItem(jour +' '+ "matin") & setlocal(local + 1 )}>modifier</button></div> :
        <div>
            <form className="row" onSubmit={handleSubmit(onSubmit)}>
                <div className="col-md-4"><input {...register("de", {required:true})} className="form-control form-control-sm" type="time" placeholder="De" /></div>
                <div  className="col-md-1">à</div>
                <div className="col-md-4"><input {...register("a", {required:true})}  className="form-control form-control-sm" type="time" placeholder="À" /></div>
                <div className="col-md-2"><input type="submit" /></div>
            </form>
            <div className="row">
                <div className="col-md-12" style={{color:"red"}}>{errors.de?.type === 'required' && "* heure du commencement requise"}</div>
                <div className="col-md-12" style={{color:"red"}}>{errors.a?.type === 'required' && "* heure de la fin requise"}</div>
            </div>
        </div>
    )
}

export default Input