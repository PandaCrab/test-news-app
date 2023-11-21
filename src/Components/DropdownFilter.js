import React from 'react';
import Stack from '@mui/material/Stack';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

const DropdownFilter = ({ filter, setFilter }) => {
    return (
        <Stack direction="row" spacing={4} sx={{ marginBottom: 5 }}>
            <FormControl size="small" sx={{ width: 200 }}> 
                <InputLabel id="category-select-label">Categories</InputLabel>
                <Select
                    labelId="category-select-label"
                    id="category-select"
                    value={filter.category}
                    label="Category"
                    onChange={({target}) => setFilter((prev) => ({...prev, category: target.value}))}
                >
                <MenuItem value="business">Business</MenuItem>
                <MenuItem value="entertainment">Entertainment</MenuItem>
                <MenuItem value="general">General</MenuItem>
                <MenuItem value="health">Health</MenuItem>
                <MenuItem value="science">Science</MenuItem>
                <MenuItem value="sports">Sports</MenuItem>
                <MenuItem value="technology">Technology</MenuItem>
                </Select>
            </FormControl>
            <FormControl size="small" sx={{ width: 200 }}>
                <InputLabel id="country-select-label">Country</InputLabel>
                <Select
                    labelId="country-select-label"
                    id="country-select"
                    value={filter.country}
                    label="Country"
                    onChange={({target}) => setFilter((prev) => ({...prev, country: target.value}))}
                >
                <MenuItem value="ua">Ukraine</MenuItem>
                <MenuItem value="gb">United Kingdom</MenuItem>
                <MenuItem value="us">United States</MenuItem>
                <MenuItem value="jp">Japan</MenuItem>
                </Select>
            </FormControl>
        </Stack>
    );
};

export default DropdownFilter;
