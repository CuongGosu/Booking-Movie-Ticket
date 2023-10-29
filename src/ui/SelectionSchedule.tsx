import { useState, useEffect } from 'react';
import { format, addDays, startOfWeek } from 'date-fns';

const SelectionSchedule = () => {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentDate((prevDate) => addDays(prevDate, 1));
    }, 86400000);

    return () => clearInterval(interval);
  }, []);

  const startOfCurrentWeek = startOfWeek(currentDate);

  const days = [];
  for (let i = 0; i < 7; i++) {
    const date = addDays(startOfCurrentWeek, i);
    const dayOfWeek = format(date, 'EEEE');
    const dayOfMonth = format(date, 'd');

    const isToday =
      date.getDate() === currentDate.getDate() &&
      date.getMonth() === currentDate.getMonth();

    const onClickDay = () => {
      setSelectedDate(date);
    };

    const dayClass = `w-1/7 text-center p-2 ${
      isToday ? 'bg-yellow-500 rounded-full' : ''
    } ${selectedDate === date ? 'bg-yellow-500 rounded-full' : ''}`;

    days.push(
      <div key={i} className={dayClass} onClick={onClickDay}>
        {dayOfWeek}
        <div>{dayOfMonth}</div>
      </div>,
    );
  }

  return (
    <div className="rounded-md bg-yellow-100 p-4">
      <h1 className="text-xl font-bold">Chọn ngày chiếu</h1>
      <div className="flex flex-col items-center">
        <div className="my-4 text-2xl font-bold">Tháng 10</div>
        <div className="flex w-full justify-around">{days}</div>
      </div>
    </div>
  );
};

export default SelectionSchedule;
