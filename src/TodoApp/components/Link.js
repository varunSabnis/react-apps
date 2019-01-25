import React from 'react';
;

export default function Link({active,children,updateVisibilityFilter}){
     return(
         <button  style = {{marginLeft : '4px'}} disabled={active} onClick={(e)=> updateVisibilityFilter()}>{children}</button>
     )

}