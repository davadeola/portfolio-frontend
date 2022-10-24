import React, { useState } from "react";

function ServiceContent({ title, desc }) {
  const [open, isOpen] = useState(true);

  return (
    <div style={{ padding: "2.5em 5em 0 5em" }}>
      <div
        className="row"
        onClick={() => isOpen(!open)}
        style={{ cursor: "pointer" }}
      >
        <p style={{ padding: "0em 0em 1.5em 0em" }}>{title}</p>{" "}
        <h3 style={{ textAlign: "right" }}>+</h3>
      </div>
      {open && (
        <p style={{ padding: "0em 1em 1em 1em", fontWeight: "300" }}>{desc}</p>
      )}
      <div className="divider" />
    </div>
  );
}

export default ServiceContent;
