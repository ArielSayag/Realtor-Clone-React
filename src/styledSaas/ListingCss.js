import styled from "@emotion/styled";

// MyListing Page
export const H1=styled.h1`
  font-size: 1.875rem/* 30px */;
  line-height: 2.25rem/* 36px */;
  text-align: center;
  margin-top: 1.5rem/* 24px */;
  font-weight: 700;
`;

export const Main=styled.main`
  max-width: 28rem/* 448px */;
  padding-left: 0.5rem/* 8px */;
  padding-right: 0.5rem/* 8px */;
  margin-left: auto;
  margin-right: auto;
`;

export const PHeadLine=styled.p`
  font-size: 1.125rem/* 18px */;
  line-height: 1.75rem/* 28px */;
  margin-top: 1.5rem/* 24px */;
  font-weight: 600;
`;

export const RadioButton=styled.button`

padding-left: 1.75rem/* 28px */;
padding-right: 1.75rem/* 28px */;
padding-top: 0.75rem/* 12px */;
padding-bottom: 0.75rem/* 12px */;
font-weight: 500;
font-size: 0.875rem/* 14px */;
  line-height: 1.25rem/* 20px */;
  text-transform: uppercase;
  --tw-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1);
  --tw-shadow-colored: 0 4px 6px -1px var(--tw-shadow-color), 0 2px 4px -2px var(--tw-shadow-color);
  box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);
  border-radius: 0.25rem/* 4px */;
  transition-property: color, background-color, border-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 150ms;
  width: 100%;
  
  &:focus,
  &:hover,
  &:active{
    --tw-shadow: 0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1);
    --tw-shadow-colored: 0 10px 15px -3px var(--tw-shadow-color), 0 4px 6px -4px var(--tw-shadow-color);
    box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);
  }
`;


export const InputForm=styled.input`
  width: 100%;
  margin-bottom: 1.5rem;
  padding-left: 1rem  ;
  padding-right: 1rem;
  padding-top: 0.5re;
  padding-bottom: 0.5re;
  font-size: 1.25rem;
  line-height: 1.75rem;
  --tw-text-opacity: 1;
  color: rgb(55 65 81 / var(--tw-text-opacity));
  --tw-bg-opacity: 1;
  background-color: rgb(255 255 255 / var(--tw-bg-opacity));
  --tw-border-opacity: 1;
  border-color: rgb(209 213 219 / var(--tw-border-opacity));
  border-radius: 0.25rem;
  transition-property: color, background-color, border-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 150ms;
`;


export const TextAreaForm=styled.textarea`
  width: 100%;
  margin-bottom: 1.5rem;
  padding-left: 1rem  ;
  padding-right: 1rem;
  padding-top: 0.5re;
  padding-bottom: 0.5re;
  font-size: 1.25rem;
  line-height: 1.75rem;
  --tw-text-opacity: 1;
  color: rgb(55 65 81 / var(--tw-text-opacity));
  --tw-bg-opacity: 1;
  background-color: rgb(255 255 255 / var(--tw-bg-opacity));
  --tw-border-opacity: 1;
  border-color: rgb(209 213 219 / var(--tw-border-opacity));
  border-radius: 0.25rem;
  transition-property: color, background-color, border-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 150ms;
`;

export const InputFile=styled.input`
  width: 100%;
  padding-left: 0.75rem/* 12px */;
  padding-right: 0.75rem/* 12px */;
  padding-top: 0.375rem/* 6px */;
  padding-bottom: 0.375rem/* 6px */;
  --tw-text-opacity: 1;
  color: rgb(55 65 81 / var(--tw-text-opacity));
  --tw-bg-opacity: 1;
  background-color: rgb(255 255 255 / var(--tw-bg-opacity));
  --tw-border-opacity: 1;
 
  border-color: rgb(209 213 219 / var(--tw-border-opacity));
  border-radius: 0.25rem/* 4px */;
  transition-property: color, background-color, border-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 150ms;

  &focus:{
    --tw-bg-opacity: 1;
    background-color: rgb(255 255 255 / var(--tw-bg-opacity));
    --tw-border-opacity: 1;
    border-color: rgb(71 85 105 / var(--tw-border-opacity));
  }
`;

// single listing

export const ShareIconDiv=styled.div`
  position: fixed;
  top: 13%;
  right: 3%;
  z-index: 10;
  --tw-bg-opacity: 1;
  background-color: rgb(255 255 255 / var(--tw-bg-opacity));
  cursor: pointer;
  border-radius: 9999px;
  border-width: 2px;
  --tw-border-opacity: 1;
  border-color: rgb(156 163 175 / var(--tw-border-opacity));
  width: 3rem/* 48px */;
  height: 3rem/* 48px */;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const CopiedText=styled.p`
  position:fixed;
  top:23%;
  right:7%;
  font-weight: 600;
  border-width: 2px;
  --tw-border-opacity: 1;
  border-color: rgb(156 163 175 / var(--tw-border-opacity));
  border-radius: 0.375rem/* 6px */;
  --tw-bg-opacity: 1;
  background-color: rgb(255 255 255 / var(--tw-bg-opacity));
  z-index: 10;
  padding: 0.5rem/* 8px */;
`;