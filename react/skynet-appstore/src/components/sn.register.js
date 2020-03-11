import React from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import { makeStyles } from "@material-ui/core/styles";
import {
  Select,
  InputLabel,
  MenuItem,
  FormControl,
  Button
} from "@material-ui/core";
import SaveIcon from "@material-ui/icons/Save";

const useStyles = makeStyles(theme => ({
  formControl: {
    margin: theme.spacing(1)
  },
  selectEmpty: {
    marginTop: theme.spacing(2)
  }
}));

export default function SnRegister() {
  const classes = useStyles();

  //render() {
  return (
    <div className="container-fluid register-container">
      <div className="d-sm-flex align-items-center justify-content-between mb-4">
        <h1 className="h3 mb-0 text-gray-800">Register SkyApp</h1>
      </div>
      {/* <Typography variant="h6" gutterBottom>
                Register SkyApp
              </Typography> */}
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
          />
        </Grid>
        <Grid item xs={6} className="select-grid">
          <FormControl className={classes.formControl}>
            <InputLabel id="demo-simple-select-label">Type</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              fullWidth
              name="age"
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
              name="category"
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
          />
        </Grid>
        <Grid item xs={6} className="paddingt-40">
          <FormControlLabel
            control={
              <Checkbox color="secondary" name="searchable" value="yes" />
            }
            label="Searchable"
          />
        </Grid>
        <Grid item xs={12} className="button-grid">
          <Button
            variant="contained"
            color="primary"
            className="btn-20px"
            startIcon={<SaveIcon />}
          >
            Save
          </Button>
        </Grid>
      </Grid>
    </div>
  );
  //}
}
