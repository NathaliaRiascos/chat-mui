import { useState } from "react";
import "./SpeedDial.css";
import TagFacesIcon from "@mui/icons-material/TagFaces";
import CloseIcon from "@mui/icons-material/Close";

interface Props {
  isOpen: boolean;
  toggleOpen: (isOpen: boolean) => void;
}

export default function SpeedDial({ isOpen = false,  toggleOpen}: Props) {
  return (
    <div
      className={`circle ${isOpen ? "circle-active" : ""}`}
      onClick={() => toggleOpen(!isOpen)}
    >
      {!isOpen ? <TagFacesIcon /> : <CloseIcon />}
    </div>
  );
}
