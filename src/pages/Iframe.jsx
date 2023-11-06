import React, {useEffect, useState} from "react";
import { useLocation } from "react-router-dom";

const Iframe = () => {
  const location = useLocation();
  const urlParams = new URLSearchParams(location.search);
  const iframeUrl = urlParams.get('url');
  const iframeUrl2 = urlParams.get('reportId');

  useEffect(() => {
    // location.query.url을 기반으로 iframe의 src를 설정
    const iframe = document.getElementById('bireport_frame');
    iframe.src = iframeUrl;
    console.log(iframeUrl2)
  }, [iframeUrl]);

  useEffect(()=>{
    document.querySelector('.history-stack').style.display = 'none';
  }, []);

  // const locationChangeHandler = () => {
  //   if(isLocation === "/iframe/a") {
  //     // setSrc("https://tkg-tk-dev-gscm-pbi.azurewebsites.net/Embedded/Embedded?workspaceId=7536a368-a350-437f-9dcf-5478ff72a89b&reportId=0bf2b843-41b1-4db6-a8fc-6eaa78479f5b")
  //     setSrc("https://daum.net")
  //   } else if (isLocation === "/iframe/b") {
  //     // setSrc("https://tkg-tk-dev-gscm-pbi.azurewebsites.net/Embedded/Embedded?workspaceId=7536a368-a350-437f-9dcf-5478ff72a89b&reportId=bd440453-1b37-41d4-b4c8-1b9949c30b3c")
  //     setSrc("https://naver.com")
  //   }
  // // }
  //
  // useEffect(() => {
  //   if(isLocation === "/iframe/a") {
  //     // setSrc("https://tkg-tk-dev-gscm-pbi.azurewebsites.net/Embedded/Embedded?workspaceId=7536a368-a350-437f-9dcf-5478ff72a89b&reportId=0bf2b843-41b1-4db6-a8fc-6eaa78479f5b")
  //     setSrc("http://daum.net")
  //   } else if (isLocation === "/iframe/b") {
  //     // setSrc("https://tkg-tk-dev-gscm-pbi.azurewebsites.net/Embedded/Embedded?workspaceId=7536a368-a350-437f-9dcf-5478ff72a89b&reportId=bd440453-1b37-41d4-b4c8-1b9949c30b3c")
  //     setSrc("http://naver.com")
  //   }
  //   console.log(isLocation)
  // }, [isLocation]);


  return (
    <div className="iframe-box">

      {/*<Button className="load-iframe" onClick={funA}>오더 분석</Button>*/}
      {/*<Button className="load-iframe" onClick={funB}>자사/타사 현황 분석</Button>      */}

      <iframe id="bireport_frame" className="iframe-element" title="오더분석" width="100%" src="https://tkg-tk-dev-gscm-pbi.azurewebsites.net/Embedded/Embedded?workspaceId=7536a368-a350-437f-9dcf-5478ff72a89b&reportId=0bf2b843-41b1-4db6-a8fc-6eaa78479f5b" frameBorder="0"></iframe>

    </div>
  )
}


export { Iframe }