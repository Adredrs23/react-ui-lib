import styled from '@emotion/styled';
import React, { FC } from 'react';


interface EmotionButtonProps {
  /**
   * Is this the principal call to action on the page?
   */
  primary?: boolean;
  /**
   * What background color to use
   */
  backgroundColor?: string;
  /**
   * How large should the button be?
   */
  size?: 'small' | 'medium' | 'large';
  /**
   * Button contents
   */
  label: string;
  /**
   * Optional click handler
   */
  onClick?: () => void;
}

/**
 * Primary UI component for user interaction
 */
export const EmotionButton: FC<EmotionButtonProps> = ({
  primary = false,
  size = 'medium',
  backgroundColor,
  label,
  ...props
}) => {

  return (
    <StyledButton
      type="button"
      data-primary={primary}
      data-size={size}
      // style={{ backgroundColor }}
      {...props}
    >
      {label}
    </StyledButton>
  );
};


const StyledButton = styled.button`
  font-family: 'Nunito Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif;
  font-weight: 700;
  border: 0;
  border-radius: 3em;
  cursor: pointer;
  display: inline-block;
  line-height: 1;

  /* default is medium size */
  font-size: 14px;
  padding: 11px 20px;
  
  /* default type is primary */
  color: white;
  background-color: #1ea7fd;
  
  &[data-primary='false']{
    color: #333;
    background-color: transparent;
    box-shadow: rgba(0, 0, 0, 0.15) 0px 0px 0px 1px inset;
  }

  &[data-size='small']{
    font-size: 12px;
    padding: 10px 16px;
  }

  &[data-size='large']{
    font-size: 16px;
    padding: 12px 24px;
  }
`