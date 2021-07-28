import * as React from 'react';
import Box from '@material-ui/core/Box';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

const SelectForm = ({ label = 'ラベル', items }) => {
  const [value, setValue] = React.useState('');

  const handleChange = event => {
    setValue(event.target.value);
  };

  return (
    <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">{label}</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={value}
          label="Items"
          onChange={handleChange}
        >
          {items.map(item => (
            <MenuItem key={item.id} value={item.id}>{item.name}</MenuItem>
          ))}
        </Select>
      </FormControl>
    </Box>
  );
}

export default SelectForm;
