import { Route, Routes } from "react-router-dom";
import router from "../../../router";
import classes from "./router.module.css";

/**
 * SiteRouter component base on react-router-dom
 */
export default function SiteRouter() {
  return (
    <div className={classes.routesWrapper}>
      <Routes >
        {
          router.map((route, index) => {
            return <Route key={index} path={route.path} element={route.element} />
          })
        }
      </Routes>
    </div>

  )
}