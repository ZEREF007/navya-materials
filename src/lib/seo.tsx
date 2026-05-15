import { Helmet } from "react-helmet-async";

type Props = {
  title: string;
  description?: string;
  path?: string;
  image?: string;
};

const SITE = "https://navyamaterials.com";
const DEFAULT_DESC =
  "Navya Materials — engineering the future of sustainable materials from natural fibers, rooted in Nepal.";

export function Seo({ title, description = DEFAULT_DESC, path = "/", image = "/og-image.jpg" }: Props) {
  const url = `${SITE}${path}`;
  const fullTitle = title.includes("Navya") ? title : `${title} — Navya Materials`;
  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={url} />
      <meta property="og:type" content="website" />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={url} />
      <meta property="og:image" content={`${SITE}${image}`} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={`${SITE}${image}`} />
    </Helmet>
  );
}
