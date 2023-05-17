import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import styled from 'styled-components';

type Props = {
  color: string,
  isActive?: boolean,
  namespaceId: string,
  capacity: string,
  backgroundColor: string,
  NormalColor: string,
}

export const Color: React.FC<Props> = ({
  color,
  isActive,
  namespaceId,
  capacity,
  backgroundColor,
  NormalColor,
}) => {

  const location = useLocation();
  const linkStart = location.pathname.slice(0, location.pathname.lastIndexOf('/'));

  const Container = styled.div`
    position: relative;
    background-color: ${NormalColor};
    width: 30px;
    height: 30px;

    border: 2px solid #ffffff;
    border-radius: 50%;
    margin-right: 9px;

    &::before {
      content: '';
      position: absolute;
      top: 50%;
      left: 50%;

      width: 30px;
      height: 30px;

      border-radius: 50%;
      border: solid 1px;

      transform: translateX(-50%) translateY(-50%);
      transition: all 0.3s linear;
    }

    &::after {
      content: '';

      transition: background-color 0.7s linear;
    }

    &:hover {
      &::before {
        border: solid 1px ${backgroundColor};
      }

      &::after {
        content: '';
        position: absolute;
        top: 50%;
        left: 50%;

        background-color: ${backgroundColor};

        width: 12px;
        height: 12px;
        border-radius: 50%;

        transform: translateX(-50%) translateY(-50%);
      }
    }
  `;

  const ContainerActive = styled.div`
  position: relative;
    background-color: ${NormalColor};
    width: 30px;
    height: 30px;

    border: 2px solid #ffffff;
    border-radius: 50%;
    margin-right: 9px;
  &::before {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;

    width: 30px;
    height: 30px;
    border-radius: 50%;
    border: solid 1px ${backgroundColor};

    transform: translateX(-50%) translateY(-50%);
  }

  &::after {
    content: '';

    position: absolute;
    top: 50%;
    left: 50%;

    background-color: ${backgroundColor};

    width: 12px;
    height: 12px;
    border-radius: 50%;

    transform: translateX(-50%) translateY(-50%);
  }
  `;

  return (
    <Link
      to={`${linkStart}/${namespaceId}-${capacity.toLowerCase()}-${color.split(' ').join('-')}`}
    >
      {isActive ?(
        <ContainerActive></ContainerActive>
      ) :(
        <Container>
        </Container>
      )}
    </Link>
  );
};
