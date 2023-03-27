import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./app/store";
import { lazy, Suspense } from "react";

import style from "./style/app.module.scss";

import Header from "./components/organisms/Header";
import SideBar from "./components/organisms/SideBar";

const Feed = lazy(() => import("./pages/Feed"));
const Stories = lazy(() => import("./pages/Stories"));
const Books = lazy(() => import("./pages/Books"));
const Search = lazy(() => import("./pages/Search"));

function App() {
  return (
    <BrowserRouter>
      <Provider store={store}>
        <Header />
        <div className={style.app}>
          <SideBar />
          <Routes>
            <Route
              path="/"
              element={
                <Suspense fallback={<></>}>
                  <Feed />
                </Suspense>
              }
            />
            <Route
              path="/stories"
              element={
                <Suspense fallback={<></>}>
                  <Stories />
                </Suspense>
              }
            />
            <Route
              path="/books"
              element={
                <Suspense fallback={<></>}>
                  <Books />
                </Suspense>
              }
            />
            <Route
              path="/search"
              element={
                <Suspense fallback={<></>}>
                  <Search />
                </Suspense>
              }
            />
          </Routes>
        </div>
      </Provider>
    </BrowserRouter>
  );
}

export default App;
