import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchLorem } from "../redux/loremSlice";

const LoremContent = () => {
  const dispatch = useDispatch();
  const { content, loading, error } = useSelector((state) => state.lorem);

  useEffect(() => {
    dispatch(fetchLorem());
  }, [dispatch]);

  if (loading) return <p>Loading news...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div style={{ padding: "20px" }}>
      <h1 style={{ textAlign: "center", marginBottom: "30px" }}>📰 Lorem News</h1>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
          gap: "20px",
        }}
      >
        {content.map((item) => (
          <div
            key={item.id}
            style={{
              border: "1px solid #ccc",
              borderRadius: "8px",
              padding: "15px",
              backgroundColor: "#f9f9f9",
              boxShadow: "2px 2px 8px rgba(0,0,0,0.1)",
            }}
          >
            <h3 style={{ marginBottom: "10px" }}>{item.title}</h3>
            <p style={{ fontSize: "14px", lineHeight: "1.5" }}>{item.body}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LoremContent;
