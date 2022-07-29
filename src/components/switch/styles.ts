import styled from "styled-components";

const size = { height: "18px", width: "36px" };

type props =
  {
    color: string;
  }

export const CheckBoxWrapper = styled.div`
  position: relative;
`;

export const CheckBoxLabel = styled.label<props>`
  position: absolute;
  top: 0;
  left: 0;
  width: ${size.width};
  height:${size.height};
  border-radius: 15px;
  background: #FFF;
  cursor: pointer;
  &::after {
    content: "";
    display: block;
    border-radius: 50%;
    width: ${size.height};
    height:${size.height};
    margin: 0 0 0 .3px;
    background: ${({ color }) => color};
    box-shadow: 1px 3px 3px 1px rgba(0, 0, 0, 0.2);
    transition: 0.2s;
  }
`;

export const CheckBox = styled.input<props>`
  cursor: ${({ disabled }) => disabled ? "default" : "pointer"};
  opacity: 0;
  z-index: 1;
  border-radius: 15px;
  width: ${size.width};
  height:${size.height};
  &:checked + ${CheckBoxLabel} {
    background: #FFF;
    &::after {
      content: "";
      display: block;
      border-radius: 50%;
      width: ${size.height};
      height:${size.height};
      margin-left: 21px;
      transition: 0.2s;
    }
  }
`;