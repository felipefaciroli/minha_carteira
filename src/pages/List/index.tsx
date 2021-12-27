import React, { useMemo, useState, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { useParams } from 'react-router-dom';

import ContentHeader from '../../components/ContentHeader';
import SelectInput from '../../components/SelectInput';
import HistoryFinanceCard from '../../components/HistoryFinanceCard';

import gains from '../../repositories/gains';
import expenses from '../../repositories/expenses';
import formatCurrency from '../../utils/formatCurrency';
import formatDate from '../../utils/formatDate';
import listOfMonths from '../../utils/months';

import {
  Container,
  Filters,
  Content
} from './styles';

interface iData {
  id: string,
  description: string,
  amountFormatted: string,
  frequency: string,
  dateFormatted: string,
  tagColor: string
}

const List: React.FC = () => {
  const [data, setData] = useState<iData[]>([]);
  const [monthSelected, setMonthSelected] = useState<number>(new Date().getMonth() + 1);
  const [yearSelected, setYearSelected] = useState<number>(new Date().getFullYear());
  const [frequencyFilterSelected, setFrequencyFilterSelected] = useState(['recorrente', 'eventual']);

  const movimentType = useParams().type;


  const pagedata = useMemo(() => {
    if (movimentType === 'entry-balance') {
      return {
        title: "Entradas",
        lineColor: "#F7931B",
        data: gains
      }
    } else {
      return {
        title: "Saídas",
        lineColor: "#E44C4E",
        data: expenses
      }
    }
  }, [movimentType]);


  const years = useMemo(() => {
    let uniqueYears: number[] = [];

    const { data } = pagedata;

    data.forEach(item => {
      const date = new Date(item.date);
      const year = date.getFullYear();

      if (!uniqueYears.includes(year)) {
        uniqueYears.push(year);
      }
    });

    return uniqueYears.map(year => {
      return {
        value: year,
        label: year
      }
    });
  }, [pagedata]);


  const months = useMemo(() => {
    return listOfMonths.map((month, index) => {
      return {
        value: index + 1,
        label: month
      }
    });
  }, []);


  const handleFrequencyClick = (frequency: string) => {
    const alreadySelected = frequencyFilterSelected.findIndex(item => item === frequency);

    if (alreadySelected >= 0) {
      const filtered = frequencyFilterSelected.filter(item => item !== frequency);
      setFrequencyFilterSelected(filtered);
    } else {
      setFrequencyFilterSelected((prev) => [...prev, frequency]);
    }
  };


  const handleMonthSelected = (month: string) => {
    try {
      const parseMonth = Number(month);
      setMonthSelected(parseMonth);
    } catch (error) {
      throw new Error('invalid month value. Id accept 0 - 24.');
    }
  };


  const handleYearSelected = (year: string) => {
    try {
      const parseYear = Number(year);
      setYearSelected(parseYear);
    } catch (error) {
      throw new Error('invalid year value. Id accept integer numbers.');
    }
  };


  useEffect(() => {
    const { data } = pagedata;

    const filteredDate = data.filter(item => {
      const date = new Date(item.date);
      const month = date.getMonth() + 1;
      const year = date.getFullYear();

      return month === monthSelected && year === yearSelected && frequencyFilterSelected.includes(item.frequency);
    });

    const formattedData = filteredDate.map(item => {
      return {
        id: uuidv4(),
        description: item.description,
        amountFormatted: formatCurrency(Number(item.amount)),
        frequency: item.frequency,
        dateFormatted: formatDate(item.date),
        tagColor: item.frequency === 'recorrente' ? '#4E41F0' : '#E44C4E'
      }
    });

    setData(formattedData);
  }, [data.length, pagedata, monthSelected, yearSelected, frequencyFilterSelected]);


  return (
    <Container>
      <ContentHeader title={pagedata.title} lineColor={pagedata.lineColor}>
        <SelectInput
          options={months}
          defaultValue={monthSelected}
          onChange={(e) => handleMonthSelected(e.target.value)}
        />

        <SelectInput
          options={years}
          defaultValue={yearSelected}
          onChange={(e) => handleYearSelected(e.target.value)}
        />
      </ContentHeader>

      <Filters>
        <button
          type="button"
          className={`
          tag-filter 
          tag-filter-recurrent
          ${frequencyFilterSelected.includes('recorrente') && 'tag-actived'}`}
          onClick={() => handleFrequencyClick('recorrente')}
        >
          Recorrentes
        </button>

        <button
          type="button"
          className={`
          tag-filter 
          tag-filter-eventual
          ${frequencyFilterSelected.includes('eventual') && 'tag-actived'}`}
          onClick={() => handleFrequencyClick('eventual')}
        >
          Eventuais
        </button>
      </Filters>

      <Content>
        {
          data.map((item) => (
            <HistoryFinanceCard
              key={item.id}
              tagColor={item.tagColor}
              title={item.description}
              subtitle={item.dateFormatted}
              amount={item.amountFormatted}
            />
          ))
        }
      </Content>
    </Container>
  )
}

export default List;