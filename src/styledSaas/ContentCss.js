import styled from "@emotion/styled";


export const ContentDiv=styled.div`
display: flex;
flex-direction: column;
width: 100%;
margin-top: 0.5rem/* 8px */;
`;

export const TextArea=styled.textarea`
width: 100%;
padding-left: 1rem/* 16px */;
padding-right: 1rem/* 16px */;
padding-top: 0.5rem/* 8px */;
padding-bottom: 0.5rem/* 8px */;
font-size: 1.25rem/* 20px */;
line-height: 1.75rem/* 28px */;
--tw-text-opacity: 1;
color: rgb(55 65 81 / var(--tw-text-opacity));
--tw-bg-opacity: 1;
background-color: rgb(255 255 255 / var(--tw-bg-opacity));
border-width: 1px;
--tw-border-opacity: 1;
border-color: rgb(209 213 219 / var(--tw-border-opacity));
border-radius: 0.25rem/* 4px */;
transition-property: color, background-color, border-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter;
transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
transition-duration: 150ms;

&:focus{
  --tw-text-opacity: 1;
  color: rgb(55 65 81 / var(--tw-text-opacity));
  --tw-bg-opacity: 1;
  background-color: rgb(255 255 255 / var(--tw-bg-opacity));
  --tw-border-opacity: 1;
  border-color: rgb(71 85 105 / var(--tw-border-opacity));
}
`;


export const Button=styled.button`
  padding-left: 1.75rem/* 28px */;
  padding-right: 1.75rem/* 28px */;
  padding-top: 0.75rem/* 12px */;
  padding-bottom: 0.75rem/* 12px */;
  --tw-bg-opacity: 1;
  background-color: rgb(37 99 235 / var(--tw-bg-opacity));
  --tw-text-opacity: 1;
  text-align: center;
  margin-bottom: 1.5rem/* 24px */;
  color: rgb(255 255 255 / var(--tw-text-opacity));
  border-radius: 0.25rem/* 4px */;
  font-size: 0.875rem/* 14px */;
  line-height: 1.25rem/* 20px */;
  text-transform: uppercase;
  width: 100%;
  --tw-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1);
  --tw-shadow-colored: 0 4px 6px -1px var(--tw-shadow-color), 0 2px 4px -2px var(--tw-shadow-color);
  box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);
  transition-property: color, background-color, border-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 150ms;

  &:hover{
    --tw-bg-opacity: 1;
    background-color: rgb(29 78 216 / var(--tw-bg-opacity));
    --tw-shadow: 0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1);
    --tw-shadow-colored: 0 10px 15px -3px var(--tw-shadow-color), 0 4px 6px -4px var(--tw-shadow-color);
    box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);
  }

  &:focus{
    --tw-bg-opacity: 1;
    background-color: rgb(29 78 216 / var(--tw-bg-opacity));
    --tw-shadow: 0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1);
    --tw-shadow-colored: 0 10px 15px -3px var(--tw-shadow-color), 0 4px 6px -4px var(--tw-shadow-color);
    box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);
  }

  &:active{
    --tw-bg-opacity: 1;
    background-color: rgb(30 64 175 / var(--tw-bg-opacity));
    --tw-shadow: 0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1);
    --tw-shadow-colored: 0 10px 15px -3px var(--tw-shadow-color), 0 4px 6px -4px var(--tw-shadow-color);
    box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);
  }
`;