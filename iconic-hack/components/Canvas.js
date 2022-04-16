// import Canvas2Image from 'Canvas2Image';
// import dynamic from 'next/dynamic';
// import canvas2image from "canvas2image-2";


import React, { useRef, useEffect } from 'react'

const Canvas = props => {
  
  const canvasRef = useRef(null);
  const linkRef = useRef(null);
  
  useEffect(() => {
    async function test(){

      // const canvas2image = dynamic(
      //   () => import('canvas2image-2'),
      //   { ssr: false }
      // );
      // const Canvas2Image = (await import('../node_modules/canvas2image')).default;
      const canvas = canvasRef.current
      const context = canvas.getContext('2d')
      //Our first draw
      context.fillStyle = '#b2cfe9'
      context.fillRect(0, 0, context.canvas.width, context.canvas.height)
      context.font = "30px Arial";
      context.fillStyle = '#000000'
      context.fillText("Hello World", 10, 50);
      const dataURL = canvas.toDataURL("image/png");
      console.log(dataURL);
      // var a = document.createElement("a"); //Create <a>
      const a = linkRef.current;
      // a.href = "data:image/png;base64," + dataURL; //Image Base64 Goes here
      a.href = dataURL; //Image Base64 Goes here
      a.download = "Image.png"; //File name Here
      console.log(a);
      a.click(); //Downloaded file
      // canvas2image.convertToPNG(canvas, 400, 400);
      // console.log(Canvas2Image);
      // Canvas2Image.saveAsJPEG(canvas);
    }
    test();
  }, []);
  return (
    <>
      <a ref={linkRef} ></a>
      <canvas ref={canvasRef} {...props}/>
    </>
  )
}
export default Canvas;
