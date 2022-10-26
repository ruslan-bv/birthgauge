import * as React from 'react';
import { Chart, AxisOptions } from 'react-charts'
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { FormControl, InputLabel, Select, MenuItem, 
        FormHelperText, SelectChangeEvent } from '@mui/material';

type FertilityRate = {
    date: number,
    tfr: number
}

const data = [
    {
        label: 'Canada',
        data: [
            {
                date: 2019,
                tfr: 1.5
            },
            {
                date: 2020,
                tfr: 1.9
            },
            {
                date: 2021,
                tfr: 1.3
            }
        ]
    }
]

export const GraphPage:React.FC = () => {
    const [country, setCountry] = React.useState('');

    const handleChangeCountry = (e: SelectChangeEvent) => {
        setCountry(e.target.value);
    };

    const primaryAxis = React.useMemo(
        (): AxisOptions<FertilityRate> => ({
            getValue: datum => datum.date
        }), []
    )

    const secondaryAxes = React.useMemo(
        (): AxisOptions<FertilityRate>[] => [
            {
                getValue: datum => datum.tfr
            }
        ], []
    )

    return (
        <Box
        sx={{
          width: "100%",
          maxWidth: 1000,
          display: "flex",
          flexDirection: "column",
          alignItems: "center"
        }}
      >
        <Typography variant="h5">Fertility Graph: History and Projections</Typography>
        <Box sx={{
            height: '300px',
            width: '500px',
            marginTop: '30px',
            border: '2px solid black',
            marginBottom: '10px'
        }}>
            <Chart 
                options={{
                    data,
                    primaryAxis,
                    secondaryAxes
                }}
            />
        </Box>
        <FormControl>
            <InputLabel id="country">Country</InputLabel>
            <Select
                id="country"
                value={country}
                label="Country"
                onChange={handleChangeCountry}
                variant="outlined"
            >
                <MenuItem value="">None</MenuItem>
                <MenuItem value="Japan">Japan</MenuItem>
            </Select>
            <FormHelperText>Please select a country</FormHelperText>
        </FormControl>
      </Box>
    )
}