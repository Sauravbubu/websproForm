import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux/es/exports";
import { useSelector } from "react-redux";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { adduser } from "./Reducers";
const App = () => {
  const { form } = useSelector((state) => state);
  console.log(form)
  const [Text1, setText1] = useState("");
  const [Text2, setText2] = useState("");
  const [type1, settype1] = useState("");
  const [type2, settype2] = useState("");
  // const [errors, seterrors] = useState(initialState);
  const [tick, setTick] = useState(false);
  const [FileName2, setFileName2] = useState("");
  const [FileName1, setFileName1] = useState("");
  const [error, setError] = useState("");
  const schema = yup.object().shape({});
  //common class name for all input fields
  const inputstyle = ` placeholder:text-slate-400 block bg-white w-full border border-slate-300 rounded-md py-2 pl-4 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm`;
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ mode: "all" });
  const dispatch = useDispatch(adduser);
  console.log(errors);
  const onSubmit = (data) => {
    data = { ...data, file1: FileName1, file2: FileName2 };
    console.log(data);
    dispatch(adduser(data));
  };

  const handleDob = (e) => {
    const age = new Date().getFullYear() - e.target.value.split("-")[0];
    if (age < 18) setError("Invalid age Must Above 18");
  };
  return (
    <div className="w-[80%] flex items-center justify-center mt-10 m-auto  rounded-xl p-5">
      <div className="w-[80%]  h-[100%]  ">
        <form
          action=""
          // onSubmit={handleSubmit((data) => console.log("data", data))}
          onSubmit={handleSubmit(onSubmit)}
        >
          <div className="flex justify-between w-full mb-4 gap-5">
            <div className="w-[50%]">
              <p>
                First Name <span className="text-red-500">*</span>
              </p>
              <input
                {...register("firstname", { required: "User Name Required" })}
                type="text"
                className={inputstyle}
                name="firstname"
                placeholder="First Name"
              />
              <p className="text-red-400">{errors.firstname?.message}</p>
            </div>
            <div className="w-[50%]">
              <p>
                Last Name<span className="text-red-500"> *</span>
              </p>
              <input
                {...register("lastname", { required: "Last Name Required" })}
                type="text"
                className={inputstyle}
                name="lastname"
                placeholder="Last name"
              />
              <p className="text-red-400">{errors.lastname?.message}</p>
            </div>
          </div>
          {/* *********************** */}
          <div className="flex justify-between w-full gap-5">
            <div className="w-[50%]">
              <p>
                Email <span className="text-red-500">*</span>
              </p>
              <input
                {...register("email", {
                  required: " Email Required",
                  pattern: {
                    value:
                      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                    message: "Enter a valid email",
                  },
                })}
                className={inputstyle}
                name="email"
                placeholder="email address"
              />
              <p className="text-red-400">{errors.email?.message}</p>
            </div>
            <div className="w-[50%]">
              <p>
                Date of Birth<span className="text-red-500"> *</span>
              </p>
              <input
                {...register("dob", { required: "DOB Required" })}
                type="date"
                className={inputstyle}
                name="dob"
                placeholder="Date of Birth"
                onChange={handleDob}
              />
              <p className="text-red-400">{errors.dob?.message}</p>
              <p className="text-red-400">{error ? error : ""}</p>
            </div>
          </div>
          {/* *********************** */}
          <div className="grid gap-3 mt-5">
            <p>Residential Address</p>
            <div className="flex justify-between w-full gap-5">
              <div className="w-[50%]">
                <p>
                  Street 1 <span className="text-red-500">*</span>
                </p>
                <input
                  {...register("street1", {
                    required: " Required",
                    minLength: {
                      value: 4,
                      message: "must be at least 4 characters long",
                    },
                  })}
                  onChange={(e) => setText1(e.target.value)}
                  value={Text1}
                  className={inputstyle}
                  name="street1"
                />
                <p className="text-red-400">{errors.street1?.message}</p>
              </div>
              <div className="w-[50%]">
                <p>
                  Street 2<span className="text-red-500"> *</span>
                </p>
                <input
                  name="street2"
                  {...register("street2", {
                    required: " Required",
                    minLength: {
                      value: 4,
                      message: "must be at least 4 characters long",
                    },
                  })}
                  onChange={(e) => setText2(e.target.value)}
                  value={Text2}
                  className={inputstyle}
                />
                <p className="text-red-400">{errors.street2?.message}</p>
              </div>
            </div>
          </div>
          {/* *********************** */}
          {/* *********************** */}
          <div className="grid gap-3 mt-5">
            <div className="flex gap-2">
              <input
                type="checkbox"
                onClick={() => {
                  setTick(!tick);
                }}
                name="sameasresidential"
                id=""
              />
              <p>Same as Residential Address</p>
            </div>
            <p className={`w-[50%]   ${tick ? "hidden" : ""}`}>
              Permanent Address
            </p>
            <div className={` flex justify-between w-full gap-5`}>
              <div className={`w-[50%]   ${tick ? "hidden" : ""}`}>
                <p>
                  Street 1 <span className="text-red-500">*</span>
                </p>
                <input
                  {...register("street1p")}
                  className={` placeholder:text-slate-400 block bg-white w-full border border-slate-300 rounded-md py-2 pl-4 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm`}
                  name="street1p"
                />
                <p className="text-red-400">{errors.street1?.message}</p>
              </div>
              <div className={`w-[50%]   ${tick ? "hidden" : ""}`}>
                <p>
                  Street 2<span className="text-red-500"> *</span>
                </p>
                <input
                  name="street2p"
                  {...register("street2p")}
                  className="  placeholder:text-slate-400 block bg-white w-full border border-slate-300 rounded-md py-2 pl-4 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm"
                />
                <p className="text-red-400">{errors.street2?.message}</p>
              </div>
            </div>

            <div className={` flex justify-around w-full gap-5 items-center `}>
              <div className="w-[25%]">
                <p>File Name</p>
                <input type="text" value={FileName1} className={inputstyle} />
              </div>
              <div className="w-[25%]">
                <p>File Type</p>
                <div>
                  <select
                    name="filetype"
                    onChange={(e) => settype1(e.target.value)}
                    id=""
                    className={inputstyle}
                  >
                    <option value=""></option>
                    <option value="application/pdf">PDF</option>
                    <option value="image/jpeg">Jpg</option>
                  </select>
                </div>
              </div>
              <div className="w-[25%]">
                <p>Select file</p>
                <label className={inputstyle}>
                  <p className="text-md">
                    {!type1 ? "select  type first" : "select image"}
                  </p>

                  <input
                    type="file"
                    className="hidden"
                    disabled={!type1 && true}
                    {...register("file1")}
                    onChange={(e) => {
                      console.log(e.target.files[0]);

                      setFileName1(e.target.files[0].name);
                    }}
                    accept={`${type1}`}
                  />
                </label>
                <p className="text-red-400">{errors.file1?.message}</p>
              </div>

              <button className="p-3 bg-slate-900 h-[50%] rounde-xl text-xl text-white">
                +
              </button>
            </div>
            <p className="text-gray-300 text-center mt-[-15px]">(img/PDF)</p>
            {/* *************************************** */}

            <div className={` flex justify-around w-full gap-5 items-center `}>
              <div className="w-[25%]">
                <p>File Name</p>
                <input type="text" value={FileName2} className={inputstyle} />
              </div>
              <div className="w-[25%]">
                <p>File Type</p>
                <div>
                  <select
                    name="filetype"
                    onChange={(e) => settype2(e.target.value)}
                    id=""
                    className={inputstyle}
                  >
                    <option value=""></option>
                    <option value="application/pdf">PDF</option>
                    <option value="image/jpeg">Jpg</option>
                  </select>
                </div>
              </div>
              <div className="w-[25%]">
                <p>Select file</p>
                <label className={inputstyle}>
                  <p className="text-md">
                    {!type2 ? "select  type first" : "select image"}
                  </p>

                  <input
                    type="file"
                    className="hidden"
                    disabled={!type2 && true}
                    // ref={register}
                    {...register("file2")}
                    onChange={(e) => {
                      console.log(e.target.files[0].name);

                      setFileName2(e.target.files[0].name);
                    }}
                    accept={`${type2}`}
                  />
                </label>
              </div>

              <button className="p-3 bg-slate-900 h-[50%] rounde-xl text-xl text-white">
                +
              </button>
            </div>
            <p className="text-gray-300 text-center mt-[-15px]">(img/PDF)</p>
          </div>
          <input
            type="submit"
            // value="submit"
            className="bg-slate-500 rounded-lg text-white pl-2 pr-2  "
          />
        </form>
      </div>
    </div>
  );
};

export default App;
