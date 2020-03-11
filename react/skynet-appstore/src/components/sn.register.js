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

class SnRegister extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showLoader: false,
      openSecretIdDlg: false,
      skyapp: {
        title: "",
        description: "",
        fileName: "",
        fileFormat: "",
        type: "",
        category: "",
        githubUrl: "",
        searchable: true
      }
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleSecretIdDlgClose = this.handleSecretIdDlgClose.bind(this);
  }

  handleSecretIdDlgClose() {
    this.setState({ openSecretIdDlg: false });
  }

  handleSubmit(evt) {
    evt.preventDefault();
    const url = "";
    this.setState({ showLoader: true });
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
      })
      .then(response => {
        console.log(response);
        this.setState({
          showLoader: false,
          openSecretIdDlg: true
        });
      });
  }

  handleChange(evt) {
    console.log(evt.target.type);
    const eleType = evt.target.type;
    const { skyapp } = this.state.skyapp;
    if (eleType === "checkbox") {
      skyapp[evt.target.name] = evt.target.checked;
    } else {
      skyapp[evt.target.name] = evt.target.value;
    }
    this.setState({ skyapp });
  }

  render() {
    const { classes } = this.props;
    const { showLoader, skyapp, openSecretIdDlg } = this.state;

    if (!showLoader) {
      return (
        <div className="container-fluid register-container">
          <div className="d-sm-flex align-items-center justify-content-between mb-4">
            <h1 className="h3 mb-0 text-gray-800">Register SkyApp</h1>
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
                  fullWidth
                  autoComplete="off"
                  helperText="Max 15 charecters"
                  validators={["required"]}
                  errorMessages={["Title is required"]}
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
                  autoComplete="off"
                  onChange={this.handleChange}
                />
              </Grid>
              <Grid item xs={6}>
                <TextField
                  id="fileFormat"
                  name="fileFormat"
                  label="File Format"
                  fullWidth
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
                  id="githubUrl"
                  name="githubUrl"
                  label="Github URL"
                  fullWidth
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
                      checked={skyapp.searchable}
                      onChange={this.handleChange}
                    />
                  }
                  label="Searchable"
                />
              </Grid>
              <Grid item xs={12} className="button-grid">
                <Button
                  variant="contained"
                  color="primary"
                  className="btn-20px"
                  type="submit"
                  startIcon={<SaveIcon />}
                >
                  Save
                </Button>
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
        </div>
      );
    } else {
      return <div className="loader"></div>;
    }
  }
}

export default withStyles(useStyles)(SnRegister);
