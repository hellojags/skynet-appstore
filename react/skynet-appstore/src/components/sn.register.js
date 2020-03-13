import React from "react";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import { withStyles } from "@material-ui/core/styles";
import {
  Select,
  InputLabel,
  MenuItem,
  FormControl,
  Button
} from "@material-ui/core";
import SaveIcon from "@material-ui/icons/Save";
import DoneIcon from "@material-ui/icons/Done";
import { ValidatorForm, TextValidator } from "react-material-ui-form-validator";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import Slide from "@material-ui/core/Slide";
import {Redirect} from "react-router-dom";
import CheckCircleRoundedIcon from '@material-ui/icons/CheckCircleRounded';
import DeleteIcon from '@material-ui/icons/Delete';

const useStyles = theme => ({
  formControl: {
    margin: theme.spacing(1)
  },
  selectEmpty: {
    marginTop: theme.spacing(2)
  }
});

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const emptySkyApp = {
  title: "",
  description: "",
  fileName: "",
  fileformat: "",
  type: "",
  category: "",
  git_url: "",
  searchable: false,
  id: ""
};

const getPageHeader = (isRegister, isEdit) => {
  if (isRegister){
    return <h1 className="h3 mb-0 text-gray-800">Register SkyApp</h1>;
  } else if (isEdit){
    return <h1 className="h3 mb-0 text-gray-800">Edit SkyApp</h1>;
  } else 
    return <h1 className="h3 mb-0 text-gray-800">View SkyApp</h1>;
}

class SnRegister extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showLoader: false,
      openSecretIdDlg: false,
      redirectToAllApps: false,
      edit: false,
      isRegister: false,
      openEnableEditDlg: false,
      skyAppSecret: '',
      skyapp: {
        title: "",
        description: "",
        fileName: "",
        fileformat: "",
        type: "",
        category: "",
        git_url: "",
        searchable: true,
        id:''
      }
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleSecretIdDlgClose = this.handleSecretIdDlgClose.bind(this);
    this.handleDoneBtn = this.handleDoneBtn.bind(this);
    this.handleEditBtn = this.handleEditBtn.bind(this);
    this.handleSkyAppSecretChange = this.handleSkyAppSecretChange.bind(this);
    this.handleEnableEditDlgOkBtn = this.handleEnableEditDlgOkBtn.bind(this);
    this.handleEnableEditDlgClose = this.handleEnableEditDlgClose.bind(this);

  }

  handleEnableEditDlgClose(){
    this.setState({openEnableEditDlg: false});
  }

  handleEnableEditDlgOkBtn(evt){
    if (this.state.skyAppSecret && this.state.skyAppSecret.trim()!==''){
      this.setState({
        openEnableEditDlg: false,
        showLoader: true
      });
      const validateSecretUrl = "http://www.mocky.io/v2/5e5f23ae3100004b00afd966"; //TODO
      fetch(validateSecretUrl, {
        method: "POST",
        body: JSON.stringify({
          skyAppSecret: this.state.skyAppSecret,
          skyAppId: this.state.skyapp.id
        }),
        headers: {
          "Content-Type": "application/json"
        }
      })
        .then(res => res.json())
        .then(response => {
          this.setState({
            showLoader: false,
          });
          response = true; //TODO
          if (response){
            this.setState({edit: true});
          }
          console.log("this.setState ", this.state.skyapp)
        });
    }
  }


  handleSkyAppSecretChange(evt){
    this.setState({skyAppSecret : evt.target.value})
  }

  handleEditBtn(){
    this.setState({ 
      openEnableEditDlg: true 
    });
  }

  handleDoneBtn(){
    this.setState({ 
      redirectToAllApps: true 
    });
  }

  componentDidMount(){
    const path = this.props.match.path;
    if (path==='/register'){
      this.setState({
        isRegister: true,
        skyapp: emptySkyApp
      });
      console.log("this.setState ", this.state.skyapp)
    } else {
      const {id} = this.props.match.params;
      console.log("Component mounted : ",id,path, this.props.match);
      this.setState({
        isRegister: false
      });
      console.log("this.setState ", this.state.skyapp)
      this.getSkyAppDetails(id);
    }
  }

  getSkyAppDetails(skyAppId){
    this.setState({
      showLoader: true
    });
    console.log("this.setState ", this.state.skyapp)
    fetch('http://www.mocky.io/v2/5e5f23ae3100004b00afd966?id='+skyAppId)
    .then(res => res.json())
    .then(res => {
      console.log("obtsined skyap");
      this.setState({
        showLoader: false,
        skyapp: {
          title: "The Title",
          description: "This is the description which must be of maximum 200 chars long.",
          fileName: "the_file",
          fileformat: "png",
          type: "20",
          category: "10",
          git_url: "https://myurl.github.com",
          searchable: true,
          id: 'A001'
        }
      });
      console.log("this.setState ", this.state.skyapp)
    });
  }

  componentDidUpdate(prevProps, prevState, snapshot){
    const path = this.props.match.path;
     if (path==='/register'){
       if (!this.state.isRegister){
         this.setState({
           isRegister: true,
           skyapp: emptySkyApp
         });
         console.log("this.setState ", this.state.skyapp)
       }
      return;
    }
    const {id} = this.props.match.params;
    console.log("Component updated : ", id, this.props);
    console.log("previous state: ", prevState);
    if (this.state.isRegister){
      this.setState({
        isRegister: false
      });
      console.log("this.setState ", this.state.skyapp)
    }
  }

  handleSecretIdDlgClose() {
    this.setState({ 
      openSecretIdDlg: false,
      redirectToAllApps: true 
    });
    console.log("this.setState ", this.state.skyapp)
  }

  handleSubmit(evt) {
    evt.preventDefault();
    const url = "";
    this.setState({ showLoader: true });
    console.log("this.setState ", this.state.skyapp)
    fetch(url, {
      method: "POST",
      body: JSON.stringify(this.state.skyapp),
      headers: {
        "Content-Type": "application/json"
      }
    })
      .then(res => res.json())
      .catch(err => {
        this.setState({ showLoader: false });
        console.log("this.setState ", this.state.skyapp)
      })
      .then(response => {
        console.log(response);
        this.setState({
          showLoader: false,
          openSecretIdDlg: true
        });
        console.log("this.setState ", this.state.skyapp)
      });
  }

  handleChange(evt) {
    console.log(evt.target.type);
    const eleType = evt.target.type;
    const { skyapp } = this.state;
    if (eleType === "checkbox") {
      skyapp[evt.target.name] = evt.target.checked;
    } else {
      skyapp[evt.target.name] = evt.target.value;
    }
    this.setState({ skyapp });
  }

  render() {
    const { classes } = this.props;
    const { 
      showLoader, 
      skyapp, 
      openSecretIdDlg, 
      redirectToAllApps, 
      isRegister, 
      edit, 
      openEnableEditDlg } = this.state;

    if (redirectToAllApps){
      return <Redirect to='/apps/all' />;
    }


    if (!showLoader) {
      return (
        <div className="container-fluid register-container">
          <div className="d-sm-flex align-items-center justify-content-between mb-4">
            {getPageHeader(isRegister, edit)}
          </div>
          <ValidatorForm
            ref="form"
            onSubmit={this.handleSubmit}
            onError={errors => console.log(errors)}
          >
            <Grid container spacing={5}>
              <Grid item xs={12}>
                <TextField
                  id="title"
                  name="title"
                  label="Title"
                  disabled={!isRegister && !edit}
                  fullWidth
                  value={skyapp.title}
                  autoComplete="off"
                  helperText="Max 15 charecters"
                  validators={["required"]}
                  onChange={this.handleChange}
                  onInput={e => {
                    e.target.value = e.target.value.slice(0, 15);
                  }}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  id="description"
                  name="description"
                  label="Description"
                  fullWidth
                  value={skyapp.description}
                  disabled={!isRegister && !edit}
                  autoComplete="off"
                  helperText="Max 200 charecters"
                  onInput={e => {
                    e.target.value = e.target.value.slice(0, 200);
                  }}
                  onChange={this.handleChange}
                />
              </Grid>
              <Grid item xs={6}>
                <TextField
                  id="fileName"
                  name="fileName"
                  label="File Name"
                  fullWidth
                  value={skyapp.fileName}
                  disabled={!isRegister && !edit}
                  autoComplete="off"
                  onChange={this.handleChange}
                />
              </Grid>
              <Grid item xs={6}>
                <TextField
                  id="fileformat"
                  name="fileformat"
                  label="File Format"
                  fullWidth
                  value={skyapp.fileformat}
                  disabled={!isRegister && !edit}
                  autoComplete="off"
                  onChange={this.handleChange}
                />
              </Grid>
              <Grid item xs={6} className="select-grid">
                <FormControl className={classes.formControl}>
                  <InputLabel id="demo-simple-select-label">Type</InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    fullWidth
                    disabled={!isRegister && !edit}
                    value={skyapp.type}
                    name="type"
                    onChange={this.handleChange}
                  >
                    <MenuItem value="">
                      <em>None</em>
                    </MenuItem>
                    <MenuItem value={10}>Directory</MenuItem>
                    <MenuItem value={20}>File</MenuItem>
                  </Select>
                </FormControl>
              </Grid>
              <Grid item xs={6} className="select-grid">
                <FormControl className={classes.formControl}>
                  <InputLabel id="demo-simple-select-label">
                    Category
                  </InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    id="category"
                    fullWidth
                    value={skyapp.category}
                    disabled={!isRegister && !edit}
                    name="category"
                    onChange={this.handleChange}
                  >
                    <MenuItem value="">
                      <em>None</em>
                    </MenuItem>
                    <MenuItem value={10}>Video</MenuItem>
                    <MenuItem value={20}>Audio</MenuItem>
                    <MenuItem value={20}>Blog</MenuItem>
                    <MenuItem value={20}>Dataset</MenuItem>
                    <MenuItem value={20}>SkyApp</MenuItem>
                  </Select>
                </FormControl>
              </Grid>
              <Grid item xs={6}>
                <TextField
                  id="git_url"
                  name="git_url"
                  disabled={!isRegister && !edit}
                  label="Github URL"
                  fullWidth
                  value={skyapp.git_url}
                  autoComplete="off"
                  onChange={this.handleChange}
                />
              </Grid>
              <Grid item xs={6} className="paddingt-40">
                <FormControlLabel
                  control={
                    <Checkbox
                      color="secondary"
                      name="searchable"
                      disabled={!isRegister && !edit}
                      checked={skyapp.searchable}
                      onChange={this.handleChange}
                    />
                  }
                  label="Searchable"
                />
              </Grid>
              <Grid item xs={12} className="button-grid">
                { (isRegister || edit) &&
                  <Button
                    variant="contained"
                    color="primary"
                    className="btn-20px"
                    type="submit"
                    startIcon={<SaveIcon />}
                  >
                    Save
                  </Button>
                } 
                { !isRegister && !edit &&
                  <Button
                    variant="contained"
                    color="primary"
                    className="btn-20px"
                    onClick={this.handleEditBtn}
                    type="button"
                    startIcon={<CheckCircleRoundedIcon />}
                  >
                    Edit
                  </Button>
                }
                { !isRegister && !edit &&
                  <Button
                    variant="contained"
                    color="primary"
                    className="btn-20px"
                    onClick={this.handleDoneBtn}
                    type="button"
                    startIcon={<CheckCircleRoundedIcon />}
                  >
                    Done
                  </Button>
                }
                { edit && !isRegister &&
                  <Button
                    variant="contained"
                    color="secondary"
                    className="btn-20px"
                    type="button"
                    startIcon={<DeleteIcon />}
                  >
                    Delete
                  </Button>
                }
              </Grid>
            </Grid>
          </ValidatorForm>

          <Dialog
            open={openSecretIdDlg}
            onClose={this.handleSecretIdDlgClose}
            TransitionComponent={Transition}
            keepMounted
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
          >
            <DialogTitle id="alert-dialog-title">
              {"Your App Secret ID"}
            </DialogTitle>
            <DialogContent>
              <DialogContentText id="alert-dialog-description">
                Your App secret ID is 'aaaa-bbbb-1234'. Please save this ID at a
                secure place. You will need this ID to be able to make any
                updates to your SkyApp. You will now be redirected to All Apps
                page.
              </DialogContentText>
            </DialogContent>
            <DialogActions>
              <Button
                onClick={this.handleSecretIdDlgClose}
                autoFocus
                variant="contained"
                color="primary"
                className="btn-20px"
                startIcon={<DoneIcon />}
              >
                OK
              </Button>
            </DialogActions>
          </Dialog>

          <Dialog
            open={openEnableEditDlg}
            onClose={this.handleEnableEditDlgClose}
            TransitionComponent={Transition}
            keepMounted
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
          >
            <DialogTitle id="alert-dialog-title">
              {"Please enter SkyApp Secret ID"}
            </DialogTitle>
            <DialogContent>
              <DialogContentText id="alert-dialog-description">
                Please enter your SkyApp Secret ID to be able to make changes to the SkyApp
              </DialogContentText>
              <TextField
                autoFocus
                margin="dense"
                id="name"
                label="SkyApp Secret"
                type="text"
                onChange={this.handleSkyAppSecretChange}
                fullWidth
              />
            </DialogContent>
            <DialogActions>
              <Button
                onClick={this.handleEnableEditDlgOkBtn}
                autoFocus
                variant="contained"
                color="primary"
                className="btn-20px"
                startIcon={<DoneIcon />}
              >
                OK
              </Button>
            </DialogActions>
          </Dialog>

        </div>
      );
    } else {
      return <div className="loader"></div>;
    }
  }
}

export default withStyles(useStyles)(SnRegister);
