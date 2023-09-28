import React, { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import { Tabs, Tab, Paper, Typography, Button } from '@mui/material';
import TagList from './components/TagList';
import AlarmList from './components/AlarmsList';
import CreateAlarmForm from './components/CreateAlarmForm';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'

function App() {
  const [tabValue, setTabValue] = useState(0);
  const [predefinedAlarms, setPredefinedAlarms] = useState([{name: 'Alarm 1', time: '5:00 pm'}, {name: 'Alarm 2', time: '1:00 pm'}]);
  const [predefinedTags, setPredefinedTags] = useState(['Tag 1', 'Tag 2', 'Tag 3']);
  const [isCreateAlarmFormOpen, setIsCreateAlarmFormOpen] = useState(false);

  const appButtonStyle = {
    backgroundColor: '#12355B',
    marginBottom: '16px'
  };

  const tabStyle = {
    indicatorColor: '#12355B', // Reemplaza esto con tu código hexadecimal deseado
  };

  const handleChange = (event, newValue) => {
    setTabValue(newValue);
  };

  const handleCreateAlarm = (newAlarm) => {
    console.log('ALARMA =>', newAlarm)
    setPredefinedAlarms([...predefinedAlarms, newAlarm]);
    setIsCreateAlarmFormOpen(false); // Cerrar el formulario después de crear la alarma
    setTabValue(0); // Cambiar a la pestaña de "Alarmas" después de crear la alarma
  };

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <div className="App">
        <Navbar />
        <Paper elevation={3} style={{ padding: '16px', marginTop: '16px' }}>
          <Button
            variant="contained"
            style={appButtonStyle}
            onClick={() => setIsCreateAlarmFormOpen(true)}
          >
            Crear Alarma
          </Button>
          {isCreateAlarmFormOpen ? (
            <div>
              <Typography variant="h5">Crear Alarma</Typography>
              <CreateAlarmForm onCreate={handleCreateAlarm} />
            </div>
          ) : (
            <div>
              <Tabs value={tabValue} onChange={handleChange} centered TabIndicatorProps={{ style: tabStyle }}>
                <Tab label="Alarmas" />
                <Tab label="Etiquetas" />
              </Tabs>
              {tabValue === 0 && (
                <div>
                  <AlarmList alarms={predefinedAlarms} />
                </div>
              )}
              {tabValue === 1 && (
                <div>
                  <TagList tags={predefinedTags} />
                </div>
              )}
            </div>
          )}
        </Paper>
      </div>
    </LocalizationProvider>
  );
}

export default App;
