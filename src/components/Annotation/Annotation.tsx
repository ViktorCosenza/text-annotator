import React from 'react';
import Delete from '@material-ui/icons/Delete'
import {
  Checkbox,
  Grid,
  InputLabel,
  MenuItem,
  FormControl, 
  Select,
  TextField,
  Tooltip,
  Button
} from '@material-ui/core'

type AnnotationProps = {
  dispatch: (a: any) => void
  id: number
  defaultValue: String
}

const Annotation: React.FC<AnnotationProps> = props => {
  return (
    <Grid container wrap="nowrap" justify="space-between" spacing={2}>
      <Grid item container wrap="nowrap" justify="space-around" spacing={2} style={{ flex: '2' }}>
        <Grid item children={<CustomSelect inputLabel="Nível 1" />} style={{ flex: "1" }} />
        <Grid item children={<CustomSelect inputLabel="Nível 2" />} style={{ flex: "1" }} />
        <Grid item children={<CustomSelect inputLabel="Nível 3" />} style={{ flex: "1" }} />
      </Grid>
      <Grid item container justify="space-between" wrap="nowrap"  style={{flex: '1'}}>
        <Grid item children={<CustomTextInput defaultValue={props.defaultValue}/>} style={{ flex: '3' }}/>
        <Grid item container justify="center" style={{flex: '1'}}>
          <Grid item> 
            <Tooltip title="Explícito">
              <Checkbox color='primary' style={{flex: '1', marginLeft: '0px'}}/>
            </Tooltip>
          </Grid>
          <Grid item>
              <Tooltip title="Deletar">
                <Button 
                  onClick={() => props.dispatch({type: 'delete', id: props.id})}
                  children={<Delete />} 
                />
              </Tooltip>
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

type CustomTextInputProps = {
  defaultValue?: String
}

const CustomTextInput: React.FC<CustomTextInputProps> = props => {
  return (
    <FormControl style={{ minWidth: '100%' }}>
      <TextField label="Digite Aqui" defaultValue={props.defaultValue}/>
    </FormControl>
  )
}

export default Annotation;