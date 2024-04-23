import React, { useState, useRef, useEffect } from "react";
import { Box, Typography, Button } from "@mui/material";
import PhotoCameraIcon from "@mui/icons-material/PhotoCamera";
import RestartAltIcon from "@mui/icons-material/RestartAlt";

const Camera = ({ handleImage }) => {
  const videoRef = useRef(null);
  const canvasRef = useRef(null);

  const [image, setImage] = useState(null);

  const constraints = {
    video: { width: 520, height: 340 },
    audio: false,
  };

  const getVideo = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia(constraints);
      handleSuccess(stream);
    } catch (error) {
      console.log(error);
    }
  };

  const handleSuccess = (stream) => {
    videoRef.current.srcObject = stream;
    videoRef.current.play();
  };

  const handlePhotoClick = async () => {
    const context = canvasRef.current.getContext("2d");
    console.log(context);
    context.drawImage(videoRef.current, 0, 0, 220, 140);

    const blob = await new Promise((resolve) =>
      canvasRef.current.toBlob(resolve)
    );
    console.log(blob);
    setImage(blob);
    handleImage(blob);
  };

  const handleResetClick = () => {
    setImage("");
    handleImage("");
  };

  useEffect(() => {
    getVideo();
  }, []);

  return (
    <>
      <Box sx={{ display: "flex", justifyContent: "center" }}>
        <div
          style={{
            border: "3px solid #074173",
            backgroundColor: "#000000",
            borderRadius: "8px",
            overflow: "hidden",
            width: "500px",
            height: "310px",
            position: "relative",
          }}
        >
          <video className="video" ref={videoRef}></video>
        </div>
        <div className="canvas-wrap" style={{ display: "none" }}>
          <canvas
            className="canvas"
            width="220"
            height="140"
            ref={canvasRef}
          ></canvas>
        </div>
      </Box>
      <Box sx={{ display: "flex", justifyContent: "center", m: 4 }}>
        <Button
          variant="contained"
          onClick={handlePhotoClick}
          startIcon={<PhotoCameraIcon />}
        >
          Take a Photo
        </Button>

        {!noVisible && 
        <Button
          variant="contained"
          onClick={handleResetClick}
          startIcon={<RestartAltIcon />}
          style={{ backgroundColor: "#ff5362", marginLeft: "8px" }}
        >
          Reset
        </Button>}
      </Box>
      {image ? (
        <Box mt={2}>
          <img
            src={URL.createObjectURL(image)}
            className="photo"
            alt={"Image"}
          />
          <Typography align="center">Photography</Typography>
        </Box>
      ) : (
        <></>
      )}
    </>
  );
};

export default Camera;
