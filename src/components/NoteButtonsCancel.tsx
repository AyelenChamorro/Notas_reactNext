import { Button } from "@mui/material";
import React from "react";

interface NoteButtonsCancelProps {
  onClick: () => void;
}

export function NoteButtonsCancel(
  { onClick }: Readonly<NoteButtonsCancelProps>
): JSX.Element
 {
  return (
    <div>
      <Button onClick={onClick} variant="outlined" color="error">
        Cancel
      </Button>
    </div>
  );
}
