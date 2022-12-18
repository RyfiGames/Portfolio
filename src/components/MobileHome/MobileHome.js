import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import bannerimg from "../../assets/programmingBanner.jpg";

export const MobileHome = () => {
  const [linksDOM, setLinksDom] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const tempLinks = [];
    const links = [
      {
        name: "Resume",
        icon: "RM-Logo-TP.png",
        url: "+",
      },
      {
        name: "GitHub",
        icon: "github.png",
        url: "https://github.com/RyfiGames",
      },
      {
        name: "LinkedIn",
        icon: "linkedin.png",
        url: "https://www.linkedin.com/in/ryan-magilton-519500225/",
      },
      {
        name: "Itch",
        icon: "itch.png",
        url: "https://ryfi.itch.io/",
      },
    ];

    for (let link of links) {
      let tooltip = [];
      if (link.url.startsWith("-tooltip")) {
        tooltip.push(<div className="linkTooltip">{link.tooltip}</div>);
      }
      tempLinks.push(
        <span
          className="bannerLink"
          key={"link" + link.name}
          onClick={() => {
            if (link.url.startsWith("+")) {
              navigate("resume");
              window.scrollTo(0, 0);
            } else if (!link.url.startsWith("-")) {
              window.open(link.url);
            }
          }}
        >
          <span className="bannerLinkCont">
            <img className="linkIcon" src={`images/${link.icon}`} />
            <span>{link.name}</span>
            {tooltip}
          </span>
        </span>
      );
    }
    setLinksDom(tempLinks);
  }, []);

  return (
    <>
      <img
        src={bannerimg}
        style={{
          height: "100%",
          position: "fixed",
          zIndex: -1,
          top: 0,
          filter: "brightness(0.5)",
        }}
      />
      <h1>Ryan Magilton</h1>
      <h4>Computer Science</h4>
      <h4>Web Development</h4>
      <h4>Game Development</h4>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          margin: "5% 10%",
          alignItems: "stretch",
          gap: "20px",
        }}
      >
        {linksDOM}
      </div>
      <h4>Visit on desktop to see more of my work!</h4>
    </>
  );
};
