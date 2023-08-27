import styled from '@emotion/styled';

export const MainDiv=styled.div`
max-width: 1152px ;
margin-left: auto;
margin-right: auto;
padding-left:  12px ;
  padding-right:  12px ;
`;

export const H1=styled.h1`
font-size: 30px ;
  line-height:  36px ;
  text-align: center;
  margin-top:  24px ;
  font-weight: 700;
  margin-bottom: 24px ;
`;

export const UlOffers=styled.ul`
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

@media (min-width: 1536px) {
  grid-template-columns: repeat(5, minmax(0, 1fr));
}
`;

export const SecondDiv=styled.div`
display: flex;
justify-content: center;
align-items: center;
`;


export const Button=styled.button`
--tw-bg-opacity: 1;
background-color: rgb(255 255 255 / var(--tw-bg-opacity));
padding-left:  12px ;
  padding-right:  12px ;
  padding-top:  6px ;
  padding-bottom:  6px ;
  --tw-text-opacity: 1;
  color: rgb(55 65 81 / var(--tw-text-opacity));
  border-width: 1px;
  --tw-border-opacity: 1;
  border-color: rgb(209 213 219 / var(--tw-border-opacity));
  margin-bottom: 24px ;
  margin-top: 24px ;
  border-radius:  4px ;
  transition-property: color, background-color, border-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 150ms;

  &.hover:{
    --tw-border-opacity: 1;
    border-color: rgb(71 85 105 / var(--tw-border-opacity));
  }
`;