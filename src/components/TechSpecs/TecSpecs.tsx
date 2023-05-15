import React, { FC } from 'react';
import spec from './TecSpecs.module.scss';
import { ProductItemSpec } from '../../types/types';

interface Props {
  ProductItemSpec: ProductItemSpec | undefined
}

export const TecSpecs: FC<Props> = ({ ProductItemSpec }) => {


  const listOfSpec = [
    {name: 'Screen', value: ProductItemSpec?.screen},
    {name: 'Resolution', value: ProductItemSpec?.resolution},
    {name: 'Processor', value: ProductItemSpec?.processor},
    {name: 'RAM', value: ProductItemSpec?.ram},
    {name: 'Built in memory', value: ProductItemSpec?.capacity},
    {name: 'Camera', value: ProductItemSpec?.camera},
    {name: 'Zoom', value: ProductItemSpec?.zoom},
  ];

  return (
    <section>
      <div className={spec.container}>
        <h3 className={spec.title}>Tech specs</h3>
        <div className={spec.specContainer}>
          <div className={spec.name}>
            {listOfSpec.map((el) => (
              <p key={listOfSpec.indexOf(el)} className={spec.info}>
                {el.name}
              </p>
            ))}
          </div>

          <div className={spec.specs}>
            {listOfSpec.map((el) => (
              <p key={listOfSpec.indexOf(el)} className={spec.info}>
                {el.value}
              </p>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};