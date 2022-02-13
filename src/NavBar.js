import React from "react";
import { Navbar, ContentGroup, PrimaryDropdown } from "react-responsive-nav";
import { Link } from "react-router-dom";

function NavBar() {
  const NoticeBoardDropdown = {
    title: "Notice Board",
    links: [
      {
        link: (
          <Link
            style={{
              position: "absolute",
              left: "20%",
              top: "14%",
            }}
            to="/notice_board_school"
          >
            School - Notice Board
          </Link>
        ),
        // text: "A complete payments plaform engineered for growth.",
        icon: "https://www.voicesofyouth.org/sites/voy/files/images/2019-03/school.jpg",
        margin: "30px 0 0 0",
        color: "rgb(103, 114, 229)",
      },
      {
        link: (
          <Link
            style={{
              position: "absolute",
              left: "20%",
              top: "40%",
            }}
            to="/notice_board_jnrClg"
          >
            Junior College - Notice Board
          </Link>
        ),
        // text: "A complete payments plaform engineered for growth.",
        icon: "https://www.top10onlinecolleges.org/wp-content/uploads/2020/08/What-is-Junior-College.jpg",

        color: "rgb(36, 180, 126)",
      },
      {
        link: (
          <Link
            style={{
              position: "absolute",
              left: "20%",
              top: "66%",
            }}
            to="/notice_board_degreeClg"
          >
            Degree College - Notice Board
          </Link>
        ),
        // text: "A complete payments plaform engineered for growth.",
        icon: "https://www.thenewsminute.com/sites/default/files/styles/news_detail/public/Degree_College_poster.jpg?itok=555ZicL6",

        color: "rgb(50, 151, 211);",
      },
    ],
    footerLink: {},
  };
  const SchoolDropdown = {
    title: "Study Material",
    links: [
      {
        link: (
          <Link
            style={{
              position: "absolute",
              left: "20%",
              top: "14%",
            }}
            to="/study_material_school"
          >
            School - Study Material
          </Link>
        ),
        // text: "A complete payments plaform engineered for growth.",
        icon: "https://www.voicesofyouth.org/sites/voy/files/images/2019-03/school.jpg",

        color: "rgb(103, 114, 229)",
      },
      {
        link: (
          <Link
            style={{
              position: "absolute",
              left: "20%",
              top: "40%",
            }}
            to="/study_material_jnrClg"
          >
            Junior College - Study Material
          </Link>
        ),
        // text: "A complete payments plaform engineered for growth.",
        icon: "https://www.top10onlinecolleges.org/wp-content/uploads/2020/08/What-is-Junior-College.jpg",

        color: "rgb(36, 180, 126)",
      },
      {
        link: (
          <Link
            style={{
              position: "absolute",
              left: "20%",
              top: "66%",
            }}
            to="/time_table_degreeClg"
          >
            Degree College - Study Material
          </Link>
        ),
        // text: "A complete payments plaform engineered for growth.",
        icon: "https://www.thenewsminute.com/sites/default/files/styles/news_detail/public/Degree_College_poster.jpg?itok=555ZicL6",

        color: "rgb(50, 151, 211);",
      },
    ],
    footerLink: {},
  };
  const TimeTableDropdown = {
    title: "Time Table",
    links: [
      {
        link: (
          <Link
            style={{
              position: "absolute",
              left: "20%",
              top: "14%",
            }}
            to="/time_table_school"
          >
            School - Time Table
          </Link>
        ),
        // text: "A complete payments plaform engineered for growth.",
        icon: "https://www.voicesofyouth.org/sites/voy/files/images/2019-03/school.jpg",

        color: "rgb(103, 114, 229)",
      },
      {
        link: (
          <Link
            style={{
              position: "absolute",
              left: "20%",
              top: "40%",
            }}
            to="/time_table_jnrClg"
          >
            Junior College - Time Table
          </Link>
        ),
        // text: "A complete payments plaform engineered for growth.",
        icon: "https://www.top10onlinecolleges.org/wp-content/uploads/2020/08/What-is-Junior-College.jpg",

        color: "rgb(36, 180, 126)",
      },
      {
        link: (
          <Link
            style={{
              position: "absolute",
              left: "20%",
              top: "66%",
            }}
            to="/time_table_degreeClg"
          >
            Degree College - Time Table
          </Link>
        ),
        // text: "A complete payments plaform engineered for growth.",
        icon: "https://www.thenewsminute.com/sites/default/files/styles/news_detail/public/Degree_College_poster.jpg?itok=555ZicL6",

        color: "rgb(50, 151, 211);",
      },
    ],
    footerLink: {},
  };
  const ResultsDropdown = {
    title: "Results",
    links: [
      {
        link: (
          <Link
            style={{
              position: "absolute",
              left: "20%",
              top: "14%",
            }}
            to="/results_school"
          >
            School - Results
          </Link>
        ),
        // text: "A complete payments plaform engineered for growth.",
        icon: "https://www.voicesofyouth.org/sites/voy/files/images/2019-03/school.jpg",

        color: "rgb(103, 114, 229)",
      },
      {
        link: (
          <Link
            style={{
              position: "absolute",
              left: "20%",
              top: "40%",
            }}
            to="/results_jnrClg"
          >
            Junior College - Results
          </Link>
        ),
        // text: "A complete payments plaform engineered for growth.",
        icon: "https://www.top10onlinecolleges.org/wp-content/uploads/2020/08/What-is-Junior-College.jpg",

        color: "rgb(36, 180, 126)",
      },
      {
        link: (
          <Link
            style={{
              position: "absolute",
              left: "20%",
              top: "66%",
            }}
            to="/results_degreeClg"
          >
            Degree College - Results
          </Link>
        ),
        // text: "A complete payments plaform engineered for growth.",
        icon: "https://www.thenewsminute.com/sites/default/files/styles/news_detail/public/Degree_College_poster.jpg?itok=555ZicL6",

        color: "rgb(50, 151, 211);",
      },
    ],
    footerLink: {},
  };
  const AboutUsDropdown = {
    title: "About Us",
    links: [
      {
        link: (
          <Link
            style={{
              position: "absolute",
              left: "20%",
              top: "14%",
            }}
            to="/aboutus_school"
          >
            School - About Us
          </Link>
        ),
        // text: "A complete payments plaform engineered for growth.",
        icon: "https://www.voicesofyouth.org/sites/voy/files/images/2019-03/school.jpg",

        color: "rgb(103, 114, 229)",
      },
      {
        link: (
          <Link
            style={{
              position: "absolute",
              left: "20%",
              top: "40%",
            }}
            to="/aboutus_jnrClg"
          >
            Junior College - About Us
          </Link>
        ),
        // text: "A complete payments plaform engineered for growth.",
        icon: "https://www.top10onlinecolleges.org/wp-content/uploads/2020/08/What-is-Junior-College.jpg",

        color: "rgb(36, 180, 126)",
      },
      {
        link: (
          <Link
            style={{
              position: "absolute",
              left: "20%",
              top: "66%",
            }}
            to="/aboutus_degreeClg"
          >
            Degree College - About Us
          </Link>
        ),
        // text: "A complete payments plaform engineered for growth.",
        icon: "https://www.thenewsminute.com/sites/default/files/styles/news_detail/public/Degree_College_poster.jpg?itok=555ZicL6",

        color: "rgb(50, 151, 211);",
      },
    ],
    footerLink: {},
  };
  const authLinks = [
    <Link
      style={{
        position: "absolute",
        left: "20%",
        top: "14%",
      }}
      to="/signin"
    >
      Sign In &rarr;
    </Link>,
    <Link
      style={{
        position: "absolute",
        left: "20%",
        top: "14%",
      }}
      to="/signup"
    >
      Sign Up &rarr;
    </Link>,
  ];
  const mobileLinks = [
    <Link
      style={{
        position: "absolute",
        left: "20%",
        top: "14%",
      }}
      to="/pricing"
    >
      Pricing
    </Link>,
    <Link
      style={{
        position: "absolute",
        left: "20%",
        top: "14%",
      }}
      to="/pricing"
    >
      Works With Stripe
    </Link>,
    <Link
      style={{
        position: "absolute",
        left: "20%",
        top: "14%",
      }}
      to="/pricing"
    >
      Partner Program
    </Link>,
    <Link
      style={{
        position: "absolute",
        left: "20%",
        top: "14%",
      }}
      to="/pricing"
    >
      Documentation
    </Link>,
    <Link
      style={{
        position: "absolute",
        left: "20%",
        top: "14%",
      }}
      to="/pricing"
    >
      About Stripe
    </Link>,
    <Link
      style={{
        position: "absolute",
        left: "20%",
        top: "14%",
      }}
      to="/pricing"
    >
      Jobs
    </Link>,
    <Link
      style={{
        position: "absolute",
        left: "20%",
        top: "14%",
      }}
      to="/pricing"
    >
      Newsroom
    </Link>,
    <Link
      style={{
        position: "absolute",
        left: "20%",
        top: "14%",
      }}
      to="/pricing"
    >
      Blog
    </Link>,
  ];

  return (
    <div className="App">
      <Navbar
        // debug
        duration={200}
        logo="Sri Vivekananda"
        columnWidth="120"
        primaryDropdown={NoticeBoardDropdown}
        mobileFooterLinks={authLinks}
        mobileLinks={mobileLinks}
        breakpoint={900}
        color={"black"}
      >
        <ContentGroup
          title={NoticeBoardDropdown.title}
          height="300"
          width="495"
        >
          <PrimaryDropdown primaryDropdown={NoticeBoardDropdown} />
        </ContentGroup>
        <ContentGroup title={SchoolDropdown.title} height="300" width="495">
          <PrimaryDropdown primaryDropdown={SchoolDropdown} />
        </ContentGroup>
        <ContentGroup title={TimeTableDropdown.title} height="300" width="495">
          <PrimaryDropdown primaryDropdown={TimeTableDropdown} />
        </ContentGroup>
        <ContentGroup title={ResultsDropdown.title} height="300" width="495">
          <PrimaryDropdown primaryDropdown={ResultsDropdown} />
        </ContentGroup>
        <ContentGroup title={AboutUsDropdown.title} height="300" width="495">
          <PrimaryDropdown primaryDropdown={AboutUsDropdown} />
        </ContentGroup>
      </Navbar>
    </div>
  );
}

export default NavBar;
