import React, { useMemo } from 'react';

const dateFormatter = new Intl.DateTimeFormat();

export function FormattedDate({ date }) {
  const formattedDate = useMemo(() => dateFormatter.format(date), [date]);
  return <span>{formattedDate}</span>;
}
