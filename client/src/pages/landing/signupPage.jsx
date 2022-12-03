import { TextField, styled } from "@mui/material";
import React, { useState } from "react";
import StyledButton from "../../components/CustomButton/StyledButton";

const CustomTextField = styled(TextField)(() => ({
  "& label.Mui-focused": {
    color: "#00FFED",
  },
  "& .MuiInput-underline:after": {
    borderBottomColor: "#00FFED",
  },
  "& .MuiInputLabel-root": {
    color: "#00FFED",
  },
  "& .MuiOutlinedInput-root": {
    "& fieldset": {
      borderColor: "#00FFED",
    },
    "&:hover fieldset": {
      borderColor: "#00FFED",
    },
    "&.Mui-focused fieldset": {
      borderColor: "#00FFED",
    },
  },
}));

const SignupPage = () => {
  const [role, setRole] = useState("");

  return (
    <div className="px-10 mt-8 flex flex-col items-center">
      <h1 className="font-bold text-4xl text-primary">
        Join as a writer or a reader !
      </h1>
      <div className="bg-background flex flex-col gap-5 items-center p-6 w-2/4 mt-6 h-fit rounded-lg">
        <div className="flex gap-4 w-full">
          <button
            className="flex-1 h-fit py-2 px-2 flex gap-2 items-center rounded-md group text-secondary border-2 border-secondary hover:bg-secondary cursor-pointer hover:text-background"
            onClick={() => {
              setRole("writer");
            }}
          >
            <div className="w-4 h-4 rounded-full border-2 border-secondary group-hover:bg-background"></div>
            I LIKE TO WRITE
          </button>                                                                                             
          <button
            className="flex-1 h-fit py-2 px-2 flex gap-2 items-center rounded-md group text-secondary border-2 border-secondary hover:bg-secondary cursor-pointer hover:text-background"
            onClick={() => {
              setRole("reader");
            }}
          >
            <div className="w-4 h-4 rounded-full border-2 border-secondary group-hover:bg-background"></div>
            I LIKE TO READ
          </button>
        </div>
        <CustomTextField label="Name" fullWidth />
        <CustomTextField label="Email" fullWidth />
        <div className="flex gap-5 w-full">
          <CustomTextField label="Phone" fullWidth />
          <CustomTextField label="Gender" fullWidth />
        </div>
        <StyledButton>SIGN UP</StyledButton>
      </div>
    </div>
  );
};

export default SignupPage;
