import React, { FC } from 'react';
import about from './About.module.scss';
import { ProductItemSpec } from '../../types/types';

interface Props {
  ProductItemSpec: ProductItemSpec | undefined
}

export const About: FC<Props> = ({ ProductItemSpec }) => {
  return (
    <section className={about.aboutSection}>
      <div className={about.container}>
        <h2 className={about.title}>About</h2>

        <div className={about.description}>
          {ProductItemSpec?.description.map((element) => (
            <React.Fragment key={element.title} >
              <h3
                className={about.subtitle}>
                {element.title}
              </h3>
              <section>
                <div className={about.textContainer}>
                  {element.text.map((el, i) => (
                    <p
                      key={element.title + i}
                      className={about.text}>
                      {el}
                    </p>
                  ))}
                </div>
              </section>
            </React.Fragment>
          ))}
        </div>
      </div>
    </section>
  );
};