import * as React from 'react';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
  } from 'chart.js';
import { Line } from 'react-chartjs-2';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { FormControl, InputLabel, Select, MenuItem, 
        FormHelperText, SelectChangeEvent } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import { getCountryList } from '../api/countryService';

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
  );

const countries = ['Canada', 'Japan', 'USA', 'Germany', 'Singapore'];

const years = [1960, 1961, 1962, 1963, 1964, 1965, 1966, 1967, 1968, 1969, 1970, 1971, 1972, 1973, 1974, 1975, 1976, 1977, 1978, 1979, 1980, 1981, 1982, 1983, 1984, 1985, 1986, 1987, 1988, 1989, 1990, 1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998, 1999, 2000, 2001, 2002, 2003, 2004, 2005, 2006, 2007, 2008, 2009, 2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019, 2020, 2021]

const data = {
        labels: [2019, 2020, 2021],
        datasets: [{
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
}

const options = {
    parsing: {
        xAxisKey: 'date',
        yAxisKey: 'tfr'
    }
}

export const GraphPage:React.FC = () => {
    const theme = useTheme();

    const [country, setCountry] = React.useState<string[]>([]);
    const [countryList, setCountryList] = React.useState<any[]>([]);

    const handleChangeCountry = (e: SelectChangeEvent<typeof country>) => {
        const { target: { value } } = e;
        setCountry(typeof value === 'string' ? value.split(', ') : value);
    };

    React.useEffect(() => {
        const fetchData = async () => {
            const countries = await getCountryList();
            setCountryList(countries)
        }

        fetchData();
    }, [])

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
            height: '400px',
            width: '700px',
            marginTop: '30px',
            border: `2px solid ${theme.palette.primary.dark}`,
            marginBottom: '10px'
        }}>
            <Line
                data={data}
                options={options}
            />
        </Box>
        <FormControl sx={{ m: 1, width: 200 }}>
            <InputLabel id="country-multiple-label">Country</InputLabel>
            <Select
                labelId="country-multiple-label"
                id="country-multiple"
                value={country}
                label="Country"
                onChange={handleChangeCountry}
                multiple
            >
                {countries.map((country) => (
                    <MenuItem key={country} value={country}>
                        {country}
                    </MenuItem>
                ))}
            </Select>
            <FormHelperText>Please select a country</FormHelperText>
        </FormControl>
      </Box>
    )
}