import React, { useEffect, useRef } from 'react';

const Pawpsicle = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    function drawCircle(x, y, radius, fillStyle) {
      ctx.beginPath();
      ctx.arc(x, y, radius, 0, Math.PI * 2);
      ctx.fillStyle = fillStyle;
      ctx.fill();
      ctx.closePath();
    }

    // Draw paw base
    drawCircle(200, 200, 80, "#ff6b81");

    // Draw toe beans
    drawCircle(140, 120, 30, "#ff6b81");
    drawCircle(180, 90, 30, "#ff6b81");
    drawCircle(220, 90, 30, "#ff6b81");
    drawCircle(260, 120, 30, "#ff6b81");

    // Draw stick
    ctx.beginPath();
    ctx.fillStyle = "#dca375";
    ctx.fillRect(180, 280, 40, 150);
    ctx.closePath();

    // Bite mark
    ctx.beginPath();
    ctx.arc(230, 230, 25, 0, Math.PI * 2);
    ctx.globalCompositeOperation = "destination-out";
    ctx.fill();
    ctx.globalCompositeOperation = "source-over";

    // Shine
    ctx.beginPath();
    ctx.arc(170, 180, 20, 0, Math.PI * 2);
    ctx.fillStyle = "rgba(255,255,255,0.4)";
    ctx.fill();
    ctx.closePath();

  }, []);

  return (
    <div style={{ display: "flex", justifyContent: "center", padding: "2rem" }}>
      <canvas
        ref={canvasRef}
        width={400}
        height={500}
        style={{
          border: "2px solid #ffb6b6",
          borderRadius: "10px",
          background: "#fff",
        }}
      />
    </div>
  );
};

export default Pawpsicle;
