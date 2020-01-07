import React from 'react';
import Delete from '@material-ui/icons/Delete'

import {onthology} from '../../utils/onthology'

import {AnnotationType} from '../../types/AnnotationType'

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
  onDelete: () => void
  handleChange: (a: any) => any
  annotation: AnnotationType
}


const Annotation: React.FC<AnnotationProps> = ({onDelete, handleChange, annotation}) => {
  const firstValues = onthology.map(el => el.name)
  const secondValues = annotation.first
    ? onthology
      .find(el => annotation.first === el.name)
      .children.map(el => el.name)
    : []

  const thirdValues = annotation.second
    ? onthology
      .find(el => annotation.first === el.name).children
      .find(el => annotation.second === el.name).children
    : []

  

  return (
    <Grid container wrap="nowrap" justify="space-between" spacing={2}>
      <Grid item container wrap="nowrap" justify="space-around" spacing={2} style={{ flex: '2' }}>
        <Grid item children={
          <CustomSelect 
            onChange={handleChange('first')}
            selected={annotation.first} 
            values={firstValues}
            inputLabel="Nível 1" />
          } style={{ flex: "1" }} />
        <Grid item children={
          <CustomSelect 
            onChange={handleChange('second')}
            selected={annotation.second}
            values={secondValues}
            inputLabel="Nível 2" />
          } style={{ flex: "1" }} />
        <Grid item children={
          <CustomSelect 
            onChange={handleChange('third')}
            selected={annotation.third}
            values={thirdValues}
            inputLabel="Nível 3" />
          } style={{ flex: "1" }} />
      </Grid>
      <Grid item container justify="space-between" wrap="nowrap"  style={{flex: '1'}}>
        <Grid 
          item 
          children=
            {
              <CustomTextInput 
                value={annotation.reference}
                onChange={handleChange("reference")}
              />
            } style={{ flex: '3' }}
        />
        <Grid item container justify="center" style={{flex: '1'}}>
          <Grid item> 
            <Tooltip title="Explícito">
              <Checkbox 
                onChange={handleChange("explicit")}
                checked={annotation.explicit} 
                color='primary' 
                style={{flex: '1', marginLeft: '0px'}}
              />
            </Tooltip>
          </Grid>
          <Grid item>
              <Tooltip title="Deletar">
                <Button 
                  onClick={onDelete}
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
  values: string[]
  selected: string
  onChange: (e: React.ChangeEvent<{value: string}>) => void
}

const CustomSelect: React.FC<CustomSelectProps> = ({inputLabel, values, selected, onChange}) => {
  return (
    <FormControl style={{ minWidth: '100%' }}>
      <InputLabel>{inputLabel}</InputLabel>
      <Select
        value={selected}
        onChange={onChange}
      >
        {
          values.map(v => <MenuItem key={v} value={v}>{v}</MenuItem>)
        }
      </Select>
    </FormControl>
  )
}

type CustomTextInputProps = {
  value: string
  onChange: (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void 
}

const CustomTextInput: React.FC<CustomTextInputProps> = ({onChange, value}) => {
  return (
    <FormControl style={{ minWidth: '100%' }}>
      <TextField onChange={onChange} label="Digite Aqui" value={value}/>
    </FormControl>
  )
}

export default Annotation;