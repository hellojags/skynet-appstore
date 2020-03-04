import React from "react";
import {
  DropdownMenu,
  DropdownToggle,
  DropdownItem,
  UncontrolledDropdown
} from "reactstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {RENDER_CATEGORY_LOGO} from "../sn.constants";

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
    console.log(category);
    this.setState({category})
    fetch('http://www.mocky.io/v2/5e5f23ae3100004b00afd966')
    .then(res => res.json())
    .then((result) => {
      console.log('finished fetch');
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

  shouldComponentUpdate(nextProps, nextState){
    console.log(this.state);
    const { category } = nextProps.match.params;
    console.log(nextProps.match, nextState, category);
    return true;
  }

  render() {
    console.log('running render');
    const { apps, error, appsLoaded } = this.state;

    if (appsLoaded){

      return (
        <div className="container-fluid">
          <div className="d-sm-flex align-items-center justify-content-between mb-4">
            <h1 className="h3 mb-0 text-gray-800">All Apps</h1>
          </div>
  
          <div className="card-container row">
            {apps.map((app, i) => (
              <div className="col-md-4" key={i}>
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
            <div className="col-md-4">
              <div className="card card-video">
                <div className="card-count-container">
                  <h2 className="pl-30">Title</h2>
                  <div className="card-count">
                    <FontAwesomeIcon icon="video"></FontAwesomeIcon>
                  </div>
                </div>
  
                <div className="card-content ">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Debitis iste vel accusamus sequi laboriosam voluptatibus placeat
                  omnis magni, at ducimus nesciunt? Tempora inventore tempore iure
                  suscipit molestiae. Cum, ab labore?
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
  
            <div className="col-md-4">
              <div className="card card-audio">
                <div className="card-count-container ">
                  <h2 className="pl-30">Title</h2>
                  <div className="card-count ">
                    <FontAwesomeIcon icon="headphones"></FontAwesomeIcon>
                  </div>
                </div>
                <div className="card-content ">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Debitis iste vel accusamus sequi laboriosam voluptatibus placeat
                  omnis magni, at ducimus nesciunt? Tempora inventore tempore iure
                  suscipit molestiae. Cum, ab labore?
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
  
            <div className="col-md-4">
              <div className="card card-blog">
                <div className="card-count-container ">
                  <h2 className="pl-30">Title</h2>
                  <div className="card-count ">
                    <FontAwesomeIcon icon="blog"></FontAwesomeIcon>
                  </div>
                </div>
                <div className="card-content ">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Debitis iste vel accusamus sequi laboriosam voluptatibus placeat
                  omnis magni, at ducimus nesciunt? Tempora inventore tempore iure
                  suscipit molestiae. Cum, ab labore?
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
  
            <div className="col-md-4">
              <div className="card card-webapp">
                <div className="card-count-container ">
                  <h2 className="pl-30">Titles</h2>
                  <div className="card-count ">
                    <FontAwesomeIcon icon="wifi"></FontAwesomeIcon>
                  </div>
                </div>
                <div className="card-content ">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Debitis iste vel accusamus sequi laboriosam voluptatibus placeat
                  omnis magni, at ducimus nesciunt? Tempora inventore tempore iure
                  suscipit molestiae. Cum, ab labore?
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
          </div>
        </div>
      );
    } else {
      return (<div>Loading...</div>)
    }
  }
}

export default SnCards;
