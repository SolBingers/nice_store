import React, {useState, useMemo} from 'react';
import { mateStudents } from './mateStudents';
import contactPageStyle from './ContactsPage.module.scss';
import { PersonCard } from '../../components/PersonCard';
import { TurnOn } from '../../components/TurnOnButton';
import song from '../../audio/Rick.mp3';
export const ContactsPage:React.FC = () => {
  const [isActiveTogler, setIsActiveTogler] = useState(false);

  const audio = useMemo(() => (
    new Audio(`${song}`)
  ), []);

  const start = () => {
    if(isActiveTogler) {
      audio.pause();
    } else {
      audio.play();
    }
  };

  const handleTogle = () => {
    setIsActiveTogler(!isActiveTogler);
  };

  return (
    <>
      <div className={contactPageStyle.memeModeContainer}>
        <p className={contactPageStyle.memeMode}>Meme Mode:</p>
        <button
          onClick={start}
          className={contactPageStyle.playMusic}
        >
          <TurnOn isActive={isActiveTogler} setIsActive={handleTogle}/>
        </button>
      </div>

      <div className={contactPageStyle.container}>
        {mateStudents.map(student => (
          <PersonCard 
            key={student.fullName} 
            personInfo={student}
            isActiveTogler={isActiveTogler}
          />
        ))}
      </div>
    </>
  );
};