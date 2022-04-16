
import React, { useRef, useEffect, useState } from 'react'

const Canvas = props => {
  
  const canvasRef = useRef(null);
  const linkRef = useRef(null);
  const [dataURL, setDataUrl] = useState(null);
  useEffect(() => {
      const canvas = canvasRef.current;
      const context = canvas.getContext('2d');
      context.fillStyle = '#b2cfe9'
      context.fillRect(0, 0, context.canvas.width, context.canvas.height);
      context.font = "30px Arial";
      context.fillStyle = '#000000';
      context.fillText("Hello World", 10, 50);
      setDataUrl(canvas.toDataURL("image/png"));
      console.log(dataURL);
  }, []);
  function download() {
    const a = linkRef.current;
      // a.href = "data:image/png;base64," + dataURL; //Image Base64 Goes here
      a.href = dataURL; //Image Base64 Goes here
      a.download = "Image.png"; //File name Here
      console.log(a);
      a.click(); //Downloaded file
  }
  return (
    <>
      <a ref={linkRef} ></a>
      <canvas ref={canvasRef} {...props}/>
      <button onClick={download}>Download</button>
    </>
  )
}
export default Canvas;
