import { Fragment, memo } from 'react';
import classes from './textTransitionButton.module.css';

type Props = {
  label: string;
  link?: string;
}

/**
 * Renders a button with text transition animation.
 *
 * @component
 * @param {Object} props - The component props.
 * @param {string} props.label - The label text for the button.
 * @param {string?} [props.link='#'] - The link URL for the button.
 * @returns {JSX.Element} The rendered text transition button component.
 * 
 * @example
 * // Example of how to use the TextTransitionSubButton component
 * <TextTransitionSubButton label="About" link="/about" />
 */
function Button({ label, link = '#' }: Props): JSX.Element {
  return <a href={link} className={classes.button} style={{
    transition: `${label.length * 50}ms`
  }}>
    {
      label.split('').map((char, index) => {
        if (char === ' ') {
          return <Fragment key={index}>{' '}</Fragment>
        }
        return <span key={index} style={{
          transitionDelay: `${index * 50}ms`
        }}>{char}</span>
      })
    }
  </a>
}

const TextTransitionSubButton = memo(Button);

export default TextTransitionSubButton;