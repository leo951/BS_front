import React from "react";
import Icon from '@mdi/react'
import { mdiCarSports } from '@mdi/js';

const Svg = (props) =>{
    return (
        <Icon path={mdiCarSports}
          size={4}
          horizontal
          vertical
          rotate={props.rotate}
          color={props.color}/>
      )
}

export default Svg;


