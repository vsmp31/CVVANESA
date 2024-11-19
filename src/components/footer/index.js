import { getDatabase, ref, onValue } from "firebase/database";
import { useEffect, useState } from "react";


const Footer = () => {
    const [footer, setFooter] = useState([]);
  useEffect(() => {
    const db = getDatabase();
    const footerRef = ref(db, "footer");
    onValue(footerRef, (snapshot) => {
      const data = snapshot.val();
      setFooter(data);
    });
  }, []);
    return (
        <footer className="ds-footer">
        <div className="container">
          <span className="ds-copyright">
            {footer.title}{" "}
            <a href="https://wwww.designstub.com/" target="_blanck"></a>
          </span>
          <a href="https://wwww.designstub.com/" target="_blanck"></a>
        </div>
        <a href="https://wwww.designstub.com/" target="_blanck"></a>
      </footer>
    )
}
export default Footer