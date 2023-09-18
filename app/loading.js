import { CircularProgress, Skeleton, Typography } from "@mui/material";
import React from "react";

function Loading() {
  return (
    <Typography variant="h1">
      <Skeleton className="dark:bg-gray-500" />
    </Typography>
  );
}

export default Loading;
