
import React, { useRef, useEffect, useState } from 'react'
import axios from 'axios';


const Canvas = ({threadLink}) => {
  const BASEURL = 'http://localhost:3000';
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
      // context.fillText(props.text, 10, 50);
      // setDataUrl(canvas.toDataURL("image/png"));
      // console.log(dataURL);
  }, []);
  function download() {
    // console.log("hello" + threadLink);
    // console.log(`${BASEURL}/api/tweet/${threadLink.split('/')[-1]}`);
    // axios.get(`${BASEURL}/api/tweet/${threadLink.split('/')[-1]}`,)
    axios.get(`${BASEURL}/api/tweet/lala`,)
    .then(response => {
        // If request is good...
        const tweetText = response.data.text.data.text
        console.log(tweetText);
        const canvas = canvasRef.current;
        const context = canvas.getContext('2d');
        context.fillStyle = '#b2cfe9'
        context.fillRect(0, 0, context.canvas.width, context.canvas.height);
        context.font = "30px Arial";
        context.fillStyle = '#000000';
        context.fillText(tweetText, 10, 50);
        setDataUrl(canvas.toDataURL("image/png"));
        console.log(dataURL);
        const a = linkRef.current;
        a.href = dataURL; //Image Base64 Goes here
        a.download = "Image.png"; //File name Here
        console.log(a);
        a.click(); //Downloaded file
      })
    .catch((error) => {
        console.log('error ' + error);
      });

    
  }
  return (
    <>
      <a ref={linkRef} ></a>
      <canvas ref={canvasRef}/>
      <button onClick={download}>Download</button>
    </>
  )
}
export default Canvas;
