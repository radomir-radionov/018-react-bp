import { memo, MouseEvent } from "react";
import { useDropzone } from "react-dropzone";
import { ButtonImage } from "components";
import { generateURL } from "./data";
import {
  DropZone,
  ImageUploaderContainer,
  Input,
  Text,
  Thumb,
  ThumbInner,
  ThumbsContainer,
  Image,
  CloseIcon,
  DownloadIcon,
  DownloadWrapper,
} from "./styles";
import { ICustomFile } from "./types";

interface IProps {
  files: ICustomFile[];
  setFiles: (files: ICustomFile[]) => void;
}

function ImageUploader({ files, setFiles }: IProps) {
  const { getRootProps, getInputProps, open } = useDropzone({
    accept: { "image/*": [] },
    onDrop: (acceptedFiles: File[]) => {
      const filesWithPreview: ICustomFile[] = generateURL(acceptedFiles);
      const result: ICustomFile[] = [...files, ...filesWithPreview];
      setFiles(result);
    },
  });

  const deleteThumb = (event: MouseEvent<SVGSVGElement>) => {
    event.stopPropagation();
    const newFiles: ICustomFile[] = [...files];
    newFiles.splice(+event.currentTarget.id, 1);

    const filesWithPreview: ICustomFile[] = generateURL(newFiles);
    setFiles(filesWithPreview);
  };

  // Make sure to revoke the data uris to avoid memory leaks, will run on unmount
  // useEffect(() => {
  //   return () =>
  //     files.forEach((file: any) => URL.revokeObjectURL(file.preview));
  // }, [files]);

  return (
    <ImageUploaderContainer>
      <DropZone {...getRootProps({ className: "dropzone" })}>
        <ThumbsContainer>
          {files.map((file: any, index) => (
            <Thumb key={index}>
              <CloseIcon onClick={deleteThumb} id={`${index}`} />
              <ThumbInner>
                <Image
                  src={file.preview}
                  onLoad={() => {
                    URL.revokeObjectURL(file.preview);
                  }}
                />
              </ThumbInner>
            </Thumb>
          ))}
        </ThumbsContainer>
        <Input {...getInputProps()} />
        <ButtonImage type="button" onClick={open}>
          <DownloadWrapper>
            <DownloadIcon />
            ???????????????? ????????
          </DownloadWrapper>
        </ButtonImage>
        <Text>
          ?????? ???????????? ???????????????????? ???????????????? ???????? ???? ???????????? ???????????????? ???? ?????????? 5
          ????????????
        </Text>
      </DropZone>
    </ImageUploaderContainer>
  );
}

export default memo(ImageUploader);
