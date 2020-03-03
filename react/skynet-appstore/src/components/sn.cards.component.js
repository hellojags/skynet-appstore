import React from "react";
import {
  DropdownMenu,
  DropdownToggle,
  DropdownItem,
  UncontrolledDropdown
} from "reactstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

class SnCards extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="container-fluid">
        <div className="d-sm-flex align-items-center justify-content-between mb-4">
          <h1 className="h3 mb-0 text-gray-800">All Apps</h1>
        </div>

        <div className="card-container row">
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
  }
}

export default SnCards;
