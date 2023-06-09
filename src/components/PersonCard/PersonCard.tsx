import React from 'react';
import personCardStyle from './PersonCard.module.scss';
import { Person } from '../../types/Person';
import classNames from 'classnames';

type Props = {
  personInfo: Person;
  isActiveTogler: boolean;
};

export const PersonCard: React.FC<Props> = ({ personInfo, isActiveTogler }) => {
  const {
    photo,
    memePhoto,
    fullName,
    Tl,
    linkedInLink,
    gitHubLink,
    responsibilities,
  } = personInfo;

  return (
    <div
      className={classNames(personCardStyle.container, {
        [personCardStyle.containerMemeMode]: isActiveTogler,
      })}
    >
      <div className={personCardStyle.personInfo}>
        <div className={personCardStyle.personPhotoInfo}>
          <img
            src={isActiveTogler ? `${memePhoto}` : `${photo}`}
            alt="Photo"
            className={classNames(personCardStyle.personPhotoInfoImg, {
              [personCardStyle.personPhotoInfoImgMeme]: isActiveTogler,
            })}
          />
        </div>

        <div className={personCardStyle.personTextInfo}>
          {Tl && <div className={personCardStyle.tl}>TL</div>}
          <div className={personCardStyle.personName}>{fullName}</div>

          <div className={personCardStyle.personSkill}>Fullstack Developer</div>
        </div>
      </div>

      <div className={personCardStyle.contacts}>
        <div className={personCardStyle.header}>CONTACTS</div>

        <ul className={personCardStyle.links}>
          <li className={personCardStyle.link}>
            <a href={linkedInLink} target="_blank" rel="noreferrer">
              LinkedIn
            </a>
          </li>

          <li className={personCardStyle.link}>
            <a href={gitHubLink} target="_blank" rel="noreferrer">
              GitHub
            </a>
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
