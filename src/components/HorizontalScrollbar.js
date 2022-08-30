import React from "react";
import { Box } from "@mui/material";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";

import ExerciseCard from "./ExerciseCard";
import BodyPart from "./BodyPart";
import "./HorizontalScrollbar.css";

const slideLeft = () => {
  var slider = document.getElementById("slider");
  slider.scrollLeft = slider.scrollLeft - 400;
};

const slideRight = () => {
  var slider = document.getElementById("slider");
  slider.scrollLeft = slider.scrollLeft + 400;
};
const HorizontalScrollbar = ({ data, bodyParts, setBodyPart, bodyPart }) => {
  return (
    <div className="relative flex items-center">
      <MdChevronLeft onClick={slideLeft} size={40} />
      <div id="slider">
        {data.map((item) => (
          <Box
            key={item.id || item}
            itemId={item.id || item}
            title={item.id || item}
            m="0 40px"
          >
            {bodyParts ? (
              <BodyPart
                item={item}
                setBodyPart={setBodyPart}
                bodyPart={bodyPart}
              />
            ) : (
              <ExerciseCard exercise={item} />
            )}
          </Box>
        ))}
      </div>
      <MdChevronRight onClick={slideRight} size={40} />
    </div>
  );
};

export default HorizontalScrollbar;
