import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import AllInclusiveIcon from '@material-ui/icons/AllInclusive';
import AppsIcon from '@material-ui/icons/Apps';

export const CATEGORIES = ['all','video', 'audio', 'blog', 'app'];

export const RENDER_CATEGORY_LOGO = (category)=>{
    if (category==='all'){
      return <AllInclusiveIcon />
    }
    if(category==='video'){
      return <FontAwesomeIcon icon="video"></FontAwesomeIcon>
    } else if(category==='audio'){
      return <FontAwesomeIcon icon="headphones"></FontAwesomeIcon>
    } else if(category==='blog'){
      return <FontAwesomeIcon icon="blog"></FontAwesomeIcon>
    } else if(category.toLowerCase()==='app'){
      return <AppsIcon />
    }
  }

export const WEBSERVICE_SUCCESS='success';
export const WEBSERVICE_FAILURE='failure';