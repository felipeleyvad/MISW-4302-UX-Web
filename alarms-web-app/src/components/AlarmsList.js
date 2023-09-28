import React from 'react';
import { List, ListItem, ListItemText, ListItemSecondaryAction, IconButton, Paper, Typography } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';

const AlarmList = ({ alarms, onDelete }) => {
  return (
    <Paper elevation={3} style={{ padding: '16px' }}>
      <Typography variant="h5">Lista de Alarmas</Typography>
      <List>
        {alarms.map((alarm, index) => (
          <ListItem key={index}>
            <ListItemText primary={alarm.name} secondary={alarm.time} />
            <ListItemSecondaryAction>
              <IconButton edge="end" aria-label="edit">
                <EditIcon />
              </IconButton>
              <IconButton edge="end" aria-label="delete" onClick={() => onDelete(alarm)}>
                <DeleteIcon />
              </IconButton>
            </ListItemSecondaryAction>
          </ListItem>
        ))}
      </List>
    </Paper>
  );
};

export default AlarmList;
