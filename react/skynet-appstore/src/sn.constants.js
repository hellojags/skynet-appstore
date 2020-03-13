import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const RENDER_CATEGORY_LOGO = (category)=>{
    if(category==='video'){
      return <FontAwesomeIcon icon="video"></FontAwesomeIcon>
    } else if(category==='audio'){
      return <FontAwesomeIcon icon="headphones"></FontAwesomeIcon>
    } else if(category==='blog'){
      return <FontAwesomeIcon icon="blog"></FontAwesomeIcon>
    } else if(category.toLowerCase()==='app'){
      return <FontAwesomeIcon icon="wifi"></FontAwesomeIcon>
    }
  }