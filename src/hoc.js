import React from 'react';
const getFinal = (WrappedComponent) =>{
   return class extends React.Component {
     render(){
         console.log("this.props",this.props);
         return(
             <WrappedComponent secret={42} {...this.props}/>
         )
     }
   }

}

export default getFinal;