import { Container, ContainerProps } from "@mui/material";

interface ContainerComponentProps extends ContainerProps {
  children?: React.ReactNode;
  component?: "main";
  maxWidth?: "xs";
  size?: "xs";
  props: any;
}

const ContainerComponent: React.FC<ContainerProps> = ({
  children,
  ...props
}) => {
  return <Container {...props}>{children}</Container>;
};

export default ContainerComponent;
