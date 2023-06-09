import User from "./User";

const getAllUsers = async () => {
  const res = await fetch('https://jsonplaceholder.typicode.com/users')
  const users = await res.json()
  return users
}

const Users = async () => {
  const users = await getAllUsers();

  return (
    <main style={{ maxWidth: 1200, marginInline: "auto", padding: 20 }}>
      <div style={{ marginTop: "5rem", display: "grid", gridTemplateColumns: "1fr 1fr 1fr 1fr", gap: 20 }} >
        {users.map((user) => <User user={user} key={user.id} /> )}
      </div>
    </main>
  );
}

export default Users;


// ? THE CODE BELOW WORKS, BUT IT DOESN'T PRE-POPULATE THE PAGE WITH DATA.
// ! =======================================
// ! WITH REDUX USESELECTOR AND USEDISPATCH
// ! CLIENT COMPONENT
// "use client";

// import { useEffect } from "react";
// import { decrement, increment, reset } from "@/redux/features/counterSlice";
// import { useDispatch, useSelector } from "react-redux";
// import { fetchAllUsers } from "@/redux/features/userSlice";

// import { useEffect } from "react";
// import { decrement, increment, reset } from "@/redux/features/counterSlice";
// import { useDispatch, useSelector } from "react-redux";
// import { fetchAllUsers } from "@/redux/features/userSlice";

// import User from "./User";

// const Users = () => {
//   const dispatch = useDispatch();
//   // ! COUNTER SLICE DATA
//   const count = useSelector((state) => state.counterReducer.value);

//   // ! USER SLICE DATA
//   const { allUsers, status, error } = useSelector((state) => state.userReducer);

//   // ! GETTING ALL USERS
//   useEffect(() => {
//     dispatch(fetchAllUsers())
//   }, []);

//   return (
//     <main style={{ maxWidth: 1200, marginInline: "auto", padding: 20 }}>
//       <div style={{ marginBottom: "4rem", textAlign: "center" }}>
//         <h4 style={{ marginBottom: 16 }}>{count}</h4>
//         <button onClick={() => dispatch(increment())}>increment</button>
//         <button
//           onClick={() => dispatch(decrement())}
//           style={{ marginInline: 16 }}
//         >
//           decrement
//         </button>
//         <button onClick={() => dispatch(reset())}>reset</button>
//       </div>

//       <hr />
//       <hr />
//       <hr />

//     {status === "loading" && <p>Loading...</p>}
//     {status === "failed" && <p>{error}</p>}
//     {status === "succeeded" && (
//       <div
//         style={{
//           marginTop: "5rem",
//           display: "grid",
//           gridTemplateColumns: "1fr 1fr 1fr 1fr",
//           gap: 20,
//         }}
//       >
//        {allUsers.map((user) => (
//           <User user={user} key={user.id} />
//         ))}
//       </div>
//     )}
//     </main>
//   );
// }

// export default Users;
