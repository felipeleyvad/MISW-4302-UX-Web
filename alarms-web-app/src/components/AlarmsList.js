import React, { useState } from 'react';
import { List, ListItem, ListItemText, ListItemSecondaryAction, IconButton, Paper, Typography, Modal, Button } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';

const AlarmList = ({ alarms, onDelete }) => {
  const [selectedAlarm, setSelectedAlarm] = useState(null);
  const [deleteConfirmationModalOpen, setDeleteConfirmationModalOpen] = useState(false);

  const handleDeleteClick = (alarm) => {
    setSelectedAlarm(alarm);
    setDeleteConfirmationModalOpen(true);
  };

  const handleDeleteConfirmation = () => {
    if (selectedAlarm) {
      onDelete(selectedAlarm);
      setSelectedAlarm(null);
      setDeleteConfirmationModalOpen(false);
    }
  };

  return (
    <Paper elevation={3} style={{ padding: '16px' }}>
      <Typography variant="h5">Lista de Alarmas</Typography>
      <List>
        {alarms.map((alarm, index) => (
          <ListItem key={index}>
            <ListItemText primary={alarm.name} />
            <ListItemText primary={alarm.time} />
            <ListItemSecondaryAction>
              <IconButton edge="end" aria-label="edit">
                <EditIcon />
              </IconButton>
              <IconButton edge="end" aria-label="delete" onClick={() => handleDeleteClick(alarm)}>
                <DeleteIcon />
              </IconButton>
            </ListItemSecondaryAction>
          </ListItem>
        ))}
      </List>
      <Modal
        open={deleteConfirmationModalOpen}
        onClose={() => setDeleteConfirmationModalOpen(false)}
        aria-labelledby="delete-confirmation-title"
        aria-describedby="delete-confirmation-description"
      >
        <div className="modal">
          <p>Hola</p>
        </div>
      </Modal>
    </Paper>
  );
};

export default AlarmList;
