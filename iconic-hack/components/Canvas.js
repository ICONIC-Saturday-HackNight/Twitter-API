
import React, { useRef, useEffect, useState, useCallback } from 'react'
import axios from 'axios';
import { toPng } from 'html-to-image';
import Styles from "./Canvas.module.css";


const Canvas = ({text}) => {
  
  const ref = useRef(null)

  const onButtonClick = useCallback(() => {
    if (ref.current === null) {
      return
    }
    toPng(ref.current, { cacheBust: true, })
    .then((dataUrl) => {
      const link = document.createElement('a')
      link.download = 'my-image-name.png'
      link.href = dataUrl
      link.click()
    })
    .catch((err) => {
      console.log(err)
    })
}, [ref])
  const BASEURL = 'http://localhost:3000';
  const canvasRef = useRef(null);
  const linkRef = useRef(null);
  const [dataURL, setDataUrl] = useState(null);
  const [data,setData]=useState(null);

  const ComponentToPrint = (props, ref) => (
    <div ref={ref}>{data}</div>

  );


  
  function download() {
    // console.log("hello" + threadLink);
    // console.log(`${BASEURL}/api/tweet/${threadLink.split('/')[-1]}`);
    // axios.get(`${BASEURL}/api/tweet/${threadLink.split('/')[-1]}`,)
  var _Id = text.substr(text.lastIndexOf('/') + 1);
    axios.get(`${BASEURL}/api/tweet/${_Id}`)
    .then(response => {
        // If request is good...
       setData(response.data.text.data.text);
      })
    .catch((error) => {
        console.log('error ' + error);
      });

    
  }
  return (
    <>

      <button 
        onClick={download}
        class={Styles.button}
        // style={{}}
      >Go
      </button>

      <div ref = {ref} style={{width:"40% !important"}}>
        <div style = {{
          flexGrow:1, 
          display: 'flex',  
          justifyContent: 'center', 
          alignItems: 'center',
          background: "linear-gradient(45deg, #ffb56b, #ffae79, #ffa888, #ffa498, #ffa2a8, #ffa2b7, #fba4c4, #efa6d0, #e1aad8, #d2adde)",
          padding: "35px"
        }}>
          <div style={{
            width: '90%', 
            height: '90%', 
            // backgroundColor: '#fff', 
            boxShadow: "rgba(0, 0, 0, 0.07) 0px 1px 2px, rgba(0, 0, 0, 0.07) 0px 2px 4px, rgba(0, 0, 0, 0.07) 0px 4px 8px, rgba(0, 0, 0, 0.07) 0px 8px 16px, rgba(0, 0, 0, 0.07) 0px 16px 32px, rgba(0, 0, 0, 0.07) 0px 32px 64px",
            // boxShadow: "rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px",
            // border:"1px solid #000",
            background:"white",
            borderRadius:"30px",
            padding:"10px",
            wordBreak:"break-word",
            textAlign: "center",
            fontSize:"26px",
          }}>
            {data}
          </div>
        </div>
      </div>
      {data?<button onClick={onButtonClick} class={Styles.button} styles={{marginTop:"20px"}}>Download</button>:null}
    </>
  )
}
export default Canvas;
