import React, { useState } from 'react';
import { List, ListItem, ListItemText, ListItemSecondaryAction, IconButton, Paper, Typography, Modal, Button } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';

const TagList = ({ tags, onDelete }) => {
  const [selectedTag, setSelectedTag] = useState(null);
  const [deleteConfirmationModalOpen, setDeleteConfirmationModalOpen] = useState(false);

  const handleDeleteClick = (tag) => {
    setSelectedTag(tag);
    setDeleteConfirmationModalOpen(true);
  };

  const handleDeleteConfirmation = () => {
    if (selectedTag) {
      onDelete(selectedTag);
      setSelectedTag(null);
      setDeleteConfirmationModalOpen(false);
    }
  };

  return (
    <Paper elevation={3} style={{ padding: '16px', marginTop: '16px' }}>
      <Typography variant="h5">Lista de Etiquetas</Typography>
      <List>
        {tags.map((tag, index) => (
          <ListItem key={index}>
            <ListItemText primary={tag} />
            <ListItemSecondaryAction>
              <IconButton edge="end" aria-label="edit">
                <EditIcon />
              </IconButton>
              <IconButton edge="end" aria-label="delete" onClick={() => handleDeleteClick(tag)}>
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
          <Typography variant="h6" id="delete-confirmation-title">
            ¿Estás seguro de que deseas eliminar esta etiqueta?
          </Typography>
          <Button onClick={handleDeleteConfirmation} color="secondary">Eliminar</Button>
          <Button onClick={() => setDeleteConfirmationModalOpen(false)}>Cancelar</Button>
        </div>
      </Modal>
    </Paper>
  );
};

export default TagList;
