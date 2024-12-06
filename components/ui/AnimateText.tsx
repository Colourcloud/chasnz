'use client'
import React, { ReactNode, useEffect, useRef, useState } from 'react';

type AnimationType = 'word' | 'letter';

type AnimatedTextProps = {
  children: React.ReactElement;
  type?: AnimationType;
};

const AnimatedText: React.FC<AnimatedTextProps> = ({ children, type = 'word' }) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver((entries: IntersectionObserverEntry[]) => {
      if (entries[0].isIntersecting) {
        setIsVisible(true);
        observer.disconnect();
      }
    });

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      observer.disconnect();
    };
  }, []);

  const text = React.isValidElement<{children?: ReactNode}>(children)
    ? children.props.children
    : null;

  if (typeof text !== 'string') {
    return children;
  }

  const getAnimatedElements = () => {
    if (type === 'word') {
      return text.split(' ').map((word, index) => (
        <span
          key={index}
          style={{
            display: 'inline-block',
            overflow: 'hidden'
          }}
        >
          <span
            style={{
              display: 'inline-block',
              padding: '3px 0px',
              lineHeight: '1',
              transform: isVisible ? 'translateY(0px)' : 'translateY(100px)',
              transition: `transform 0.4s ${index * 0.05}s, opacity 0.4s ${index * 0.05}s`,
              opacity: isVisible ? 1 : 0
            }}
          >
            {word}&nbsp;
          </span>
        </span>
      ));
    } else {
      return text.split('').map((letter, index) => (
        <span
          key={index}
          style={{
            display: 'inline-block',
            overflow: 'hidden'
          }}
        >
          <span
            style={{
              display: 'inline-block',
              padding: '3px 0px',
              lineHeight: '1',
              transform: isVisible ? 'translateY(0px)' : 'translateY(100px)',
              transition: `transform 0.4s ${index * 0.02}s, opacity 0.4s ${index * 0.02}s`,
              opacity: isVisible ? 1 : 0
            }}
          >
            {letter === ' ' ? '\u00A0' : letter}
          </span>
        </span>
      ));
    }
  };

  return React.cloneElement(children, {
    ...children.props,
    ref,
    children: getAnimatedElements()
  });
};

export default AnimatedText;