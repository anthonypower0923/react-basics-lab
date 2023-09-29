import React, { useState } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import { FormHelperText } from '@mui/material';
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';

const AddTaskForm = (props) => {
    const [selected, setSelected] = useState('');

    const selectionChangeHandler = (event) => {
    setSelected(event.target.value);
  };

  return (
    <Box
      component="form"
      sx={{
        '& .MuiOutlinedInput-root': { m: 1, width: '30ch' },
      }}
      onSubmit={props.submit}
    >
      <div>
        <TextField
          required
          id="outlined-required"
          name="title"
          label="Task Title"
          InputLabelProps={{ shrink: true }}
          onChange={(event) => props.change(event)}
        />
      </div>
      <div>
        <TextField
          required
          name="deadline"
          label="Deadline"
          InputLabelProps={{ shrink: true }}
          type="date"
          onChange={(event) => props.change(event)}
        />
      </div>
      <FormControl style={{marginLeft: 20 }}>
      <InputLabel>Priority</InputLabel>
      <Select value={selected} onChange={selectionChangeHandler}>
        <MenuItem value={1}>LOW</MenuItem>
        <MenuItem value={2}>MEDIUM</MenuItem>
        <MenuItem value={3}>HIGH</MenuItem>
      </Select>
    </FormControl>
      <div>
        <TextField
          name="description"
          id="outlined-multiline-static"
          label="Task Details"
          InputLabelProps={{ shrink: true }}
          multiline
          rows={4}
          onChange={(event) => props.change(event)}
        />
      </div>
      <div>
        <Button 
          type="submit"
          variant="contained"
          color="primary"
          sx={{
            m: 1,
            p: 1,
            width: '95%'
          }}
        >
          Add Task
        </Button>
      </div>
    </Box>
  )
};

export default AddTaskForm;