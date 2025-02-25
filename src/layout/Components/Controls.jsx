import { FaCirclePause, FaCirclePlay } from "react-icons/fa6";
import { FaStopCircle } from "react-icons/fa";

const Controls = ({
  playingIndex,
  index,
  msg,
  handlePause,
  handlePlay,
  handleStop,
  isPlaying,
}) => {
  return (
    <div className="controls-container">
      {playingIndex !== index ? (
        <FaCirclePlay
          className="play-icon"
          onClick={() => handlePlay(msg, index)}
        />
      ) : (
        <div className="playing-controls">
          {isPlaying ? (
            <FaCirclePause className="pause-icon" onClick={handlePause} />
          ) : (
            <FaCirclePlay className="resume-icon" onClick={handlePause} />
          )}
          <FaStopCircle className="stop-icon" onClick={handleStop} />
        </div>
      )}
    </div>
  );
};

export default Controls;
