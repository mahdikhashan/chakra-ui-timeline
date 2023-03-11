import { ComponentStyleConfig } from "@chakra-ui/react";
import { createMultiStyleConfigHelpers } from "@chakra-ui/styled-system";
import { anatomy, mode } from "@chakra-ui/theme-tools";
import type {
  PartsStyleFunction,
  SystemStyleObject,
  SystemStyleFunction,
} from "@chakra-ui/theme-tools";

const parts = anatomy("timeline").parts(
  "root",
  "element",
  "elementContainer",
  "icon",
  "label",
  "content",
  "labelContainer",
);

export const { defineMultiStyleConfig, definePartsStyle } =
  createMultiStyleConfigHelpers(parts.keys);

const baseStyleRoot: SystemStyleFunction = (props) => ({
  position: "relative",
  padding: "2em 0",
});

const baseStyleElement: SystemStyleObject = {
  position: "relative",
  m: "2em 0",
};

const baseStyleElementContainer: SystemStyleObject = {
  marginTop: "4",
  display: "flex",
  flexDirection: "column",
  gap: "2",
}

const baseStyleIcon: SystemStyleFunction = (props) => ({});

const baseStyleLabel: SystemStyleFunction = (props) => ({
  fontSize: "14px",
  borderRadius: "4",
  background: mode("gray.200", "gray.600")(props),
  fontWeight: "bold",
  color: "black",
  px: "4",
});

const baseStyleContent: SystemStyleFunction = (props) => ({
  background: "white",
  borderRadius: "0.25em",
  border: "1px black solid",
  borderColor: mode("gray.200", "gray.700")(props),
  p: "1em",
});

const baseStyleLabelContainer: SystemStyleFunction = (props) => ({
  display: "flex",
});

const baseStyle = definePartsStyle((props) => ({
  root: baseStyleRoot(props),
  element: baseStyleElement,
  elementContainer: baseStyleElementContainer,
  icon: baseStyleIcon(props),
  label: baseStyleLabel(props),
  content: baseStyleContent(props),
  labelContainer: baseStyleLabelContainer(props),
}));

const sizes = {
  sm: definePartsStyle({
    icon: {
      width: "12px",
      height: "12px",
      left: "14px",
    },
  }),
  md: definePartsStyle({
    icon: {
      width: "20px",
      height: "20px",
    },
  }),
  lg: definePartsStyle({
    icon: {
      width: "40px",
      height: "40px",
      left: "0",
    },
  }),
};

const variantLTR: PartsStyleFunction<typeof parts> = (props) => {
  const { colorScheme: c } = props;
  const color = `${c}.500`;
  return {
    root: {
      ":before": {
        content: "''",
        position: "absolute",
        top: "0",
        left: "8px",
        width: "4px",
        height: "100%",
        bg: color,
      },
      ":after": {
        content: "''",
      },
    },
    label: {
      bg: color,
    },
    labelContainer: {
      flexDirection: "row",
      gap: "5",
    },
    icon: {
      bg: color,
      rounded: "full",
      w: "20px",
      h: "20px",
      p: "5px",
    },
    content: {
      marginLeft: "40px",
    },
  };
};

const variantRTL: PartsStyleFunction<typeof parts> = (props) => {
  const { colorScheme: c } = props;
  const color = `${c}.500`;
  return {
    root: {
      ":before": {
        content: "''",
        position: "absolute",
        top: "0",
        right: "8px",
        width: "4px",
        height: "100%",
        bg: color,
      },
      ":after": {
        content: "''",
      },
    },
    label: {
      bg: color,
    },
    labelContainer: {
      flexDirection: "row-reverse",
      gap: "5",
    },
    icon: {
      bg: color,
      rounded: "full",
      w: "20px",
      h: "20px",
      p: "5px",
    },
    content: {
      marginRight: "40px",
    },
  };
};

const variants = {
  ltr: variantLTR,
  rtl: variantRTL,
};

export const TimelineTheme: ComponentStyleConfig = defineMultiStyleConfig({
  baseStyle,
  sizes,
  variants,
  defaultProps: {
    size: "md",
    colorScheme: "gray",
    variant: "ltr",
  },
});
