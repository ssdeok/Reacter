import { createBrowserRouter } from "react-router-dom";
import RootLayout from "../RootLayout";
import { Router } from "react-router-dom";
import WebToon from "../pages/WebToon";
import Novel from "../pages/Novel";
import WebtoonDetail from "../components/WebtoonDetail";
import WebtoonMain from "../components/WebtoonMain";
import MainPage from "../components/MainPage";
const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout></RootLayout>,
    children: [
      {
        index: true,
        element: <MainPage></MainPage>,
      },
      {
        path: "/webtoon",
        element: <WebToon></WebToon>,
        children: [
          { index: true, element: <WebtoonDetail></WebtoonDetail> },
          {
            path: "/webtoon/:day",
            element: <WebtoonDetail></WebtoonDetail>,
            loader
          },
        ],
      },
    ],
  },
  {
    path: "/novel",
    element: <Novel></Novel>,
  },
]);

export default router;
