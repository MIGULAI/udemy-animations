
import { ReactNode } from 'react';
import classses from './referencesWrapper.module.css';

type Props = {
  references: ReactNode[];
}

export default function ReferencesWrapper({ references }: Props) {
  return (
    <>
      <div>
        <h2>
          References
        </h2>
      </div>
      <div className={classses.referenceWrapper}>
        {references.map((reference) => reference)}
      </div>
    </>

  )
}