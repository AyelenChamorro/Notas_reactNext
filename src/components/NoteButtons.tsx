// Importa las librerías necesarias
import React from "react";
import Fab from "@mui/material/Fab";
import AddIcon from "@mui/icons-material/Add";
import {ButtonAdd} from "./useStyles";

interface FloatingActionButtonProps {
  type: "button" | "submit" | "reset";
  disabled: boolean;
  children: React.ReactNode;
}
export function FloatingActionButton({ type, disabled, children }: FloatingActionButtonProps) {
  return (
    <ButtonAdd>
      <Fab disabled={disabled} color="primary" aria-label="add" type={type} style={{ width: '40px', height: '40px' }}>
        <AddIcon />
      </Fab>
    </ButtonAdd>
  );
}
