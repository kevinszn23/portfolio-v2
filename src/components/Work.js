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
        <div className="projects-info">
            <h1>
                Original G.S Contracting
            </h1>
            <p>
                Full-stack Django/Python website made for a contracting company. Features a contact page that stores user data and implemented all designing such as the logo with input from the company.
            </p>
        </div>
      </div>
      <div className="projects">
        <a
          href="https://reactcountdowntimer.netlify.app/"
          target="_blank"
          rel=" noopener noreferrer"
        >
          <img className="projects-card-image" src="./images/react-countdown-timer.png" alt="React Countdown Timer" />
        </a>
        <h1>
            React Countdown Timer
        </h1>
        <p>
            A React timer that utilizes React hooks where one can put in a name, date, and optional time.
        </p>
      </div>
      <div className="projects">
        <a
          href="https://streamify.fly.dev/"
          target="_blank"
          rel=" noopener noreferrer"
        >
          <img className="projects-card-image" src="./images/streamify.png" alt="Streamify" />
        </a>
        <h1>
            Streamify
        </h1>
        <p>
            Spotify clone that utilizes Spotify API so one can search for songs, albums, and artists just like the real Spotify.
        </p>
      </div>
    </div>
  );
}
