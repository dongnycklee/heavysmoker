import React from "react";
import UserCard from "../UserCard";
import FollowBtn from "../FollowBtn";
import { useSelector } from "react-redux";
import LoadIcon from "../../images/loading.gif";
import { getSuggestions } from "../../redux/actions/suggestionsAction";

const AllUser = ({ users, setShowFollowing }) => {
  const { auth, suggestions } = useSelector((state) => state);
  return (
    <div>
      <div>
        {suggestions.loading ? (
          <img src={LoadIcon} alt="loading" className="d-block mx-auto my-4" />
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
    </div>
  );
};

export default AllUser;
