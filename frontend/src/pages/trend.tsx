import type { NextPage } from "next";
import useHeaderStore from "store/header";
import { styled } from "styles/stitches.config";

const Trend: NextPage = () => {
  const { setIsDynamic } = useHeaderStore((state) => state);

  return (
    <TestButton type="button" onClick={() => setIsDynamic(true)}>
      Trend Button
    </TestButton>
  );
};

export default Trend;

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
