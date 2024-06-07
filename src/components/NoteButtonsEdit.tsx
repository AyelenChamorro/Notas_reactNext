import { EditNotifications } from "@mui/icons-material";
import { Fab } from "@mui/material";
import React from "react";
import { ButtonEdit } from "./useStyles";

interface NoteButtonsDeleteProps {
  onClick: () => void;
}

export function NoteButtonsEdit(
  { onClick }: Readonly<NoteButtonsDeleteProps>
) {
  return (
    <ButtonEdit   onClick={onClick}>
      <Fab color="secondary" aria-label="edit "  style={{ width: '40px', height: '40px' }} >
        <EditNotifications />
      </Fab>
    </ButtonEdit>
  );
}
