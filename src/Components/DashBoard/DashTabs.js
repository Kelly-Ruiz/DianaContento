import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import logo from "../../images/header logo.webp";
import "./Dashboard.css";
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import styled from '@emotion/styled';
import HomeIcon from './assets/icons/aside/HomeIcon';
import TrainingIcon from './assets/icons/aside/TrainingIcon';
import NutritionIcon from './assets/icons/aside/NutritionIcon';
import ChallengesIcon from './assets/icons/aside/ChallengesIcon';
import EventsIcon from './assets/icons/aside/EventsIcon';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {value === index && (
        <div className='p-10' sx={{ p: 3 }}>
          <>{children}</>
        </div>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `vertical-tab-${index}`,
    'aria-controls': `vertical-tabpanel-${index}`,
    color: "#ff0000"
  };
}

const StyledTab = styled((props) => <Tab disableRipple {...props} />)(
  ({ theme }) => ({
    textTransform: 'none',
    //   fontWeight: theme.typography.fontWeightRegular,
    //   fontSize: theme.typography.pxToRem(15),
    //   marginRight: theme.spacing(1),
    opacity: 0.5,
    color: '#D9F3F1',
    '&.Mui-selected': {
      color: '#00B2AA',
      opacity: 1
    },
    '&.Mui-focusVisible': {
      backgroundColor: '#00B2AA',
    },
  }),
);

export default function DashTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className='justify-center items-center flex flex-col h-screen bg-[#333] text-white'>
      <img className='w-14' src={logo} />
      <Tabs
        // className="h-[80%] tabslist"
        orientation="vertical"
        variant="scrollable"
        textColor="secondary"
        TabIndicatorProps={{
          style: {
            backgroundColor: "#00B2AA"
          }
        }}
        value={value}
        onChange={handleChange}
        aria-label="Vertical tabs example"
        sx={{ borderRight: 1, borderColor: 'divider' }}
      >
        <StyledTab className="transition-all duration-500 w-min m-auto p-3" icon={<HomeIcon/>} label="HOME" {...a11yProps(0)} />
        <StyledTab className="transition-all duration-500 w-min m-auto p-3" icon={<TrainingIcon />} label="TRAINING" {...a11yProps(1)} />
        <StyledTab className="transition-all duration-500 w-min m-auto p-3" icon={<NutritionIcon />} label="NUTRITION" {...a11yProps(2)} />
        <StyledTab className="transition-all duration-500 w-min m-auto p-3" icon={<ChallengesIcon />} label="CHALLENGES" {...a11yProps(3)} />
        <StyledTab className="transition-all duration-500 w-min m-auto p-3" icon={<EventsIcon />} label="EVENTS" {...a11yProps(4)} />
      </Tabs>
      {/* <TabPanel value={value} index={0}>
        Item One
      </TabPanel>
      <TabPanel value={value} index={1}>
        Item Two
      </TabPanel>
      <TabPanel value={value} index={2}>
        Item Three
      </TabPanel>
      <TabPanel value={value} index={3}>
        Item Four
      </TabPanel>
      <TabPanel value={value} index={4}>
        Item Five
      </TabPanel>
      <TabPanel value={value} index={5}>
        Item Six
      </TabPanel>
      <TabPanel value={value} index={6}>
        Item Seven
      </TabPanel> */}
    </div>
  );
}
