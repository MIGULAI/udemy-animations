import NavigationBlock from "../navigationBlock/navigationBlock";
import SiteRouter from "../router/router";
import classes from "./app.module.css";

function App() {
  
  return (
    <div className={classes.appWrapper}>
      <NavigationBlock />
      <SiteRouter />
    </div>
  )
}

export default App
