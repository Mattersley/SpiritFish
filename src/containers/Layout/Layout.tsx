import React from 'react';
import { connect } from 'react-redux';

import classes from './Layout.module.css';
import BottleView from './components/BottleView/BottleView';
import Divider from './components - UI/Divider/Divider';
import InfoView from './components/InfoView/InfoView';
import useSplitView from '../../hooks/useSplitView';

interface LayoutProps {
    bottleViewContent: React.ReactElement,
    infoViewContent: React.ReactElement,
    isAuthenticated: any,
}

const Layout = ({
  bottleViewContent, infoViewContent, isAuthenticated,
}: LayoutProps) => {
  const {
    dragHandler, fullWidthRef, leftViewRef, rightViewWidth,
  } = useSplitView();

  return (
    <div className={classes.Layout} ref={fullWidthRef}>
      <BottleView leftViewRef={leftViewRef}>
        {bottleViewContent}
      </BottleView>
      <Divider onMouseDown={dragHandler} />
      <InfoView isAuthenticated={isAuthenticated} width={rightViewWidth}>
        {infoViewContent}
      </InfoView>
    </div>
  );
};

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.userId !== null,
});

export default connect(mapStateToProps)(Layout);
