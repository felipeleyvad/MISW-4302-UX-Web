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

    </Paper>
  );
};

export default TagList;
