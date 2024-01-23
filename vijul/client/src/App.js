import React, { useState } from 'react'
import { IoIosArrowBack } from "react-icons/io";
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import Tab1 from './tab1';
import Drawer from '@mui/material/Drawer';
import { RxCross2 } from "react-icons/rx";
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
 const App = () => {
  const [value,setvalue]=useState('1');
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [selectedClient, setSelectedClient] = useState("Client Name");
  const [date1,setdate1]=useState();
  const [date2,setdate2]=useState();
  const [rfq,setrfq]=useState("");
  const handleinput=()=>{
    console.log(selectedClient+" "+date1+" "+date2+" "+rfq);
  }
  const handleclientChange = (event) => {
    setSelectedClient(event.target.value);
  };
  const handleChange=(event, newValue)=>{
    setvalue(newValue);
  }
  const handleSaveButtonClick = () => {
    setDrawerOpen(true);
  };

  const handleDrawerClose = () => {
    setDrawerOpen(false);
  };
  return (
    <>
    <IoIosArrowBack />
    <span style={{marginLeft:"5px",fontWeight:"bold"}}>Create Workloader</span>
    <button
        style={{
          float: 'right',
          marginRight: '50px',
          height: '35px',
          width: '70px',
          backgroundColor: 'skyblue',
          color: 'white',
          border: 'none',
          borderRadius: '10%',
        }}
        onClick={handleSaveButtonClick}
      >
        Save
      </button>

      <Drawer
        anchor="right"
        open={drawerOpen}
        onClose={handleDrawerClose}
      >
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <span style={{marginLeft:"10px",fontSize:"19px",fontWeight:"bold"}}>Workorder</span>
        <button onClick={handleDrawerClose} style={{border:"none",backgroundColor:"white",fontSize:"20px",float:"right"}}><RxCross2 /></button>
      </div>
        
        {/* Drawer content goes here */}
        <div style={{ padding: '16px' }}>
          <h4>Client:</h4>
        <Select
              value={selectedClient}
              onChange={handleclientChange}
              style={{ minWidth: '150px' }}
              placeholder='Client Name'
            >
              <MenuItem value="A">A</MenuItem>
              <MenuItem value="B">B</MenuItem>
              <MenuItem value="C">C</MenuItem>
              {/* Add more MenuItem components for each client */}
            </Select>
            <h4>Date of Commencement:</h4>
            <input
              type="date"
              id="datePicker"
              style={{
                padding: '8px',
                border: '1px solid #ccc',
                borderRadius: '4px',
                outline: 'none',
                fontSize: '16px',
              }} onChange={(e)=>{
                setdate1(e.target.value);
              }}/>
              <h4>Date of completion:</h4>
              <input
              type="date"
              id="datePicker"
              style={{
                padding: '8px',
                border: '1px solid #ccc',
                borderRadius: '4px',
                outline: 'none',
                fontSize: '16px',
              }} onChange={(e)=>{
                setdate2(e.target.value);
              }}/>
              <h4>RFQ Code:</h4>
              <input
                type="text"
                id="rfqCodeInput"
                placeholder="RFQ Code"
                style={{
                  padding: '10px',
                  border: '1px solid #ddd',
                  borderRadius: '5px',
                  outline: 'none',
                  fontSize: '16px',
                  width: '100%',
                  boxSizing: 'border-box',
                }}
                onChange={(e)=>{
                  setrfq(e.target.value);
                }}
              />
              <button
        style={{
          float: 'right',
          marginRight: '50px',
          height: '35px',
          width: '70px',
          backgroundColor: 'skyblue',
          color: 'white',
          border: 'none',
          borderRadius: '10%',
          float:"right",
          marginTop:"150px"
        }}
        onClick={handleinput}
      >
        Done
      </button>
        </div>
      </Drawer>
    <TabContext value={value}>
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
          <TabList onChange={handleChange} aria-label="lab API tabs example">
            <Tab label="Overview" value="1" />
            <Tab label="Other" value="2" />
          </TabList>
        </Box>
        <TabPanel value="1"><Tab1 /></TabPanel>
        <TabPanel value="2">Hello world</TabPanel>
      </TabContext>
    </>
  )
}
export default App;