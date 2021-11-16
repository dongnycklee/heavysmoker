import React from "react";
import UserCard from "../UserCard";
import FollowBtn from "../FollowBtn";
import { useSelector } from "react-redux";
import LoadIcon from "../../images/loading.gif";
const Following = ({ users, setShowFollowing }) => {
  const { auth, suggestions } = useSelector((state) => state);
  return (
    <div className="follow">
      <div className="follow_box">
        <h5 className="text-center">팔로잉</h5>
        <hr />

        <div>
          {suggestions.loading ? (
            <img
              src={LoadIcon}
              alt="loading"
              className="d-block mx-auto my-4"
            />
          ) : (
            <div>
              {suggestions.users.map((user) => (
                <UserCard key={user._id} user={user}>
                  <FollowBtn user={user} />
                </UserCard>
              ))}
            </div>
          )}
        </div>

        <div className="follow_content">
          {users.map((user) => (
            <UserCard
              key={user._id}
              user={user}
              setShowFollowing={setShowFollowing}
            >
              {auth.user._id !== user._id && <FollowBtn user={user} />}
            </UserCard>
          ))}
        </div>

        <div className="close" onClick={() => setShowFollowing(false)}>
          &times;
        </div>
      </div>
    </div>
  );
};

export default Following;
