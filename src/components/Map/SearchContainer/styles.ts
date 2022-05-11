import { MarkerGEO } from "assets";
import styled from "styled-components";
import { colors } from "styles";

export const SearchWrapper = styled.div<{ $visible: boolean }>`
  position: absolute;
  top: ${({ $visible }) => ($visible ? "93px" : "33px")};
  left: 50%;
  margin-right: -50%;
  transform: translate(-50%, -50%);
  z-index: 9999999;
  width: 100%;
  max-width: 420px;
`;

export const SearchInput = styled.input`
  width: 100%;
  margin-bottom: 4px;
  outline: none;
  border: 1px solid ${colors.NIGHT_2};
  border-radius: 8px;
  padding: 12px 12px 12px 55px;
  background-image: url(${MarkerGEO});
  background-repeat: no-repeat;
  background-position: 15px;
`;

export const List = styled.ul<{ $visible: boolean }>`
  width: 100%;
  border: 1px solid ${colors.NIGHT_2};
  border-radius: 8px;
  padding-left: 0;
  background-color: ${colors.DAY};
  opacity: ${({ $visible }) => ($visible ? 1 : 0)};
  transition-duration: 0.3s;
`;

export const ListItem = styled.li`
  height: 27px;
  padding: 5px 8px;
  border-bottom: 1px solid ${colors.NIGHT_4};
  font-size: 14px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  cursor: pointer;

  &:hover {
    background-color: ${colors.NIGHT_4};
  }
`;
