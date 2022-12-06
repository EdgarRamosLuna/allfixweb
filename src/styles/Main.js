import styled from "styled-components";

export const MainS = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  input,
  textarea,
  select {
    outline: none;
  }
`;

export const HeaderS = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  position: relative;
  .header-cont {
    display: flex;
    align-items: center;
    padding: 20px 45px;
    border-bottom: 1px solid rgba(255, 255, 255, 0.1);
    position: absolute;
    z-index: 3;
    width: 100%;
    box-sizing: border-box;
    background: rgba(255, 255, 255, 0.02);
  }
  .sider-bg {
    width: 100%;
    flex-direction: column;
    display: flex;
    background-image: url(/assets/img/slider/1.jpg);
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    height: calc(100vh - 100px);
    justify-content: center;
    align-items: center;
    position: relative;
  }
  .logo {
    max-width: 147px;
    a {
      width: 100%;
      display: flex;
    }
    img {
      width: 70%;
      filter: contrast(0) grayscale(100%) brightness(100);
      transition: all 0.6s;
      &:hover {
        scale: 1.2;

        transition: all 0.6s;
        transform: rotate(360deg);
      }
    }
  }
  .menu {
    width: calc(100% - 147px);
    display: flex;
    justify-content: start;
    ul {
      display: flex;
      list-style: none;
      padding: 0;
      margin: 0;
      li {
        margin: 0 25px;
        position: relative;
        transition: all 0.3s;
        &:before {
          //f013
          font-family: "Font Awesome 5 Free";
          font-weight: 900;
          content: "\f0ad";
          position: absolute;
          bottom: -9.9px;
          color: #fe5a0e;
          transform: rotate(45deg);
          z-index: -1;
          opacity: 0;
          left: 0;
          font-size: 10px;
        }
        &:after {
          content: "";
          position: absolute;
          width: 0;
          height: 2.3px;
          background: #fe5a0e;
          bottom: -5px;
          left: 0;
          transition: all 0.3s;
          opacity: 0;
          border-radius: 5px;
        }
        &:hover {
          &:after {
            width: 100%;
            transition: all 0.3s;
            opacity: 1;
          }
          &:before {
            z-index: -1;
            opacity: 1;
            left: 100%;
            transition: all 0.3s;
          }
        }
      }
      a {
        text-decoration: none;
        color: #fff;
        font-size: 25px;
        text-transform: uppercase;
        font-family: "SemiBold";
      }
    }
  }
  .info-section {
    width: 100%;
    position: absolute;
    bottom: 0;
    display: flex;
    box-sizing: border-box;
    max-width: 1330px;
    margin: 0 auto;
    justify-content: end;
  }
  .info-s-item {
    width: 325px;
    max-width: 325px;
    background: #fff;
    display: flex;
    padding: 30px 15px;
    font-family: "H-Regular";
    p {
      font-family: "Bold";
      margin-top: 8px;
      margin-bottom: 5px;
      font-weight: 700;
      font-size: 25px;
    }
  }
  .s-item-cont {
    width: 100%;
    display: flex;
  }
  .s-item-contS1 {
    background-color: #fe5a0e;
    color: #fff;
  }
  .s-item-contS2 {
    background-color: #fff;
    color: #000;
  }

  .s-item-img {
    width: 40%;
    display: flex;
    justify-content: center;
    align-items: center;
    i {
      display: flex;
      justify-content: center;
      align-items: center;
      background: #fe7332;
      height: 60px;
      width: 60px;
      line-height: 60px;
      text-align: center;
      border-radius: 50%;
      color: #fff;
      font-size: 22px;
    }
  }
  .s-item-txt {
    width: auto;
    display: flex;
    flex-direction: column;
    align-items: start;
    justify-content: center;
    h3 {
      margin-bottom: 0;
    }
  }
  .s-item-contS2 i {
    background: #eeeded !important;
    color: #000;
  }
  .slider-content {
    width: 100%;
    max-width: 1330px;
  }
  .s-item-container {
    width: 100%;
    display: flex;
    flex-direction: column;
    max-width: 50%;
  }
  .s-item-c-txt {
    display: flex;
    flex-direction: column;
    color: #fff;
    h2,
    p {
      margin: 0;
      padding: 0;
    }
    h2 {
      font-size: 60px;
      z-index: 7;
      span {
        position: relative;
        &:after {
          content: "";
          position: absolute;
          width: 98%;
          height: 15px;
          border-radius: 5px;
          background: #cb480b;
          left: 0;
          bottom: 10px;
          z-index: -1;
        }
      }
    }
    p {
      font-size: 25px;
      padding: 30px 0;
      font-family: "H-Bold";
    }
  }
  .a-btn {
    text-decoration: none;
  }
  .s-item-c-btn {
    width: 100%;
    button {
      font-family: "H-Bold";
      background-color: #fe5a0e;
      font-size: 16px;
      color: #fff;
      border: 0;
      border-radius: 5px;
      text-transform: uppercase;
      position: relative;
      min-width: 195px;
      height: 65px;
      line-height: 38px;
      text-align: center;
      display: flex;
      justify-content: space-around;
      align-items: center;
      transition: all 0.3s;
      cursor: pointer;
      &:hover {
        background-color: #fa3500;
        transition: all 0.3s;
        i {
          left: 10px;
          position: absolute;
          transition: all 0.3s;
        }
      }
      span {
        border-left: 1px solid #fff;
        display: flex;
        height: 50%;
        justify-content: center;
        align-items: center;
        box-sizing: border-box;
        padding-left: 10px;
        position: relative;
        transition: all 0.3s;

        i {
          left: 0px;
          position: absolute;
          transition: all 0.3s;
        }
      }
    }
  }
`;
export const Footer = styled.div`
  width: 100%;
  display: flex;
`;

export const Section1S = styled.div`
  width: 100%;
  position: relative;

  .s-container {
    width: 100%;
    display: flex;
    margin: 150px 0;
  }
  .s-item-l {
    width: 50%;
    display: flex;
    align-items: center;
  }
  .s-item-r {
    width: 40%;
    display: flex;
  }
  .s-item-content {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    img {
      width: 50%;

      border-radius: 3%;
    }
    .img1 {
      margin-left: auto;
      width: 33%;
    }
    .img2 {
      margin-left: 3%;
    }
  }

  .s-item-content2 {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
  }
  .txt-items {
    width: 100%;
    display: flex;
    flex-direction: column;
  }
  .title-s {
    width: 100%;
  }
  .company-n {
    text-transform: uppercase;
  }
  .title-l {
    width: 100%;
  }
  .title-l h3 {
    font-size: 50px;
    line-height: 1.19em;
    position: relative;
    width: 100%;
    margin-left: 76.1167px;
    max-width: 620px;
    margin-top: 10px;
  }
  .title-s {
    width: 100%;
    h5 {
      margin-left: 76.1167px;
      font-size: 19px;
      font-weight: 600;
      color: #fe5a0e;
      display: block;
      margin-bottom: 0.5em;
      margin-top: -0.3em;
      font-family: "Regular";
      position: relative;
    }
  }
`;
export const Section2S = styled.div`
  width: 100%;
  position: relative;
  background: url(/assets/img/service-bg-min.jpg);
  background-repeat: no-repeat;
  background-position: center bottom;
  padding: 3rem 0;
  .s-content {
    display: flex;
    flex-direction: column;
  }
  .s-content-txt {
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 0 0 1.69em;
  }
  .s-content-items {
    display: flex;
    max-width: 1500px;
    margin: 0 auto;
    width: 100%;
    flex-wrap: wrap;
  }
  .s-content-item-txt {
    width: 50%;
  }
  .s-content-item {
    width: calc(49.33% - 30px);
    display: flex;
    background: #fff;
    margin: 15px 15px;
    min-height: 495px;
    transition: all 0.3s;
    cursor: pointer;
    flex-direction: column;
    align-items: center;
    justify-content: start;
    padding-bottom: 40px;
    position: relative;
    margin-bottom: 40px;
    &:hover {
      transition: all 0.3s;
      box-shadow: 0px 0px 50px 0px rgba(0, 0, 0, 0.1);
      .s-content-item-ico {
        background: #fe5a0e;
        transition: all 0.3s;
        scale: 1.1;
        i {
          color: #fff;
        }
        img {
          filter: contrast(0) grayscale(100%) brightness(100);
        }
      }
    }
  }
  @keyframes mymove {
    from {
      top: 0px;
    }
    to {
      top: 200px;
    }
  }
  .s-content-item-ico {
    display: flex;
    align-self: start;
    background: #f6f6f6;
    width: 150px;
    height: 150px;
    margin: 30px 0;
    border-radius: 100%;
    justify-content: center;
    align-items: center;
    transition: all 0.3s;
    margin: 40px auto;
    img {
      width: 50%;
    }
    i {
      font-size: 4em;
      color: #fe5a0e;
    }
  }
  .s-content-t-s {
    h2 {
      font-size: 50px;
      margin: 0 0 0.69em;
      line-height: 1.19em;
      position: relative;
      width: 50%;
      margin: 0 auto;
      font-weight: 700;
      color: #262b3e;
      font-family: "Bold";
    }
    h4 {
      display: inline-block;
      padding: 0 40px;
      margin-bottom: 20px;
      font-size: 19px;
      font-weight: 600;
      color: #fe5a0e;
      margin-top: -0.3em;
      position: relative;
      font-family: "Regular";
    }
  }
  .s-contente-btn {
    position: absolute;
    bottom: -20px;
    width: 40px;
    height: 40px;
    background: #fe5a0e;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #fff;
    border-radius: 100%;
    cursor: pointer;
  }
`;
export const Section3S = styled.div`
  width: 100%;
  position: relative;
`;
export const Section4S = styled.div`
  width: 100%;
  position: relative;
`;
export const Section5S = styled.div`
  width: 100%;
  position: relative;
`;
export const Section6S = styled.div`
  width: 100%;
  position: relative;
`;
export const Section7S = styled.div`
  width: 100%;
  position: relative;
`;
export const Section8S = styled.div`
  width: 100%;
  position: relative;
`;
export const BoxComponentS = styled.div`
  .txt-item {
    width: 100%;
    display: flex;
    box-sizing: border-box;
    padding: 0;
    min-height: 150px;
    margin-bottom: 40px;
  }
  .sc-img {
    scale: 1.2;
  }
  .txt-item-ico {
    width: 10%;
    display: flex;
    justify-content: start;

    align-items: center;
    box-sizing: border-box;
    margin-left: 76.1167px;
    img {
      width: 80px;
      margin-right: 10%;
    }
  }
  .txt-item-content {
    width: calc(100% - 15px);
    display: flex;
    flex-direction: column;
    box-sizing: border-box;
    padding: 0 25px;
    border-left: 3px solid #fe5a0e;
    margin-left: 15px;
  }
  .txt-item-content-title {
    width: 100%;
  }
  .txt-item-content-t {
    width: 100%;
  }
  .txt-item-content-t p {
    padding: 0;
    margin: 0;
    white-space: pre-line;
    width: 70%;
  }
`;
export const ListItems = styled.li`
  //list-style:none;
  margin: 14px 0;
  justify-content: start;
  align-items: center;
  display: flex;
  gap: 5px;
  color: #fe5a0e;
  &:before {
    display: flex;
    font-family: "Font Awesome 5 Free";
    font-weight: 900;
    content: "\f013";
  }
`;

export const ContactoS = styled.div`
  display: flex;
  justify-content: center;
  align-items: start;
  margin: 100px 0;
  margin-bottom: 0;
  gap: 25px;
  flex-wrap: wrap;
  .map {
    width: 100%;
  }
  .container-1 {
    //background: #f9f9f9;
    box-sizing: border-box;
    padding: 3rem;
    width: 45%;
    position: relative;
    &:before {
      position: absolute;
      background: url("/assets/img/contact-form-bg.jpg") no-repeat center center /
        cover;
      content: "";
      width: 100%;
      height: 100%;
      left: 0;
      top: 0;
      z-index: -1;
    }
  }
  .txt1 {
    color: #fe5a0e;
    position: relative;
    font-size: 19px;
    font-weight: 600;
    font-family: "Regular";
    display: flex;
    width: 150px;
    text-align: center;
    justify-content: center;
    align-items: center;
    &:before {
      position: absolute;
      content: "";
      width: 25px;
      height: 3px;
      background: #fe5a0e;
      border-radius: 2.5px;
      top: 50%;
      transform: translateY(-50%);
      left: 0;
    }
    &:after {
      position: absolute;
      content: "";
      width: 25px;
      height: 3px;
      background: #fe5a0e;
      border-radius: 2.5px;
      top: 50%;
      transform: translateY(-50%);
      right: 0;
    }
  }
  .txt2 h2 {
    font-size: 50px;
    font-family: "Bold";
    font-weight: 700;
    color: #262b3e;
    line-height: 1.19em;
  }
  .form {
    display: flex;
    flex-wrap: wrap;
  }
  .form-content {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 30px;
  }
  .input-container.i-50 {
    width: 100%;
    margin: 5px 0;
    input {
      width: 100%;
      color: #949494;
      border: 1px solid #efefef;
      background: #fff;
      padding: 20px;
      box-shadow: none;
      box-sizing: border-box;
    }
  }
  .form-content {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 30px;
  }
  .form-content-last {
    width: 100%;
    display: flex;
    flex-wrap: wrap;
  }
  .input-container.i-100 {
    width: 100%;
    margin: 0;
    margin-bottom: 0px;
    margin-bottom: 15px;
    textarea {
      color: #949494;
      border: 1px solid #efefef;
      background: #ffffff;
      padding: 20px;
      box-shadow: none;
      width: 100%;
      box-sizing: border-box;
      height: 155px;
      resize: none;
    }
    button {
      background-color: #fe5a0e;
      font-size: 16px;
      color: #fff;
      display: inline-block;
      border: 0;
      border-radius: 5px;
      text-transform: uppercase;
      position: relative;
      min-width: 195px;
      height: 65px;
      line-height: 38px;
      text-align: center;
      cursor: pointer;
    }
  }
  .container-2 {
    width: 30%;
  }
`;

export const FooterS = styled.div`
  width: 100%;
  display: flex;
  .icons-container {
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    background: #fe5a0e;
    color: #fff;
    padding: 20px 0;
    box-sizing: border-box;
    gap: 15px;
    * {
      color: #fff;
    }
    a {
      font-size: 1.5em;
      transition: all 0.3s;
      &:hover {
        transition: all 0.3s;
        color: #d9d8d8;
      }
    }
  }
  .txt-icos {
    width: 100%;
    text-align: center;
    display: flex;
    justify-content: center;
  }
  .img-icos {
    width: 100%;
    text-align: center;
    display: flex;
    justify-content: center;
    gap: 20px;
  }
`;

export const WButton = styled.div`
  position: fixed;
  z-index: 99;
  left: 15px;
  bottom: 36px;
  font-size: 2em;
  background: rgb(103, 201, 89);
  display: flex;
  -moz-box-pack: center;
  justify-content: center;
  -moz-box-align: center;
  align-items: center;
  border-radius: 100%;
  width: 50px;
  height: 50px;
  a {
    text-decoration: none;
    color: rgb(255, 255, 255);
  }
`;

export const GalleryS = styled.div`
  position: fixed;
  z-index: 999;
  background: #0000004d;
  height: 100vh;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  .container {
    width: 80%;
    margin: 0 auto;
    background: #fff;
    box-sizing: border-box;
    position: relative;
    height: 80%;
    overflow-y: scroll;
    padding: 15px;
    box-sizing: border-box;
  }
  .close-btn {
    position: absolute;
    right: 0;
    margin: 10px;
    font-size: 1.5em;
    color: #fe5a0e;
    cursor: pointer;
  }
  .title {
    display: flex;
    justify-content: center;
    text-transform: uppercase;
    color: #fe5a0e;
    text-align: center;
  }
  .title h1 {
    border-bottom: 2px solid;
  }
  .img-container {
    display: flex;
    flex-wrap: wrap;
  }
  .img-item {
    width: auto;
    min-width: 31.33%;
    max-height: 380px;
    max-width: 31.33%;
    margin: 10px auto;
    transition: box-shadow 0.2s ease-in-out 0s, box-shadow 0.2s ease-in-out 0s;
    box-shadow: rgba(0, 0, 0, 0.1) 0px 8px 16px 0px;
    border: 1px solid #fe5a0e;
    box-sizing: border-box;
  }
  .img {
    width: 100%;
    height: 100%;
    display: flex;
  }
  .img img {
    display: block;
    object-fit: cover;
    object-position: center top;
    width: 100%;
  }
`;

export const LoadingS = styled.div`
width: 100%;
text-align: center;


`;