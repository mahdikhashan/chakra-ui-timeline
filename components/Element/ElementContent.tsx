import * as React from "react";
import { chakra, forwardRef } from "@chakra-ui/react";
import { useTimelineStyles } from "../Timeline/Timeline";

export interface ElementContentProps {
  children?: React.ReactElement;
}

export const ElementContent = forwardRef<ElementContentProps, "div">(
  (props, ref: React.Ref<HTMLDivElement>) => {
    const { content: contentStyle } = useTimelineStyles();
    const { children } = props;

    return (
      <chakra.div
        className="el-content"
        __css={{
          ...contentStyle,
        }}
      >
        {children}
      </chakra.div>
    );
  }
);
