import React, { FC } from 'react';
import phoneSpec from '../../phoneSpecForTest.json';
import spec from './TecSpecs.module.scss';

const listOfSpec = [
  {name: 'Screen', value: phoneSpec.screen},
  {name: 'Resolution', value: phoneSpec.resolution},
  {name: 'Processor', value: phoneSpec.processor},
  {name: 'RAM', value: phoneSpec.ram},
  {name: 'Built in memory', value: phoneSpec.capacity},
  {name: 'Camera', value: phoneSpec.camera},
  {name: 'Zoom', value: phoneSpec.zoom},
];

export const TecSpecs: FC = () => (
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