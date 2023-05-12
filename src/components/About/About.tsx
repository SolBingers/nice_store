import React, { FC } from 'react';
import about from './About.module.scss';
import { PhoneSpec } from '../../components/types/types';

interface Props {
  phoneSpec: PhoneSpec | undefined
}

export const About: FC<Props> = ({ phoneSpec }) => {
  return (
    <section className={about.aboutSection}>
      <div className={about.container}>
        <h2 className={about.title}>About</h2>

        <div className={about.description}>
          {phoneSpec?.description.map((element) => (
            <>
              <h3
                key={phoneSpec.id}
                className={about.subtitle}>
                {element.title}
              </h3>
              <section>
                <div className={about.textContainer}>
                  {element.text.map(el => (
                    <p
                      key={element.title}
                      className={about.text}>
                      {el}
                    </p>
                  ))}
                </div>
              </section>
            </>
          ))}
        </div>
      </div>
    </section>
  );
};