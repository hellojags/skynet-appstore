import React from "react";
import {
  DropdownMenu,
  DropdownToggle,
  DropdownItem,
  UncontrolledDropdown
} from "reactstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {RENDER_CATEGORY_LOGO} from "../sn.constants";

function renderPageHeading(category){
  switch(category){
    case 'all':
      return 'All Apps';
      break;
    case 'video':
      return 'Videos Apps';
      break;
    case 'audio':
      return 'Audio Apps';
      break;
    case 'webapp':
      return 'WebApps';
      break;
    case 'blog':
        return 'Blogs';
        break;
    default:
      return 'All Apps';
  }
}

class SnCards extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      apps: [],
      error: null,
      appsLoaded: false,
      category: null
    };
  }



  componentDidMount(){
    const {category} = this.props.match.params;
    this.setState({category});
    fetch('http://www.mocky.io/v2/5e5f23ae3100004b00afd966?category='+category) // videos : http://www.mocky.io/v2/5e60819a330000800097b99e
    .then(res => res.json())
    .then((result) => {
      this.setState({
        apps : result,
        appsLoaded : true
      });
    },
    (error) => {
      this.setState({
        error
      })
    });
  }

  componentDidUpdate(prevProps, prevState, snapshot){
    const {category} = this.props.match.params;
    if (category !== this.state.category){
      this.setState({category});
      fetch('http://www.mocky.io/v2/5e5f23ae3100004b00afd966?category='+category)
      .then(res => res.json())
      .then((result) => {
        this.setState({
          apps : result,
          appsLoaded : true
        });
      },
      (error) => {
        this.setState({
          error
        })
      });
    }
  }



  render() {
    const { apps, error, appsLoaded, category } = this.state;
    if (appsLoaded){

      return (
        <div className="container-fluid">
          <div className="d-sm-flex align-items-center justify-content-between mb-4">
            <h1 className="h3 mb-0 text-gray-800">{renderPageHeading(category)}</h1>
          </div>
  
          <div className="card-container row">
            {apps.map((app, i) => (
              <div className="col-md-3" key={i}>
              {/* <div className="card card-video"> */}
              <div className={'card card-' + app.category}>
                <div className="card-count-container">
                  <h2 className="pl-30"> {app.title} </h2>
                  <div className="card-count">
                    {RENDER_CATEGORY_LOGO(app.category)}
                  </div>
                </div>
  
                <div className="card-content ">
                  {app.descripton}
                </div>
  
                <div className="card-footer d-flex flex-row align-items-center justify-content-between">
                  Lorem ipsum dolor sit amet.
                  <UncontrolledDropdown>
                    <DropdownToggle tag="span" className="cursor-pointer">
                      <FontAwesomeIcon
                        icon="ellipsis-v"
                        className="text-gray-400"
                      ></FontAwesomeIcon>
                    </DropdownToggle>
                    <DropdownMenu>
                      <DropdownItem>Action</DropdownItem>
                      <DropdownItem>Action</DropdownItem>
                      <DropdownItem>Action</DropdownItem>
                    </DropdownMenu>
                  </UncontrolledDropdown>
                </div>
              </div>
            </div>
  
            ))}
            
          </div>
        </div>
      );
    } else {
      return (<div className="loader"></div>)
    }
  }
}

export default SnCards;
