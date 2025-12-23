import React from "react";
import {
  motion,
  useMotionValue,
  useSpring,
  useTransform,
  useMotionTemplate,
} from "framer-motion";

const items = [
  { x: "8%", y: "8%", w: 320, h: 220, img: "https://picsum.photos/id/10/800/600" },
  { x: "35%", y: "5%", w: 280, h: 380, img: "https://picsum.photos/id/14/600/900" },
  { x: "65%", y: "10%", w: 360, h: 240, img: "https://picsum.photos/id/18/800/600" },

  { x: "15%", y: "40%", w: 300, h: 210, img: "https://picsum.photos/id/26/800/600" },
  { x: "45%", y: "35%", w: 260, h: 180, img: "https://picsum.photos/id/28/800/600" },
  { x: "70%", y: "42%", w: 340, h: 240, img: "https://picsum.photos/id/32/800/600" },

  { x: "10%", y: "70%", w: 360, h: 260, img: "https://picsum.photos/id/36/800/600" },
  { x: "35%", y: "78%", w: 260, h: 360, img: "https://picsum.photos/id/38/600/900" },
  { x: "65%", y: "72%", w: 320, h: 220, img: "https://picsum.photos/id/40/800/600" },
];

export default function EdgeIntroScene() {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const smoothX = useSpring(mouseX, { stiffness: 50, damping: 28 });
  const smoothY = useSpring(mouseY, { stiffness: 50, damping: 28 });

  const moveX = useTransform(smoothX, [-1, 1], ["25vw", "-25vw"]);
  const moveY = useTransform(smoothY, [-1, 1], ["25vh", "-25vh"]);

  // Light animated background
  const bgX = useTransform(smoothX, [-1, 1], ["30%", "70%"]);
  const bgY = useTransform(smoothY, [-1, 1], ["30%", "70%"]);

  const background = useMotionTemplate`
    radial-gradient(
      circle at ${bgX} ${bgY},
     
      #12cfd5ff 
     
    )
  `;

  const handleMouseMove = (e) => {
    const { innerWidth, innerHeight } = window;
    mouseX.set((e.clientX / innerWidth - 0.5) * 2);
    mouseY.set((e.clientY / innerHeight - 0.5) * 2);
  };

  return (
    <motion.div
      onMouseMove={handleMouseMove}
      style={{
        width: "100vw",
        height: "100vh",
        overflow: "hidden",
        position: "relative",
        background,
      }}
    >
      {/* PARALLAX WORLD */}
      <motion.div
        style={{
          position: "absolute",
          width: "150vw",
          height: "150vh",
          left: "-25vw",
          top: "-25vh",
          x: moveX,
          y: moveY,
        }}
      >
        {items.map((item, i) => (
          <div
            key={i}
            style={{
              position: "absolute",
              left: item.x,
              top: item.y,
              width: item.w,
              height: item.h,
              borderRadius: "22px",
              overflow: "hidden",
              boxShadow: "0 25px 50px rgba(0,0,0,0.18)",
              background: "#fff",
            }}
          >
            <img
              src={item.img}
              alt=""
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
              }}
            />
          </div>
        ))}
      </motion.div>

      {/* CENTER CONTENT */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          zIndex: 10,
          pointerEvents: "none",
          textAlign: "center",
          color: "#0f172a",
        }}
      >
        <div>
          <h1 style={{ fontSize: "4rem", margin: 0 }}>
            Man Patel          </h1>
          <p style={{ opacity: 0.7 }}>
            Light · Smooth · Modern
          </p>
        </div>
      </div>
    </motion.div>
  );
}
