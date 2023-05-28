import React from "react";

const Loader = () => {
  return (
    <div className="global-loader">
      <Box sx={{ display: "flex" }}>
        <CircularProgress size={40} color={"secondary"} />
      </Box>
    </div>
  );
};

export default Loader;
