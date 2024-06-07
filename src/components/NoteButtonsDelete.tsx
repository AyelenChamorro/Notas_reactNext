import { IconButton } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import { ButtonDelete } from "./useStyles";

interface NoteButtonsDeleteProps {
  onClick: () => void;
}

export function NoteButtonsDelete({
  onClick,
}: Readonly<NoteButtonsDeleteProps>): JSX.Element {
  return (
    <ButtonDelete  onClick={onClick}>
      <IconButton aria-label="delete">
        <DeleteIcon />
      </IconButton>
    </ButtonDelete>
  );
}

