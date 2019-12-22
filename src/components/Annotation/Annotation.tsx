import React, { useState } from 'react';
import {
  Box,
  Button,
  Checkbox,
  Grid,
  InputLabel,
  MenuItem,
  FormHelperText,
  FormControl,
  Select,
  TextField,
  FormControlLabel
} from '@material-ui/core'

const Annotation: React.FC = () => {
  return (
    <Grid container wrap="nowrap" justify="space-between" spacing={2}>
      <Grid item container wrap="nowrap" justify="space-around" spacing={2} style={{ flex: '2' }}>
        <Grid item children={<CustomSelect inputLabel="Nível 1" />} style={{ flex: "1" }} />
        <Grid item children={<CustomSelect inputLabel="Nível 2" />} style={{ flex: "1" }} />
        <Grid item children={<CustomSelect inputLabel="Nível 3" />} style={{ flex: "1" }} />
      </Grid>
      <Grid item container justify="space-between" wrap="nowrap"  style={{flex: '1'}}>
        <Grid item children={<CustomTextInput />} style={{ flex: '3' }}/>
        <Grid item container justify="center" style={{flex: '1'}}>
          <Grid item> 
              <FormControlLabel 
                label="Explícito" 
                control={<Checkbox color='primary' style={{flex: '1', marginLeft: '0px'}}/>}
              />
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}

type CustomSelectProps = {
  inputLabel: string
}

const CustomSelect: React.FC<CustomSelectProps> = props => {
  return (
    <FormControl style={{ minWidth: '100%' }}>
      <InputLabel>{props.inputLabel}</InputLabel>
      <Select>
        <MenuItem>Um</MenuItem>
        <MenuItem>Dois</MenuItem>
        <MenuItem>Três</MenuItem>
      </Select>
    </FormControl>
  )
}

const CustomTextInput: React.FC = () => {
  return (
    <FormControl style={{ minWidth: '100%' }}>
      <TextField label="Digite Aqui" />
    </FormControl>
  )
}

export default Annotation;