
import classses from './elementWrapper.module.css';

type Props = {
  children: React.ReactNode;
  backgroundColor?: string;
}

export default function ElementWrapper({ children, backgroundColor}: Props) {
  return (
    <div className={classses.elementWrapper} style={{backgroundColor}}>
      {children}
    </div>
  )
}