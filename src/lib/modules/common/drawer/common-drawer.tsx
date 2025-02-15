import { Fragment } from "react"

export const Drawer = (props) => {
  const { onClose, children, open = false, innerClass } = props;

  // add the contents in
  let contents = null;
  let screen = null;
  let drawerClass,
    drawerInnerClass = "";
  if (innerClass) {
    drawerInnerClass = innerClass;
  }
  if (open) {
    contents = children;
    drawerClass = "open";
    screen = <div className="common-drawer-outer" onClick={onClose}></div>;
  }

  return (
    <Fragment>
      {screen}
      <div className={`${drawerInnerClass} common-drawer-inner ${drawerClass}`}>
        {contents}
      </div>
    </Fragment>
  );
};

export default Drawer;
