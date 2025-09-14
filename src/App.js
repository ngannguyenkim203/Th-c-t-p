

import { NavigationProvider } from "./context/NavigationContext";
// import ForumPage from "./pages/ForumPage";
// import NavPage from "./pages/NavPage";
// import AuthPage from "./pages/AuthPage";
// import ForumDetailPage from "./pages/ForumDetailPage";
// import ExpertPage from "./pages/ExpertPage";
// import ExpertDetailPage from "./pages/ExpertDetailPage";

import "./styles/common.css";
import { AuthProvider } from "./context/AuthContext";
// import { BrowserRouter, Router } from "react-router-dom";
import { BrowserRouter as Router } from "react-router-dom";
import AppRoutes from "./routes/AppRoutes";
// import MainHeader from "./components/Common/MainHeader";
// import NavPage from "./pages/NavPage";

function App() {
  return (
    <Router>
      <AuthProvider>
        <NavigationProvider>
          {/* <MainHeader /> */}
          {/* <NavPage /> */}
          {/* <BrowserRouter> */}
          <AppRoutes />
          {/* </BrowserRouter> */}
        </NavigationProvider>
      </AuthProvider>
    </Router>
    // <ExpertDetailPage />
    // <NavPage />
    // <NavigationProvider>
    //   <ForumPage />
    // </NavigationProvider>
  );
}

export default App;