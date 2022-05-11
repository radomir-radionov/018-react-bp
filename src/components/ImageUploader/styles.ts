import { CloseThumbSVG, DownloadSVG } from "assets";
import styled from "styled-components";

import { colors, typography } from "styles";

export const ImageUploaderContainer = styled.div`
  max-width: 720px;
  border: 1px solid ${colors.NIGHT_2};
  border-radius: 8px;
  text-align: center;

  & button {
    margin: 0 auto 16px;
  }
`;

export const DropZone = styled.div`
  padding: 16px;
`;

export const Input = styled.input``;

export const Button = styled.button`
  margin-bottom: 16px;
`;

export const Text = styled.p`
  margin: 0 auto;
  max-width: 294px;
  ${typography.BODY3};
`;

export const ThumbsContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 12px;
`;

export const Thumb = styled.div`
  position: relative;
  width: 100;
  height: 100;
  margin: 0 8px;
  border: 1px solid ${colors.AUTUMN_2};
  border-radius: 8px;
`;

export const ThumbInner = styled.div`
  display: flex;
  min-width: 0;
  overflow: hidden;
`;

export const Image = styled.img`
  display: block;
  width: 70px;
  height: 70px;
  border-radius: 8px;
`;

export const CloseIcon = styled(CloseThumbSVG)`
  position: absolute;
  top: -7px;
  right: -7px;
  cursor: pointer;
`;

export const DownloadWrapper = styled.div`
  display: flex;
  align-items: center;
`;

export const DownloadIcon = styled(DownloadSVG)`
  margin-right: 8px;
`;
