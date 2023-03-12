import * as React from "react";
import { chakra, forwardRef } from "@chakra-ui/react";
import { useTimelineStyles } from "../Timeline/Timeline";
import { ElementIcon as TimelineElementIcon } from "./ElementIcon";
import { ElementLabel as TimelineElementLabel } from "./ElementLabel";
import { ElementContent as TimelineElementContent } from "./ElementContent";

export interface ElementProps {
  icon?: React.ComponentType<any> | undefined;
  label?: string | undefined;
  children?: React.ReactElement[];
}

export const Element = forwardRef<ElementProps, "li">(
  (props, ref: React.Ref<HTMLDivElement>) => {
    const {
      element,
      elementContainer: elementContainerStyle,
      content: contentStyle,
      labelContainer: labelContainerStyle,
    } = useTimelineStyles();

    const { icon, label, children } = props;

    const renderContent = () => {
      return React.Children.map(children, (node) => {
        if (!React.isValidElement(node)) return;
        return (
          <TimelineElementContent>
            {React.cloneElement(node)}
          </TimelineElementContent>
        );
      });
    };

    return (
      <chakra.div
        className="el-container__root"
        __css={{
          ":first-child": {
            marginTop: "0",
          },
          ...element,
        }}
      >
        <chakra.div
          className="el-container__label"
          __css={{ ...labelContainerStyle }}
        >
          <TimelineElementIcon className="el-container__icon" icon={icon} />
          <TimelineElementLabel className="el-container__label" label={label} />
        </chakra.div>
        <chakra.div
          className="el-container__content"
          __css={{ ...elementContainerStyle }}
        >
          {renderContent()}
        </chakra.div>
      </chakra.div>
    );
  }
);
