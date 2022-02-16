import { StaticImage } from "gatsby-plugin-image";
import {
  SearchBar,
  SearchIconWrapper,
  StyledBanner,
  StyledHeading,
  StyledSearchBarWrapper,
  StyledTextWrapper,
} from "./style";
import FilterButton from "@components/FilterButton";

const MobileBanner = () => {
  return (
    <StyledBanner>
      <StaticImage
        src="../../assets/images/banner-mobile.png"
        alt="banner-car"
        style={{
          gridArea: "1/1",
        }}
        layout="fullWidth"
        aspectRatio={3 / 1}
      />
      <div
        style={{
          gridArea: "1/1",
          position: "relative",
          placeItems: "center",
          display: "grid",
        }}
      >
        <StyledTextWrapper>
          <StyledHeading>
            Find your <br /> perfect rides
          </StyledHeading>
          <StyledSearchBarWrapper>
            <SearchIconWrapper>
              <StaticImage
                src="../../assets/images/search-icon.png"
                alt="search-icon"
                height={19}
                placeholder="tracedSVG"
              />
            </SearchIconWrapper>
            <SearchBar placeholder="Make, Model or Style" />
            <FilterButton />
          </StyledSearchBarWrapper>
        </StyledTextWrapper>
      </div>
    </StyledBanner>
  );
};

export default MobileBanner;
