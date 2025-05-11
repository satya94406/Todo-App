import React, { useState, useEffect, useRef } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../context/todoSlice";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMicrophone } from "@fortawesome/free-solid-svg-icons";
import SpeechRecognition, { useSpeechRecognition } from "react-speech-recognition";

function AddTodo() {
  const [todoName, setTodoName] = useState("");
  const [todoDate, setTodoDate] = useState("");
  const [isRecording, setIsRecording] = useState(false);

  const dispatch = useDispatch();
  const inputRef = useRef(null);

  const { transcript, browserSupportsSpeechRecognition, resetTranscript } =
    useSpeechRecognition();

  if (!browserSupportsSpeechRecognition) {
    return <p>Your browser does not support speech recognition.</p>;
  }

  // Update the value of todoName when the transcript changes and recording is active
  useEffect(() => {
    if (isRecording) {
      setTodoName(transcript);
    }
  }, [transcript, isRecording]);

  // 🔴 Microphone Permission Request Lazy Loaded
  const handleMicrophoneClick = async () => {
    if (!isRecording) {
      try {
        await navigator.mediaDevices.getUserMedia({ audio: true });
        console.log("Microphone permission granted.");
        SpeechRecognition.startListening({ continuous: true, language: "en-IN" });
      } catch (error) {
        console.error("Microphone permission denied.", error);
        alert("Microphone permission is required to use voice input.");
        return;
      }
    } else {
      SpeechRecognition.stopListening();
      resetTranscript(); 
    }
    setIsRecording(!isRecording);
  };

  const handleAddTodo = () => {
    if (todoName && todoDate) {
      dispatch(addTodo({ id: Date.now(), todoName, todoDate }));
      setTodoName("");
      setTodoDate("");
    }
  };

  return (
    <div className="text-black shadow-lg rounded-xl p-6 mb-6">
      <div className="flex flex-col md:flex-row items-center gap-6">
        <div className="w-full md:w-1/2">
          <b className="block mb-2">Todo Task</b>
          <div className="relative w-full">
            <input
              type="text"
              placeholder="Enter todo here"
              value={todoName}
              onChange={(e) => setTodoName(e.target.value)}
              ref={inputRef}
              className="w-full py-3 pl-3 pr-10 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 transition-colors overflow-x-auto whitespace-nowrap"
            />
            <FontAwesomeIcon
              icon={faMicrophone}
              onClick={handleMicrophoneClick}
              className={`absolute right-3 top-3 text-2xl cursor-pointer transition-colors ${
                isRecording ? "text-red-500 animate-pulse" : "text-gray-500 hover:text-red-500"
              }`}
            />
          </div>
        </div>

        <div className="w-full md:w-1/3">
          <b className="block mb-2">Due Date</b>
          <input
            id="todoDate"
            type="date"
            value={todoDate}
            onChange={(e) => setTodoDate(e.target.value)}
            onFocus={(e) => e.target.showPicker()}
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 transition-colors"
          />
        </div>

        <div className="w-full md:w-1/3 mt-4">
          <button
            type="button"
            onClick={handleAddTodo}
            className="w-full bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-6 rounded-full transition duration-200"
          >
            Add
          </button>
        </div>
      </div>
    </div>
  );
}

export default AddTodo;
