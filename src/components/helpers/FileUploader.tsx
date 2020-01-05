import React from 'react'

import Button from '@material-ui/core/Button'
import CloudUpload from '@material-ui/icons/CloudUpload'

type FileUploaderProps = {
  handleUpload: any
}

export const FileUploader: React.FC<FileUploaderProps> = props => {
  return (
    <>
      <input
        accept="text/*"
        id="upload-files"
        multiple
        type="file"
        style={{ display: 'none' }}
        onInput={props.handleUpload}
      />
      <label htmlFor="upload-files" >
        <Button variant="contained" component="span">
          <CloudUpload />
        </Button>
      </label>
    </>
  )
}
