import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import { Typography } from "@mui/material";
import { Opacity } from "@mui/icons-material";

// Card padre de la nota
export const WhiteBackgroundBox = styled(Box)(({ theme }) => ({
  backgroundSize: "cover",
  backgroundPosition: "center",
  marginTop: "60px",
  borderRadius: "10px",
  boxShadow: "-3px 5px 7px 5px rgba(0, 0, 0, 0.644)",
  width: "230px",
  height: "230px",
  fontSize: "1.2em",
  position: "relative",
  "&:hover": {
    transform: "scale(1.1)!important",
    transition: "transform 0.2s ease-in",
    zIndex: "10",
  },
}));

// Datos de la nota
export const NoteDataStyle = styled(Box)(({ theme }) => ({
  paddingTop: "20px",
  paddingBottom: "20px",
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
  fontSize: "1 rem",
  fontFamily: "Cursive",
  textAlign: "center",
}));

// Botones de editar y eliminar

export const ButtonDelete = styled(Box)(({ theme }) => ({
  display: "flex",
  justifyContent: "flex-end",
  paddingLeft: "10px",
}));

export const ButtonEdit = styled(Box)(({ theme }) => ({
  display: "flex",
  paddingRight: "10px",
 
  
}));

// Boton de agregar nota

export const ButtonAdd = styled(Box)(({ theme }) => ({
  display: "flex",
  justifyContent: "flex-end",
}));

// Formulario de notas

export const NoteFormStyle = styled(Box)(({ theme }) => ({
  width: "27rem",
  backgroundColor: "white",

  top: "10px",
  left: "10px",
  padding: "20px",
  borderRadius: "10px",
}));
// Input del formulario
export const InputStyle = styled("input")({
  border: "none",
  borderBottom: "2px solid #000",
  padding: "10px 0",
  width: "100%",
  backgroundColor: "white",
  color: "black",
  /* borderRadius: '5px', */
});

// Contexto de la nota

export const NoteContext = styled("textarea")(({ theme }) => ({
  border: "none",
  borderBottom: "2px solid #000",
  padding: "10px 0",
  width: "100%",
  backgroundColor: "white",
  color: "black",
}));

// El titulo de la nota

export const NoteTitle = styled(Typography)(({ theme }) => ({
  fontFamily: "Cursive",
  fontSize: "1.5rem",
}));

export const randomBackgroundColorElement = (element: HTMLElement) => {
  /*  const colors = ["#FFB6C1", "#FF69B4", "#FF1493", "#C71585", "#DB7093"]; */
  const colors = [
    "#FFB6C1",
    "#AEC6CF",
    "#77DD77",
    "#FDFD96",
    "#C3B1E1",
    "#FFB347",
    "#FF6961",
    "#99C1C8",
    "#FFDAB9",
    "#E6E6FA",
    "#98FF98",
    "#FF7F50",
    "#AFEEEE",
    "#FFE4B5",
    "#B2F302",
    "#FF77FF",
    "#E0FFFF",
    "#F5F5DC",
    "#FFCCCB",
    "#DCD0FF",
  ];
  const randomColor = colors[Math.floor(Math.random() * colors.length)];
  element.style.backgroundColor = randomColor;
};

export const randomMarginElement = (
  element: HTMLElement,
  min: number,
  max: number
) => {
  const randomMargin = Math.random() * (max - min) + min;
  element.style.margin = `${randomMargin}em`;
};

export const randomRotateElement = (
  element: HTMLElement,
  minDegree: number,
  maxDegree: number
) => {
  const randomDegree = Math.random() * (maxDegree - minDegree) + minDegree;
  element.style.transform = `rotate(${randomDegree}deg)`;
};
