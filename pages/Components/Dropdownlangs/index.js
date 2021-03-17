import React, { useState } from "react";
import style from "styled-components";
import Link from 'next/link'
const DropDownContainer = style("div")`
  width: 50%;
  margin: 0 auto;
  @media(min-width: 700px){
      width: 80px;
  }
`;

const DropDownHeader = style("div")`
  cursor: pointer;
  padding: 0.4em 2em 0.4em 1em;
  font-weight: 500;
  font-size: 1rem;
  color: ${({ theme }) => theme.text};
`;

const DropDownListContainer = style("div")`
  background: ${({ theme }) => theme.body};
  position: absolute;
  z-index: 100;
  width: 10%;
  @media(min-width: 700px){
    width: 8%;
  }
`;

const DropDownList = style("ul")`
  padding: 0;
  margin: 0;
  padding-left: 1em;
  background: ${({ theme }) => theme.body};
  border: 2px solid #333;
  box-sizing: border-box;
  color: ${({ theme }) => theme.text};
  font-size: .9rem;
  font-weight: 600;
  z-index: 2;
  &:first-child {
    padding-top: 0.8em;
  }
`;

const ListItem = style("li")`
  cursor: pointer;
  list-style: none;
  margin-bottom: 0.8em;
  &:hover {
    color: ${({ theme }) => theme.text};
  }
`;



const DropdownLangs = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);

  const toggling = () => setIsOpen(!isOpen);

  const onOptionClicked = value => () => {
    setSelectedOption(value);
    setIsOpen(false);
    console.log(selectedOption);
  };

  return (
    <>
      <DropDownContainer>
        <DropDownHeader onClick={toggling}>
          {selectedOption || "Lang"}
        </DropDownHeader>
        {isOpen && (
          <DropDownListContainer>
            <DropDownList>
              <ListItem>
                <Link href="/">
                  <a>PT-BR</a>
                </Link>
              </ListItem>
              <ListItem>
                <Link href="/eng/home">
                  <a>EN</a>
                </Link>
              </ListItem>
            </DropDownList>
          </DropDownListContainer>
        )}
      </DropDownContainer>
    </>
  );
}

export default DropdownLangs;