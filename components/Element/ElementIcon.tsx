import * as React from "react";
import {
  chakra,
  forwardRef,
  Icon as ChakraIcon,
  IconProps,
} from "@chakra-ui/react";
import { useTimelineStyles } from "../Timeline/Timeline";

export interface ElementIconProps extends IconProps {
  icon?: React.ComponentType<any>;
  circle?: boolean;
}

export const ElementIcon = forwardRef<ElementIconProps, "span">(
  (props, ref: React.Ref<HTMLDivElement>) => {
    const { icon: iconStyle } = useTimelineStyles();
    const { icon: CustomIcon } = props;

    const Icon = React.useMemo(
      () => (CustomIcon ? CustomIcon : null),
      [CustomIcon]
    );

    if (Icon) {
      return (
        <chakra.span>
          <Icon
            __css={{
              ...iconStyle,
            }}
            ref={ref}
            {...props}
          />
        </chakra.span>
      );
    }

    return (
      <chakra.span>
        <ChakraIcon
          viewBox="0 0 200 200"
          className="el-icon"
          __css={{
            ...iconStyle,
          }}
          {...props}
        >
          <path
            fill="currentColor"
            d="M 100, 100 m -75, 0 a 75,75 0 1,0 150,0 a 75,75 0 1,0 -150,0"
          />
        </ChakraIcon>
      </chakra.span>
    );
  }
);
