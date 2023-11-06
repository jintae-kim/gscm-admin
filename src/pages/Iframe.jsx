import { Button } from "devextreme-react";
import React, { useEffect } from "react";


const Iframe = () => {

  useEffect(()=>{
    document.querySelector('.history-stack').style.display = 'none';
  }, []);

  const funA =()=>{
    document.getElementById("bireport_frame").src = "https://tkg-tk-dev-gscm-pbi.azurewebsites.net/Embedded/Embedded?workspaceId=7536a368-a350-437f-9dcf-5478ff72a89b&reportId=0bf2b843-41b1-4db6-a8fc-6eaa78479f5b";
  }

  const funB =()=>{
    document.getElementById("bireport_frame").src = "https://tkg-tk-dev-gscm-pbi.azurewebsites.net/Embedded/Embedded?workspaceId=7536a368-a350-437f-9dcf-5478ff72a89b&reportId=bd440453-1b37-41d4-b4c8-1b9949c30b3c";
  }
  

  return (
    <div className="iframe-box"> 
      
      <Button className="load-iframe" onClick={funA}>오더 분석</Button>
      <Button className="load-iframe" onClick={funB}>자사/타사 현황 분석</Button>      

      <iframe id="bireport_frame" className="iframe-element" title="오더분석" width="100%" src="https://tkg-tk-dev-gscm-pbi.azurewebsites.net/Embedded/Embedded?workspaceId=7536a368-a350-437f-9dcf-5478ff72a89b&reportId=0bf2b843-41b1-4db6-a8fc-6eaa78479f5b" frameBorder={0}></iframe>

    </div>
  )
}


export { Iframe }