// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: jCmJKVw35RaDDpqbkpwXKJ
// Component: J7TbFtJ_8HL3b

import * as React from "react";

import Head from "next/head";
import Link, { LinkProps } from "next/link";
import { useRouter } from "next/router";

import * as p from "@plasmicapp/react-web";
import * as ph from "@plasmicapp/react-web/lib/host";

import {
  hasVariant,
  classNames,
  wrapWithClassName,
  createPlasmicElementProxy,
  makeFragment,
  MultiChoiceArg,
  SingleBooleanChoiceArg,
  SingleChoiceArg,
  pick,
  omit,
  useTrigger,
  StrictProps,
  deriveRenderOpts,
  ensureGlobalVariants
} from "@plasmicapp/react-web";
import MenuButton from "../../MenuButton"; // plasmic-import: _QXz08NNmqgwAr/component
import LinkButton from "../../LinkButton"; // plasmic-import: 2rJsUIT2Qz_G3/component
import IconLink from "../../IconLink"; // plasmic-import: jfLcf6w3hglQ6i/component

import { useScreenVariants as useScreenVariantssmtgOrzLQnh4Yi } from "./PlasmicGlobalVariant__Screen"; // plasmic-import: SMTGOrzLQnh4yi/globalVariant

import "@plasmicapp/react-web/lib/plasmic.css";

import plasmic_library_plasmic_color_type_css from "../library_plasmic_color_type/plasmic_library_plasmic_color_type.module.css"; // plasmic-import: seaQhLVS4bbjiGvJJrRwyL/projectcss
import projectcss from "./plasmic_furn_e_commerce.module.css"; // plasmic-import: jCmJKVw35RaDDpqbkpwXKJ/projectcss
import sty from "./PlasmicHeader.module.css"; // plasmic-import: J7TbFtJ_8HL3b/css

import SearchIcon from "./icons/PlasmicIcon__Search"; // plasmic-import: AuPEiqtbYtHa0k/icon
import CogIcon from "./icons/PlasmicIcon__Cog"; // plasmic-import: ZuCrsTAdePsSV3/icon
import ShoppingCartIcon from "./icons/PlasmicIcon__ShoppingCart"; // plasmic-import: 86S0UiKF3Wfs10/icon

export type PlasmicHeader__VariantMembers = {
  expanded: "expanded";
};
export type PlasmicHeader__VariantsArgs = {
  expanded?: SingleBooleanChoiceArg<"expanded">;
};
type VariantPropType = keyof PlasmicHeader__VariantsArgs;
export const PlasmicHeader__VariantProps = new Array<VariantPropType>(
  "expanded"
);

export type PlasmicHeader__ArgsType = {};
type ArgPropType = keyof PlasmicHeader__ArgsType;
export const PlasmicHeader__ArgProps = new Array<ArgPropType>();

export type PlasmicHeader__OverridesType = {
  root?: p.Flex<"div">;
  menuButton?: p.Flex<typeof MenuButton>;
  link?: p.Flex<"a"> & Partial<LinkProps>;
  img?: p.Flex<typeof p.PlasmicImg>;
};

export interface DefaultHeaderProps {
  expanded?: SingleBooleanChoiceArg<"expanded">;
  className?: string;
}

const __wrapUserFunction =
  globalThis.__PlasmicWrapUserFunction ?? ((loc, fn) => fn());
const __wrapUserPromise =
  globalThis.__PlasmicWrapUserPromise ??
  (async (loc, promise) => {
    return await promise;
  });

function useNextRouter() {
  try {
    return useRouter();
  } catch {}
  return undefined;
}

function PlasmicHeader__RenderFunc(props: {
  variants: PlasmicHeader__VariantsArgs;
  args: PlasmicHeader__ArgsType;
  overrides: PlasmicHeader__OverridesType;
  forNode?: string;
}) {
  const { variants, overrides, forNode } = props;
  const __nextRouter = useNextRouter();

  const $ctx = ph.useDataEnv?.() || {};
  const args = React.useMemo(() => Object.assign({}, props.args), [props.args]);

  const $props = {
    ...args,
    ...variants
  };
  const refsRef = React.useRef({});
  const $refs = refsRef.current;

  const currentUser = p.useCurrentUser?.() || {};
  const [$queries, setDollarQueries] = React.useState({});
  const stateSpecs = React.useMemo(
    () => [
      {
        path: "expanded",
        type: "private",
        variableType: "variant",
        initFunc: ({ $props, $state, $queries, $ctx }) => $props.expanded
      }
    ],
    [$props, $ctx]
  );
  const $state = p.useDollarState(stateSpecs, { $props, $ctx, $queries });

  const globalVariants = ensureGlobalVariants({
    screen: useScreenVariantssmtgOrzLQnh4Yi()
  });

  return (
    <div
      data-plasmic-name={"root"}
      data-plasmic-override={overrides.root}
      data-plasmic-root={true}
      data-plasmic-for-node={forNode}
      className={classNames(
        projectcss.all,
        projectcss.root_reset,
        projectcss.plasmic_default_styles,
        projectcss.plasmic_mixins,
        projectcss.plasmic_tokens,
        plasmic_library_plasmic_color_type_css.plasmic_tokens,
        sty.root,
        { [sty.rootexpanded]: hasVariant($state, "expanded", "expanded") }
      )}
    >
      <p.Stack
        as={"div"}
        hasGap={true}
        className={classNames(projectcss.all, sty.freeBox___9FYpE)}
      >
        {(hasVariant(globalVariants, "screen", "mobile") ? true : true) ? (
          <MenuButton
            data-plasmic-name={"menuButton"}
            data-plasmic-override={overrides.menuButton}
            className={classNames("__wab_instance", sty.menuButton, {
              [sty.menuButtonexpanded]: hasVariant(
                $state,
                "expanded",
                "expanded"
              )
            })}
            expanded={
              hasVariant($state, "expanded", "expanded") &&
              hasVariant(globalVariants, "screen", "mobile")
                ? true
                : undefined
            }
          />
        ) : null}
        <p.PlasmicLink
          data-plasmic-name={"link"}
          data-plasmic-override={overrides.link}
          className={classNames(projectcss.all, projectcss.a, sty.link)}
          component={Link}
          href={"/" as const}
          platform={"nextjs"}
        >
          <p.PlasmicImg
            data-plasmic-name={"img"}
            data-plasmic-override={overrides.img}
            alt={""}
            className={classNames(sty.img)}
            displayHeight={"auto" as const}
            displayMaxHeight={"none" as const}
            displayMaxWidth={"none" as const}
            displayMinHeight={"0" as const}
            displayMinWidth={"0" as const}
            displayWidth={"100%" as const}
            src={{
              src: "/plasmic/furn_e_commerce/images/plasmic.png",
              fullWidth: 3216,
              fullHeight: 624,
              aspectRatio: undefined
            }}
          />
        </p.PlasmicLink>
        {(
          hasVariant($state, "expanded", "expanded") &&
          hasVariant(globalVariants, "screen", "mobile")
            ? true
            : hasVariant(globalVariants, "screen", "mobile")
            ? true
            : true
        ) ? (
          <div
            className={classNames(projectcss.all, sty.freeBox__eQwe1, {
              [sty.freeBoxexpanded__eQwe12IjH]: hasVariant(
                $state,
                "expanded",
                "expanded"
              )
            })}
          >
            <LinkButton
              className={classNames("__wab_instance", sty.linkButton__i2W3P)}
              size={"small" as const}
              text={"Home"}
              type={"blankGray" as const}
            />

            <LinkButton
              className={classNames("__wab_instance", sty.linkButton__l9ZWu)}
              href={"/#new-arrival" as const}
              size={"small" as const}
              text={"New Arrival"}
              type={"blankGray" as const}
            />

            <LinkButton
              className={classNames("__wab_instance", sty.linkButton__mjnU)}
              href={"/#features" as const}
              size={"small" as const}
              text={"Features"}
              type={"blankGray" as const}
            />

            <LinkButton
              className={classNames("__wab_instance", sty.linkButton___8ED5A)}
              href={``}
              size={"small" as const}
              text={"Blog"}
              type={"blankGray" as const}
            />

            <LinkButton
              className={classNames("__wab_instance", sty.linkButton__zqtwT)}
              href={``}
              size={"small" as const}
              text={"Contact"}
              type={"blankGray" as const}
            />
          </div>
        ) : null}
        <p.Stack
          as={"div"}
          hasGap={true}
          className={classNames(projectcss.all, sty.freeBox__ayMq1)}
        >
          <IconLink
            className={classNames("__wab_instance", sty.iconLink___0G4TR)}
            icon={
              <SearchIcon
                className={classNames(projectcss.all, sty.svg__lkJSu)}
                role={"img"}
              />
            }
          />

          <IconLink
            className={classNames("__wab_instance", sty.iconLink__mcJbr)}
            icon={
              <CogIcon
                className={classNames(projectcss.all, sty.svg__y8Xlp)}
                role={"img"}
              />
            }
          />

          <IconLink
            className={classNames("__wab_instance", sty.iconLink__yWYF)}
            icon={
              <ShoppingCartIcon
                className={classNames(projectcss.all, sty.svg__mk0Bo)}
                role={"img"}
              />
            }
          />
        </p.Stack>
      </p.Stack>
      {(
        hasVariant($state, "expanded", "expanded") &&
        hasVariant(globalVariants, "screen", "mobile")
          ? true
          : true
      ) ? (
        <div
          className={classNames(projectcss.all, sty.freeBox__dKxMh, {
            [sty.freeBoxexpanded__dKxMh2IjH]: hasVariant(
              $state,
              "expanded",
              "expanded"
            )
          })}
        >
          <LinkButton
            className={classNames("__wab_instance", sty.linkButton__ygl1D)}
            text={"Home"}
            type={"blankGray" as const}
          />

          <LinkButton
            className={classNames("__wab_instance", sty.linkButton__k3Ly8)}
            text={"New Arrival"}
            type={"blankGray" as const}
          />

          <LinkButton
            className={classNames("__wab_instance", sty.linkButton__r4BN)}
            text={"Features"}
            type={"blankGray" as const}
          />

          <LinkButton
            className={classNames("__wab_instance", sty.linkButton__ygUin)}
            text={"Blog"}
            type={"blankGray" as const}
          />

          <LinkButton
            className={classNames("__wab_instance", sty.linkButton__tGlFd)}
            text={"Contact"}
            type={"blankGray" as const}
          />
        </div>
      ) : null}
    </div>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: ["root", "menuButton", "link", "img"],
  menuButton: ["menuButton"],
  link: ["link", "img"],
  img: ["img"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  (typeof PlasmicDescendants)[T][number];
type NodeDefaultElementType = {
  root: "div";
  menuButton: typeof MenuButton;
  link: "a";
  img: typeof p.PlasmicImg;
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicHeader__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicHeader__VariantsArgs;
    args?: PlasmicHeader__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicHeader__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    /* Specify args directly as props*/ Omit<
      PlasmicHeader__ArgsType,
      ReservedPropsType
    > &
    /* Specify overrides for each element directly as props*/ Omit<
      NodeOverridesType<T>,
      ReservedPropsType | VariantPropType | ArgPropType
    > &
    /* Specify props for the root element*/ Omit<
      Partial<React.ComponentProps<NodeDefaultElementType[T]>>,
      ReservedPropsType | VariantPropType | ArgPropType | DescendantsType<T>
    >;

function makeNodeComponent<NodeName extends NodeNameType>(nodeName: NodeName) {
  type PropsType = NodeComponentProps<NodeName> & { key?: React.Key };
  const func = function <T extends PropsType>(
    props: T & StrictProps<T, PropsType>
  ) {
    const { variants, args, overrides } = React.useMemo(
      () =>
        deriveRenderOpts(props, {
          name: nodeName,
          descendantNames: [...PlasmicDescendants[nodeName]],
          internalArgPropNames: PlasmicHeader__ArgProps,
          internalVariantPropNames: PlasmicHeader__VariantProps
        }),
      [props, nodeName]
    );
    return PlasmicHeader__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicHeader";
  } else {
    func.displayName = `PlasmicHeader.${nodeName}`;
  }
  return func;
}

export const PlasmicHeader = Object.assign(
  // Top-level PlasmicHeader renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    menuButton: makeNodeComponent("menuButton"),
    link: makeNodeComponent("link"),
    img: makeNodeComponent("img"),

    // Metadata about props expected for PlasmicHeader
    internalVariantProps: PlasmicHeader__VariantProps,
    internalArgProps: PlasmicHeader__ArgProps
  }
);

export default PlasmicHeader;
/* prettier-ignore-end */
