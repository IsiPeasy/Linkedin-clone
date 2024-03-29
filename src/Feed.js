import React, { useEffect, useState } from "react";
import "./Feed.css";
import InputOption from "./InputOption";
import CreateIcon from "@mui/icons-material/Create"
import ImageIcon from "@mui/icons-material/Image";
import CalendarViewDayIcon from "@mui/icons-material/CalendarViewDay";
import SubscriptionsIcon from "@mui/icons-material/Subscriptions";
import EventNoteIcon from "@mui/icons-material/EventNote";
import Post from "./Post";
import { db } from "./firebase";
import firebase from "firebase/compat/app";
import { useSelector } from "react-redux";
import { selectUser } from "./features/userSlice";
import FlipMove from "react-flip-move";

function Feed() {

  const user = useSelector(selectUser);

  const [input, setInput] = useState('');
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    //real time listener to firebase to get data
      db.collection("posts").orderBy('timestamp','desc').onSnapshot((snapshot) => (
        setPosts(snapshot.docs.map(doc => (
          {
            id: doc.id,
            data: doc.data(),
          }))
        )
      )
    );
  },[]);

  const sendPost = e => {
    e.preventDefault();
    // db object
    db.collection("posts").add({
      name: user.displayName,
      description: user.email,
      message: input,
      photoUrl: user.photoUrl || "",
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
    });

    setInput('');
  }; 

  return (
    <div className="feed">
      <div className="feed__inputContainer">
        <div className="feed__input">
          <CreateIcon />
          <form onSubmit={sendPost}>
            <input
              id="input"
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
            />
            <button id="btnSub">
              Send
            </button>
          </form>
        </div>
        <div className="feed__inputOptions">
          <InputOption Icon={ImageIcon} title="Photo" color="#70B5F9" />
          <InputOption Icon={SubscriptionsIcon} title="Video" color="#E7A33E" />
          <InputOption Icon={EventNoteIcon} title="Event" color="#C0CBCD" />
          <InputOption
            Icon={CalendarViewDayIcon}
            title="Write Article"
            color="#7FC15E"
          />
        </div>
      </div>

      {/* Posts */}
      <FlipMove>
        {posts.map(({ id, data: { name, description, message, photoUrl } }) => (
          <Post
            key={id}
            name={name}
            description={description}
            message={message}
            photoUrl={photoUrl}
          />
        ))}
      </FlipMove>
    </div>
  );
}

export default Feed