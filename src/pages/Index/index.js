import React from "react";

import { Column, Input, Button } from "components";
import { postLogin } from "service/api";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import useForm from "hooks/useForm";

const IndexPage = () => {
  const [apiData, setapiData] = React.useState();
  const form = useForm({ username: "", password: "" });

  function callApi(data) {
    const req = { data: { ...data } };

    postLogin(req)
      .then((res) => {
        setapiData(res);

        toast.success("Success");
      })
      .catch((err) => {
        console.error(err);
        toast.error("Error");
      });
  }

  return (
    <>
      <Column className="bg-white_A700 flex flex-col font-inter items-center justify-start mx-[auto] md:p-[137px] sm:p-[15px] p-[200px] w-[100%]">
        <Column
          className="common-pointer bg-blue_200 flex flex-col items-center justify-start max-w-[420px] sm:mb-[198px] md:mb-[256px] mb-[373px] ml-[auto] mr-[auto] sm:p-[15px] md:p-[24px] p-[36px] sm:pl-[15px] sm:pr-[15px] rounded-radius25 shadow-bs w-[100%]"
          onClick={() => {
            form.handleSubmit(callApi);
          }}
        >
          <Input
            className="placeholder:bg-white_A700 font-normal not-italic p-[0] text-[18px] placeholder:text-black_900_59 text-black_900_59 w-[100%]"
            wrapClassName="sm:mx-[0] sm:w-[100%] w-[81%]"
            onChange={(e) => {
              form.handleChange("username", e.target.value);
            }}
            value={form?.values?.username}
            name="username"
            placeholder="Username"
          ></Input>
          <Input
            className="placeholder:bg-white_A700 font-normal not-italic p-[0] text-[18px] placeholder:text-black_900_59 text-black_900_59 w-[100%]"
            wrapClassName="md:mt-[6px] mt-[10px] sm:mt-[5px] sm:mx-[0] sm:w-[100%] w-[81%]"
            onChange={(e) => {
              form.handleChange("password", e.target.value);
            }}
            value={form?.values?.password}
            name="password"
            placeholder="Password"
          ></Input>
          <Button className="cursor-pointer font-bold sm:mb-[17px] md:mb-[22px] mb-[33px] min-w-[36%] sm:mt-[15px] md:mt-[19px] mt-[29px] text-[20px] text-black_900 text-center w-[max-content]">
            Login
          </Button>
        </Column>
      </Column>
      <ToastContainer />
    </>
  );
};

export default IndexPage;
