import RightContentBlock from "./containers/rightBlockContainerWrapper";

const ContentBlock = (props: any) => {
  if (props.type === "right") return <RightContentBlock {...props} />;
  return null;
};

export default ContentBlock;
