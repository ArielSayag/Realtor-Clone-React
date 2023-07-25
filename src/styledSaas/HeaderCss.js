import styled from "@emotion/styled";

export const LiRoute=styled.li`
  padding-top: 0.75rem;
  cursor: pointer;
  padding-bottom: 0.75rem;
  font-size: 0.875rem;
  line-height: 1.25rem;
  font-weight: 600;
  --tw-text-opacity: 1;
  color: rgb(156 163 175 / var(--tw-text-opacity));
  border-bottom-width: 3px;
  border-bottom-color: transparent;

  &.active {
    color: black;
    border-bottom-color: red;
  }
`;