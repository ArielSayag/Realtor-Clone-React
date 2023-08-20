import styled from '@emotion/styled';

export const LiMyList=styled.li`
position:relative;
margin:10px;
  --tw-bg-opacity: 1;
  background-color: rgb(255 255 255 / var(--tw-bg-opacity));
  display:flex;
  flex-direction:column;
  justify-content: space-between;
  align-items: center;
  border-radius: 0.375rem/* 6px */;
  overflow: hidden;
  --tw-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1);
  --tw-shadow-colored: 0 4px 6px -1px var(--tw-shadow-color), 0 2px 4px -2px var(--tw-shadow-color);
  box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);
  transition-property: box-shadow;
    transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
    transition-duration: 105ms;

  &:hover{
    --tw-shadow: 0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1);
    --tw-shadow-colored: 0 20px 25px -5px var(--tw-shadow-color), 0 8px 10px -6px var(--tw-shadow-color);
    box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);
  }
`;

export const ImgMyList=styled.img`
  height: 170px;
  width: 100%;
  object-fit: cover;
  transition-property: color, background-color, border-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter;
  transition-timing-function: cubic-bezier(0.4, 0, 1, 1);
  transition-duration: 105ms;

  &:hover{
    --tw-scale-x: 1.05;
    --tw-scale-y: 1.05;
    transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
  }
`;

export const FooterDiv=styled.div`
  width:100%;
  padding:10px;
`;

export const FooterDivIcon=styled.div`
  display:flex;
  align-items:center;
  --tw-space-x-reverse: 0;
  margin-right: calc(0.25rem * var(--tw-space-x-reverse));
  margin-left: calc(0.25rem * calc(1 - var(--tw-space-x-reverse)));
`;

export const AddressText=styled.p`
  font-weight:600;
  font-size:14px;
  line-height:20px;
  margin-bottom:2px;
  --tw-text-opacity: 1;
  color: rgb(75 85 99 / var(--tw-text-opacity));
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

export const NameText=styled.p`
  font-weight:600;
  margin:0px;
  font-size:20px;
  line-height:28px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

export const PriceText=styled.p`
  --tw-text-opacity: 1;
  color: rgb(69 123 157 / var(--tw-text-opacity));
  }
  margin-top:2px;
  font weight:600;
`;

export const FooterBottomDiv=styled.div`
  display:flex;
  align-items:center;
  margin-top:10px;
  --tw-space-x-reverse: 0;
  margin-right: calc(0.75rem * var(--tw-space-x-reverse));
  margin-left: calc(0.75rem * calc(1 - var(--tw-space-x-reverse)));
`;

export const FooterBottomSeconde=styled.div`
  display:flex;
  align-items:center;
  --tw-space-x-reverse: 0;
    margin-right: calc(0.25rem * var(--tw-space-x-reverse));
    margin-left: calc(0.25rem * calc(1 - var(--tw-space-x-reverse)));
`;

export const FooterText=styled.p`
  font weight:700;
  font-size:12px;
  font-height:16px;
`;