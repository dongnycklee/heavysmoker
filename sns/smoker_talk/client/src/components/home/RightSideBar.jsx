import React from "react";
import { useSelector, useDispatch } from "react-redux";

import UserCard from "../UserCard";
import FollowBtn from "../FollowBtn";
import LoadIcon from "../../images/loading.gif";
import { getSuggestions } from "../../redux/actions/suggestionsAction";

const RightSideBar = ({ users, setShowFollowing }) => {
  const { auth, suggestions } = useSelector((state) => state);
  const dispatch = useDispatch();

  return (
    <div className="mt-3">
      <UserCard user={auth.user} />

      <div className="d-flex justify-content-between align-items-center my-2">
        <h5 className="text-danger">담배 한대의 여유 어떠신가요?</h5>
        {!suggestions.loading && (
          <i
            className="fas fa-redo"
            style={{ cursor: "pointer" }}
            onClick={() => dispatch(getSuggestions(auth.token))}
          />
        )}
      </div>

      {suggestions.loading ? (
        <img src={LoadIcon} alt="loading" className="d-block mx-auto my-4" />
      ) : (
        <div className="suggestions">
          {suggestions.users.map((user) => (
            <UserCard key={user._id} user={user}>
              <FollowBtn user={user} />
            </UserCard>
          ))}
        </div>
      )}
      {/* <div className="follow_content">
        {users.map((user) => (
          <UserCard
            key={user._id}
            user={user}
            setShowFollowing={setShowFollowing}
          >
            {auth.user._id !== user._id && <FollowBtn user={user} />}
          </UserCard>
        ))}
      </div> */}
      <div style={{ opacity: 0.5 }} className="my-2">
        <a
          href="https://github.com/dongnycklee/heavysmoker"
          target="_blank"
          rel="noreferrer"
          style={{ wordBreak: "break-all" }}
        >
          https://github.com/dongnycklee/heavysmoker
        </a>
        <small className="d-block">"GangSter Talk에 오신 걸 환영합니다."</small>

        <small>&copy; 2021 GangSter Talk FROM Heavy Smoker</small>
      </div>
    </div>
  );
};

export default RightSideBar;
