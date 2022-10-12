import type { NextPage } from "next";
import useHeaderStore from "store/header";
import { styled } from "styles/stitches.config";

const Home: NextPage = () => {
  const { setIsDynamic } = useHeaderStore((state) => state);

  return (
    <TestButton type="button" onClick={() => setIsDynamic(true)}>
      Home Button
    </TestButton>
  );
};

export default Home;

const TestButton = styled("button", {
  display: "flex",
  justifyContent: "center",
  flex: 1,
  position: "relative",
  backgroundColor: "$primary-main",
  padding: "10px 12px",
  borderRadius: 4,
  fontWeight: "700",
  color: "$theme",
});
