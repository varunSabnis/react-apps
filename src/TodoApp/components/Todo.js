import React from 'react';
export default function Todo({text,completed,onClick}){
console.log("text",text);
return(<li style={{textDecoration : completed? 'line-through': 'none'}} onClick={onClick}>{text}</li>)
}