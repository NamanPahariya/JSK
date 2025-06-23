import React from "react";
import { useRoutes } from "react-router-dom";
import NotFound from "pages/NotFound";
import Landing from "pages/Landing";
import Services from "pages/Services";
import AboutPage from "pages/AboutUs";
import DetailedServices from "pages/DetailedServices";
import Blog from "pages/Blog";
import Career from "pages/Career";

const ProjectRoutes = () => {
  let element = useRoutes([
    { path: "/", element: <Landing /> },
    { path: "*", element: <NotFound /> },
    
    {
      path: "services",
      element: <Services />,
    },
    {
      path: "aboutus",
      element: <AboutPage />,
    },
    {
      path:"/detailservices/:serviceId",
      element: <DetailedServices/>,
    },
    {
      path:"/blog",
      element: <Blog/>,
    },
    {
      path:"/career",
      element:<Career/>
    },
  ]);

  return element;
};

export default ProjectRoutes;
