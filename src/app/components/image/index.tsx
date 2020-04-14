import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Loader } from "..";
import { InlineSVG } from "../../utils";
import { makeFlex } from "../../mixins";
import { useIntersection } from "../../hook";

interface ImageProps {
  src: string;
  alt?: string;
  width?: string;
  height?: string;
  inlineSVG?: boolean;
  lazyLoading?: boolean;
}

type ImageComponent<P> = React.FunctionComponent<P>;

const StyledFigure = styled.figure<{ width: string; height: string }>`
  width: ${({ width }) => width};
  height: ${({ height }) => height};
  margin: 0;
  padding: 0;
  ${makeFlex({ display: "flex", x: "center", y: "middle" })}
  img, svg {
    max-width: 100%;
    height: auto;
  }
  svg {
    width: 100%;
  }
`;

const Image: ImageComponent<ImageProps> = ({ src, alt, width, height, inlineSVG, lazyLoading }) => {
  const [loaded, setLoaded] = useState<boolean>(!lazyLoading ? true : false);
  const { ref, intersectionRatio } = useIntersection();

  if (lazyLoading) {
    useEffect(() => {
      setTimeout(() => {
        if (intersectionRatio > 0.5) {
          setLoaded(true);
        }
      }, 450);
    });
  }

  if (inlineSVG) {
    useEffect(() => {
      const { current } = ref as React.RefObject<HTMLImageElement>;

      if (current === null) {
        return;
      }

      new InlineSVG(current, src).render();
    }, []);
  }

  return (
    <StyledFigure ref={ref} width={width!} height={height!}>
      {loaded ? <img src={src} alt={alt} /> : <Loader />}
    </StyledFigure>
  );
};

Image.defaultProps = {
  alt: "image",
  width: "100%",
  height: "100%",
  lazyLoading: true,
};

export default Image;
