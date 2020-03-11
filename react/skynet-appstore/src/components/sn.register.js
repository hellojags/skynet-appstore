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

const useStyles = theme => ({
  formControl: {
    margin: theme.spacing(1)
  },
  selectEmpty: {
    marginTop: theme.spacing(2)
  }
});

class SnRegister extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
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
  }

  handleChange(evt) {
    console.log(evt.target.type);
    const eleType = evt.target.type;
    const skyapp = this.state.skyapp;
    if (eleType === "checkbox") {
      skyapp[evt.target.name] = evt.target.checked;
    } else {
      skyapp[evt.target.name] = evt.target.value;
    }
    this.setState({ skyapp });
  }

  render() {
    const { classes } = this.props;
    const { skyapp } = this.state;
    return (
      <div className="container-fluid register-container">
        <div className="d-sm-flex align-items-center justify-content-between mb-4">
          <h1 className="h3 mb-0 text-gray-800">Register SkyApp</h1>
        </div>
        <form>
          <Grid container spacing={5}>
            <Grid item xs={12}>
              <TextField
                required
                id="title"
                name="title"
                label="Title"
                fullWidth
                autoComplete="off"
                helperText="Max 15 charecters"
                onChange={this.handleChange}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                required
                id="description"
                name="description"
                label="Description"
                fullWidth
                autoComplete="off"
                helperText="Max 200 charecters"
                onChange={this.handleChange}
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                required
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
                required
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
                <InputLabel id="demo-simple-select-label">Category</InputLabel>
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
        </form>
      </div>
    );
  }
}

export default withStyles(useStyles)(SnRegister);
