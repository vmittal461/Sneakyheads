import { Helmet } from "react-helmet-async";

const Meta = ({ title, description, keywords }) => {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keyword" content={keywords} />
    </Helmet>
  );
};

Meta.defaultProps = {
  title: "Welcome To SneakyHeads",
  description: "We sell the best products for cheap",
  keywords: "Sneakers, buy Sneakers, cheap Sneakers",
};

export default Meta;
