import React from "react";

export default function HeaderTag({ title }) {
  return (
    <div>
      <h3>{title}</h3>
      <div className="line" />
    </div>
  );
}
