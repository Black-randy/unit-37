import "./App.css";
import { getAuth } from "firebase/auth";
import { app } from "./components/firebase/Firebase";
import { useState, createContext, useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";

import RoutesComponent from "./Routes/Routes";
// import ThemeSwitcher  from "./components/ThemeSwitcher "; // <ThemeSwitcher />

export const UserContext = createContext();

function App() {
  const [user, setUser] = useState("Guest");
  const [uid, setUid] = useState("");
  const [count, setCount] = useState("");

  const auth = getAuth(app);

  onAuthStateChanged(auth, (user) => {
    if (user) {
      setUser(user.email);
      setUid(user.uid);

    } else {
      console.log("User logged out");
    }
  });

  const requestOptions = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ uid }),
  };

  useEffect(() => {
    fetch(`/api/getordercount`, requestOptions)
      .then((res) => res.json())
      .then((data) => {
        setCount(data);
      });
  }, [uid]);

  return (
    <UserContext.Provider value={{ uid, user, setUser, setUid, count, setCount }}>
      <RoutesComponent />
    </UserContext.Provider>
  );
}

export default App;
