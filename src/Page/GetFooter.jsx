import React from 'react';
import {
  AiOutlineInstagram,
  AiFillFacebook,
  AiFillGithub,
  AiFillTwitterCircle,
} from 'react-icons/ai';

const GetFooter = () => {
  return (
    <div className="container-fluid mt-5 bg-dark text-light">
      <h1 className="text-center">Erdem</h1>
      {/* <div className="row d-flex"> */}
      <AiOutlineInstagram />
      <AiFillFacebook />
      <AiFillTwitterCircle />
      <AiFillGithub />
      {/* </div> */}
    </div>
  );
};

export default GetFooter;
