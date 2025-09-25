import { Link, Route, Routes } from "react-router";
import { AboutPageAsync } from "./pages/AboutPage/AboutPage.async";
import { MainPageAsync } from "./pages/MainPage/MainPage.async";
import { Suspense } from "react";
import { useTheme } from "./theme/useTheme";
import "./styles/index.scss";
import { classNames } from "./helpers/classNames/classNames";

const App = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className={classNames("app", {}, [theme])}>
      <button onClick={toggleTheme}>Toggle theme</button>

      <Link to={"/"}>Main page</Link>
      <Link to={"/about"}>About site page</Link>

      <Suspense fallback={"Loading..."}>
        <Routes>
          <Route path={"/"} element={<MainPageAsync />}></Route>
          <Route path={"/about"} element={<AboutPageAsync />}></Route>
        </Routes>
      </Suspense>
    </div>
  );
};

export default App;
