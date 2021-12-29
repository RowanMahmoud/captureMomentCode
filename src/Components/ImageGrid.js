import react from "react";
import useFireStore from "../Hocks/useFireStore";
import { motion } from 'framer-motion';
import { ReactDOM } from "react";
import { Provider } from '@lyket/react';
import { LikeButton ,UpdownButton    } from '@lyket/react';


const ImageGrid =({setSelectedImg}) =>{
    const {docs}= useFireStore('images');
    const {doccs}= useFireStore('title');

     console.log(docs);
     console.log(doccs);


return(
  <div>
           <div class="row">

      {docs && docs.map(doc => (
  <div class="col-md-4">
         <div className="img-thumbnail">
           <div className="up-img">
        <motion.div className="img-wrap" key={doc.id} 
          layout
          whileHover={{ opacity: 1 }}s
          onClick={() => setSelectedImg(doc.url)}
        >
           
 
          <motion.img src={doc.url} alt="uploaded pic"
          
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
          />
          
        </motion.div>
        <div class="caption">
          
      <UpdownButton
        id="how-i-joined-the-raiders-of-the-lost-ark"
        namespace="post"
      />
      
       </div>
          </div>
        </div>
        </div>
   
      ))}
            </div>

</div>
);

}
export default ImageGrid;