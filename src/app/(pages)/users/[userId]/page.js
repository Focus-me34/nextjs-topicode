"use client";

import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchSingleUser } from "@/redux/features/userSlice";

const UserShow = ({ params }) => {
  const dispatch = useDispatch();

  // ! USER SLICE DATA
  const { userToShow, status, error } = useSelector((state) => state.userReducer);

  console.log(params);
  // ! GETTING SINGLE USER
  useEffect(() => {
    dispatch(fetchSingleUser(params.userId))
  }, []);

  return (
    <>
      {status === "loading" && <p>Loading...</p>}
      {status === "failed" && <p>{error}</p>}
      {status === "succeeded" && userToShow && (
        <div
          key={userToShow.id}
          style={{ border: "1px solid #ccc", textAlign: "center" }}
        >
          <img
            src={`https://robohash.org/${userToShow.id}?set=set2&size=180x180`}
            alt={userToShow.name}
            style={{ height: 180, width: 180 }}
          />

          <h3>{userToShow.name}</h3>
          <br />
          <br />

          <h4>Account details</h4>
          <p>Username: {userToShow.username}</p>
          <p>Email: {userToShow.email}</p>
          <br />

          <h4>Address</h4>
          <p>Street: {userToShow.address.street}</p>
          <p>Suite: {userToShow.address.suite}</p>
          <p>City: {userToShow.address.city}</p>
          <p>Zipcode: {userToShow.address.zipcode}</p>
          <br />

          <h4>Geo</h4>
          <p>Lat: {userToShow.address.geo.lat}</p>
          <p>Lng: {userToShow.address.geo.lng}</p>
          <br />

          <h4>Phone: {userToShow.phone}</h4>
          <h4>Website: {userToShow.website}</h4>
          <br />

          <h4>Company</h4>
          <p>Name: {userToShow.company.name}</p>
          <p>Catchphrase: {userToShow.company.catchPhrase}</p>
          <p>BS: {userToShow.company.bs}</p>
        </div>
      )}
    </>
  );
}

export default UserShow;
