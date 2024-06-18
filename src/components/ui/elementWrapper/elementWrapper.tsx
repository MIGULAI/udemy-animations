
import classses from './elementWrapper.module.css';

type Props = {
  children: React.ReactNode;

}

export default function ElementWrapper({ children}: Props) {
  return (
    <div className={classses.elementWrapper}>
      {children}
    </div>
  )
}