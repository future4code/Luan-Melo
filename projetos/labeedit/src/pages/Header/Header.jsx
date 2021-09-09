import { useState } from "react";
import { useHistory } from "react-router-dom";

const Header = () => {
  const { push } = useHistory();
  const [loading, setLoading] = useState(false);

  const handleLogout = () => {
    setLoading(true);
    localStorage.removeItem("token");
    setTimeout(() => {
      setLoading(false);
      push("/login");
    }, 2000);
  };

  const isPage = window.location.pathname.includes("feed" || "post");
  return (
    <div>
      <h1>LabEddit</h1>
      <div>
        {loading ? (
          <p>Fazendo Logout...</p>
        ) : isPage ? (
          <button onClick={() => handleLogout()}>Logout</button>
        ) : null}
      </div>
    </div>
  );
};

export default Header;
