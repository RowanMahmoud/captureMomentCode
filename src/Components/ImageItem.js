import React from "react";

function ImageItem(props){
    return(
        <div>
            <div className="col-mid-4">
<div >
    {/* <div style={{backgroundImage:`url(${props.image})`}}></div> */}
    <img className="icon2" src={props.image}></img>
    <h1>{props.name}</h1>

</div>
</div>
</div>
    )
}
export default ImageItem;