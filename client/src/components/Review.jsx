import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { FaUserAlt } from "react-icons/fa";

const Review = () => {
  const [userRating, setUserRating] = useState([]);
  const [userData, setUserData] = useState({});
  const { currentUser } = useSelector((state) => state.user);

  useEffect(() => {
    const fetchRatings = async () => {
      try {
        const res = await fetch("/api/rating/getratings?limit=12");
        const data = await res.json();
        if (res.ok) {
          setUserRating(data);
        }
      } catch (error) {
        console.error(error);
      }
    };
    fetchRatings();
  }, []);

  useEffect(() => {
    const fetchUser = async (userId) => {
      try {
        const res = await fetch(`/api/user/${userId}`);
        const data = await res.json();
        if (res.ok) {
          setUserData((prevData) => ({ ...prevData, [userId]: data }));
        }
      } catch (error) {
        console.error(error);
      }
    };

    userRating.forEach((rating) => {
      if (!userData[rating.userId]) {
        fetchUser(rating.userId);
      }
    });
  }, [userRating, userData]);

  return (
    <div className="mb-20">
      <div className="mb-6">
        <h2 className="text-center text-4xl font-bold">Testimonials</h2>
        <p className="text-center text-lg font-semibold text-gray-500">
          My Clients
        </p>
      </div>
      <Link to="/create-rating">
        <button type="button">Create Rating</button>
      </Link>

      {userRating.length === 0 ? (
        <p className="text-center text-lg my-5 font-semibold text-gray-500">
          No Testimonials Yet
        </p>
      ) : (
        <>
          <div className="">
            <p>{userRating.length}</p>
          </div>

          <div className="flex items-center overflow-x-scroll gap-5">
            {userRating.map((rating) => (
              <div
                className="w-[250px] border-2 border-gray-500 text-center rounded-[1rem] p-[1.25rem]"
                key={rating._id}
              >
                <div className="">
                  {userData[rating.userId]?.profilePicture ? (
                    <img
                      className="w-20 h-20 object-cover shadow-md shadow-gray-900 rounded-full block mx-auto my-4 border-4"
                      src={userData[rating.userId].profilePicture}
                      alt={userData[rating.userId].name}
                    />
                  ) : (
                    <FaUserAlt className="w-20 h-20 block mx-auto my-4" />
                  )}
                </div>
                <p className="text-xl font-bold">{userData[rating.userId]?.name || "Loading..."}</p>
                <p className="text-sm font-semibold mb-2">{userData[rating.userId]?.username || "Loading..."}</p>
                <p className="starability-result" data-rating={rating.rating}>
                  Rated: {rating.rating} stars
                </p>
                <p className="mt-3 text-md">{rating.review}</p>
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default Review;
