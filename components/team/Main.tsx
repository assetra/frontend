import Intro from "./Intro";

const Main = () => {
  return (
    <div className="team-container">
      <div className="team-body">
        <div className="team-grid team-grid-2">
          <div className="grid-title">
            <div className="title-container" aria-label="WORDS EDITOR">
              <h1
                id="advisor-editor-kv-title"
                className="title-h1 text-4xl"
                style={{ opacity: 1, transform: "translate(0px, 0px)" }}
              >
                <span className="span-font">Team's</span> Introduction
              </h1>
              <span
                className="line sub-heading-title-line css-xmxvpe"
                style={{
                  transformOrigin: "0% 0%",
                  transform: "translate(0px, 0px)",
                }}
              ></span>
            </div>
          </div>

          <p className="grid-sub">
            Introducing <span className="span-font"> the Leadership</span> of
            ASSETRA
            <br />.
          </p>

          <div className="grid-img">
            <img src="/assets/team.svg" alt="" width="610" height="618" />
          </div>

          <ul className="team-list">
            {[
              {
                name: "Giordano Bertin-Maurice",
                role: "Chief Executive Officer",
              },
              { name: "Ashmeet Singh", role: "Chief Technology Officer" },
              { name: "Bob Johnson", role: "Chief Marketing Officer" },
              { name: "Claude Zion", role: "Chief Operating Officer" },
              { name: "Yash Jain", role: "Chief Security Officer" },
              { name: "David Lam", role: "Chief Financial Officer" },
            ].map((member, index) => (
              <li key={index} className="team-item">
                <a>
                  <div className="item-container">
                    <div className="team-title">
                      {member.role.split(" ").map((word, i) => (
                        <span key={i}>{word} </span>
                      ))}
                    </div>
                    <div className="team-name">{member.name}</div>
                    <span className="team-span"></span>
                  </div>
                </a>
              </li>
            ))}
          </ul>
        </div>

        <Intro />
      </div>
    </div>
  );
};

export default Main;
