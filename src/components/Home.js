export default function Home() {
  return (
    <div className="hero-container">
      <div className="hero-left-container">
        <div className="hero-name-container">
          <h1 className="hero-name">Kevin Ng</h1>
        </div>
        <div className="hero-socials-container">
          <ul>
            <li>
              <a href="https://github.com/kevinszn23"
              >
                <img className="hero-socials-icon" src="./images/github-icon.png" alt="github" />
              </a>
            </li>
            <li>
              <a href="https://www.linkedin.com/in/kevinng23/">
                <img className="hero-socials-icon" src="./images/linkedin-icon.jpeg" alt="linkedin" />
              </a>
            </li>
            <li>
              <a href="/">email placeholder</a>
            </li>
          </ul>
        </div>
      </div>
      <div className="hero-right-container">
        <h2 className="hero-location">
          Software Engineer, based in Massachusetts.
        </h2>
        <p className="hero-aboutme">
          I'm a former healthcare professional turned software engineer with
          knowledge in various tech-stacks like React, TypeScript, Python, and
          more. When I'm not coding, I'm most likely watching NBA games!
        </p>
      </div>
    </div>
  );
}
