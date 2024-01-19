"use client";
import AccountForm from "./SubmitAddress";
import AddressForm from "./AddressForm";
import { FormData } from "@/models/FormData";
import { FormEvent, useState } from "react";
import { useMultistepForm } from "./useMultistepForm";
import { useRouter } from "next/navigation";

//--------data for form fileds--------
const INITAL_DATA: FormData = {
  name: "",
  street: "",
  city: "",
  zip: "",
};
const Form = () => {
  const router = useRouter();
  const [data, setData] = useState(INITAL_DATA);

  //--update from & spreading the existing form data and modifid fields--
  function updateFields(fields: Partial<FormData>) {
    setData((prev) => {
      return { ...prev, ...fields };
    });
  }

  //--to manage the multisteps form functionality--
  const {
    steps,
    currtentStepIndex,
    setp,
    isFirstStep,
    isLastStep,
    back,
    next,
  } = useMultistepForm([
    <AddressForm {...data} updateFields={updateFields} />,
    <AccountForm />,
  ]);
  //--------The last step--------
  function onSubmit(e: FormEvent) {
    e.preventDefault();
    //When the form is done
    if (!isLastStep) return next();
    router.push("/");
  }

  return (
    <>
      <div className="flex h-screen bg-gray-100">
        <div className="m-auto p-5 sm:p-0">
          <div className="max-w-m">
            <form
              className="mt-5 bg-white rounded-lg shadow"
              onSubmit={onSubmit}
            >
              <div className="flex p-5 justify-between">
                <header className="  overflow-hidden">
                  <div>
                    <svg
                      className="inline align-text-top"
                      height="24px"
                      viewBox="0 0 24 24"
                      width="24px"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="#000000"
                    >
                      <g>
                        <path
                          d="m4.88889,2.07407l14.22222,0l0,20l-14.22222,0l0,-20z"
                          fill="none"
                          id="svg_1"
                          stroke="null"
                        ></path>
                        <path
                          d="m7.07935,0.05664c-3.87,0 -7,3.13 -7,7c0,5.25 7,13 7,13s7,-7.75 7,-13c0,-3.87 -3.13,-7 -7,-7zm-5,7c0,-2.76 2.24,-5 5,-5s5,2.24 5,5c0,2.88 -2.88,7.19 -5,9.88c-2.08,-2.67 -5,-7.03 -5,-9.88z"
                          id="svg_2"
                        ></path>
                        <circle
                          cx="7.04807"
                          cy="6.97256"
                          r="2.5"
                          id="svg_3"
                        ></circle>
                      </g>
                    </svg>
                    <h2 className="inline text-2xl font-semibold leading-none">
                      Form Address
                    </h2>
                  </div>
                </header>
                <div>
                  {/* The number of the pages  */}
                  {currtentStepIndex + 1} / {steps.length}
                </div>
              </div>
              {/* the currnet index page*/}
              <div className="px-5 pb-5">
                {setp}
                <hr className="mt-4" />
                <div className="flex flex-row-reverse p-3 pr-0	">
                  <div className="flex-initial">
                    {/* next and finish */}
                    <button
                      type="submit"
                      className="flex items-center px-5 py-2.5 font-medium tracking-wide text-white capitalize   bg-red-400 rounded-md hover:bg-red-600  focus:outline-none focus:bg-red-700  transition duration-300 transform active:scale-95 ease-in-out"
                    >
                      <span className="pl-2 mx-1">
                        {isLastStep ? "Finish" : "Next >"}
                      </span>
                    </button>
                  </div>
                  <div className="flex-initial pr-3">
                    {/* back button */}
                    {!isFirstStep && (
                      <button
                        type="button"
                        className="flex items-center px-5 py-2.5 font-medium tracking-wide text-white capitalize   bg-red-400 rounded-md hover:bg-red-600  focus:outline-none focus:bg-red-700  transition duration-300 transform active:scale-95 ease-in-out"
                        onClick={back}
                      >
                        <span className="pl-2 mx-1"> Back </span>
                      </button>
                    )}
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Form;
