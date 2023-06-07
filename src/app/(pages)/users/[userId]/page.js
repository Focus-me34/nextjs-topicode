"use client";;

import { useGetUserByIdQuery } from "@/redux/services/userApi";

const UserShow = ({ params }) => {

  const { isLoading, isFetching, data, error } = useGetUserByIdQuery({ id: params.userId });

  console.log(isLoading, isFetching);

  return (
    <div>
      {error && <p>An error occured...</p>}
      {isLoading || isFetching && <p>Loading...</p>}

      {data && (
        <div
          key={data.id}
          style={{ border: "1px solid #ccc", textAlign: "center" }}
        >
          <img
            src={`https://robohash.org/${data.id}?set=set2&size=180x180`}
            alt={data.name}
            style={{ height: 180, width: 180 }}
          />

          <h3>{data.name}</h3>
          <br />
          <br />

          <h4>Account details</h4>
          <p>Username: {data.username}</p>
          <p>Email: {data.email}</p>
          <br />

          <h4>Address</h4>
          <p>Street: {data.address.street}</p>
          <p>Suite: {data.address.suite}</p>
          <p>City: {data.address.city}</p>
          <p>Zipcode: {data.address.zipcode}</p>
          <br />

          <h4>Geo</h4>
          <p>Lat: {data.address.geo.lat}</p>
          <p>Lng: {data.address.geo.lng}</p>
          <br />

          <h4>Phone: {data.phone}</h4>
          <h4>Website: {data.website}</h4>
          <br />

          <h4>Company</h4>
          <p>Name: {data.company.name}</p>
          <p>Catchphrase: {data.company.catchPhrase}</p>
          <p>BS: {data.company.bs}</p>
        </div>
      )}
    </div>
  );
}

export default UserShow;
