import React, { FC, InputHTMLAttributes, useState, useRef } from "react";

const NamePicker: FC = () => {
  const inputRef = useRef<HTMLInputElement>(null);

  const [name, setName] = useState("test");

  const handleNameChange: InputType["onChange"] = event => {
    setName(event.currentTarget.value.toLowerCase());
  };

  const handleNameClick: InputType["onClick"] = () => {
    if (inputRef.current) {
      inputRef.current.select();
    }
  };

  return (
    <div>
      <label>
        What's your name?
        <input
          ref={inputRef}
          type="text"
          onChange={handleNameChange}
          onClick={handleNameClick}
          name="name"
          value={name}
        />
      </label>
    </div>
  );
};

export default NamePicker;

type InputType = InputHTMLAttributes<HTMLInputElement>;
