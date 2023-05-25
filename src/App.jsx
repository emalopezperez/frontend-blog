import Home from "./pages/home";
import AuthState from "./context/auth/authState";

function App() {
  return (
    <AuthState>
      <Home />
    </AuthState>
  );
}

export default App;
