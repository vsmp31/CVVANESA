import { getDatabase, ref, onValue } from "firebase/database";
import { useEffect, useState } from "react";

const Header = () => {
    const [header, setHeader] = useState([]);
  useEffect(() => {
    const db = getDatabase();
    const headerRef = ref(db, "header");
    onValue(headerRef, (snapshot) => {
      const data = snapshot.val();
      setHeader(data);
    });
  }, []);
   return (
    <header className="ds-header">
    <div className="container text-center">
      <div className="ds-logo">
        <a href="index.html">{header.nama}</a>
      </div>
    </div>
  </header>
   )
}
export default Header;