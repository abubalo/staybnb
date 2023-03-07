import axios from "axios";
import React, { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";

const Rooms = () => {
  const { id } = useParams();
  const [roomData, setRoomData] = useState({});

  useEffect(() => {
    if (!id) {
      return;
    } else {
      axios.get(`/room/${id}`).then((response) => {
        setRoomData(response.data);
      });
    }
  }, []);

  console.log(roomData);

  return (
    <div>
      {roomData && (
        <div className="" key={roomData._id}>
          <div className="grid">
            {roomData.photos?.[0] && (
              <>
                
                <div>
                  <img
                    src={`http://localhost:5000/uploads/${roomData.photos[0]}`}
                    alt=""
                  />
                </div>
              </>
            )}
          </div>
          <h1 className="text-xl">{roomData.title}</h1>
          <p>{roomData.description}</p>
        </div>
      )}
    </div>
  );
};

export default Rooms;
