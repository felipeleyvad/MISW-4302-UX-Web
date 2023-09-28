import React, { useState } from 'react';
import { Button, TextField, Paper } from '@mui/material';
import { TimePicker } from "@mui/x-date-pickers";

const CreateAlarmForm = ({ onCreate }) => {
  const [newAlarm, setNewAlarm] = useState('');
  const [selectedTime, setSelectedTime] = useState('12:00'); // Hora inicial

  const appButtonStyle = {
    backgroundColor: '#12355B', 
    marginTop: '16px'
  };

  const handleCreateClick = () => {
    const date = new Date(selectedTime);
  
    if (!isNaN(date.getTime()) && newAlarm.trim() !== '') {
      const options = { hour12: true, hour: 'numeric', minute: 'numeric' };
      const formattedTime = date.toLocaleTimeString('es-CO', options);
  
      const alarm = {
        name: newAlarm,
        time: formattedTime,
      };
  
      onCreate(alarm);
      setNewAlarm('');
      setSelectedTime('12:00');
    }
  };

  return (
    <Paper elevation={3} style={{ padding: '16px' }}>
      <TextField
        label="Nombre de la Alarma"
        variant="outlined"
        value={newAlarm}
        onChange={(e) => setNewAlarm(e.target.value)}
        autoFocus
      />
      <br />
      <br />
      <TimePicker
        label='Hora de alarma'
        value={selectedTime}
        onChange={(newValue) => setSelectedTime(newValue)}>
      </TimePicker>
      {console.log(selectedTime)}
      <br />
      <Button
        variant="contained"
        style={appButtonStyle}
        onClick={handleCreateClick}
        disabled={newAlarm.trim() === '' || !selectedTime}
      >
        Crear
      </Button>
    </Paper>
  );
};

export default CreateAlarmForm;
