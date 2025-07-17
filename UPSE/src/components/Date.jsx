import React, { useState, useRef, useEffect, useContext } from 'react';
import styled from 'styled-components';
import Calendar from './Calendar';

//icons
import CalenderIcon from '../assets/icons/calander.svg';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import { DateContext } from '../context/DateContext';

const DateRow = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  position: relative;
`;

const Left = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
`;

const CalenderBox = styled.div`
  width: 32px;
  height: 32px;
  background-color: #90BBFF33;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  position: relative;
`;

const CalenderImg = styled.img`
  width: 18px;
  height: 18px;
`;

const CalendarPopup = styled.div`
  position: absolute;
  top: 45px;
  left: 0;
  z-index: 100;
`;

const Datetime = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
`;

const IconButton = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'pointer')};
  color: ${({ disabled }) => (disabled ? 'rgba(255,255,255,0.5)' : 'white')};
  font-size: 20px;
`;

const DateText = styled.h1`
  font-family: 'Inter', sans-serif;
  font-weight: 500;
  font-size: 1.2rem;
  color: #fff;
  margin: 0 12px;
`;

const Right = styled.div`
  display: flex;
  align-items: center;
`;

const DayText = styled.h1`
  font-family: 'Inter', sans-serif;
  font-weight: 500;
  font-size: 1.2rem;
  color: #fff;
  margin: 0;
`;

const formatDate = (date) => {
  const day = String(date.getDate()).padStart(2, '0');
  const month = date.toLocaleString('default', { month: 'short' });
  const year = date.getFullYear();
  return `${day}, ${month}, ${year}`;
};

const getDayName = (date) => {
  return date.toLocaleString('default', { weekday: 'long' });
};

const DateComponent = () => {
  const { selectedDate, setSelectedDate } = useContext(DateContext);
  const [showCalendar, setShowCalendar] = useState(false);

  const calendarRef = useRef();
  const iconRef = useRef();

  const handleOutsideClick = (e) => {
    if (
      calendarRef.current &&
      !calendarRef.current.contains(e.target) &&
      iconRef.current &&
      !iconRef.current.contains(e.target)
    ) {
      setShowCalendar(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleOutsideClick);
    return () => document.removeEventListener('mousedown', handleOutsideClick);
  }, []);

  const handlePrevDate = () => {
    const prev = new Date(selectedDate);
    prev.setDate(prev.getDate() - 1);
    setSelectedDate(prev);
  };

  const handleNextDate = () => {
    const next = new Date(selectedDate);
    next.setDate(next.getDate() + 1);
    if (next <= new Date()) setSelectedDate(next);
  };

  const handleDateSelect = (date) => {
    setSelectedDate(date);
    setShowCalendar(false);
  };

  const isToday = selectedDate.toDateString() === new Date().toDateString();

  return (
    <DateRow>
      <Left>
        <CalenderBox ref={iconRef} onClick={() => setShowCalendar(!showCalendar)}>
          <CalenderImg src={CalenderIcon} alt="calendar" />
        </CalenderBox>

        {showCalendar && (
          <CalendarPopup>
            <Calendar
              ref={calendarRef}
              selectedDate={selectedDate}
              setSelectedDate={handleDateSelect}
            />
          </CalendarPopup>
        )}

        <Datetime>
          <IconButton onClick={handlePrevDate}>
            <FiChevronLeft />
          </IconButton>

          <DateText>{formatDate(selectedDate)}</DateText>

          <IconButton onClick={!isToday ? handleNextDate : undefined} disabled={isToday}>
            <FiChevronRight/>
          </IconButton>
        </Datetime>
      </Left>

      <Right>
        <DayText>{getDayName(selectedDate)}</DayText>
      </Right>
    </DateRow>
  );
};

export default DateComponent;
