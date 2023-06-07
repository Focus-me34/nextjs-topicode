"use client";

import { useGetUsersQuery } from "@/redux/services/userApi";
import { decrement, increment, reset } from "@/redux/features/counterSlice";
import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "next/navigation";

export default function Home() {
  const count = useSelector((state) => state.counterReducer.value);
  const dispatch = useDispatch();
  const router = useRouter();

  const { isLoading, isFetching, data, error } = useGetUsersQuery(null);

  return (
    <main style={{ maxWidth: 1200, marginInline: "auto", padding: 20 }}>
      <div style={{ marginBottom: "4rem", textAlign: "center" }}>
        <h4 style={{ marginBottom: 16 }}>{count}</h4>
        <button onClick={() => dispatch(increment())}>increment</button>
        <button
          onClick={() => dispatch(decrement())}
          style={{ marginInline: 16 }}
        >
          decrement
        </button>
        <button onClick={() => dispatch(reset())}>reset</button>
      </div>

      {error ? (
        <p>Oh no, there was an error</p>
      ) : isLoading || isFetching ? (
        <p>Loading...</p>
      ) : data ? (
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr 1fr 1fr",
            gap: 20,
          }}
        >
          {data.map((user) => (
            <div
              onClick={() => router.push(`/users/${user.id}`)}
              key={user.id}
              style={{ border: "1px solid #ccc", textAlign: "center" }}
            >
              <img
                src={`https://robohash.org/${user.id}?set=set2&size=180x180`}
                alt={user.name}
                style={{ height: 180, width: 180 }}
              />
              <h3>{user.name}</h3>
            </div>
          ))}
        </div>
      ) : null}
    </main>
  );
}