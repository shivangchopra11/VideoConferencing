import React, { useContext, useState } from "react";
import { Dropdown } from "react-bootstrap";

import "./HeadBar.css";

const HeadBar = (_: any) => {
  const [search, setSearch] = useState("");
  console.log(search);

  return (
    <div className="headBar">
      {window.innerWidth > 862 && (
        <div className="headBarBox">
          <div className="dots">. . .</div>
          <div className="dots">. . .</div>
          <div className="dots">. . .</div>
        </div>
      )}
      <div className="headSubBarBox">
        {window.innerWidth > 862 && (
          <div className="headBarTeamsHeading">
            <div className="headBarMSTeams">Microsoft Teams</div>
          </div>
        )}
        <div className="headBarSearch">
          <input
            type="text"
            className="headerBarSearchInput"
            placeholder="Search"
            onChange={(e) => setSearch(e.target.value)}
            value={search}
          />
          {(
            <div className="headerBarProfile">
              <Dropdown>
                <Dropdown.Toggle
                  className="headerBarProfileImg"
                  variant="success"
                  id="dropdown-basic"
                >
                  {'S'}
                </Dropdown.Toggle>

                <Dropdown.Menu className="dropdownBody">
                  <div className="profileOfUser">
                    <div className="profileOfUserImg">
                      {'S'}
                    </div>
                    <div className="profileOfUserImgDetails">
                      <div className="profileOfUserImgDetailsName">
                        {'Shivang'}
                      </div>
                      <div className="profileOfUserImgDetailsEmail">
                        {'shivangchopra11@gmail.com'}
                      </div>
                    </div>
                  </div>
                  <div
                    className="signout"
                    onClick={() => {
                    }}
                  >
                    Sign Out
                  </div>
                </Dropdown.Menu>
              </Dropdown>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default HeadBar;