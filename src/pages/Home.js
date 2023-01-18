const Home = (props) => {
  return (
    <div>
      <article>
        <h2 className="headline">Mirra House</h2>
        <h5>The Untold History...</h5>
        <img src="MHGroup3.jpg" alt="the group album" id="HomeImg" />
        <audio controls autoPlay muted loop>
          <source src="MHClip.mp3" type="audio/mpeg"></source>
        </audio>
        <aside>For new-material released in the 2000s...</aside>
        <h4>
          ...they outsold Elvis, Jimi Hendrix and Betty White <u>combined</u>...
        </h4>
        <img src="RobHorseshoe.jpg" alt="the group" id="RegShots" />
        <h4>Millions of screaming fans often flocked by the bus-load...</h4>
        <aside>...to see other, but very similar bands...</aside>
        <img src="OneganAndCrew.jpg" alt="Uno Rob and Mirra" id="RegShots" />
        <footer>
          <a href="#top" id="foot">
            Back to Top
          </a>
        </footer>
      </article>
    </div>
  );
};
export default Home;
