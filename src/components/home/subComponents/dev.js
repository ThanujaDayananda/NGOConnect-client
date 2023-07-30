import React, { Component } from "react";

export default class Dev extends Component {
  state = [
    { name: "Thanuja D", gender: "female" },
    { name: "Sinchana S", gender: "female" },
    { name: "Shripradha M", gender: "female" },
    { name: "Rakshita R", gender: "female" },
    { name: "Saksha R", gender: "female" },
    { name: "Sahana R G", gender: "female" },
  ];

  girllink = [
    "https://media.licdn.com/dms/image/D4D03AQHINVch7HJj0w/profile-displayphoto-shrink_800_800/0/1686067435422?e=1695859200&v=beta&t=CoREMG4EOqZxAdC6ROEPelv2RkLvMbbPJEmR5nXZOL8",
    "https://w7.pngwing.com/pngs/34/886/png-transparent-female-woman-girl-computer-icons-svg-face-people-logo.png",
    "https://w7.pngwing.com/pngs/34/886/png-transparent-female-woman-girl-computer-icons-svg-face-people-logo.png",
    "https://w7.pngwing.com/pngs/34/886/png-transparent-female-woman-girl-computer-icons-svg-face-people-logo.png",
    "https://w7.pngwing.com/pngs/34/886/png-transparent-female-woman-girl-computer-icons-svg-face-people-logo.png",
    "https://w7.pngwing.com/pngs/34/886/png-transparent-female-woman-girl-computer-icons-svg-face-people-logo.png"
  ];

  render() {
    var devs = [];
    this.state.forEach((dev, i) => {
      var src = dev.gender === "female" ? this.girllink[i] : "";
      devs.push(
        <div key={i}>
          <p>
            <div className="dev">
              <div className="member">
                <center>
                  <img className="display" src={src} alt="not" />
                  <p>{dev.name}</p>
                </center>
              </div>
            </div>
          </p>
        </div>
      );
    });
    return <div className="dev-container">{devs}</div>;
  }
}