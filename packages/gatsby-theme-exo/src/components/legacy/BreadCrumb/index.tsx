
/** @jsxRuntime classic */
/** @jsx jsx */
import React from 'react';
import styled, { css } from 'styled-components';
import {jsx, Box} from 'theme-ui'
const breadCrumb = (props:any) => {

    function isLast(index:any){
        return index === props.crumbs.length-1;
    }
  return <Box>
      <ul style={{display:'flex',listStyle:'none',color:'#242A52',fontFamily:'Poppins',padding:'0px'}}>
   {
       props.crumbs.map((crumb:any,ci:any)=>{
           const disabled = isLast(ci) ? 'disabled' : '';
return (
    <Box sx={{display:'flex'}}>
    <li key={ci} >
        <Button className={`${disabled}`}
        onClick={()=> props.selected(crumb)}
        >{crumb}<span style={{padding:'5px'}}>{isLast(ci) ? '' : '/'}</span></Button>
    </li>
    </Box>
)
       })
   }
      </ul>
  </Box>;
};

export default breadCrumb;

const Button = styled.button`
background:none;
border:none;
padding:0px;
color:#242A52;
font-weight:600;
line-height:38px;

`
