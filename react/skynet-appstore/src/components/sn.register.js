import React from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import { makeStyles } from '@material-ui/core/styles';
import { Select, InputLabel, MenuItem, FormControl } from "@material-ui/core";


const useStyles = makeStyles(theme => ({
    formControl: {
      margin: theme.spacing(1)
    },
    selectEmpty: {
      marginTop: theme.spacing(2),
    },
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
          <Grid item xs={12} >
            <TextField
              required
              id="title"
              name="title"
              label="Title"
              fullWidth
              autoComplete="off"
            />
          </Grid>
          <Grid item xs={12} >
            <TextField
              required
              id="description"
              name="description"
              label="Description"
              fullWidth
              autoComplete="off"
            />
          </Grid>
          <Grid item xs={12} xs={6} className="select-grid">
            {/* <TextField
              required
              id="address1"
              name="address1"
              label="Address line 1"
              fullWidth
              autoComplete="off"
            /> */} 
         <FormControl className={classes.formControl}>
         <InputLabel id="demo-simple-select-label">Age</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          fullWidth
          name="age"
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value={10}>Ten</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem>
        </Select>

</FormControl>

          </Grid>
          <Grid item xs={12} xs={6}>
            <TextField
              id="address2"
              name="address2"
              label="Address line 2"
              fullWidth
              autoComplete="billing address-line2"
            />
          </Grid>
          <Grid item xs={12} >
            <TextField
              required
              id="city"
              name="city"
              label="City"
              fullWidth
              autoComplete="billing address-level2"
            />
          </Grid>
          <Grid item xs={12} >
            <TextField
              id="state"
              name="state"
              label="State/Province/Region"
              fullWidth
            />
          </Grid>
          <Grid item xs={12} >
            <TextField
              required
              id="zip"
              name="zip"
              label="Zip / Postal code"
              fullWidth
              autoComplete="billing postal-code"
            />
          </Grid>
          <Grid item xs={12} >
            <TextField
              required
              id="country"
              name="country"
              label="Country"
              fullWidth
              autoComplete="billing country"
            />
          </Grid>
          <Grid item xs={12}>
            <FormControlLabel
              control={
                <Checkbox color="secondary" name="saveAddress" value="yes" />
              }
              label="Use this address for payment details"
            />
          </Grid>
        </Grid>
      </div>
    );
  //}
}

