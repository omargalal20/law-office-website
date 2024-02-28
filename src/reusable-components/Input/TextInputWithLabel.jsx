// TextInputWithLabel.jsx

import React from "react";

const TextInputWithLabel = () => {
  return (
    <div className="wave-group">
      <input required type="text" className="input" style={{ width: 633 }} />
      <span className="bar"></span>
      <label className="label">
        <span className="label-char" data-letter="H" style={{ "--index": 0 }}>
          H
        </span>
        <span className="label-char" data-letter="e" style={{ "--index": 1 }}>
          e
        </span>
        <span className="label-char" data-letter="l" style={{ "--index": 2 }}>
          l
        </span>
        <span className="label-char" data-letter="p" style={{ "--index": 3 }}>
          p
        </span>
      </label>
    </div>
  );
};

export default TextInputWithLabel;
