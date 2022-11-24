import { SVGProps } from "react";
import { ContainerIcon, SvgStyled } from "./styles";

export const Twitter = (props: SVGProps<SVGSVGElement>) => (
  <ContainerIcon>
    <a
      href="https://twitter.com/JAF_Maki"
      target="_blank"
      rel="noreferrer noopener"
      title="Twitter"
    >
      <SvgStyled
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 50 50"
        width={42}
        height={40}
      >
        <path d="M50.063 10.438a20.57 20.57 0 0 1-5.91 1.62 10.309 10.309 0 0 0 4.523-5.687 20.648 20.648 0 0 1-6.531 2.492 10.258 10.258 0 0 0-7.504-3.246c-5.68 0-10.286 4.602-10.286 10.281 0 .805.094 1.59.27 2.344-8.547-.43-16.121-4.523-21.195-10.746a10.243 10.243 0 0 0-1.39 5.172c0 3.566 1.812 6.715 4.573 8.562a10.274 10.274 0 0 1-4.66-1.289v.13c0 4.984 3.547 9.136 8.246 10.085a10.29 10.29 0 0 1-4.644.172c1.312 4.082 5.11 7.063 9.605 7.145A20.613 20.613 0 0 1 2.39 41.87c-.831 0-1.648-.047-2.449-.144a29.053 29.053 0 0 0 15.762 4.62c18.914 0 29.258-15.667 29.258-29.253 0-.446-.012-.895-.027-1.332a20.904 20.904 0 0 0 5.129-5.325Z" />
      </SvgStyled>
    </a>
  </ContainerIcon>
);
