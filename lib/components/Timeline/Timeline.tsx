import * as React from "react";
import {
  chakra,
  forwardRef,
  HTMLChakraProps,
  ThemingProps,
  omitThemingProps,
  SystemStyleObject,
  useMultiStyleConfig,
} from "@chakra-ui/react";
import { createContext } from "@chakra-ui/react-context";

export interface TimelineOptions {
  variant?: "ltr" | "rtl" | "simple";
}

export interface TimelineProps
  extends Omit<HTMLChakraProps<"div">, "onChange">,
    Omit<ThemingProps<"Timeline">, "variant">,
    TimelineOptions {
  children?: React.ReactNode;
}

const [StylesProvider, useStyles] = createContext<
  Record<string, SystemStyleObject>
>({
  name: "TimelineStyleContext",
  errorMessage: `useTimelineStyles returned 'undefined'. Seems you forgot to wrap the components in "<Timeline />" `,
});

export const useTimelineStyles = useStyles;

export const Timeline = forwardRef<TimelineProps, "div">(
  (props, ref: React.Ref<HTMLDivElement>) => {
    const { children } = omitThemingProps(props);

    const styles = useMultiStyleConfig("Timeline", {
      ...props,
    });

    const timelineStyles = {
      ...styles.root,
    };

    return (
      <StylesProvider value={styles}>
        <chakra.div
          __css={{
            ...timelineStyles,
          }}
          ref={ref}
        >
          {children}
        </chakra.div>
      </StylesProvider>
    );
  }
);
