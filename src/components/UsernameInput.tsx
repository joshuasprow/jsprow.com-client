import React, { FC, InputHTMLAttributes, useRef } from "react";

const UsernameInput: FC<{
  onChange: (username: null | string) => any;
}> = ({ onChange }) => {
  const inputRef = useRef<HTMLInputElement>(null);

  const handleChange: InputType["onChange"] = event => {
    const username = event.currentTarget.value || null;

    onChange(username);
  };

  const handleClick: InputType["onClick"] = () => {
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
          onChange={handleChange}
          onClick={handleClick}
          placeholder="What's your name?"
          name="name"
        />
      </label>
    </div>
  );
};

export default UsernameInput;

type InputType = InputHTMLAttributes<HTMLInputElement>;
