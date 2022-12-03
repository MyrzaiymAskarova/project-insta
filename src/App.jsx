import { Provider } from "react-redux";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { store } from "./api/redux/store";
import MainPage from "./pages/MainPage";
import UserPage from "./pages/UserPage";

const App = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/:id" element={<UserPage />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  );
};

export default App;

//Route- это страницы

// path- путь корневой localhost 3000 // page 1
// например у каждого id страницы - страница с пользователем // user page
