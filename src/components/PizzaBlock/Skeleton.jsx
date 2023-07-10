import React from 'react';
import ContentLoader from 'react-content-loader';

const Skeleton = (props) => (
  <ContentLoader
    speed={2}
    width={280}
    height={470}
    className="pizza-block"
    viewBox="0 0 280 460"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
    {...props}>
    <rect x="0" y="310" rx="10" ry="10" width="280" height="80" />
    <rect x="0" y="260" rx="10" ry="10" width="280" height="34" />
    <rect x="0" y="415" rx="25" ry="25" width="100" height="45" />
    <rect x="130" y="415" rx="25" ry="25" width="150" height="45" />
    <circle cx="135" cy="125" r="120" />
  </ContentLoader>
);

export default Skeleton;
