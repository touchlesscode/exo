/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from "theme-ui";
import React from "react";
import Flex from "@components/Flex";
import Typography from "@components/Typography";
import { Box } from "theme-ui";
// import { Pill } from "@components/Pills"
import ScrollerLayout from "@components/ScrollerLayout";

interface HorizontalListProps {
  data: Array<any>;
  renderItem: (i: any, index: number) => React.ReactNode;
  gap?: number;
  itemWidth?: number | string;
  title?: string;
  showViewAll?: boolean;
  idPrefix: string;
  id: string;
  scrollOffSet?: number;
}
function HorizontalList(props: HorizontalListProps) {
  return (
    <Box sx={{ position: "relative" }}>
      <Flex sx={{ marginLeft: "10px", marginRight: "10px", display: "block" }}>
        <Flex>
          <Typography type={"h2"}>{props.title}</Typography>
        </Flex>
        {props.showViewAll && (
          <Flex direction={"row-reverse"}>
            {/* <Badge>
                            <Typography type={"h6"} color={"primary"}>
                                View All
                            </Typography>
                        </Badge> */}
          </Flex>
        )}
      </Flex>

      <ScrollerLayout
        scrollOffSet={props.scrollOffSet}
        targetId={props.id}
        idPrefix={props.idPrefix}
      >
        {props.data.map((i, index) => {
          return (
            <div
              //@ts-ignore
              name={props.idPrefix + "scrollItem"}
              style={{
                minWidth: props.itemWidth || "90%",
                margin: props.gap || 10,
              }}
            >
              {props.renderItem(i, index)}
            </div>
          );
        })}
      </ScrollerLayout>
    </Box>
  );
}

export default HorizontalList;
