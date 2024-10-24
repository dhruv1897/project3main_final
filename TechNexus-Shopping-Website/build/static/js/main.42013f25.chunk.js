(this["webpackJsonpreact-webapp"]=this["webpackJsonpreact-webapp"]||[]).push([[0],{40:function(e,t,i){"use strict";i.r(t),t.default=i.p+"static/media/company-logo.43a62d2c.png"},49:function(e,t,i){},67:function(e,t,i){"use strict";i.r(t);var n=i(2),r=i(18),a=i.n(r),o=(i(49),i(8)),c=i(7),s=i(3),d=i(14),l=i(12);const p=s.a.aside`
    position: fixed;
    z-index: 999;
    width: 100%;
    height: 100%;
    background: #0d0d0d;
    display: grid;
    align-items: center;
    top: 0;
    left: 0;
    transition: all 0.3s ease-in-out;
    opacity: ${e=>{let{isOpen:t}=e;return t?"100%":"0"}};
    top: ${e=>{let{isOpen:t}=e;return t?"0":"-100%"}};
`,x=Object(s.a)(d.e)`
    color: #fff;
`,h=s.a.div`
    position: absolute;
    top: 1.2rem;
    right: 1.5rem;
    background: transparent;
    font-size: 2rem;
    cursor: pointer;
    outline: none;
`,m=s.a.div`
    color: #fff;
`,f=s.a.ul`
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: repeat(6, 80px);
    text-align: center;

    @media screen and (max-width: 480px) {
        grid-template-rows: repeat(6, 60px);
    }
`,g=Object(s.a)(l.Link)`
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.5rem;
    text-decoration: none;
    list-style: none;
    transition: 0.2s ease-in-out;
    color: #fff;
    cursor: pointer;

    &:hover {
        color: #ff8368;
        transition: 0.2s ease-in-out;
    }
`,b=s.a.div`
    display: flex;
    justify-content: center;
`,j=s.a.a`
    border-radius: 50px;
    background: #ff8368;
    white-space: nowrap;
    padding: 16px 64px;
    color: #010606;
    font-size: 16px;
    outline: none;
    border: none;
    cursor: pointer;
    transition: all 0.2s ease-in-out;
    text-decoration: none;

    &:hover {
        transition: all 0.2s ease-in-out;
        background: #fff;
        color: #010606;
    }
`;var u=i(1);var O=e=>{let{isOpen:t,toggle:i}=e;return Object(u.jsxs)(p,{isOpen:t,onClick:i,children:[Object(u.jsx)(h,{onClick:i,children:Object(u.jsx)(x,{})}),Object(u.jsxs)(m,{children:[Object(u.jsxs)(f,{children:[Object(u.jsx)(g,{to:"discover",onClick:i,children:"About"}),Object(u.jsx)(g,{to:"services",onClick:i,children:"Product"}),Object(u.jsx)(g,{to:"contact",onClick:i,children:"Contact"})]}),Object(u.jsx)(b,{children:Object(u.jsx)(j,{href:"tel:+19490000000",children:"Call 949-000-0000"})})]})]})},w=i(0);const y=s.a.nav`
    background: ${e=>{let{scrollNav:t}=e;return t?"#000000":"transparent"}};
    height: 80px;
    margin-top: -80px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1rem;
    position: sticky;
    top: 0;
    z-index: 10;

    @media screen and (max-width: 960px) {
        transition: 0.8s all-ease;
    }
`,v=s.a.div`
    display: flex;
    justify-content: space-between;
    height: 180px;
    z-index: 1;
    width: 100%;
    padding: 55px 24px 30px 24px;
    max-width: 1100px;
`,k=(Object(s.a)(o.b)`
    color: #fff;
    justify-self: flex-start;
    cursor: pointer;
    font-size: 1rem;
    display: flex;
    align-items: center;
    margin-left: 24px;
    text-decoration: none;
`,s.a.div`
    display: none;

    // mobile only display
    @media screen and (max-width: 768px) {
        display: block;
        position: absolute;
        top: 0;
        right: 0;
        transform: translate(-100%, 60%);
        font-size: 1.8rem;
        cursor: pointer;
        color: #fff;
    }
`),z=s.a.ul`
    display: flex;
    align-items: center;
    justify-content: center;
    list-style: none;
    text-align: center;
    margin: auto;
    // margin-right: -22px;

    // not shown on mobile
    @media screen and (max-width: 768px) {
        display: none;
    }
`,C=s.a.li`
    height: 80px;
`,T=Object(s.a)(l.Link)`
    color: #fff;    
    display: flex;
    align-items: center;
    text-decoration: none;
    padding: 0 1rem;
    height: 100%;
    cursor: pointer;

    //bottom orange bar when selected
    &.active {
        border-bottom: 3px solid #ff8368;
    }
`;s.a.nav`
    display: flex;
    align-items: center;

    @media screen and (max-width: 768px) {
        display: none;
    }
`,s.a.a`
    border-radius: 50px;
    background: #ff8368;
    white-space: nowrap;
    padding: 10px 22px;
    color: #010606;
    font-size: 16px;
    outline: none;
    border: none;
		cursor: pointer;
    transition: all 0.2s ease-in-out;
    text-decoration: none;

    &:hover {
        transition: all 0.2s ease-in-out;
        background: #fff;
        color: #010606;
    }
`;var S=i.p+"static/media/header-logo.43a62d2c.png";var A=e=>{let{toggle:t}=e;const[i,r]=Object(n.useState)(!1),a=()=>{window.scrollY>=80?r(!0):r(!1)};Object(n.useEffect)((()=>{window.addEventListener("scroll",a)}),[]);return Object(u.jsx)(u.Fragment,{children:Object(u.jsx)(w.b.Provider,{value:{color:"#fff"},children:Object(u.jsx)(y,{scrollNav:i,children:Object(u.jsxs)(v,{children:[Object(u.jsx)("img",{src:S,alt:"TechNexus",onClick:()=>{l.animateScroll.scrollToTop()}}),Object(u.jsx)(k,{onClick:t,children:Object(u.jsx)(d.a,{})}),Object(u.jsxs)(z,{children:[Object(u.jsx)(C,{children:Object(u.jsx)(T,{to:"#",smooth:!0,duration:500,spy:!0,exact:"true",offset:-80,children:"Home"})}),Object(u.jsx)(C,{children:Object(u.jsx)(T,{to:"services",smooth:!0,duration:500,spy:!0,exact:"true",offset:-80,children:"Product"})}),Object(u.jsx)(C,{children:Object(u.jsx)(T,{to:"discover",smooth:!0,duration:500,spy:!0,exact:"true",offset:-80,children:"About"})}),Object(u.jsx)(C,{children:Object(u.jsx)(T,{to:"contact",smooth:!0,duration:500,spy:!0,exact:"true",offset:-80,children:"Contact"})})]})]})})})})},E=i.p+"static/media/smart-phone.fd72b172.mp4",F=i(31);const P=s.a.div`
    background: #0c0c0c;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0 30px;
    height: 800px;
    position: relative;
    z-index: 1;

    :before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background: linear-gradient(180deg, rgba(0,0,0,0.2) 0%, rgba(0,0,0,0.6) 100%), 
                    linear-gradient(180deg, rgba(0,0,0,0.2) 0%, transparent 80%);
        z-index: 2;
    }
`,$=s.a.div`
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 100%;
    overflow: hidden;
`,L=s.a.video`
    width: 100%;
    height: 100%;
    -o-object-fit: cover;
    object-fit: cover;
    background: #232a34;
`,q=s.a.div`
    z-index: 3;
    max-width: 1200px;
    position: absolute;
    padding: 8px 24px;
    display: flex;
    flex-direction: column;
    align-items: center;
`,B=s.a.h1`
    color: #fff;
    font-size: 48px;
    text-align: center;

    @media screen and (max-width: 768px) {
        font-size: 40px;
    }

    @media screen and (max-width: 480px) {
        font-size: 32px;
    }
`,R=s.a.p`
    margin-top: 24px;
    color: #fff;
    font-size: 24px;
    text-align: center;
    max-width: 600px;

    @media screen and (max-width: 768px) {
        font-size: 22px;
    }

    @media screen and (max-width: 480px) {
        font-size: 18px;
    }
`,M=s.a.div`
    margin-top: 32px;
    display: flex;
    flex-direction: column;
    align-items: center;
`,N=Object(s.a)(F.a)`
    margin-left: 8px;
    font-size: 30px;
`,W=Object(s.a)(F.b)`
    margin-left: 8px;
    font-size: 30px;
`,I=Object(s.a)(l.Link)`
    border-radius: 50px;
    background: ${e=>{let{primary:t}=e;return t?"#ff8368":"#010606"}};
    white-space: nowrap;
    padding: ${e=>{let{big:t}=e;return t?"14px 48px":"12px 30px"}};
    color: ${e=>{let{dark:t}=e;return"#ffffff"}};
    font-size: ${e=>{let{fontBig:t}=e;return t?"20px":"16px"}};
    outline: none;
    border: none;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: all 0.2s ease-in-out;

    &:hover {
        transition: all 0.2s ease-in-out;
        background: ${e=>{let{primary:t}=e;return t?"#ffffff":"#01bf71"}}; 
        color: #000000;
    }
`;var D=()=>{const[e,t]=Object(n.useState)(!1),[i,r]=Object(n.useState)(E),a=Object(c.f)();Object(n.useEffect)((()=>{const e=[E],t=document.getElementById("heroVideo"),n=()=>{const t=(e.indexOf(i)+1)%e.length;r(e[t])};return t&&t.addEventListener("ended",n),()=>{t&&t.removeEventListener("ended",n)}}),[i]);const o=()=>{t(!e)};return Object(u.jsxs)(P,{id:"home",children:[Object(u.jsx)($,{children:Object(u.jsx)(L,{autoPlay:!0,loop:!1,muted:!0,id:"heroVideo",src:i,type:"video/mp4"})}),Object(u.jsxs)(q,{children:[Object(u.jsx)(B,{children:"Where Innovation Meets Everyday Life"}),Object(u.jsx)(R,{children:"Shop the best in 3C electronics tailored to your life\u2014computers, smartphones, camera, and beyond."}),Object(u.jsx)(M,{children:Object(u.jsxs)(I,{onMouseEnter:o,onMouseLeave:o,primary:"true",dark:"true",smooth:!0,duration:500,spy:!0,exact:"true",offset:-80,onClick:()=>{a.push("/shop")},children:["SHOP NOW ",e?Object(u.jsx)(W,{}):Object(u.jsx)(N,{})]})})]})]})};const Y=s.a.div`
    color:#fff;
    background: ${e=>{let{lightBg:t}=e;return t?"#f9f9f9":"#010606"}};

    @media screen and (max-width:768px) {
        padding: 100px 0;
    }
`,_=s.a.div`
    display: grid;
    z-index: 1;
    height: 860px;
    width: 100%;
    max-width: 1100px;
    margin-right: auto;
    margin-left: auto;
    padding: 0 24px;
    justify-content: center;
`,H=s.a.div`
    display: grid;
    grid-auto-columns: minmax(auto, 1fr);
    align-items: center;
    grid-template-areas: ${e=>{let{imgStart:t}=e;return t?"'col2 col1'":"'col1 col2'"}};

    @media screen and (max-width: 768px) {
        grid-template-areas: ${e=>{let{imgStart:t}=e;return t?"'col1' 'col2'":"'col1 col1' 'col2 col2'"}};
    }
`,U=s.a.div`
    margin-bottom: 15px;
    padding: 0px 15px;
    grid-area: col1;
`,J=s.a.div`
    margin-bottom: 15px;
    padding: 0 15px;
    grid-area: col2;
`,V=s.a.div`
    max-width: 540px;
    padding-top: 0;
    padding-bottom: 60px;
`,K=s.a.p`
    color: #ff8368;
    font-size: 16px;
    line-height: 16px;
    font-weight: 700;
    letter-spacing: 1.4px;
    text-transform: uppercase;
    margin-bottom: 16px;
`,G=s.a.h1`
    margin-bottom: 24px;
    font-size: 48px;
    line-height: 1.1;
    font-weight: 600;
    color: ${e=>{let{lightText:t}=e;return t?"#f7f8fa":"#010606"}};

    @media screen and (max-width: 480px) {
        font-size: 32px;
    }
`,Q=s.a.p`
    max-width: 440px;
    margin-bottom: 35px;
    font-size: 18px;
    line-height: 24px;
    color: ${e=>{let{darkText:t}=e;return t?"#010606":"#fff"}};
`,X=s.a.div`
    display: flex;
    justify-content: flex-start;
`,Z=s.a.div`
    max-width: 555px;
    height: 100%;
`,ee=s.a.img`
    width: 100%;
    margin: 0 0 10px 0;
    padding-right: 0;
`;var te=e=>{let{lightBg:t,imgStart:i,id:n,topLine:r,lightText:a,headline:o,darkText:c,description:s,description2:d,buttonLabel:l,img:p,alt:x,primary:h,dark:m,dark2:f}=e;return Object(u.jsx)(u.Fragment,{children:Object(u.jsx)(Y,{lightBg:t,id:n,children:Object(u.jsx)(_,{children:Object(u.jsxs)(H,{imgStart:i,children:[Object(u.jsx)(U,{children:Object(u.jsxs)(V,{children:[Object(u.jsx)(K,{children:r}),Object(u.jsx)(G,{lightText:a,children:o}),Object(u.jsx)(Q,{darkText:c,children:s}),Object(u.jsx)(Q,{darkText:c,children:d}),Object(u.jsx)(X,{children:Object(u.jsx)(I,{to:"home",smooth:!0,duration:500,spy:!0,exact:"true",offset:-80,primary:1,dark:m?1:0,dark2:f?1:0,children:l})})]})}),Object(u.jsx)(J,{children:Object(u.jsx)(Z,{children:Object(u.jsx)(ee,{src:p,alt:x})})})]})})})})};const ie={id:"discover",lightBg:!0,lightText:!1,lightTextDesc:!1,topLine:"Company",headline:"TechNexus",description:"Technexus was born out of a passion for technology and a desire to enhance the shopping experience for tech enthusiasts around the world.To make buying technology as exciting and efficient as using it. We strive to stay ahead of the curve, constantly innovating our platform to deliver a smooth, hassle-free shopping experience. Whether you're a gamer, a professional, or someone who simply loves staying connected, we're here to support your journey with the best in tech.",buttonLabel:"LEARN MORE",imgStart:!0,img:i(40).default,alt:"Planet",dark:!1,primary:!1,darkText:!0};var ne=i.p+"static/media/laptop.7e49a606.png",re=i.p+"static/media/camera.221a98fe.png",ae=i.p+"static/media/pro-video.4be5eded.png",oe=i.p+"static/media/smartwatch.e61c2309.png",ce=i.p+"static/media/smart-phone.3dbffa24.png",se=i.p+"static/media/tablet.ce0f9508.png";const de=s.a.div`
    height: 1100px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background: #ff8368;

		@media screen and (max-width: 985px) {
        height: 1300px;
    }

    @media screen and (max-width: 885px) {
        height: 2300px;
    }

    @media screen and (max-width : 480px) {
        height: 2300px;
    }
`,le=s.a.div`
    max-width: 1000px;
    margin: 0 auto;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    align-items: center;
    grid-gap: 16px;
    padding: 0 50px;

    @media screen and (max-width: 1000px) {
        grid-template-columns: 1fr 1fr;
    }

    @media screen and (max-width: 768px) {
        grid-template-columns: 1fr;
        padding: 0 20px;
    }
`,pe=s.a.div`
    background: #fff;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    border-radius: 10px;
    max-height: 340px;
    padding: 30px;
    box-shadow: 0 1px 3px rgba(0,0,0,0.2);
    transition: all 0.2s ease-in-out;

    &:hover {
        transform: scale(1.02);
        transition: all 0.2s ease-in-out;
        cursor: pointer;
    }
`,xe=s.a.img`
    height: 160px;
    width: 160px;
    margin-bottom: 10px;
`,he=s.a.h1`
    font-size: 2.5rem;
    color: #fff;
    margin-bottom: 64px;

    @media screen and (max-width: 480px) {
        font-size: 2rem;
    }
`,me=s.a.h2`
    font-size: 1rem;
    margin-bottom: 10px;
`,fe=s.a.p`
    font-size: 1rem;
    text-align: center;
`;var ge=()=>{const e=Object(c.f)(),t=()=>{e.push("/shop")};return Object(u.jsxs)(de,{id:"services",children:[Object(u.jsx)(he,{children:"Our Products"}),Object(u.jsxs)(le,{children:[Object(u.jsxs)(pe,{onClick:t,children:[Object(u.jsx)(xe,{src:ne}),Object(u.jsx)(me,{children:"LAPTOP"}),Object(u.jsx)(fe,{children:"Combine cutting-edge performance with portability, empowering you to work, create, and play from anywhere."})]}),Object(u.jsxs)(pe,{onClick:t,children:[Object(u.jsx)(xe,{src:re}),Object(u.jsx)(me,{children:"CAMERA"}),Object(u.jsx)(fe,{children:"Capture every moment in stunning detail with our cameras, designed for precision, clarity, and ease of use, whether you're a professional or a hobbyist."})]}),Object(u.jsxs)(pe,{onClick:t,children:[Object(u.jsx)(xe,{src:ae}),Object(u.jsx)(me,{children:"PRO VIDEO"}),Object(u.jsx)(fe,{children:"Elevate your storytelling with our professional video equipment, delivering unmatched quality, versatility, and control for cinematic results every time."})]}),Object(u.jsxs)(pe,{onClick:t,children:[Object(u.jsx)(xe,{src:oe}),Object(u.jsx)(me,{children:"SMART WATCH"}),Object(u.jsx)(fe,{children:"Offer seamless integration of fitness tracking, notifications, and health monitoring in a sleek, wearable design."})]}),Object(u.jsxs)(pe,{onClick:t,children:[Object(u.jsx)(xe,{src:ce}),Object(u.jsx)(me,{children:"SMART PHONE"}),Object(u.jsx)(fe,{children:"Design for seamless connectivity, stunning visuals, and superior performance in the palm of your hand."})]}),Object(u.jsxs)(pe,{onClick:t,children:[Object(u.jsx)(xe,{src:se}),Object(u.jsx)(me,{children:"TABLETS"}),Object(u.jsx)(fe,{children:"Combine the power of a computer with the portability of a smartphone, offering a versatile solution for work, creativity, and entertainment on the go."})]})]})]})};const be=s.a.footer`
    background-color: #101522;
`,je=s.a.div`
    padding: 48px 24px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    max-width: 1100px;
    margin: 0 auto;
`,ue=(s.a.div`
    display: flex;
    justify-content: center;

    @media screen and (max-width: 820px) {
        padding-top: 32px;
    }
`,s.a.div`
    display: flex;
    
    @media screen and (max-width: 820px) {
        flex-direction: column;
    }
`,s.a.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    margin: 16px;
    text-align: left;
    width: 160px;
    box-sizing: border-box;
    color: #fff;

    @media screen and (max-width: 420px) {
        margin: 0;
        padding: 10px;
        width: 100%;
    }
`,s.a.h1`
    font-size: 14px;
    margin-bottom: 16px;
`,Object(s.a)(o.b)`
    color: #fff;
    text-decoration: none;
    margin-bottom: 0.5rem;
    font-size: 14px;

    &:hover {
        color: #ff8368;
        transition: 0.3 ease-out;
    }
`,s.a.section`
    max-width: 1000px;
    width: 100%;
`),Oe=s.a.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    max-width: 1100px;
    margin: 40px auto 0 auto;

    @media screen and (max-width: 820px) {
        flex-direction: column;
    }
`,we=Object(s.a)(o.b)`
    color: #fff;
    justify-self: start;
    cursor:pointer;
    text-decoration: none;
    font-size: 1.5rem;
    display: flex;
    align-items: center;
    margin-bottom: 16px;
    font-weight: bold;
`,ye=s.a.small`
    color: #fff;
    margin-bottom: 16px;
`,ve=s.a.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 240px;
`,ke=s.a.a`
    color: #fff;
    font-size: 24px;
`;var ze=()=>Object(u.jsx)(be,{id:"footer",children:Object(u.jsx)(je,{children:Object(u.jsx)(ue,{children:Object(u.jsxs)(Oe,{children:[Object(u.jsx)(we,{to:"/",onClick:()=>{l.animateScroll.scrollToTop()},children:"TechNexus Shop"}),Object(u.jsxs)(ye,{children:["TechNexus \xa9 ",(new Date).getFullYear()," All rights reserved"]}),Object(u.jsxs)(ve,{children:[Object(u.jsx)(ke,{href:"//www.twitter.com/",target:"_blank","aria-label":"Facebook",children:Object(u.jsx)(d.b,{})}),Object(u.jsx)(ke,{href:"/",target:"_blank","aria-label":"Instagram",children:Object(u.jsx)(d.c,{})}),Object(u.jsx)(ke,{href:"/",target:"_blank","aria-label":"YouTube",children:Object(u.jsx)(d.g,{})}),Object(u.jsx)(ke,{href:"/",target:"_blank","aria-label":"Twitter",children:Object(u.jsx)(d.f,{})}),Object(u.jsx)(ke,{href:"/",target:"_blank","aria-label":"LinkedIn",children:Object(u.jsx)(d.d,{})})]})]})})})});const Ce=s.a.div`
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;

    @media screen and (max-width: 400px) {
        height: 80%;
    }
`,Te=s.a.div`
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;

    @media screen and (max-width: 480px) {
        padding: 0; // Remove padding
    }
`,Se=s.a.form`
    max-width: 600px;
    height: auto;
    width: 100%;
    z-index: 1;
    display: grid;
    margin: 0 auto;
    padding: 0px 32px;
    border-radius: 4px;
    box-shadow: 0 1px 3px rgba(0,0,0,0.9);

    @media screen and (max-width: 768px) {
        padding: 32px 0; // Change padding to 32px top and bottom, 0 left and right
        box-shadow: none;
        border: none;
    }

    @media screen and (max-width: 400px) {
        padding: 32px 0; // Change padding to 32px top and bottom, 0 left and right
    }
`,Ae=s.a.label`
    margin-bottom: 8px;
    font-size: 14px;
    color: #000;
`,Ee=(s.a.input`
    padding: 16px 16px;
    margin-bottom: 16px;
    border: none;
    border-radius: 4px;
`,s.a.textarea`
    padding: 16px 16px;
    margin-bottom: 16px;
    border: none;
    border-radius: 4px;
    box-shadow: 0 1px 3px rgba(0,0,0,0.9); // match Form box-shadow
    width: 100%;
`),Fe=(s.a.select`
    padding: 16px 16px;
    margin-bottom: 16px;ff8368
    border: none;
    border-radius: 4px;
    box-shadow: 0 1px 3px rgba(0,0,0,0.9); // match Form box-shadow
    width: 100%;
`,s.a.button`
    background: #ff8368;
    padding: 16px 0;
    border: none;
    border-radius: 4px;
    color: #fffff;
    font-size: 20px;
    cursor: pointer;
`),Pe=s.a.span`
    text-align: center;
    margin-top: 16px;
    color: #fff;
    font-size: 14px;
`,$e=(s.a.h1`
    margin-bottom: 16px;
    color: #fff;
    font-size: 20px;
    font-weight: 400;
    text-align: center;
`,s.a.div`
    display: flex;
    justify-content: space-between;
    margin-bottom: 16px;
    padding: 0 10px;

    @media screen and (max-width: 768px) {
        flex-direction: column;
				padding: 0;
    }
`),Le=s.a.input`
    padding: 16px 16px;
    margin-bottom: 8px;
    border: none;
    border-radius: 4px;
    box-shadow: 0 1px 3px rgba(0,0,0,0.9);
    width: 100%;
    box-sizing: border-box;

    @media screen and (max-width: 768px) {
        width: 100%;
    }
`,qe=s.a.div`
    color:#fff;
    background: ${e=>{let{lightBg:t}=e;return t?"#f9f9f9":"#010606"}};

    @media screen and (max-width:768px) {
        padding: 10px 0;
				padding-bottom: 250px;
    }
`,Be=s.a.div`
    display: grid;
    z-index: 1;
    height: 800px;
    width: 100%;
    max-width: 1100px;
    margin-right: auto;
    margin-left: auto;
    padding: 0 24px;
    justify-content: center;
`,Re=s.a.div`
    display: grid;
    grid-auto-columns: minmax(auto, 2fr);
    align-items: center;
    grid-template-areas: ${e=>{let{imgStart:t}=e;return t?"'col2 col1'":"'col1 col2'"}};

    @media screen and (max-width: 768px) {
        grid-template-areas: ${e=>{let{imgStart:t}=e;return t?"'col1' 'col2'":"'col1 col1' 'col2 col2'"}};
    }
`,Me=s.a.div`
    margin-bottom: 15px;
    padding: 0px 15px;
    grid-area: col1;
`,Ne=s.a.div`
    margin-bottom: 15px;
    padding: 0 15px;
    grid-area: col2;
`,We=(s.a.div`
    padding: 5px;
    grid-area: col2;
`,s.a.div`
    max-width: 540px;
    padding-top: 0;
    padding-bottom: 60px;
`),Ie=(s.a.p`
    color: #ff8368;
    font-size: 16px;
    line-height: 16px;
    font-weight: 700;
    letter-spacing: 1.4px;
    text-transform: uppercase;
    margin-bottom: 16px;
`,s.a.h1`
    margin-bottom: 24px;
    font-size: 48px;
    line-height: 1.1;
    font-weight: 600;
    color: ${e=>{let{lightText:t}=e;return t?"#f7f8fa":"#010606"}};

    @media screen and (max-width: 480px) {
        font-size: 32px;
    }
`),De=s.a.p`
    max-width: 440px;
    margin-bottom: 35px;
    font-size: 18px;
    line-height: 24px;
    color: #010606;
`;s.a.div`
    display: flex;
    justify-content: flex-start;
`,s.a.div`
    max-width: 555px;
    height: 100%;
`,s.a.img`
    width: 100%;
    margin: 0 0 10px 0;
    padding-right: 0;
`;var Ye=()=>{const[e,t]=Object(n.useState)({name:"",email:"",message:""}),[i,r]=Object(n.useState)(""),{name:a,email:o,message:c}=e,s=i=>{t({...e,[i.target.name]:i.target.value})};return Object(u.jsx)(u.Fragment,{children:Object(u.jsx)(qe,{lightBg:!0,id:"contact",children:Object(u.jsx)(Be,{children:Object(u.jsxs)(Re,{imgStart:!1,children:[Object(u.jsx)(Me,{children:Object(u.jsxs)(We,{children:[Object(u.jsx)(Ie,{children:"Contact Us"}),Object(u.jsx)(De,{children:"At Technexus, we're dedicated to making your tech shopping experience smooth, efficient, and personalized. Whether you have questions about our products, need support with your order, or want to share feedback, we're here to help."})]})}),Object(u.jsx)(Ne,{children:Object(u.jsx)(Ce,{children:Object(u.jsx)(Te,{children:Object(u.jsxs)(Se,{name:"contact",method:"POST","data-netlify":"true","data-netlify-honeypot":"bot-field",onSubmit:i=>{i.preventDefault(),console.log("Transmitting data:",{"form-name":"contact",...e}),fetch("/api/contact",{method:"POST",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify(e)}).then((()=>{r("Form submitted successfully!"),t({name:"",email:"",message:""})})).catch((e=>{console.error(e),r("Form submission failed. Please try again later.")}))},children:[Object(u.jsx)("input",{type:"hidden",name:"form-name",value:"contact"}),Object(u.jsx)("p",{hidden:!0,children:Object(u.jsxs)("label",{children:["Don't fill this out: ",Object(u.jsx)(Le,{name:"bot-field",onChange:s})]})}),Object(u.jsxs)($e,{children:[Object(u.jsxs)(Ae,{htmlFor:"name",children:["Name",Object(u.jsx)(Le,{type:"text",id:"name",name:"name",value:a,onChange:s,required:!0})]}),Object(u.jsxs)(Ae,{htmlFor:"email",children:["Email",Object(u.jsx)(Le,{type:"email",id:"email",name:"email",value:o,onChange:s,required:!0})]})]}),Object(u.jsxs)(Ae,{htmlFor:"message",children:["Message",Object(u.jsx)(Ee,{id:"message",name:"message",value:c,onChange:s,required:!0})]}),Object(u.jsx)(Fe,{type:"submit",children:"SUBMIT"}),i&&Object(u.jsx)(Pe,{children:i})]})})})})]})})})})};const _e={id:"discover",lightBg:!0,lightText:!1,lightTextDesc:!1,topLine:"Contact Us",headline:"Technexus",description:"At Technexus, we're dedicated to making your tech shopping experience smooth, efficient, and personalized. Whether you have questions about our products, need support with your order, or want to share feedback, we're here to help.",imgStart:!1,img:i(40).default,alt:"Planet",dark:!1,primary:!1,darkText:!0};var He=()=>{const[e,t]=Object(n.useState)(!1),i=()=>{t(!e)};return Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)(O,{isOpen:e,toggle:i}),Object(u.jsx)(A,{toggle:i}),Object(u.jsx)(D,{}),Object(u.jsx)(ge,{}),Object(u.jsx)(te,{...ie}),Object(u.jsx)(Ye,{..._e}),Object(u.jsx)(ze,{})]})},Ue=i(19),Je=i.n(Ue);function Ve(){const{pathname:e}=Object(c.g)();return Object(n.useEffect)((()=>{window.scrollTo(0,0)}),[e]),null}const Ke=s.a.div`
  min-height: 692px;
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  top: 0;
  z-index: 0;
  overflow: hidden;
  background: linear-gradient(
    108deg,
    rgba(1, 147, 86, 1) 0%,
    rgba(10, 201, 122, 1) 100%
  );
`,Ge=s.a.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;

  @media screen and (max-width: 400px) {
    height: 80%;
  }
`,Qe=Object(s.a)(o.b)`
  // margin-left: 32px;
  // margin-top: 32px;
  margin: 40px auto;
  text-decoration: none;
  color: #fff;
  font-weight: 700;
  font-size: 32px;

  @media screen and (max-width: 480px) {
    margin-left: 16px;
    margin-top: 8px;
  }
`,Xe=s.a.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;

  @media screen and (max-width: 480px) {
    padding: 10px;
  }
`,Ze=s.a.form`
  background: #010101;
  max-width: 400px;
  height: auto;
  width: 100%;
  z-index: 1;
  display: grid;
  margin: 0 auto;
  padding: 80px 32px;
  border-radius: 4px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.9);

  @media screen and (max-width: 400px) {
    padding: 32px 32px;
  }
`,et=s.a.label`
  margin-bottom: 8px;
  font-size: 14px;
  color: #fff;
`,tt=s.a.input`
  padding: 16px 16px;
  margin-bottom: 32px;
  border: none;
  border-radius: 4px;
`,it=s.a.button`
  background: #ff8368;
  padding: 16px 0;
  border: none;
  border-radius: 4px;
  color: #fff;
  font-size: 20px;
  cursor: pointer;
`,nt=s.a.span`
  text-align: center;
  margin-top: 24px;
  color: #fff;
  font-size: 14px;
`,rt=s.a.h1`
  margin-bottom: 40px;
  color: #fff;
  font-size: 20px;
  font-weight: 400;
  text-align: center;
`;var at=()=>{const e=Object(c.f)(),[t,i]=Object(n.useState)(""),[r,a]=Object(n.useState)(""),[o,s]=Object(n.useState)(""),[d,l]=Object(n.useState)(!1);Object(n.useEffect)((()=>{window.fbAsyncInit=function(){window.FB.init({appId:"YOUR_FACEBOOK_APP_ID",cookie:!0,xfbml:!0,version:"v12.0"})}}),[]);return Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)(Ve,{}),Object(u.jsx)(Ke,{children:Object(u.jsxs)(Ge,{children:[Object(u.jsx)(Qe,{to:"/",children:"Login for Confirm Order"}),Object(u.jsxs)(Xe,{children:[Object(u.jsxs)(Ze,{onSubmit:async i=>{i.preventDefault();const n=d?"http://localhost:8080/api/signin":"http://localhost:8080/api/signin/verify";try{const i=await fetch(n,{method:"POST",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify({email:t,password:r})});if(!i.ok)throw new Error("Network response was not ok");const a=await i.json();console.log("Response data:",a),s("Form submitted successfully!"),d||e.push("/order-confirmation")}catch(a){console.error("Error during form submission:",a.message),s("Form submission failed. Please try again later.")}},children:[Object(u.jsx)(rt,{children:d?"Create an Account":"Sign in to your account"}),Object(u.jsx)(et,{htmlFor:"email",children:"Email"}),Object(u.jsx)(tt,{type:"email",value:t,onChange:e=>i(e.target.value),required:!0}),Object(u.jsx)(et,{htmlFor:"password",children:"Password"}),Object(u.jsx)(tt,{type:"password",value:r,onChange:e=>a(e.target.value),required:!0}),Object(u.jsx)(it,{type:"submit",children:d?"Create Account":"Continue"}),Object(u.jsx)("div",{style:{marginTop:"10px"},children:d?Object(u.jsx)(nt,{onClick:()=>l(!1),children:"Already have an account? Sign In"}):Object(u.jsx)(nt,{onClick:()=>l(!0),children:"Don't have an account? Create Account"})}),o&&Object(u.jsx)("p",{children:o})]}),Object(u.jsxs)("div",{children:[Object(u.jsx)("h1",{children:"Or"}),Object(u.jsx)("button",{onClick:()=>{window.FB.login((t=>{if(t.authResponse){const{accessToken:i}=t.authResponse;Je.a.set("fbToken",i,{expires:1}),e.push("/order-confirmation")}else console.error("User cancelled login or did not fully authorize.")}),{scope:"public_profile,email"})},children:"Continue with Facebook"})]})]})]})})]})},ot=i(20),ct=i(23);const st=Object(ct.b)({name:"cart",initialState:{cart:[]},reducers:{addToCart:(e,t)=>{const i=e.cart.find((e=>e.id===t.payload.id));i?i.quantity+=1:e.cart.push({...t.payload,quantity:1})},removeFromCart:(e,t)=>{const i=e.cart.find((e=>e.id===t.payload.id));1===i.quantity?e.cart=e.cart.filter((e=>e.id!==t.payload.id)):i.quantity-=1},clearCart:e=>{e.cart=[]}}}),{addToCart:dt,removeFromCart:lt,clearCart:pt}=st.actions;var xt=st.reducer;const ht=s.a.div`
  min-height: 100vh;
  padding: 100px 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: #f9f9f9;
`,mt=s.a.h1`
  font-size: 2.5rem;
  color: #333;
  margin-bottom: 64px;
`,ft=s.a.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  align-items: center;
  grid-gap: 16px;
  padding: 0 50px;
`,gt=s.a.div`
  background: #fff;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  border-radius: 10px;
  max-height: 340px;
  padding: 30px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
  transition: all 0.2s ease-in-out;

  &:hover {
    transform: scale(1.02);
    transition: all 0.2s ease-in-out;
    cursor: pointer;
  }
`,bt=s.a.img`
  height: 160px;
  width: 160px;
  margin-bottom: 10px;
`,jt=s.a.h2`
  font-size: 1rem;
  margin-bottom: 10px;
`,ut=s.a.p`
  font-size: 1rem;
  text-align: center;
`,Ot=s.a.button`
  border-radius: 20px;
  background: #01bf71;
  white-space: nowrap;
  padding: 8px 16px; /* Make the button thinner */
  color: #fff;
  font-size: 14px;
  outline: none;
  border: none;
  cursor: pointer;
  margin: 5px 0; /* Add margin for spacing */
  transition: all 0.2s ease-in-out;
  text-decoration: none;

  &:hover {
    transition: all 0.2s ease-in-out;
    background: #fff;
    color: #01bf71;
  }
`,wt=(s.a.button`
  border-radius: 20px;
  background: #ff4040;
  white-space: nowrap;
  padding: 8px 16px; /* Make the button thinner */
  color: #fff;
  font-size: 14px;
  outline: none;
  border: none;
  cursor: pointer;
  margin: 5px 0; /* Add margin for spacing */
  transition: all 0.2s ease-in-out;
  text-decoration: none;

  &:hover {
    transition: all 0.2s ease-in-out;
    background: #fff;
    color: #ff4040;
  }
`,s.a.div`
  width: 100%;
  max-width: 800px;
  margin-top: 40px;
  background: #fff;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
  text-align: center;
`),yt=s.a.h2`
  font-size: 2rem;
  margin-bottom: 20px;
  color: #333;
`,vt=s.a.ul`
  list-style-type: none;
  padding: 0;
  margin-bottom: 20px;
  text-align: left;
`,kt=s.a.li`
  font-size: 1rem;
  padding: 10px 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid #f1f1f1;
`,zt=s.a.button`
  border-radius: 5px;
  background: #ff4040;
  white-space: nowrap;
  padding: 5px 10px;
  color: #fff;
  font-size: 12px;
  outline: none;
  border: none;
  cursor: pointer;
  transition: all 0.2s ease-in-out;

  &:hover {
    transition: all 0.2s ease-in-out;
    background: #fff;
    color: #ff4040;
  }
`,Ct=s.a.h3`
  font-size: 1.5rem;
  color: #333;
`,Tt=[{id:1,name:"LAPTOP",image:ne,price:1200},{id:2,name:"CAMERA",image:re,price:800},{id:3,name:"PRO VIDEO",image:ae,price:1500},{id:4,name:"SMART WATCH",image:oe,price:300},{id:5,name:"SMART PHONE",image:ce,price:1e3},{id:6,name:"TABLETS",image:se,price:700}];var St=()=>{const e=Object(ot.b)(),t=Object(c.f)(),i=Object(ot.c)((e=>e.cart.cart)),n=i.reduce(((e,t)=>e+t.price*t.quantity),0);return Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)(O,{}),Object(u.jsx)(A,{}),Object(u.jsxs)(ht,{children:[Object(u.jsx)(mt,{children:"Shop Our Products"}),Object(u.jsx)(ft,{children:Tt.map((t=>Object(u.jsxs)(gt,{children:[Object(u.jsx)(bt,{src:t.image}),Object(u.jsx)(jt,{children:t.name}),Object(u.jsxs)(ut,{children:["Price: $",t.price]}),Object(u.jsx)(Ot,{onClick:()=>e(dt(t)),children:"Add to Cart"})]},t.id)))}),Object(u.jsxs)(wt,{children:[Object(u.jsx)(yt,{children:"Cart Summary"}),0===i.length?Object(u.jsx)("p",{children:"Your cart is empty"}):Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)(vt,{children:i.map(((t,i)=>Object(u.jsxs)(kt,{children:[t.name," - $",t.price," x ",t.quantity,Object(u.jsx)(zt,{onClick:()=>e(lt(t)),children:"Remove"})]},i)))}),Object(u.jsxs)(Ct,{children:["Total: $",n]}),Object(u.jsx)(Ot,{onClick:()=>{t.push("/checkout",{cart:i,total:n})},children:"Proceed to Checkout"})]})]})]}),Object(u.jsx)(ze,{})]})};const At=s.a.div`
  min-height: 100vh;
  padding: 100px 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: #f9f9f9;
`,Et=s.a.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 80%;
  max-width: 800px;
  background: #fff;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
`,Ft=s.a.h2`
  font-size: 2rem;
  margin-bottom: 20px;
  color: #333;
`,Pt=s.a.div`
  font-size: 1rem;
  padding: 10px 0;
  border-bottom: 1px solid #f1f1f1;
  width: 100%;
  text-align: left;
`,$t=s.a.h3`
  font-size: 1.5rem;
  margin-top: 20px;
  color: #333;
`,Lt=s.a.button`
  margin-top: 20px;
  border-radius: 50px;
  background: #01bf71;
  white-space: nowrap;
  padding: 10px 22px;
  color: #fff;
  font-size: 16px;
  outline: none;
  border: none;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-decoration: none;

  &:hover {
    transition: all 0.2s ease-in-out;
    background: #fff;
    color: #01bf71;
  }
`;var qt=()=>{const e=Object(c.g)(),t=Object(c.f)(),{cart:i,total:r}=e.state||{cart:[],total:0};return Object(n.useEffect)((()=>{Je.a.get("fbToken")||t.push("/signin")}),[t]),Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)(O,{}),Object(u.jsx)(A,{}),Object(u.jsxs)(At,{children:[Object(u.jsx)(Ft,{children:"Order Summary"}),Object(u.jsx)(Et,{children:0===i.length?Object(u.jsx)("p",{children:"Your cart is empty."}):Object(u.jsxs)(u.Fragment,{children:[i.map(((e,t)=>Object(u.jsxs)(Pt,{children:[e.name," - $",e.price," x ",e.quantity]},t))),Object(u.jsxs)($t,{children:["Total: $",r]}),Object(u.jsx)(Lt,{onClick:()=>t.push("/order-confirmation"),children:"Proceed to Order Confirmation"})]})})]}),Object(u.jsx)(ze,{})]})};var Bt=()=>{const e=Object(c.f)();return Object(n.useEffect)((()=>{alert("Order Confirmed!");const t=setTimeout((()=>{alert("Session expired. You will be logged out."),Je.a.remove("fbToken"),e.push("/signin")}),3e5);return()=>clearTimeout(t)}),[e]),Object(u.jsxs)("div",{children:[Object(u.jsx)("h1",{children:"Order Confirmed!"}),Object(u.jsx)("p",{children:"Your order is being processed. You will be logged out in 1 minute."})]})};var Rt=function(){return Object(u.jsx)(o.a,{children:Object(u.jsxs)(c.c,{children:[Object(u.jsx)(c.a,{path:"/",component:He,exact:!0}),Object(u.jsx)(c.a,{path:"/shop",component:St,exact:!0}),Object(u.jsx)(c.a,{path:"/checkout",component:qt,exact:!0}),Object(u.jsx)(c.a,{path:"/signin",component:at,exact:!0}),Object(u.jsx)(c.a,{path:"/order-confirmation",component:Bt,exact:!0})," "]})})};const Mt=Object(ct.a)({reducer:{cart:xt}});a.a.render(Object(u.jsx)(ot.a,{store:Mt,children:Object(u.jsx)(Rt,{})}),document.getElementById("root")),"serviceWorker"in navigator&&window.addEventListener("load",(()=>{navigator.serviceWorker.register("/serviceWorker.js").then((e=>{console.log("ServiceWorker registration successful with scope: ",e.scope)})).catch((e=>{console.error("ServiceWorker registration failed: ",e)}))}))}},[[67,1,2]]]);
//# sourceMappingURL=main.42013f25.chunk.js.map