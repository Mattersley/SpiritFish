import { createRef, useEffect, useState } from 'react';

const useSplitView = () => {
  const [leftViewWidth, setLeftViewWidth] = useState<undefined | number>(undefined);
  const [rightViewWidth, setRightViewWidth] = useState<undefined | number>(undefined);
  const [mouseXPosition, setMouseXPosition] = useState<undefined | number>(undefined);
  const [isDragging, setIsDragging] = useState(false);
  const fullWidthRef = createRef<HTMLDivElement>();
  const leftViewRef = createRef<HTMLDivElement>();

  const minWidth = 300;

  const dragHandler = (event) => {
    setMouseXPosition(event.clientX);
    setIsDragging(true);
  };

  const onMouseMove = (event) => {
    if (isDragging && leftViewWidth && mouseXPosition) {
      const newLeftViewWidth = leftViewWidth + event.clientX - mouseXPosition;
      setMouseXPosition(event.clientX);

      if (newLeftViewWidth < minWidth) {
        setLeftViewWidth(minWidth);
        return;
      }

      if (fullWidthRef.current) {
        const fullWidth = fullWidthRef.current.clientWidth;

        if (newLeftViewWidth > fullWidth - minWidth) {
          setLeftViewWidth(fullWidth - minWidth);
          return;
        }
      }

      setLeftViewWidth(newLeftViewWidth);
    }
  };

  const onMouseUp = () => {
    setIsDragging(false);
  };

  useEffect(() => {
    document.addEventListener('mousemove', onMouseMove);
    document.addEventListener('mouseup', onMouseUp);
    return () => {
      document.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('mouseup', onMouseUp);
    };
  });

  useEffect(() => {
    if (leftViewRef.current) {
      if (!leftViewWidth) {
        setLeftViewWidth(leftViewRef.current?.clientWidth);
      }
      leftViewRef.current.style.width = `${leftViewWidth}px`;
    }
  }, [leftViewRef, leftViewWidth, setLeftViewWidth]);

  useEffect(() => {
    if (document.documentElement.clientWidth > leftViewWidth) {
      setRightViewWidth(document.documentElement.clientWidth - leftViewWidth);
    }
  }, [leftViewWidth]);

  return {
    fullWidthRef, rightViewWidth, leftViewWidth, leftViewRef, dragHandler,
  };
};

export default useSplitView;
