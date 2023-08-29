import { InputHTMLAttributes } from "react";
import { SearchIcon } from "../icons/SearchIcon";
import { Input, InputContainer } from "./style";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  placeholder?: string;
  value: string;
  handleChange: (value: string) => void;
}

export function PrimaryInput(props: InputProps) {
  return (
    <>
      <InputContainer>
        <Input
          onChange={(event) => props.handleChange(event.target.value)}
          {...props}
        />
        <SearchIcon />
      </InputContainer>
    </>
  );
}
