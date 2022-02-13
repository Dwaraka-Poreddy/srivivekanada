import React from "react";
import {
  Navbar,
  ContentGroup,
  PrimaryDropdown,
  IconDropdown,
  ColumnDropdown,
} from "react-responsive-nav";
import { Link } from "react-router-dom";

function NavBar() {
  const primaryDropdown = {
    title: "Products",
    links: [
      {
        link: <Link to="/elixir">Elixir</Link>,
        text: "A complete payments plaform engineered for growth.",
        icon: "https://res.cloudinary.com/dmjolhdaq/image/upload/v1556303055/Portfolio/logo-elixir.svg",
        color: "rgb(103, 114, 229)",
      },
      {
        link: <a href="https://www.mongodb.com/">MongoDB</a>,
        text: "A complete payments plaform engineered for growth.",
        icon: "https://res.cloudinary.com/dmjolhdaq/image/upload/v1556302711/Portfolio/mongodb-original.svg",
        color: "rgb(36, 180, 126)",
      },
      {
        link: <Link to="/react">React</Link>,
        text: "A complete payments plaform engineered for growth.",
        icon: "https://res.cloudinary.com/dmjolhdaq/image/upload/v1556302728/Portfolio/react-original.svg",
        color: "rgb(50, 151, 211);",
      },
      {
        link: <a href="https://www.heroku.com/">Heroku</a>,
        text: "Your business data at your fingertips.",
        icon: "https://res.cloudinary.com/dmjolhdaq/image/upload/v1556302631/Portfolio/heroku-original.svg",
        color: "rgb(103, 114, 229)",
      },
      {
        link: <Link to="/html">HTML</Link>,
        text: "Your business data at your fingertips.",
        icon: "https://res.cloudinary.com/dmjolhdaq/image/upload/v1556302614/Portfolio/html5-original.svg",
        color: "rgb(241,101,41)",
      },
      {
        link: (
          <a href="https://redux.js.org/introduction/getting-started">Redux</a>
        ),
        text: "Your business data at your fingertips.",
        icon: "https://res.cloudinary.com/dmjolhdaq/image/upload/v1556304989/Portfolio/redux-original.svg",
        color: "rgb(183, 106, 196)",
      },
      {
        link: <Link to="/ruby">Ruby</Link>,
        text: "Your business data at your fingertips.",
        icon: "https://res.cloudinary.com/dmjolhdaq/image/upload/v1556302738/Portfolio/ruby-original.svg",
        color: "rgb(201,49,31)",
      },
      {
        link: (
          <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript">
            JavaScript
          </a>
        ),
        text: "Your business data at your fingertips.",
        icon: "https://res.cloudinary.com/dmjolhdaq/image/upload/v1556302682/Portfolio/javascript-original.svg",
        color: "rgb(240,219,79)",
      },
    ],
    footerLink: {
      link: <Link to="/webpack">WEBPACK IS COOL TOO</Link>,
      icon: "https://res.cloudinary.com/dmjolhdaq/image/upload/v1556302786/Portfolio/webpack-original.svg",
    },
  };
  const columnDropdown = {
    title: "Developers",
    color: "rgb(131,205,41)",
    primaryLink: {
      subtitle: "Start integrating Stripe's products and tools.",
      link: <Link to="/node">Node.js</Link>,
      icon: "https://res.cloudinary.com/dmjolhdaq/image/upload/v1556302721/Portfolio/nodejs-original.svg",
    },
    firstColumn: {
      title: "Get Started",
      links: [
        <Link to="/get-started">Get Started</Link>,
        <Link to="/get-started">Get Started</Link>,
        <Link to="/get-started">Get Started</Link>,
        <Link to="/get-started">Get Started</Link>,
      ],
    },
    secondColumn: {
      title: "Popular Topics",
      links: [
        <Link to="/apple">Apple Pay</Link>,
        <Link to="/apple">Apple Pay</Link>,
        <Link to="/apple">Apple Pay</Link>,
        <Link to="/apple">Apple Pay</Link>,
      ],
    },
    footerLinks: [
      {
        link: <Link to="/full-api">Full API Reference</Link>,
        icon: "https://res.cloudinary.com/dmjolhdaq/image/upload/v1556302721/Portfolio/nodejs-original.svg",
      },
      {
        link: <Link to="/full-api">Full API Reference</Link>,
        icon: "https://res.cloudinary.com/dmjolhdaq/image/upload/v1556302721/Portfolio/nodejs-original.svg",
      },
      {
        link: <Link to="/full-api">Full API Reference</Link>,
        icon: "https://res.cloudinary.com/dmjolhdaq/image/upload/v1556302721/Portfolio/nodejs-original.svg",
      },
    ],
  };
  const iconDropdown = {
    title: "Company",
    color: "rgb(50, 151, 211);",
    links: [
      {
        link: <Link to="/full-api">Full API Reference</Link>,
        icon: "https://res.cloudinary.com/dmjolhdaq/image/upload/v1556302786/Portfolio/webpack-original.svg",
      },
      {
        link: <Link to="/full-api">Full API Reference</Link>,
        icon: "https://res.cloudinary.com/dmjolhdaq/image/upload/v1556302786/Portfolio/webpack-original.svg",
      },
      {
        link: <Link to="/full-api">Full API Reference</Link>,
        icon: "https://res.cloudinary.com/dmjolhdaq/image/upload/v1556302786/Portfolio/webpack-original.svg",
      },
      {
        link: <Link to="/full-api">Full API Reference</Link>,
        icon: "https://res.cloudinary.com/dmjolhdaq/image/upload/v1556302786/Portfolio/webpack-original.svg",
      },
      {
        link: <Link to="/full-api">Full API Reference</Link>,
        icon: "https://res.cloudinary.com/dmjolhdaq/image/upload/v1556302786/Portfolio/webpack-original.svg",
      },
      {
        link: <Link to="/full-api">Full API Reference</Link>,
        icon: "https://res.cloudinary.com/dmjolhdaq/image/upload/v1556302786/Portfolio/webpack-original.svg",
      },
    ],
    footerTitle: {
      link: <Link to="/blog">FROM THE BLOG</Link>,
      icon: "https://res.cloudinary.com/dmjolhdaq/image/upload/v1556302786/Portfolio/webpack-original.svg",
    },
    footerLinks: [
      <Link to="/apple">A new and improved onboarding flow for Everyone</Link>,
      <Link to="/apple">A new and improved onboarding flow for Everyone</Link>,
      <Link to="/apple">A new and improved onboarding flow for Everyone</Link>,
    ],
  };

  const authLinks = [
    <Link to="/signin">Sign In &rarr;</Link>,
    <Link to="/signup">Sign Up &rarr;</Link>,
  ];
  const mobileLinks = [
    <Link to="/pricing">Pricing</Link>,
    <Link to="/pricing">Works With Stripe</Link>,
    <Link to="/pricing">Partner Program</Link>,
    <Link to="/pricing">Documentation</Link>,
    <Link to="/pricing">About Stripe</Link>,
    <Link to="/pricing">Jobs</Link>,
    <Link to="/pricing">Newsroom</Link>,
    <Link to="/pricing">Blog</Link>,
  ];

  return (
    <div className="App">
      <Navbar
        // debug
        duration={200}
        logo="Example"
        columnWidth="120"
        primaryDropdown={primaryDropdown}
        mobileFooterLinks={authLinks}
        mobileLinks={mobileLinks}
        breakpoint={900}
      >
        <ContentGroup title={primaryDropdown.title} height="630" width="495">
          <PrimaryDropdown primaryDropdown={primaryDropdown} />
        </ContentGroup>
        <ContentGroup title={columnDropdown.title} height="408" width="440">
          <ColumnDropdown columnDropdown={columnDropdown} />
        </ContentGroup>
        <ContentGroup title={iconDropdown.title} height="442" width="420">
          <IconDropdown iconDropdown={iconDropdown} />
        </ContentGroup>
        <ContentGroup title="Sign In" height="200" width="350">
          <ul>
            <li>Create custom sign in form here</li>
            <li>Add a link to sign up here</li>
          </ul>
        </ContentGroup>
      </Navbar>
    </div>
  );
}

export default NavBar;
