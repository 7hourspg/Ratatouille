export type SiteConfig = typeof siteConfig

export const siteConfig = {
  name: "Ratatouille",
  description:
    "A website for food lovers. Discover new recipes, learn about food culture, and more.",
  mainNav: [
    {
      title: "Home",
      href: "/",
    },
    {
      title: "Food",
      href: "/food",
    },
    {
      title: "About",
      href: "/",
    },
    {
      title: "Blog",
      href: "/",
    },
    {
      title: "Contact",
      href: "/",
    },
  ],
  links: {
    github: "https://github.com/7hourspg/next-template",
    docs: "https://ui.shadcn.com",
  },
}
