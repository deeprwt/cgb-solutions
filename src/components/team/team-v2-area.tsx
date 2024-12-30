import React from "react";
import team_data from "@/data/team-data";
import TeamSingleTwo from "./team-single-2";

const TeamTwoArea = () => {
  const teams = team_data.filter(
    (t) => t.page === "team-three" || t.page === "team"
  );
  return (
    <div className="team-section-three service-details light-bg position-relative pt-120 lg-pt-60 pb-130 lg-pb-60">
      <div className="container details-meta">
        <div className="position-relative">
          <div className="title-one wow fadeInUp text-center">
            <h3>Meet Our Team</h3>
          </div>
          <p className="text-lg text-dark mb-30 lg-mb-10 text-center px-5 py-3">
          At <b>CGB Solutions</b>, our team represents the core of what makes us a leading <b>IT solutions company</b>. With a shared vision of innovation and excellence, we bring together passionate professionals skilled in <b>IT services</b> and <b>IT business solutions.</b> 
          </p>
          <div className="row justify-content-center">
            {teams.map((t, i) => (
              <div
                key={i}
                className="col-lg-3 col-sm-6 wow fadeInUp"
                data-wow-delay={`0.${i}s`}
              >
                <TeamSingleTwo team={t} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeamTwoArea;
