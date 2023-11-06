import React, { useEffect } from "react";
import { useSearchParams } from "react-router-dom";

const Iframe = () => {
  const [urlParams] = useSearchParams();
  const type = urlParams.get('type');
  // const iframeUrl2 = urlParams.get('reportId');

  useEffect(() => {
    const iframe = document.getElementById('bireport_frame');
    if (type === "analyze1") {
      iframe.src = "https://tkg-tk-dev-gscm-pbi.azurewebsites.net/Embedded/Embedded?workspaceId=7536a368-a350-437f-9dcf-5478ff72a89b&reportId=0bf2b843-41b1-4db6-a8fc-6eaa78479f5b";
    } else if (type === "analyze2") {
      iframe.src = "https://tkg-tk-dev-gscm-pbi.azurewebsites.net/Embedded/Embedded?workspaceId=7536a368-a350-437f-9dcf-5478ff72a89b&reportId=bd440453-1b37-41d4-b4c8-1b9949c30b3c";
    }

  }, [type]);

  useEffect(()=>{
    document.querySelector('.history-stack').style.display = 'none';
  }, []);

  return (
    <div className="iframe-box">

      <iframe id="bireport_frame" className="iframe-element" title="오더분석" width="100%" src="https://tkg-tk-dev-gscm-pbi.azurewebsites.net/Embedded/Embedded?workspaceId=7536a368-a350-437f-9dcf-5478ff72a89b&reportId=0bf2b843-41b1-4db6-a8fc-6eaa78479f5b" frameBorder="0"></iframe>

    </div>
  )
}


export { Iframe }
