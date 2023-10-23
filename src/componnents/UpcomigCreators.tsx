import React, { useState, useEffect } from "react";
import axios from "axios";
import "../styles/clientDard.css";


interface User {
  id: number;
  firstName: string;
  lastName: string;
  type: "regular" | "brand" | "fashionista";
  image: string;
  profileImage: string;
  coverImage: string;
  followers: number;
  following: boolean | true;
}

const UpcomingCreators = ({ users }: { users: User[] }) => {
  const [fashionistaUsers, setFashionistaUsers] = useState<User[]>([]);

  useEffect(() => {
    setFashionistaUsers(users.slice(0, 3));
  }, [users]);

  const handleFollow = (user: User) => {
    axios
      .put(`http://localhost:5000/api/user/${user.id}`, {
        followers: user.followers + 1,
      })
      .then((response) => {
        const updatedUsers = fashionistaUsers.map((u) => {
          if (u.id === user.id) {
            return { ...u, following: true };
          }
          return u;
        });
        setFashionistaUsers(updatedUsers);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const handleUnfollow = (user: User) => {
    axios
      .put(`http://localhost:5000/api/user/${user.id}`, {
        followers: user.followers - 1,
      })
      .then((response) => {
        const updatedUsers = fashionistaUsers.map((u) => {
          if (u.id === user.id) {
            return { ...u, following: false };
          }
          return u;
        });
        setFashionistaUsers(updatedUsers);
      })
      .catch((error) => {
        console.error(error);
      });
  };


  return (
    <div className="clientCard-container">
      {fashionistaUsers.map((user) => (
        <div key={user.id} className="clientCard ">
          <div className="clientCardSha shadow">
            <img className="immgg" src={user.profileImage} alt="" />
            <div className="images flex flex-c justify-center alg-center">
              <div className="text-log">{user.firstName}</div>
            </div>
            <div className="parag">
              <p className="brand-desc">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>
            {user.following ? (
              <button className="butt" onClick={() => handleUnfollow(user)}>
                <div className="butt-wrapper">Unfollow</div>
              </button>
            ) : (
              <button className="butt" onClick={() => handleFollow(user)}>
                <div className="butt-wrapper">+ Follow </div>
              </button>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};
const FashionistaCard = () => {
  const [creators, setcreators] = useState<User[]>([]);

  useEffect(() => {
    axios.get<User[]>("http://localhost:5000/api/users/getByType/fashionista").then((response) => {
      const users = response.data.map((user) => ({
        ...user,
        following: false,
      }));
      setcreators(users);
    });
  }, []);

  return (
    <div>
      <UpcomingCreators users={creators} />
    </div>
  );
};

export default FashionistaCard;