import React, { useEffect, useState } from "react";
import { useCanvas } from "@/lib/hooks/useCanvas";
import styles from "./canvas.module.css";

type Props = {};

const Canvas = (props: Props) => {
  const { canvasRef, onClickHandler, onClearButton } = useCanvas();

  return (
    <div className="relative z-0 my-8 bg-secondaryLight">
      <canvas ref={canvasRef} id="canvas" onClick={(e) => onClickHandler(e)} />
      <div className="flex justify-end px-10">
        <button onClick={() => onClearButton()} className={styles.clearBtn}>
          Clear Path
        </button>
      </div>
    </div>
  );
};

export default Canvas;
