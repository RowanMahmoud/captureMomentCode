
import React, {useState} from "react";
import ImageGrid from "./ImageGrid";
import Inside from "./Inside";
import Modal from './Modal';
import { Card, CardImage, CardBody, CardText,CardTitle , Button} from "react-bootstrap";


function Profile (){
    const [file,setFile]= useState(null);
    const Types =['image/png','image/jpeg'];
    const  [error, setError]=useState(null);
    const [selectedImg, setSelectedImg] = useState(null);
 const changeHandler= (e) => {
   
     let selected=e.target.files[0];
     console.log(selected);
     if(selected && Types.includes(selected.type)){
         setFile(selected);
         setError('');
     }else{
         setFile(null);
         setError('please select photo with (jpg or png type)');
     }
 }
 

    return(
        
        <div>
            <div  >
            <div  >
     <div>
 <img className="icon" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRb5JMuBcIXldkj45Fvq_C-U04xCgVD81RFmA&usqp=CAU"/>
 </div>
<div >
<h2>Bassant Ayman</h2>
<h3>bassant_ayman@icloud.com</h3>
</div>
</div>
            </div>
            <div>
     <form>
     <label className="plus">
         <input type="file" onChange={changeHandler}/>
         <span>+</span>
         </label>
         <div className="result">
             {error &&<div className="error">{error}</div>}
             {file &&<div >{file.name}</div>}
             {file &&<Inside file={file} setFile={setFile}/>}
         </div>
     </form>
     {/* <ImageGrid/> */}
     <ImageGrid setSelectedImg={setSelectedImg} />
      { selectedImg && 
        <Modal selectedImg={selectedImg} setSelectedImg={setSelectedImg} />}
 </div>

     </div>

     
    );
    }
export default Profile;