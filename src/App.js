import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="sidemenu">
        <div className="side-menu-button">

          <span>+</span>
          New Chat
          
          </div>
      </div>
      <div className="chartbox">
        <div className="chat-input-holder">
          <textarea
            className="chat-input-textarea"
            placeholder="Type your message here"
            rows="1"
          ></textarea>
        </div>
      </div>
    </div>
  );
}

export default App;
