import * as React from "react";
import { chakra, forwardRef } from "@chakra-ui/react";
import { useTimelineStyles } from "../Timeline/Timeline";

export interface ElementLabelProps {
  label?: string;
}

export const ElementLabel = forwardRef<ElementLabelProps, "span">(
  (props, ref: React.Ref<HTMLDivElement>) => {
    const { label: labelStyle } = useTimelineStyles();
    const { label } = props;

    return (
      <chakra.span className="el-label" __css={{ ...labelStyle }}>
        {label}
      </chakra.span>
    );
  }
);
