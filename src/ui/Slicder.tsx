import * as React from "react";
import Box from "@mui/material/Box";
import Slider from "@mui/material/Slider";

type SliderSizesProps = {
  max: number;
  value: number;
  onChange: (value: any) => void;
};
export default function SliderSizes({
  max,
  value,
  onChange,
}: SliderSizesProps) {
  return (
    <Box sx={{ width: "90%", marginX: "auto" }}>
      <Slider
        defaultValue={0}
        value={value}
        onChange={onChange}
        max={max}
        aria-label="Default"
        valueLabelDisplay="auto"
      />
    </Box>
  );
}
