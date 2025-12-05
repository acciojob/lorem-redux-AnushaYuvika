// import React, { useEffect } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { fetchLorem } from "../redux/loremSlice";

// const LoremContent = () => {
//   const dispatch = useDispatch();
//   const { content, loading, error } = useSelector((state) => state.lorem);

//   useEffect(() => {
//     dispatch(fetchLorem());
//   }, [dispatch]);

//   if (loading) return <p>Loading news...</p>;
//   if (error) return <p>Error: {error}</p>;

//   return (
//     <div style={{ padding: "20px" }}>
//       <h1 style={{ textAlign: "center", marginBottom: "30px" }}>📰 Lorem News</h1>
//       <div
//         style={{
//           display: "grid",
//           gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
//           gap: "20px",
//         }}
//       >
//         {content.map((item) => (
//           <div
//             key={item.id}
//             style={{
//               border: "1px solid #ccc",
//               borderRadius: "8px",
//               padding: "15px",
//               backgroundColor: "#f9f9f9",
//               boxShadow: "2px 2px 8px rgba(0,0,0,0.1)",
//             }}
//           >
//             <h3 style={{ marginBottom: "10px" }}>{item.title}</h3>
//             <p style={{ fontSize: "14px", lineHeight: "1.5" }}>{item.body}</p>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default LoremContent;

import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchLorem } from "../redux/loremSlice";

const LoremContent = () => {
  const dispatch = useDispatch();
  const { content, loading, error } = useSelector((state) => state.lorem);

  useEffect(() => {
    dispatch(fetchLorem());
  }, [dispatch]);

  if (loading)
    return (
      <h4 style={{ textAlign: "center", marginTop: "20px" }}>
        Loading news...
      </h4>
    );
  if (error)
    return (
      <h4 style={{ textAlign: "center", marginTop: "20px" }}>Error: {error}</h4>
    );

  return (
    <>
      <div style={{textAlign: "center"}}>
        <h1>
          A short Naration of Lorem Ipsum
        </h1>
        <h4 >
          Below Contains A title and Body gotten from<br /> a random API, Please take your time to Review
        </h4>
      </div>

      <ul
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(2, 1fr)",
          gap: "15px",
          listStyle: "none",
          padding: 0,
          margin: 0,
        }}
      >
        {content.map((item) => (
          <li
            key={item.id}
            style={{
              border: "1px solid #ccc",
              borderRadius: "8px",
              padding: "10px",
              backgroundColor: "#f9f9f9",
              boxShadow: "1px 1px 5px rgba(0,0,0,0.1)",
            }}
          >
            <h4
              className="title"
              style={{ marginBottom: "5px", fontSize: "16px" }}
            >
              <b>Title :</b>{item.title}
            </h4>
            <p className="body" style={{ fontSize: "13px", lineHeight: "1.3", margin: 0 }}>
              <b>Body :</b>{item.body}
            </p>
          </li>
        ))}
      </ul>
    </>
  );
};

export default LoremContent;
