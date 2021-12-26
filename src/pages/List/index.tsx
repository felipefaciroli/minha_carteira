import React, { useMemo, useState, useEffect } from 'react';

import ContentHeader from '../../components/ContentHeader';
import SelectInput from '../../components/SelectInput';
import HistoryFinanceCard from '../../components/HistoryFinanceCard';

import gains from '../../repositories/gains';
import expenses from '../../repositories/expenses';
import formatCurrency from '../../utils/formatCurrency';
import formatDate from '../../utils/formatDate';

import {
  Container,
  Filters,
  Content
} from './styles';

interface IRouteParams {
  match: {
    params: {
      type: string
    }
  }
}

interface iData {
  description: string,
  amountFormatted: string,
  frequency: string,
  dateFormatted: string,
  tagColor: string
}

const List: React.FC<IRouteParams> = ({ match }) => {
  const [data, setData] = useState<iData[]>([]);

  const { type } = match.params;

  const title = useMemo(() => {
    return type === 'entry-balance' ? 'Entradas' : 'Saídas';
  }, [type]);

  const lineColor = useMemo(() => {
    return type === 'entry-balance' ? '#F7931B' : '#E44C4E';
  }, [type]);

  const listData = useMemo(() => {
    return type === 'entry-balance' ? gains : expenses;
  }, [type]);

  const months = [
    { value: 7, label: 'Julho' },
    { value: 8, label: 'Agosto' },
    { value: 9, label: 'Setembro' },
  ]

  const years = [
    { value: 2020, label: 2020 },
    { value: 2019, label: 2019 },
    { value: 2018, label: 2018 },
  ]

  useEffect(() => {
    const response = listData.map(item => {
      return {
        description: item.description,
        amountFormatted: formatCurrency(Number(item.amount)),
        frequency: item.frequency,
        dateFormatted: formatDate(item.date),
        tagColor: item.frequency === 'recorrente' ? '#4E41F0' : '#E44C4E'
      }
    });

    setData(response);
  }, [data.length, listData]);

  return (
    <Container>
      <ContentHeader title={title} lineColor={lineColor}>
        <SelectInput options={months} />
        <SelectInput options={years} />
      </ContentHeader>

      <Filters>
        <button
          type="button"
          className='tag-filter tag-filter-recurrent'
        >Recorrentes</button>

        <button
          type="button"
          className='tag-filter tag-filter-eventual'
        >Eventuais</button>
      </Filters>

      <Content>
        {
          data.map((item, i) => (
            <HistoryFinanceCard
              key={i}
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