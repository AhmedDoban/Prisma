import React, { Suspense, lazy, useState } from "react";
import { Route, Routes } from "react-router-dom";
import { FaBarsStaggered } from "react-icons/fa6";

import Sidebar from "./Assets/Components/Sidebar/Sidebar";
import Loading from "./Assets/Components/Loading/Loading.jsx";

const Chats = lazy(() => import("./Assets/Pages/Chats/Chats.jsx"));
const NotFounded = lazy(() =>
  import("./Assets/Components/NotFounded/NotFounded.jsx")
);

function App() {
  const [active, SetActive] = useState("");

  return (
    <React.Fragment>
      <div className="App">
        <div
          className="togle"
          onClick={() => SetActive(active ? "" : "active")}
        >
          <FaBarsStaggered />
        </div>

        <Sidebar active={active} />
        <div className={`content ${active}`}>
          <Suspense fallback={<Loading />}>
            <Routes>
              <Route path="/" element={<Chats />}>
                <Route path="ChatRoom/:id" />
              </Route>
              <Route path="*" element={<NotFounded />} />
            </Routes>
          </Suspense>
        </div>
      </div>
    </React.Fragment>
  );
}
export default App;
