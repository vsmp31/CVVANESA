import { getDatabase, ref, onValue } from "firebase/database";
import { useEffect, useState } from "react";

const Main = () => {
    const [main, setMain] = useState([]);
  useEffect(() => {
    const db = getDatabase();
    const aboutRef = ref(db, "main");
    onValue(aboutRef, (snapshot) => {
      const data = snapshot.val();
      setMain(data);
    });
  }, []);
    return (
        <main className="ds-pge-wrap">
        <div className="container">
          <div className="row">
            <div className="col-12 col-sm-12  col-md-6  col-lg-5  col-xl-5  col-xxl-5 ds-left-section">
              <div className="ds-sticky">
                <figure>
                  <img src={`data:image/jpeg;base64,${main.image}`} />
                </figure>
                <div className="ds-socail">
                  <span>{main.contact}</span>
                  <ul>
                    <li>
                      <a href="mailto:test@test.com">{main.email}</a>
                    </li>
                    <li>
                      <a href="#" target="_blanck">{main.twitter}</a>
                    </li>
                    <li>
                      <a href="#" target="_blanck">
                        {main.linkedin}
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-12 col-sm-12  col-md-6  col-lg-7  col-xl-7  col-xxl-7 ds-right-section">
              <div className="ds-info-sectio-wrp">
                <section className="ds-info-sectio">
                  <h2 className="ds-heading">
                    {main.abt}
                  </h2>
                  <p>
                  {main.desc}

                  </p>
                </section>
                <section className="ds-info-list-section">
                  <h3 className>{main.wid}</h3>
                  <ul>
                    <li>{main.desc2}</li>
                  </ul>
                </section>
                <section className="ds-info-list-section">
                  <h3 className>{main.prj}</h3>
                  <ul>
                  <li>{main.prj1}</li>
                    <li>{main.prj2}</li>
                    <li>{main.prj3}</li>
                    <li>{main.prj4}</li>
                    <li>{main.prj5}</li>
                    <li>{main.prj6}</li>
                    <li>{main.prj7}</li>
                  </ul>
                </section>
              </div>
            </div>
          </div>
        </div>
      </main>
    )
}
export default Main