import { InputHTMLAttributes } from "react";
import { SearchIcon } from "../icons/search-icon";
import { Input, InputContainer } from "./style";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  placeholder?: string;
}

export function PrimaryInput(props: InputProps) {
  return (
    <>
      <InputContainer>
        <Input {...props} />
        <SearchIcon />
      </InputContainer>
    </>
  );
}
