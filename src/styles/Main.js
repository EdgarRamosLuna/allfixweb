import styled from "styled-components";

export const MainS = styled.div`
    width: 100%;
    height: 100%;
    position: relative;
   
    

`;

export const HeaderS = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    position: relative;
    .header-cont{
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
        background-image:url(/assets/img/slider/1.jpg);
        background-position:center;
        background-size: cover;
        background-repeat:no-repeat;
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
            transition:all 0.6s;
            &:hover{
                scale:1.2;
                
                transition:all 0.6s;
                transform:rotate(360deg);
            }
        }
    }
    .menu {
        width: calc(100% - 147px);
        display: flex;
        justify-content: center;
        ul {
            display: flex;
            list-style: none;
            padding: 0;
            margin: 0;
            li {
                margin: 0 25px;
                position: relative;
                transition:all 0.3s;
                &:before{
                    //f013
                    font-family: "Font Awesome 5 Free"; font-weight: 900; content: "\f0ad";
                    position: absolute;
                    bottom: -9.9px;
                    color: #fe5a0e;
                    transform: rotate(45deg);
                    z-index: -1;
                    opacity:0;
                    left: 0;
                    font-size: 10px;
                }
                &:after{
                        content: "";
                        position: absolute;
                        width: 0;
                        height: 2.3px;
                        background: #fe5a0e;
                        bottom: -5px;
                        left: 0;
                        transition:all 0.3s;
                        opacity: 0;
                        border-radius: 5px;
                }
                &:hover{
                    &:after{
                        width: 100%;
                        transition:all 0.3s;
                        opacity: 1;
                    }
                    &:before{
                    
                        z-index: -1;
                        opacity:1;
                        left: 100%;
                        transition:all 0.3s;
                    }
                    
                }
            }
            a {
                text-decoration: none;
                color: #fff;
                font-size: 25px;
                text-transform: uppercase;
                font-family: 'SemiBold';
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
        font-family: 'H-Regular';
        p{
            font-family: 'Bold';
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
    .s-item-contS1{
        background-color: #fe5a0e;
        color:#fff;
    }
    .s-item-contS2{
        background-color: #fff;
        color:#000;
    }
    
    .s-item-img {
        width: 40%;
        display: flex;
        justify-content: center;
        align-items: center;
        i{
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
        h3{
            margin-bottom:0;
        }
    }
    .s-item-contS2 i{
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
        h2, p {
            margin: 0;
            padding: 0;
        }
        h2 {
            font-size: 60px;
        }
        p {
            font-size: 25px;
            padding: 30px 0;
            font-family: 'H-Bold';
        }
    }
    .s-item-c-btn {
        width: 100%;
        button{
            font-family: 'H-Bold';
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
            transition:all 0.3s;
            cursor: pointer;
            &:hover{
                background-color:#fa3500;
                transition:all 0.3s;
                    i{
                        left: 10px;
                        position:absolute;
                        transition:all 0.3s;
                    }
                }
            span{
                border-left: 1px solid #fff;
                display: flex;
                height: 50%;
                justify-content: center;
                align-items: center;
                box-sizing: border-box;
                padding-left: 10px;
                position: relative;
                transition:all 0.3s;
                
                i{
                    left: 0px;
                    position:absolute;
                    transition:all 0.3s;
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
  img{
    width: 50%;
    
    border-radius:3%;
  }
  .img1{
    margin-left: auto;
    width: 33%;
  }
  .img2{
    margin-left: 3%;
  }
}

.s-item-content2 {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction:column;
}
.txt-items {
  width: 100%;
  display: flex;
  flex-direction:column;
  
}
.title-s {
  width: 100%;
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
.title-s{
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
  height: 150px;
  margin-bottom: 40px;
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