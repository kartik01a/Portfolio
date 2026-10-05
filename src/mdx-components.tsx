import type { MDXComponents } from "mdx/types";

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    h2: (props) => (
      <h2 className="mt-14 font-display text-3xl text-ink md:text-4xl" {...props} />
    ),
    p: (props) => <p className="mt-4 text-[17px] leading-relaxed text-secondary" {...props} />,
    ul: (props) => <ul className="mt-4 list-disc space-y-2 pl-5 text-secondary" {...props} />,
    a: ({ href, ...props }) => {
      const external = typeof href === "string" && href.startsWith("http");
      return (
        <a
          href={href}
          className="text-accent underline decoration-accent/30 underline-offset-4"
          target={external ? "_blank" : undefined}
          rel={external ? "noreferrer" : undefined}
          {...props}
        />
      );
    },
    ...components,
  };
}
