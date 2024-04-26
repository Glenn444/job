import pax from "../assets/pax.svg";
import pax1 from "../assets/pax1.webp";
import loginPax from "../assets/loginPax.png";
import { Alert, AlertDescription, } from "@/components/ui/alert";
import FormInput from '../components/FormInput'

export default function Header() {
  return (
    <div className="grid grid-cols-2">
      <div className="max-w-[490px] flex flex-col px-3 mt-9 lg:ml-32 lg:mt-16">
        <div className="flex justify-between space-x-24">
          <img src={pax} alt="PAXFUL image" />

          <div className="h-9 flex border rounded-md border-solid border-gray-300 justify-center items-center px-2">
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="currentColor"
              className="mr-2 text-gray-500"
            >
              <path d="M8 0C3.6 0 0 3.6 0 8s3.6 8 8 8 8-3.6 8-8-3.6-8-8-8zM1.8 8c0-.8.2-1.6.4-2.3.5.3 1.2.6 1.9.7C4 7 4 7.5 4 8s0 1 .1 1.6c-.7.1-1.4.4-1.9.7-.2-.7-.4-1.5-.4-2.3zm4 0c0-.4 0-.8.1-1.2.7.1 1.4.1 2.1.1s1.4 0 2.1-.1c0 .4.1.8.1 1.2s0 .8-.1 1.2c-.7-.1-1.4-.1-2.1-.1s-1.4 0-2.1.1c-.1-.4-.1-.8-.1-1.2zm6.1-1.6c.7-.2 1.3-.4 1.8-.7.3.7.5 1.5.5 2.3s-.2 1.6-.4 2.3c-.5-.3-1.1-.6-1.8-.7V8c0-.5 0-1-.1-1.6zm1-2.2c-.2.2-.6.3-1.2.5-.2-.8-.4-1.5-.7-2.1.7.3 1.3.9 1.9 1.6zM8 1.8c.1 0 .6.1 1.2 1.3.3.6.5 1.2.7 1.9-.6.1-1.2.1-1.9.1s-1.3 0-1.9-.1c.2-.7.4-1.3.6-1.8.7-1.3 1.2-1.4 1.3-1.4zm-2.9.7c-.3.7-.5 1.4-.7 2.2-.6-.2-1-.3-1.3-.5.6-.7 1.2-1.3 2-1.7zm-2 9.3c.2-.2.6-.3 1.2-.5.2.8.4 1.5.7 2.1-.7-.3-1.3-.9-1.9-1.6zM8 14.2c-.1 0-.6-.1-1.2-1.3-.3-.5-.5-1.1-.6-1.8.6-.1 1.2-.1 1.9-.1s1.3 0 1.9.1c-.2.7-.4 1.3-.6 1.8-.8 1.2-1.3 1.3-1.4 1.3zm2.9-.7c.3-.6.5-1.4.7-2.1.6.2 1 .3 1.2.5-.5.6-1.1 1.2-1.9 1.6z"></path>
            </svg>
            <h2>English</h2>
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="currentColor"
              className="ml-2 LanguageSelector__icon text-gray-500"
            >
              <path
                fillRule="evenodd"
                d="M2.707 4.293L8 9.585l5.293-5.292a1 1 0 111.414 1.414l-6 6a.996.996 0 01-.53.277l-.118.014h-.118a.997.997 0 01-.648-.29l-6-6a1 1 0 011.414-1.415z"
                clipRule="evenodd"
              ></path>
            </svg>
          </div>
        </div>
        <h1 className="login text-2xl text-nowrap my-6">Log In With Paxful</h1>
        <div className="w-">
          <Alert className="bg-blue-50 w-[22rem] lg:w-full flex flex-col lg:flex-row lg:items-center">
            <div className="flex">
              <svg
                width="18"
                height="18"
                viewBox="0 0 16 16"
                fill="#3b82f6"
                className="mr-2_5 icon "
              >
                <path
                  fillRule="evenodd"
                  d="M8 2a6 6 0 100 12A6 6 0 008 2zM0 8a8 8 0 1116 0A8 8 0 010 8zm9-3a1 1 0 11-2 0 1 1 0 012 0zM8 7a1 1 0 00-1 1v3a1 1 0 102 0V8a1 1 0 00-1-1z"
                  clipRule="evenodd"
                ></path>
              </svg>
              <AlertDescription className="pl-2 ">
                IMPORTANT! Please check that <br className="hidden lg:block" />{" "}
                you are visiting https://accounts.paxful.com/
              </AlertDescription>
            </div>
            <div className="pt-1 pl-4">
              <img className="border rounded-md" src={loginPax} alt="url" />
            </div>
          </Alert>
        </div>
        <FormInput />
      </div>
      <div className=" hidden lg:block absolute right-0 w-[930px] h-full bg-blue-50">
        <div className="flex justify-center pt-16">
          <img src={pax1} className="" alt="Image" />
        </div>
      </div>
    </div>
  );
}
