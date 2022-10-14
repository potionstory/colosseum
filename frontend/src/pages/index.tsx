import type { NextPage } from "next";
import { styled } from "styles/stitches.config";

const Home: NextPage = () => {
  return (
    <HomeWrap>
      <CategorySection>
        <CategorySectionHeader>
          <CategorySectionHeaderTitle color="new">
            new
          </CategorySectionHeaderTitle>
          fasfasdf
        </CategorySectionHeader>
        <div>슬라이드 카드 리스트</div>
      </CategorySection>
      <CategorySection>
        <CategorySectionHeader>
          <CategorySectionHeaderTitle color="trend">
            trend
          </CategorySectionHeaderTitle>
        </CategorySectionHeader>
        <div>슬라이드 카드 리스트</div>
      </CategorySection>
      <CategorySection>
        <CategorySectionHeader>
          <CategorySectionHeaderTitle color="category">
            category
          </CategorySectionHeaderTitle>
        </CategorySectionHeader>
        <div>슬라이드 카드 리스트</div>
      </CategorySection>
    </HomeWrap>
  );
};

export default Home;

const HomeWrap = styled("article", {
  display: "flex",
  flexDirection: "column",
  rowGap: "2rem",
});

const CategorySection = styled("section", {
  display: "flex",
  flexDirection: "column",
  rowGap: "1rem",
});

const CategorySectionHeader = styled("div", {
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  height: 48,
  borderRadius: 24,
  "@sm": {
    height: 60,
    borderRadius: 30,
  },
});

const CategorySectionHeaderTitle = styled("h2", {
  fontSize: "1rem",
  fontWeight: 900,
  color: "$primary-main",
  textTransform: "uppercase",
  "@sm": {
    fontSize: "1.25rem",
  },
  variants: {
    color: {
      new: {
        color: "$primary-main",
      },
      trend: {
        color: "$error-main",
      },
      category: {
        color: "$success-main",
      },
    },
  },
});
