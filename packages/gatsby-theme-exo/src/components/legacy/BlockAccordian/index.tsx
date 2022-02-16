/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from "theme-ui";
import FaqAccordion from "@components/FaqAccordion";
import GridTitle from "@components/GridTitle";
import useWindowSize from "@hooks/useWindowSize";
import styled from "styled-components";

const BlockAccordian = (props: any) => {
    const { title, answers } = props;
  const windowSize = useWindowSize();

  return (
    <Container type={windowSize.type}>
      {/* <GridTitle text={title} /> */}
      <div>
        {answers?.map((item:any, index:number) => (
            <FaqAccordion
                key={index}
                title={item?.title}
                text={item?.body}
            />
        ))}
        {/* <FaqAccordion
          title="Topic 1"
          text="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It"
        />
        <FaqAccordion
          title="Topic 2"
          text="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It"
        />
        <FaqAccordion
          title="Topic 3"
          text="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It"
        />
        <FaqAccordion
          title="Topic 4"
          text="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It"
        />
        <FaqAccordion
          title="Topic 5"
          text="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It"
        /> */}
      </div>
    </Container>
  );
};

const Container = styled.div<{ type: string }>`
  width: 100%;
  max-width: ${(props) => props.theme.sizes.container};
  margin: 0 auto;
  padding: ${(props) => props.type === "lg" ? '0' : '0 24px'};
  margin-bottom: ${(props) => props.type === "lg" ? "5.12500rem" : "4.5rem" };
`;

export default BlockAccordian;
