import Player from './components/Player/Player.jsx';
import TimerChallenge from './components/TimerChallenge/TimerChallenge.jsx';
function App() {
  return (
    <>
      <Player />
      <div id="challenges">
        <TimerChallenge title={"Easy"} time={1}/>
        <TimerChallenge title={"Not so Easy"} time={5}/>
        <TimerChallenge title={"Hard"} time={10}/>
        <TimerChallenge title={"Pro"} time={15}/>

      </div>
    </>
  );
}

export default App;
