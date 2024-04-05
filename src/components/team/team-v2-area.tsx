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
            Our Team at CGB Solutions is a dynamic ensemble of individuals dedicated to excellence and innovation in workplace solutions.  United by a shared commitment to pushing boundaries and delivering exceptional results, our team fosters a culture of collaboration, continuous learning, and growth. Together, we are shaping the future of work and redefining possibilities in workplace innovation.
          </p>
          <div className="row">
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
