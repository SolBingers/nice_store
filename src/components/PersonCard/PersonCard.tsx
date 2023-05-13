import React from 'react';
import personCardStyle from './PersonCard.module.scss';
import { Person } from '../../components/types/types';

type Props = {
  personInfo: Person;
};

export const PersonCard: React.FC<Props> = ({ personInfo }) => {
  const {
    photo,
    fullName,
    Tl,
    linkedInLink,
    gitHubLink,
    cvLink,
    responsibilities,
  } = personInfo;

  return (
    <div className={personCardStyle.container}>
      <div className={personCardStyle.personInfo}>
        <div className={personCardStyle.personPhotoInfo}>
          <img
            src={photo}
            alt="Photo"
            className={personCardStyle.personPhotoInfoImg}
          />
        </div>

        <div className={personCardStyle.personTextInfo}>
          <div className={personCardStyle.personName}>{fullName}</div>

          <div className={personCardStyle.personSkill}>Fullstack Developer</div>
        </div>

        {Tl && <div className={personCardStyle.tl}>TL</div>}
      </div>

      <div className={personCardStyle.contacts}>
        <div className={personCardStyle.header}>CONTACTS & CV</div>

        <ul className={personCardStyle.links}>
          <li className={personCardStyle.link}>
            <a href={linkedInLink}>LinkedIn</a>
          </li>

          <li className={personCardStyle.link}>
            <a href={gitHubLink}>GitHub</a>
          </li>

          <li className={personCardStyle.CVLink}>
            <a href={cvLink}>CV</a>
          </li>
        </ul>
      </div>

      <div className={personCardStyle.responsibilities}>
        <div className={personCardStyle.responsibilitiesText}>
          RESPONSIBILITIES ON PROJECT
        </div>

        <ul className={personCardStyle.responsibilitiesList}>
          {responsibilities.map((respons) => (
            <li className={personCardStyle.responsibility} key={respons}>
              {respons}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
