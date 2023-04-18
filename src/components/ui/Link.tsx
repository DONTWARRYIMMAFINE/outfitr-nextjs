"use client";

import { Link as MuiLink, LinkProps as MuiLinkProps } from "@mui/material";
import { CustomMuiLinkProps } from "@mui/material/Link";
import { styled } from "@mui/material/styles";
import clsx from "clsx";
import NextLink, { LinkProps as NextLinkProps } from "next/link";
import { usePathname } from "next/navigation";
import { AnchorHTMLAttributes, ElementType, FC, forwardRef } from "react";

// Add support for the sx prop for consistency with the other branches.
const Anchor = styled("a")({});

interface NextLinkComposedProps extends Omit<AnchorHTMLAttributes<HTMLAnchorElement>, "href">, Omit<NextLinkProps, "href" | "as" | "onClick" | "onMouseEnter" | "onTouchStart"> {
  to: NextLinkProps["href"];
  linkAs?: NextLinkProps["as"];
}

const NextLinkComposed = forwardRef<HTMLAnchorElement, NextLinkComposedProps>(
  function NextLinkComposed(props, ref) {
    const {
      to,
      linkAs,
      replace,
      scroll,
      shallow,
      prefetch,
      legacyBehavior = true,
      locale,
      ...other
    } = props;

    return (
      <NextLink
        href={to}
        prefetch={prefetch}
        as={linkAs}
        replace={replace}
        scroll={scroll}
        shallow={shallow}
        passHref
        locale={locale}
        legacyBehavior={legacyBehavior}
      >
        <Anchor ref={ref} {...other} />
      </NextLink>
    );
  },
);

NextLinkComposed.displayName = "NextLinkComposed";

declare module "@mui/material/Link" {
  export interface CustomMuiLinkProps extends MuiLinkProps<"a", { component?: ElementType }> {
    selected?: boolean;
    showUnderline?: boolean;
  }
}

const StyledMuiLink: FC<CustomMuiLinkProps> = styled(MuiLink)<CustomMuiLinkProps>(({ theme, showUnderline, selected }) => ({
  underline: "none",
  textTransform: "none",
  textDecoration: "none",
  color: theme.palette.text.primary,
  position: "relative",
  transition: theme.transitions.create(["all"]),
  ":hover": {
    color: theme.palette.primary.main,
  },
  ...(showUnderline) && {
    padding: theme.spacing(0.5, 0),
    ":hover": {
      color: theme.palette.primary.main,
      ":after": {
        transform: "scaleX(1)",
      },
    },
    ":after": {
      content: "\"\"",
      backgroundColor: theme.palette.primary.main,
      width: "100%",
      height: theme.spacing(0.25),
      position: "absolute",
      bottom: 0,
      left: 0,
      transform: "scaleX(0)",
      transition: theme.transitions.create(["all"]),
    },
  },
  ...(selected) && {
    color: theme.palette.primary.main,
  },
}));

export type LinkProps = {
  activeClassName?: string;
  as?: NextLinkProps["as"];
  href: NextLinkProps["href"];
  linkAs?: NextLinkProps["as"]; // Useful when the as prop is shallow by styled().
  noLinkStyle?: boolean;
} & Omit<NextLinkComposedProps, "to" | "linkAs" | "href"> &
  Omit<CustomMuiLinkProps, "href">;

const Link = forwardRef<HTMLAnchorElement, LinkProps>(function Link(props, ref) {
  const {
    activeClassName = "active",
    as,
    className: classNameProps,
    href,
    legacyBehavior,
    linkAs: linkAsProp,
    locale,
    noLinkStyle,
    prefetch,
    replace,
    role, // Link don"t have roles.
    scroll,
    shallow,
    ...other
  } = props;

  const routerPathname = usePathname();
  const pathname = typeof href === "string" ? href : href.pathname;
  const className = clsx(classNameProps, {
    [activeClassName]: routerPathname === pathname && activeClassName,
  });

  const isExternal =
    typeof href === "string" && (href.indexOf("http") === 0 || href.indexOf("mailto:") === 0);

  if (isExternal) {
    if (noLinkStyle) {
      return <Anchor className={className} href={href} ref={ref} {...other} />;
    }

    return <StyledMuiLink className={className} href={href} ref={ref} {...other} />;
  }

  const linkAs = linkAsProp || as;
  const nextjsProps = {
    to: href,
    linkAs,
    replace,
    scroll,
    shallow,
    prefetch,
    legacyBehavior,
    locale,
  };

  if (noLinkStyle) {
    return <NextLinkComposed className={className} ref={ref} {...nextjsProps} {...other} />;
  }

  return (
    <StyledMuiLink
      component={NextLinkComposed}
      className={className}
      ref={ref}
      {...nextjsProps}
      {...other}
    />
  );
});

Link.displayName = "Link";

export default Link;
