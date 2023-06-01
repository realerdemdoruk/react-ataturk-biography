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
    <Container fluid className="bg-dark mt-5">
      <div>
        <div className="row ">
          <div className="col text-center">
            <h5 className="text-center mt-2 text-white ">BİZİ TAKİP EDİN</h5>
          </div>
        </div>

        <div className="row ">
          <div className="col gap-3 d-flex justify-content-center mt-3 mx-auto mb-3">
            <div>
              <a
                href="https://www.instagram.com/realerdemdoruk/"
                target="_blank"
                rel="noreferrer"
              >
                <AiOutlineInstagram className='icon'  size="2em" />
              </a>
            </div>
            <div>
              <a
                href="https://www.facebook.com/Realerdemdoruk"
                target="_blank"
                rel="noreferrer"
              >
                <AiFillFacebook  className='icon'  />
              </a>
            </div>
            <div>
              <a
                href="https://github.com/realerdemdoruk"
                target="_blank"
                rel="noreferrer"
              >
                <AiFillGithub  className='icon' />
              </a>
            </div>
            <div>
              <a
                href="https://twitter.com/realerdemdoruk"
                target="_blank"
                rel="noreferrer"
              >
                <AiFillTwitterCircle  className='icon' />
              </a>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default GetFooter;
