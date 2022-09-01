import { FC, useEffect, useState } from "react";
import NextLink from "next/link";
import { Ancor, Container } from "./styles";
import { useRouter } from "next/router";

interface Props {
  path?: string;
}
export const CustomLink: FC<Props> = ({ path }) => {
  const { asPath } = useRouter();
  const [isPressed, setIsPressed] = useState<boolean>(false);
  useEffect(() => {
    if (asPath === `/${path}`) {
      setIsPressed(true);
    }
    return () => setIsPressed(false);
  }, [, asPath, path]);
  return (
    <Container>
      <NextLink href={`/${path}`} passHref>
        <Ancor isPressed={isPressed}>{path}</Ancor>
      </NextLink>
    </Container>
  );
};
