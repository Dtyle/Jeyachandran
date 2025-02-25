import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "./Components/Dialog";
import { AiFillAudio } from "react-icons/ai";
import { BsRecord2 } from "react-icons/bs";
import logo from "../../public/vite.svg";
import { postVoiceGenerator } from "../services/apiUrls";
import axios from "axios";
import Controls from "./Components/Controls";

export default function AiBot() {
  const [open, setOpen] = useState(false);
  const [message, setMessage] = useState("");
  const [isRecording, setIsRecording] = useState(false);
  const [recordingTime, setRecordingTime] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false); // Playback state
  const [playingIndex, setPlayingIndex] = useState(null); // Keeps track of the currently playing message
  const [timeElapsed, setTimeElapsed] = useState(0); // Elapsed time
  const utteranceRef = useRef(null); // Ref for the utterance
  const intervalRef = useRef(null); // Ref for interval updates
  const recognitionRef = useRef(null);
  const [value, setValue] = useState("");
  const timerRef = useRef(null);
  const formatTime = (timeInSeconds) => {
    const minutes = Math.floor(timeInSeconds / 60);
    const seconds = timeInSeconds % 60;
    return `${String(minutes).padStart(2, "0")}:${String(seconds).padStart(
      2,
      "0"
    )}`;
  };

  const initSpeechRecognition = () => {
    const SpeechRecognition =
      window.SpeechRecognition || window.webkitSpeechRecognition;
    if (SpeechRecognition) {
      const recognition = new SpeechRecognition();
      recognition.lang = "en-US";
      recognition.continuous = true;
      recognition.interimResults = false;

      recognition.onresult = (e) => {
        const transcript = Array.from(e.results)
          .map((result) => result[0].transcript)
          .join("");
        setMessage(transcript);
      };

      recognition.onerror = (err) => {
        console.error("Speech Recognition Error:", err);
      };

      recognitionRef.current = recognition;
    } else {
      alert("Your browser does not support Speech Recognition.");
    }
  };

  const startRecording = () => {
    if (!recognitionRef.current) initSpeechRecognition();
    setIsRecording(true);
    recognitionRef.current?.start();

    timerRef.current = setInterval(() => {
      setRecordingTime((prevTime) => prevTime + 1);
    }, 1000);
  };

  const stopRecording = () => {
    setIsRecording(false);
    recognitionRef.current?.stop();
    clearInterval(timerRef.current);
    setRecordingTime(0);
  };
  const handlePause = () => {
    if (isPlaying) {
      window.speechSynthesis.pause();
      setIsPlaying(false);
      clearInterval(intervalRef.current);
    } else if (!isPlaying && utteranceRef.current) {
      window.speechSynthesis.resume();
      setIsPlaying(true);
      intervalRef.current = setInterval(() => {
        setTimeElapsed((prev) => prev + 1);
      }, 1000);
    }
  };
  const handleStop = () => {
    window.speechSynthesis.cancel();
    setIsPlaying(false);
    setTimeElapsed(0);
    utteranceRef.current = null;
    clearInterval(intervalRef.current);
    setPlayingIndex(null); // Reset to show the Play button
  };
  const handlePlay = (text, index) => {
    setPlayingIndex(index); // Set the currently playing index
    if (utteranceRef.current) {
      handleStop(); // Stop any current utterance
    }

    const utterance = new SpeechSynthesisUtterance(text);
    utteranceRef.current = utterance;

    utterance.onstart = () => {
      setIsPlaying(true);
      setTimeElapsed(0);

      intervalRef.current = setInterval(() => {
        setTimeElapsed((prev) => prev + 1);
      }, 1000);
    };

    utterance.onend = () => {
      setIsPlaying(false);
      clearInterval(intervalRef.current);
      setTimeElapsed(0);
      utteranceRef.current = null;
      setPlayingIndex(null); // Reset to show the Play button
    };

    utterance.onerror = () => {
      setIsPlaying(false);
      clearInterval(intervalRef.current);
      setPlayingIndex(null); // Reset to show the Play button
      handleStop();
    };

    window.speechSynthesis.speak(utterance);
  };
  const sendChat = async () => {
    try {
      const response = await axios.post(
        postVoiceGenerator,
        { query: message },
        {
          headers: {
            Authorization: "Bearer a9EWMMu9faVgrncjh4WaKpTJZqKfvTO",
          },
        }
      );
      setValue(
        response?.data?.status ? response?.data?.status : "No data found!"
      );
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div className="ai-bot">
      <span className="agent-name">DAgent Chat!</span>
      <motion.button
        className="floating-btn"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => setOpen(true)}
      >
        <img src={logo} width={36} alt="avt" />
      </motion.button>
      <Dialog
        open={open}
        onOpenChange={(isOpen) => {
          setOpen(isOpen);
          if (!isOpen) {
            setValue(""); // Reset value when closing popup
            setMessage("");
          }
        }}
      >
        <DialogContent>
          <DialogHeader>
            <DialogTitle>How can I assist you?</DialogTitle>
          </DialogHeader>
          <div className="popup-content">
            {!value ? (
              <div>
                <p className="f-14">
                  <img src={logo} width={16} alt="avt" /> Hello! I'm your D
                  assistant. Ask me anything!
                </p>
                <div className="d-flex justify-content-center align-items-center gap-3 mt-3 mb-3">
                  {isRecording ? (
                    <div className="text-gray-500">
                      {formatTime(recordingTime)}
                    </div>
                  ) : null}
                  <button
                    onClick={isRecording ? stopRecording : startRecording}
                    className={`record-cta`}
                  >
                    {isRecording ? (
                      <BsRecord2 className={`f-30 c-red`} />
                    ) : (
                      <AiFillAudio className={`f-24 c-lightblue`} />
                    )}
                  </button>
                </div>
                <p className="text-center">Or</p>
                <textarea
                  className="input-style"
                  placeholder="Type here..."
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                />
                <div className="d-flex justify-content-end">
                  <button className="send-btn" onClick={sendChat}>
                    Submit
                  </button>
                </div>
              </div>
            ) : (
              <>
                <div className="d-flex justify-content-center align-items-center gap-2">
                  <Controls
                    msg={value}
                    isPlaying={isPlaying}
                    handlePause={handlePause}
                    handlePlay={handlePlay}
                    handleStop={handleStop}
                    playingIndex={playingIndex}
                  />{" "}
                </div>
                <p className="text-center">{value}</p>
                <div className="d-flex justify-content-center">
                  <button
                    className="back-btn bg-grey"
                    onClick={() => {
                      setValue("");
                      setMessage("");
                    }}
                  >
                    Back
                  </button>
                </div>
              </>
            )}
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}
