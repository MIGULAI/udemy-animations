import classses from './reference.module.css';

type Props = {
  index: number;
  text: string;
  link: string;
}

export default function Reference({ index, text, link }: Props) {
  return (
    <div key={index} className={classses.reference}>
      <div className={classses.text}>
        <span>{`${index}. `}</span>
        <span>{`${text} :`}</span>
        <a href={link} target="_blank" rel="noreferrer">
          {link}
        </a>
      </div>
    </div>
  )
}