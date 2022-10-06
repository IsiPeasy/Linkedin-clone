import React from "react";
import "./App.css";
import Header from "./app/Header";
import Sidebar from "./app/Sidebar";
import Feed from "./app/Feed";

function App() {
  return (
    <div className="app">
      {/* Header */}
      <Header />
      {/* App body */}
      <div className="app__body">
        <Sidebar />

        <Feed />
        
      </div>
      {/* Sidebar */}
      {/* Feed */}
      {/* Widgets */}
    </div>
  );
}

export default App;
