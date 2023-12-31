import React, { useState } from "react";
import { Button, Popup, SelectBox, TextBox } from "devextreme-react";
import { Link } from "react-router-dom";
import { ReactComponent as Favorite } from "../../../image/favorite.svg";
import { Split } from "@geoffcox/react-splitter";
import { ASIDE_A1201010000 } from "../../../components/Include/AsideMenus";

const SCM_PRG_A1201010000 = (props) => {
  const [isPopupVisible, setPopupVisibility] = useState(false);

  const togglePopup = () => {
    setPopupVisibility(!isPopupVisible);
  };

  const [isActive, setActive] = useState(false);

  const toggleFavorite = () => {
    setActive(!isActive);
  }

  const searchSelect = ['All', 'EX']


  return (
    <Split initialPrimarySize='300px' minPrimarySize='20px' minSecondarySize='calc(100% - 300px)' splitterSize='5px' vertical>
      <div className="aside-section">
        <ASIDE_A1201010000 />
      </div>

      <div className="contents-section">
        <div className="contents">

          <div className="page-header">
            <h2 className="ph-tit">
              <span className="favorite-icon">
                <Favorite width={24} height={24} className={isActive ? "active" : "inactive"} onClick={toggleFavorite}/>
              </span>
              {props.title}
            </h2>

            <ul className="breadcrumb">
              <li className="breadcrumb-item">
                <Link to={props.firstDepthPath}>{props.firstDepth}</Link>
              </li>
              <li className="breadcrumb-item">
                {props.secondDepth}
              </li>
              <li className="breadcrumb-item active">
                {props.thirdDepth}
              </li>
            </ul>
          </div>

          <div className="grid-container">

            <div className="grid-twoSide-wrap">
              <div className="grid-section">

              <div className="grid-headline">
                <div className="result-info">
                  <span className="tit-icon"></span>
                  <span className="title">Screen</span>
                </div>
              </div>

                <div className="grid-area">

                  <div
                    style={{ height: "642px", background: "#ddd" }}
                  >
                    그리드영역
                  </div>

                </div>

                <div className="grid-bottom">
                  <div className="grid-total">
                    총 00개(현재페이지 0/전체페이지 000000)
                  </div>
                </div>

              </div>

              <div className="grid-twoSide">
                <div className="grid-section">

                <div className="grid-headline">
                  <div className="result-info">
                    <span className="tit-icon"></span>
                    <span className="title">Dimension</span>
                  </div>
                </div>

                  <div className="grid-area">

                    <div style={{ height: "280px", background: "#ddd" }}>그리드 영역</div>

                  </div>

                  <div className="grid-bottom">
                    <div className="grid-total">
                      총 00개(현재페이지 0/전체페이지 000000)
                    </div>
                  </div>
                </div>

                <div className="grid-section">

                  <div className="grid-headline">
                    <div className="result-info">
                      <span className="tit-icon"></span>
                      <span className="title">Measure</span>
                    </div>
                  </div>

                  <div className="grid-area">

                    <div style={{ height: "280px", background: "#ddd" }}>그리드 영역</div>

                  </div>

                  <div className="grid-bottom">
                    <div className="grid-total">
                      총 00개(현재페이지 0/전체페이지 000000)
                    </div>
                  </div>
                </div>            
              </div>
            </div>

          </div>


        </div>
      </div>
    </Split>
  )
}
export {SCM_PRG_A1201010000};