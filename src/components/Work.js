export default function Work() {
  return (
    <div className="projects-container">
      <div className="projects">
        <a
          href="https://original-gs-contracting.fly.dev/"
          target="_blank"
          rel=" noopener noreferrer"
        >
          <img className="projects-card-image" src="./images/original-gs-contracting.png" alt="Original G.S Contracting" />
        </a>
      </div>
      <div className="projects">
        <a
          href="https://reactcountdowntimer.netlify.app/"
          target="_blank"
          rel=" noopener noreferrer"
        >
          <img className="projects-card-image" src="./images/react-countdown-timer.png" alt="React Countdown Timer" />
        </a>
      </div>
      <div className="projects">
        <a
          href="https://streamify.fly.dev/"
          target="_blank"
          rel=" noopener noreferrer"
        >
          <img className="projects-card-image" src="./images/streamify.png" alt="Streamify" />
        </a>
      </div>
    </div>
  );
}
