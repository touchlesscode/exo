import * as React from "react";
import useWindowSize from "@hooks/useWindowSize";
import { graphql, useStaticQuery } from "gatsby";
import styled, { css } from "styled-components";
import { Box, Divider, Grid } from "theme-ui";
import StarSvg from "@assets/images/star.svg";
import cardImg from "@assets/images/cardreview.svg";
import footerimg from "@assets/images/reviewbottom.svg";
import profile from "@assets/images/photoicon.png";

const reviewQuery = graphql`
  query getAboutsDetailsReview {
    contentfulAbout {
      heroTitle
      heroDescription {
        heroDescription
      }
      heroImage {
        gatsbyImageData(layout: CONSTRAINED, placeholder: BLURRED)
      }
      pageTitle
      pageDescription {
        pageDescription
      }
      aboutInfo {
        title
        description {
          description
        }
        image {
          gatsbyImageData(layout: CONSTRAINED, placeholder: BLURRED)
        }
      }
    }
  }
`;

export const ReviewTabComponent = (props: any) => {
  const data = useStaticQuery(reviewQuery);
  const {
    heroTitle,
    heroDescription: { heroDescription },
    heroImage,
    pageTitle,
    pageDescription: { pageDescription },
    aboutInfo,
  } = data?.contentfulAbout;
  const { type } = useWindowSize();
  return (
    <React.Fragment>
      <div>
        <Flex
          style={{
            display: props?.id === "1" ? "block" : "none",
            margin: type === "sm" ? "0" : "auto",
            maxWidth: 970,
            padding: "0px",
          }}
        >
          <Flex style={{ marginBottom: "72px" }}>
            {/* style={{ margin: "72px 0px 40px" }} */}
            <div>
              <BlockHeadingWrapper screenType={type}>
                <HeadingHr />
                <HeadingText>Customer Service</HeadingText>
              </BlockHeadingWrapper>
              <BlockContentWrapper screenType={type}>
                <ContentText>{pageDescription}</ContentText>
              </BlockContentWrapper>
            </div>
            {type !== "sm" ? (
              <GridContainer>
                <Grid columns={[1, 2, 2]}>
                  {new Array(6).fill("1").map((index: number) => {
                    return (
                      <ReviewCard key={index}>
                        <div
                          style={{
                            display: "flex",
                            alignItems: "center",
                            marginBottom: "12px",
                          }}
                        >
                          <div
                            style={{
                              width: 32,
                              height: 32,
                              marginRight: "10px",
                            }}
                          >
                            <img src={profile} />
                          </div>
                          <ReviewHeading>John</ReviewHeading>
                          {new Array(5).fill("1").map((index: number) => (
                            <img
                              key={index}
                              src={StarSvg}
                              alt=""
                              style={{ marginRight: "5px" }}
                            />
                          ))}
                        </div>
                        <ReviewContent>
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit, sed do eiusmod tempor incididunt ut labore et
                          dolore magna aliqua.
                        </ReviewContent>
                      </ReviewCard>
                    );
                  })}
                </Grid>
              </GridContainer>
            ) : (
              <Flex style={{ padding: "0 24px", marginTop: "72px" }}>
                {new Array(6).fill("1").map((index: number) => {
                  return (
                    <ReviewCard screenType={type} key={index}>
                      <div
                        style={{
                          display: "flex",
                          alignItems: "center",
                          marginBottom: "12px",
                          flexWrap: "wrap",
                          justifyContent: "start",
                          gap: "5px",
                        }}
                      >
                        <div
                          style={{ width: 32, height: 32, marginRight: "10px" }}
                        >
                          <img src={profile} />
                        </div>
                        <ReviewHeading>John</ReviewHeading>
                        <div style={{ verticalAlign: "middle" }}>
                          {new Array(5).fill("1").map((index: number) => (
                            <img
                              key={index}
                              src={StarSvg}
                              alt=""
                              style={{ marginRight: "5px" }}
                            />
                          ))}
                        </div>
                      </div>
                      <ReviewContent>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua.
                      </ReviewContent>
                    </ReviewCard>
                  );
                })}
              </Flex>
            )}
          </Flex>
          <Flex
            style={{
              margin: type === "sm" ? "" : "0",
              maxWidth: 970,
              padding: "0px 24px",
            }}
          >
            <Divider style={{ color: "#E4E4E4", margin: 0 }} />
          </Flex>
          {aboutInfo.map(
            (info: any, index: number) =>
              index < 2 && (
                <>
                  <CardContainer
                    screenType={type}
                    reverse={(index + 1) % 2 === 0}
                    key={`${info?.id}-${index}`}
                  >
                    <CardImage src={cardImg} alt="about" screenType={type} />
                    <CardBody screenType={type}>
                      <HeadingHr />
                      <HeadingText>{info?.id}</HeadingText>
                      <ContentText>
                        {info?.description?.description}
                      </ContentText>
                    </CardBody>
                  </CardContainer>
                </>
              )
          )}
          {type !== "sm" && (
            <Flex
              style={{
                margin: type === "sm" ? "20px 0 80px  0px" : "72px auto",
                maxWidth: 970,
                padding: "0px 24px",
              }}
            >
              <Divider style={{ color: "#E4E4E4" }} />
            </Flex>
          )}
          <Flex
            style={{
              margin:
                type === "sm" ? "20px 0 80px  0px" : "72px auto 214px auto",
              maxWidth: 970,
              padding: type !== "sm" ? "0px 24px" : "0px",
            }}
          >
            <img src={footerimg} />
          </Flex>
        </Flex>
      </div>

      <div>
        <Flex
          style={{
            display: props?.id === "2" ? "block" : "none",
            margin: type === "sm" ? "0" : "auto",
            maxWidth: 970,
            padding: "0px",
          }}
        >
          <Flex style={{ marginBottom: "72px" }}>
            {/* style={{ margin: "72px 0px 40px" }} */}
            <div>
              <BlockHeadingWrapper screenType={type}>
                <HeadingHr />
                <HeadingText>Inventory Selection</HeadingText>
              </BlockHeadingWrapper>
              <BlockContentWrapper screenType={type}>
                <ContentText>
                  Facilisi nullam vehicula ipsum a arcu cursus vitae congue. Ut
                  faucibus pulvinar elementum integer enim neque volutpat ac
                  tincidunt. At lectus urna duis convallis. Vehicula ipsum a
                  arcu cursus. Quam adipiscing vitae proin sagittis. Vitae
                  congue mauris rhoncus aenean vel elit. Posuere sollicitudin
                  aliquam ultrices sagittis orci a scelerisque purus semper. Sed
                  risus pretium quam vulputate dignissim suspendisse in.
                  Nascetur ridiculus mus mauris vitae ultricies. Mattis
                  ullamcorper velit sed ullamcorper. Vel eros donec ac odio
                  tempor orci dapibus. Tristique sollicitudin nibh sit amet.
                </ContentText>
              </BlockContentWrapper>
            </div>
            {type !== "sm" ? (
              <GridContainer>
                <Grid columns={[1, 2, 2]}>
                  {new Array(6).fill("1").map((index: number) => {
                    return (
                      <ReviewCard key={index}>
                        <div
                          style={{
                            display: "flex",
                            alignItems: "center",
                            marginBottom: "12px",
                          }}
                        >
                          <div
                            style={{
                              width: 32,
                              height: 32,
                              marginRight: "10px",
                            }}
                          >
                            <img src={profile} />
                          </div>
                          <ReviewHeading>Jane</ReviewHeading>
                          {new Array(5).fill("1").map((index: number) => (
                            <img
                              key={index}
                              src={StarSvg}
                              alt=""
                              style={{ marginRight: "5px" }}
                            />
                          ))}
                        </div>
                        <ReviewContent>
                          Facilisi nullam vehicula ipsum a arcu cursus vitae
                          congue. Ut faucibus pulvinar elementum integer enim
                          neque volutpat ac tincidunt. At lectus urna duis
                          convallis. Vehicula ipsum a arcu cursus. Quam
                          adipiscing vitae proin sagittis. Vitae congue mauris
                          rhoncus aenean vel elit. Posuere sollicitudin aliquam
                          ultrices sagittis orci a scelerisque purus semper. Sed
                          risus pretium quam vulputate dignissim suspendisse in.
                          Nascetur ridiculus mus mauris vitae ultricies. Mattis
                          ullamcorper velit sed ullamcorper. Vel eros donec ac
                          odio tempor orci dapibus. Tristique sollicitudin nibh
                          sit amet.
                        </ReviewContent>
                      </ReviewCard>
                    );
                  })}
                </Grid>
              </GridContainer>
            ) : (
              <Flex style={{ padding: "0 24px", marginTop: "72px" }}>
                {new Array(6).fill("1").map((index: number) => {
                  return (
                    <ReviewCard screenType={type} key={index}>
                      <div
                        style={{
                          display: "flex",
                          alignItems: "center",
                          marginBottom: "12px",
                          flexWrap: "wrap",
                          justifyContent: "start",
                          gap: "5px",
                        }}
                      >
                        <div
                          style={{ width: 32, height: 32, marginRight: "10px" }}
                        >
                          <img src={profile} />
                        </div>
                        <ReviewHeading>Jane</ReviewHeading>
                        <div style={{ verticalAlign: "middle" }}>
                          {new Array(5).fill("1").map((index: number) => (
                            <img
                              key={index}
                              src={StarSvg}
                              alt=""
                              style={{ marginRight: "5px" }}
                            />
                          ))}
                        </div>
                      </div>
                      <ReviewContent>
                        Facilisi nullam vehicula ipsum a arcu cursus vitae
                        congue. Ut faucibus pulvinar elementum integer enim
                        neque volutpat ac tincidunt. At lectus urna duis
                        convallis. Vehicula ipsum a arcu cursus. Quam adipiscing
                        vitae proin sagittis. Vitae congue mauris rhoncus aenean
                        vel elit. Posuere sollicitudin aliquam ultrices sagittis
                        orci a scelerisque purus semper. Sed risus pretium quam
                        vulputate dignissim suspendisse in. Nascetur ridiculus
                        mus mauris vitae ultricies. Mattis ullamcorper velit sed
                        ullamcorper. Vel eros donec ac odio tempor orci dapibus.
                        Tristique sollicitudin nibh sit amet.
                      </ReviewContent>
                    </ReviewCard>
                  );
                })}
              </Flex>
            )}
          </Flex>
          <Flex
            style={{
              margin: type === "sm" ? "" : "0",
              maxWidth: 970,
              padding: "0px 24px",
            }}
          >
            <Divider style={{ color: "#E4E4E4", margin: 0 }} />
          </Flex>
          {aboutInfo.map(
            (info: any, index: number) =>
              index < 2 && (
                <>
                  <CardContainer
                    screenType={type}
                    reverse={(index + 1) % 2 === 0}
                    key={`${info?.id}-${index}`}
                  >
                    <CardImage src={cardImg} alt="about" screenType={type} />
                    <CardBody screenType={type}>
                      <HeadingHr />
                      <HeadingText>{info?.id}</HeadingText>
                      <ContentText>
                        {info?.description?.description}
                      </ContentText>
                    </CardBody>
                  </CardContainer>
                </>
              )
          )}
          {type !== "sm" && (
            <Flex
              style={{
                margin: type === "sm" ? "20px 0 80px  0px" : "72px auto",
                maxWidth: 970,
                padding: "0px 24px",
              }}
            >
              <Divider style={{ color: "#E4E4E4" }} />
            </Flex>
          )}
          <Flex
            style={{
              margin:
                type === "sm" ? "20px 0 80px  0px" : "72px auto 214px auto",
              maxWidth: 970,
              padding: type !== "sm" ? "0px 24px" : "0px",
            }}
          >
            <img src={footerimg} />
          </Flex>
        </Flex>
      </div>

      <div>
        <Flex
          style={{
            display: props?.id === "3" ? "block" : "none",
            margin: type === "sm" ? "0" : "auto",
            maxWidth: 970,
            padding: "0px",
          }}
        >
          <Flex style={{ marginBottom: "72px" }}>
            {/* style={{ margin: "72px 0px 40px" }} */}
            <div>
              <BlockHeadingWrapper screenType={type}>
                <HeadingHr />
                <HeadingText>Delivery Experience</HeadingText>
              </BlockHeadingWrapper>
              <BlockContentWrapper screenType={type}>
                <ContentText>
                  Pellentesque elit eget gravida cum sociis natoque. Amet purus
                  gravida quis blandit turpis. In pellentesque massa placerat
                  duis ultricies lacus sed turpis. Habitasse platea dictumst
                  quisque sagittis purus sit amet volutpat. Eget gravida cum
                  sociis natoque penatibus et magnis. Magna fringilla urna
                  porttitor rhoncus dolor purus non enim. In fermentum posuere
                  urna nec tincidunt praesent. Viverra nam libero justo laoreet
                  sit amet cursus sit amet. Euismod nisi porta lorem mollis
                  aliquam ut porttitor leo a. Fringilla urna porttitor rhoncus
                  dolor. Amet mattis vulputate enim nulla aliquet porttitor
                  lacus luctus. Eu turpis egestas pretium aenean pharetra magna
                  ac placerat. Viverra tellus in hac habitasse platea dictumst
                  vestibulum rhoncus.
                </ContentText>
              </BlockContentWrapper>
            </div>
            {type !== "sm" ? (
              <GridContainer>
                <Grid columns={[1, 2, 2]}>
                  {new Array(6).fill("1").map((index: number) => {
                    return (
                      <ReviewCard key={index}>
                        <div
                          style={{
                            display: "flex",
                            alignItems: "center",
                            marginBottom: "12px",
                          }}
                        >
                          <div
                            style={{
                              width: 32,
                              height: 32,
                              marginRight: "10px",
                            }}
                          >
                            <img src={profile} />
                          </div>
                          <ReviewHeading>Joana</ReviewHeading>
                          {new Array(5).fill("1").map((index: number) => (
                            <img
                              key={index}
                              src={StarSvg}
                              alt=""
                              style={{ marginRight: "5px" }}
                            />
                          ))}
                        </div>
                        <ReviewContent>
                          Pellentesque elit eget gravida cum sociis natoque.
                          Amet purus gravida quis blandit turpis. In
                          pellentesque massa placerat duis ultricies lacus sed
                          turpis.
                        </ReviewContent>
                      </ReviewCard>
                    );
                  })}
                </Grid>
              </GridContainer>
            ) : (
              <Flex style={{ padding: "0 24px", marginTop: "72px" }}>
                {new Array(6).fill("1").map((index: number) => {
                  return (
                    <ReviewCard screenType={type} key={index}>
                      <div
                        style={{
                          display: "flex",
                          alignItems: "center",
                          marginBottom: "12px",
                          flexWrap: "wrap",
                          justifyContent: "start",
                          gap: "5px",
                        }}
                      >
                        <div
                          style={{ width: 32, height: 32, marginRight: "10px" }}
                        >
                          <img src={profile} />
                        </div>
                        <ReviewHeading>John</ReviewHeading>
                        <div style={{ verticalAlign: "middle" }}>
                          {new Array(5).fill("1").map((index: number) => (
                            <img
                              key={index}
                              src={StarSvg}
                              alt=""
                              style={{ marginRight: "5px" }}
                            />
                          ))}
                        </div>
                      </div>
                      <ReviewContent>
                        Pellentesque elit eget gravida cum sociis natoque. Amet
                        purus gravida quis blandit turpis. In pellentesque massa
                        placerat duis ultricies lacus sed turpis.
                      </ReviewContent>
                    </ReviewCard>
                  );
                })}
              </Flex>
            )}
          </Flex>
          <Flex
            style={{
              margin: type === "sm" ? "" : "0",
              maxWidth: 970,
              padding: "0px 24px",
            }}
          >
            <Divider style={{ color: "#E4E4E4", margin: 0 }} />
          </Flex>
          {aboutInfo.map(
            (info: any, index: number) =>
              index < 2 && (
                <>
                  <CardContainer
                    key={`${info?.id}-${index}`}
                    screenType={type}
                    reverse={(index + 1) % 2 === 0}
                  >
                    <CardImage src={cardImg} alt="about" screenType={type} />
                    <CardBody screenType={type}>
                      <HeadingHr />
                      <HeadingText>{info?.id}</HeadingText>
                      <ContentText>
                        {info?.description?.description}
                      </ContentText>
                    </CardBody>
                  </CardContainer>
                </>
              )
          )}
          {type !== "sm" && (
            <Flex
              style={{
                margin: type === "sm" ? "20px 0 80px  0px" : "72px auto",
                maxWidth: 970,
                padding: "0px 24px",
              }}
            >
              <Divider style={{ color: "#E4E4E4" }} />
            </Flex>
          )}
          <Flex
            style={{
              margin:
                type === "sm" ? "20px 0 80px  0px" : "72px auto 214px auto",
              maxWidth: 970,
              padding: type !== "sm" ? "0px 24px" : "0px",
            }}
          >
            <img src={footerimg} />
          </Flex>
        </Flex>
      </div>

      <div>
        <Flex
          style={{
            display: props?.id === "4" ? "block" : "none",
            margin: type === "sm" ? "0" : "auto",
            maxWidth: 970,
            padding: "0px",
          }}
        >
          <Flex style={{ marginBottom: "72px" }}>
            {/* style={{ margin: "72px 0px 40px" }} */}
            <div>
              <BlockHeadingWrapper screenType={type}>
                <HeadingHr />
                <HeadingText>Pickup Experience</HeadingText>
              </BlockHeadingWrapper>
              <BlockContentWrapper screenType={type}>
                <ContentText>
                  Dis parturient montes nascetur ridiculus mus mauris. Commodo
                  ullamcorper a lacus vestibulum sed arcu non odio. Sed velit
                  dignissim sodales ut eu. Felis bibendum ut tristique et
                  egestas quis ipsum. Mauris in aliquam sem fringilla ut morbi.
                  Proin fermentum leo vel orci porta non pulvinar neque.
                </ContentText>
              </BlockContentWrapper>
            </div>
            {type !== "sm" ? (
              <GridContainer>
                <Grid columns={[1, 2, 2]}>
                  {new Array(6).fill("1").map((index: number) => {
                    return (
                      <ReviewCard key={index}>
                        <div
                          style={{
                            display: "flex",
                            alignItems: "center",
                            marginBottom: "12px",
                          }}
                        >
                          <div
                            style={{
                              width: 32,
                              height: 32,
                              marginRight: "10px",
                            }}
                          >
                            <img src={profile} />
                          </div>
                          <ReviewHeading>Joyner</ReviewHeading>
                          {new Array(5).fill("1").map((index: number) => (
                            <img
                              key={index}
                              src={StarSvg}
                              alt=""
                              style={{ marginRight: "5px" }}
                            />
                          ))}
                        </div>
                        <ReviewContent>
                          Dis parturient montes nascetur ridiculus mus mauris.
                          Commodo ullamcorper a lacus vestibulum sed arcu non
                          odio. Sed velit dignissim sodales ut eu. Felis
                          bibendum ut tristique et egestas quis ipsum. Mauris in
                          aliquam sem fringilla ut morbi. Proin fermentum leo
                          vel orci porta non pulvinar neque.
                        </ReviewContent>
                      </ReviewCard>
                    );
                  })}
                </Grid>
              </GridContainer>
            ) : (
              <Flex style={{ padding: "0 24px", marginTop: "72px" }}>
                {new Array(6).fill("1").map((index: number) => {
                  return (
                    <ReviewCard screenType={type} key={index}>
                      <div
                        style={{
                          display: "flex",
                          alignItems: "center",
                          marginBottom: "12px",
                          flexWrap: "wrap",
                          justifyContent: "start",
                          gap: "5px",
                        }}
                      >
                        <div
                          style={{ width: 32, height: 32, marginRight: "10px" }}
                        >
                          <img src={profile} />
                        </div>
                        <ReviewHeading>Joyner</ReviewHeading>
                        <div style={{ verticalAlign: "middle" }}>
                          {new Array(5).fill("1").map((index: number) => (
                            <img
                              key={index}
                              src={StarSvg}
                              alt=""
                              style={{ marginRight: "5px" }}
                            />
                          ))}
                        </div>
                      </div>
                      <ReviewContent>
                        Dis parturient montes nascetur ridiculus mus mauris.
                        Commodo ullamcorper a lacus vestibulum sed arcu non
                        odio. Sed velit dignissim sodales ut eu. Felis bibendum
                        ut tristique et egestas quis ipsum. Mauris in aliquam
                        sem fringilla ut morbi. Proin fermentum leo vel orci
                        porta non pulvinar neque.
                      </ReviewContent>
                    </ReviewCard>
                  );
                })}
              </Flex>
            )}
          </Flex>
          <Flex
            style={{
              margin: type === "sm" ? "" : "0",
              maxWidth: 970,
              padding: "0px 24px",
            }}
          >
            <Divider style={{ color: "#E4E4E4", margin: 0 }} />
          </Flex>
          {aboutInfo.map(
            (info: any, index: number) =>
              index < 2 && (
                <>
                  <CardContainer
                    key={`${info?.id}-${index}`}
                    screenType={type}
                    reverse={(index + 1) % 2 === 0}
                  >
                    <CardImage src={cardImg} alt="about" screenType={type} />
                    <CardBody screenType={type}>
                      <HeadingHr />
                      <HeadingText>{info?.id}</HeadingText>
                      <ContentText>
                        {info?.description?.description}
                      </ContentText>
                    </CardBody>
                  </CardContainer>
                </>
              )
          )}
          {type !== "sm" && (
            <Flex
              style={{
                margin: type === "sm" ? "20px 0 80px  0px" : "72px auto",
                maxWidth: 970,
                padding: "0px 24px",
              }}
            >
              <Divider style={{ color: "#E4E4E4" }} />
            </Flex>
          )}
          <Flex
            style={{
              margin:
                type === "sm" ? "20px 0 80px  0px" : "72px auto 214px auto",
              maxWidth: 970,
              padding: type !== "sm" ? "0px 24px" : "0px",
            }}
          >
            <img src={footerimg} />
          </Flex>
        </Flex>
      </div>
    </React.Fragment>
  );
};

// export default tabComponent;

interface ScreenType {
  screenType?: string;
}

interface ReviewCardProps extends ScreenType {}

const Flex = styled.div`
  display: flex;
  flex-direction: column;
`;

const HeroOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
`;

const HeroTextContainer = styled.div<ScreenType>`
  text-align: center;
  width: 100%;
  max-width: ${(props) => (props.screenType === "sm" ? "350px" : "600px")};
  position: absolute;
  /* top: ${(props) => (props.screenType === "sm" ? "64px" : "100px")}; */
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

const HeroHeading = styled.h1`
  font-family: Poppins;
  font-weight: 700;
  font-size: 40px;
  line-height: 48px;
  letter-spacing: -0.02em;
  color: #ffffff;
  margin: 0;
  margin-bottom: 16px;
`;

const HeroContent = styled.p`
  font-family: Poppins;
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 26px;
  text-align: center;
  color: #ffffff;
  margin: 0;
  /* margin-bottom: 56px; */
`;

const HeadingText = styled.h2`
  font-family: Poppins;
  font-weight: 600;
  font-size: 32px;
  line-height: 38px;
  letter-spacing: -0.02em;
  color: #151f2a;
  margin: 6px 0 16px;
  overflow-wrap: break-word;
`;

const HeadingHr = styled.div`
  width: 113px;
  height: 4px;
  background: #151f2a;
`;

const ContentText = styled.p`
  font-family: Poppins;
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 30px;
  margin: 0;
`;
export const ReviewHeading = styled.h5`
  font-family: Poppins;
  font-weight: 600;
  font-size: 16px;
  line-height: 24px;
  letter-spacing: -0.02em;
  color: #151f2a;
  margin: 0;
  margin-right: 11px;
`;

export const ReviewContent = styled.p`
  font-family: Poppins;
  font-weight: 400;
  font-size: 16px;
  line-height: 20px;
  letter-spacing: -0.01em;
  color: #656565;
  margin: 0;
`;

export const ReviewContainer = styled.div`
  display: flex;
  background-color: #f8f7f6;
  border-radius: 6px;
  padding: 16px;
  padding-right: 24px;
  margin-bottom: 16px;
`;
interface CardContainerProp extends ScreenType {
  reverse?: boolean;
}

const CardsContainer = styled.div<ScreenType>`
  margin-top: 72px;
  padding-bottom: 20px;
  ${(props) =>
    props.screenType !== "sm" &&
    css`
      margin-top: 100px;
      padding-bottom: 80px;
    `}
`;

// const CardContainer = styled.div<CardContainerProp>`
//   padding-bottom: 80px;
//   ${(props) =>
//     props.screenType !== "sm" &&
//     css<CardContainerProp>`
//       display: flex;
//       flex-direction: ${(props) => (props.reverse ? "row-reverse" : "reverse")};
//       gap: 57px;
//       align-items: center;
//     `}
// `;

const CardContainer = styled.div<CardContainerProp>`
  /* margin: 72px 0; */
  max-width: ${(props) => props.screenType !== "sm" && "1018px"};
  margin: 72px 0;
  ${(props) =>
    props.screenType !== "sm" &&
    css<CardContainerProp>`
      /* margin: 100px auto; */
      flex-direction: ${(props) => (props.reverse ? "row-reverse" : "reverse")};
      margin: 72px 0;
      padding: 0 24px;
      display: flex;
      gap: 57px;
      align-items: center;
      /* &:nth-of-type(2n-1) {
        flex-direction: row-reverse;
      } */
    `}
`;

const CardImage = styled.img<ScreenType>`
  height: 301px;
  width: 100vw;
  border-radius: 0;
  object-fit: cover;
  ${(props) =>
    props.screenType !== "sm" &&
    css`
      height: 166px;
      width: 400px;
      /* border-radius: 16px; */
    `}
`;

const CardBody = styled.div<ScreenType>`
  padding: 32px 24px 0;
  margin-bottom: 80px;
  ${(props) =>
    props.screenType !== "sm" &&
    css`
      padding: 0;
      max-width: 514px;
      margin-bottom: 0px;
    `}
`;

const BlockHeadingWrapper = styled.div<ScreenType>`
  margin: 72px auto 0;
  padding: 0 24px;
  max-width: 1018px;
  ${(props) =>
    props.screenType === "sm" &&
    css`
      margin: 48px auto 0;
    `}
`;

const BlockContentWrapper = styled.div<ScreenType>`
  margin: 0 auto;
  padding: 0 24px;
  max-width: 1018px;
  ${(props) =>
    props.screenType === "sm" &&
    css`
      margin: 0 auto;
    `}
`;

const GridContainer = styled.div`
  margin-top: 72px;
  padding: 0 24px;
`;

const ReviewCard = styled.div<ReviewCardProps>`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  flex-grow: 1;
  /* margin: 0px 16px; */
  padding: 1.5rem 1rem 1.5rem;
  background: #f8f7f6;
  border-radius: 16px;
  /* box-shadow: rgb(0 0 0 / 6%) 0px 8px 25px, rgb(30 30 30 / 4%) 0px 0px 8px; */
  margin-bottom: 1rem;
  ${(props) =>
    props.screenType === "sm" &&
    css`
      &:last-child {
        margin-bottom: 0;
      }
    `}
`;
