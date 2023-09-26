import { CircularProgress } from "@mui/material";
import React from "react";

export default function Loading() {
  return (
    <div className="flex text-center justify-center my-80">
      <CircularProgress size={60} />
    </div>
  );
}
