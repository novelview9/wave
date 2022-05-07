import { useSpring, animated } from "react-spring";

import styled from "styled-components";

const start =
  "M0,288L80,256C160,224,320,160,480,160C640,160,800,224,960,240C1120,256,1280,224,1360,208L1440,192L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320";
const end =
  "M0,128L80,154.7C160,181,320,235,480,218.7C640,203,800,117,960,101.3C1120,85,1280,139,1360,165.3L1440,192L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z";

const IndexPage = () => {
  const animatedProps = useSpring({
    config: { duration: 1500 },
    loop: { reverse: true },
    from: { d: start },
    to: { d: end },
  });
  return (
    <Container>
      <svg>
        <animated.path d={animatedProps.d} />
      </svg>
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  height: 100vh;
  > svg {
    left: 0;
    width: inherit;
    height: inherit;
  }
`;
export default IndexPage;
