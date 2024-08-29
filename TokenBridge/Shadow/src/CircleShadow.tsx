import React from "react"
import { CircleShadowProps } from "./type"

const CircleShadow: React.FC<CircleShadowProps> = ({
  color = "var(--circle-shadow)",
  height = "38rem",
  width = "40rem",
  opacity = 40,
  blur = "4rem",
  rounded = "50%",
}) => {
  const styles = {
    position: "absolute" as const,
    zIndex: 0,
    marginTop: "4rem",
    width: "100%",
    maxWidth: width,
    height: height,
    backgroundColor: color,
    opacity: opacity / 100,
    filter: `blur(${blur})`,
    borderRadius: rounded,
  }

  return <div style={styles} />
}

export default CircleShadow
