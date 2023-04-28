import { useState } from "react";
import "./SpeedDial.css";
import TagFacesIcon from "@mui/icons-material/TagFaces";
import CloseIcon from "@mui/icons-material/Close";

export default function SpeedDial({ isOpen = false,  toggleOpen}) {
  return (
    <div
      className={`circle ${isOpen ? "circle-active" : ""}`}
      onClick={() => toggleOpen(!isOpen)}
    >
      {!isOpen ? <TagFacesIcon /> : <CloseIcon />}
    </div>
  );
}
