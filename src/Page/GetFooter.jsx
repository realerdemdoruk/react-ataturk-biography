import React from 'react';
import { Container } from 'react-bootstrap';
import {
  AiOutlineInstagram,
  AiFillFacebook,
  AiFillGithub,
  AiFillTwitterCircle,
} from 'react-icons/ai';

const GetFooter = () => {
  return (
    <Container>
      <div className="container-fluid  mt-5 bg-dark text-light">
        <div className="row ">
          <div className="col text-center">
            <h1 className="text-center mt-2">BİZİ TAKİP EDİN</h1>
          </div>
        </div>

        <div className="row ">
          <div className="col gap-3 d-flex justify-content-center mt-3 mx-auto">
            <div>
              <a
                href="https://www.instagram.com/realerdemdoruk/"
                target="_blank"
                rel="noreferrer"
              >
                <AiOutlineInstagram size="2em" />
              </a>
            </div>
            <div>
              <a
                href="https://www.facebook.com/Realerdemdoruk"
                target="_blank"
                rel="noreferrer"
              >
                <AiFillFacebook size="2em" />
              </a>
            </div>
            <div>
              <a
                href="https://github.com/realerdemdoruk"
                target="_blank"
                rel="noreferrer"
              >
                <AiFillGithub size="2em" />
              </a>
            </div>
            <div>
              <a
                href="https://twitter.com/realerdemdoruk"
                target="_blank"
                rel="noreferrer"
              >
                <AiFillTwitterCircle size="2em" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default GetFooter;
