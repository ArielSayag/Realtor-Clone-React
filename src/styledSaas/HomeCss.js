import styled from "@emotion/styled";

export const DivSection=styled.div`
margin: 0.5rem/* 8px */;
margin-bottom: 1.5rem/* 24px */;
`;

export const H2=styled.h2`
padding-left: 12px ;
padding-right:  12px ;
font-size:  24px ;
line-height: 32px ;
margin-top: 24px ;
font-weight: 600;
`;

export const PSection=styled.p`
padding-left: 12px ;
padding-right: 12px ;
font-size:  14px ;
line-height: 20px ;
--tw-text-opacity: 1;
color: rgb(37 99 235 / var(--tw-text-opacity));
transition-property: color, background-color, border-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter;
transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
transition-duration: 150ms;

&.hover:{
  --tw-text-opacity: 1;
  color: rgb(30 64 175 / var(--tw-text-opacity));
}
`;

export const UlSection=styled.ul`
  @media (min-width: 640px) {
      display: grid;
  }

  @media (min-width: 640px) {
      grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  @media (min-width: 1024px) {
      grid-template-columns: repeat(3, minmax(0, 1fr));
  }

  @media (min-width: 1280px) {
      grid-template-columns: repeat(4, minmax(0, 1fr));
  }
`;