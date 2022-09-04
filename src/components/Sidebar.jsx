import React from 'react';
import { Button, Stack } from '@mui/material';

import  { categories } from '../utils/constant';

const selectedCategory = 'New';

const Sidebar = () => {
  return (
    <Stack 
    direction= "row"
    sx= {{
        overflowY :"auto",
        height :{sx :'auto',md: '95%'},
        flexDirection: {md : 'column'},
    }} >
    
    {
        categories.map((category)=>(
                <Button  className="category-btn" 
                style={ {
                    background: category.name ===selectedCategory && '#FC1503', 
                    color :'white' 
                }}  
            // when we use maps ....we give the key in reacttc
                key ={category.name}
                >

                    <span>{category.icon}</span>
                    <span>{category.name}</span>
                </Button>
        )
        )
    }

    </Stack>
  )
}

export default Sidebar