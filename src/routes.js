import React from "react";
import { useRoutes } from "react-router-dom";
import { Main, Notfound, Error, Iframe } from "./pages";
import {
  SCM_PRG_A1201010000,
  SCM_PRG_A1201020000,
  SCM_PRG_A1201030000,
} from "./pages/Admin/ReportConfig";
import LayoutProvider from "./Layout"

const AppRoutes = () => {
  let element = useRoutes([
    {
      path: "/",
      element: <LayoutProvider />,
      children: [
        { path: "/", element: <Main title="Main" /> },
        { path: "/admin", element: <SCM_PRG_A1201010000 title="Screen Dimension &amp; Measure setting" /> },
        {
          path: "/admin/SCM_PRG_A1201010000",
          element:
            <SCM_PRG_A1201010000
              title="Screen Dimension &amp; Measure setting"
              firstDepth="Admin"
              secondDepth="Report Configuration"
              thirdDepth="Screen Dimension &amp; Measure setting"
              firstDepthPath="/admin"
            />
        },
        {
          path: "/admin/SCM_PRG_A1201020000",
          element:
            <SCM_PRG_A1201020000
              title="Dimension Management"
              firstDepth="Admin"
              secondDepth="Report Configuration"
              thirdDepth="Dimension Management"
              firstDepthPath="/admin"
            />
        },
        {
          path: "/admin/SCM_PRG_A1201030000",
          element:
            <SCM_PRG_A1201030000
              title="Measure Management"
              firstDepth="Admin"
              secondDepth="Report Configuration"
              thirdDepth="Measure Management"
              firstDepthPath="/admin"
            />
        },
        {
          path: "/Iframe",
          element:
            <Iframe/>
        },
        {
          path: "/error",
          element:
            <Error/>
        },
      ]
    },
    { path: "*",  element: <Notfound title="Notfound" /> }
  ]);

  return element;
};

export default AppRoutes;