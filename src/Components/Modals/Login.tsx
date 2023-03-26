import React, { useState } from 'react';
import Layout from './Layout';

const Login: React.FC<{ setOpen: Function; setRegisterOpen: Function }> = ({
	setOpen,
	setRegisterOpen,
}) => {
	const [passwordVisible, setPasswordVisible] = useState(false);

	return (
    <Layout setOpen={setOpen}>
      <div className="lg:w-[400px] px-5">
        <div className="text-[#FFB71B]  text-lg  md:text-2xl font-bold mb-5">
          Eski akauntga kirish
        </div>
        <form action="" className="text-[#191B1E]">
          <div className="login-form">
            <label htmlFor="username">Ismingiz</label>
            <input type="text" id="username" placeholder="Ismingizni yozing" />
          </div>
          <div className="login-form">
            <label htmlFor="username">Kodingi</label>
            <div className="relative">
              <input
                type={passwordVisible ? "text" : "password"}
                id="username"
                className="!pr-[45px]"
                placeholder="Kodni kiriting"
              />
              <img
                onClick={() =>
                  setPasswordVisible((passwordVisible) => !passwordVisible)
                }
                src="/svg/password-eye.svg"
                className="absolute z-20 right-5 top-[25%]"
                alt=""
              />
            </div>
          </div>

          <button className=" bg-[#FFB71B] text-[#191B1E] w-full py-2 font-semibold rounded-lg">
            Kirish
          </button>
        </form>
        <div className="mt-5 flex whitespace-nowrap flex-col xs:flex-row items-center justify-center text-sm font-[500]">
          ¿Registratsiyadan otmaganmisiz?
          <span
            className="text-[#0F4F87] underline ml-1 cursor-pointer"
            onClick={() => {
              setRegisterOpen(true);
              setOpen(false);
            }}
          >
            Registratsiyadan otish
          </span>
        </div>
      </div>
    </Layout>
  );
};

export default Login;
