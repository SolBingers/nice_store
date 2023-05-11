import React from 'react';
import { mateStudents } from './mateStudents';
import contactPageStyle from './ContactsPage.module.scss';
import { PersonCard } from '../../components/PersonCard';

export const ContactsPage:React.FC = () => (
  <div className={contactPageStyle.container}>
    {mateStudents.map(student => (
      <PersonCard key={student.fullName} personInfo={student}/>
    ))}
  </div>
);