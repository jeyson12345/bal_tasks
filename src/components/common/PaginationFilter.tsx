import { useState, useEffect } from 'react';
import type { PaginationProps } from 'antd';
import { Pagination } from 'antd';
import { useSearchParams } from 'react-router-dom';

function PaginationFilter({ total }: PaginationProps) {
  const [searchParams, setSearchParams] = useSearchParams();
  const page = Number(searchParams.get('page') || 1);
  const [offset, setOffset] = useState<number>(0);
  const [limit, setLimit] = useState<number>(20);
  const onChange: PaginationProps['onChange'] = (pageNumber, pageSize) => {
    handleMakeParams('page', String(pageNumber));
    // setOffset((pageNumber - 1) * limit);

    // // set limit
    // handleMakeParams('limit', String(pageSize));
    // setOffset(pageSize);
  };
  const handleMakeParams = (key: string, value: string) => {
    if (value) {
      if (searchParams.has(key)) searchParams.set(key, value);
      else searchParams.append(key, value);
    } else searchParams.delete(key);
    setSearchParams(searchParams);
  };
  const setDefaults = () => {
    const dPage = searchParams.get('offset');
    const dSize = searchParams.get('limit');
    setOffset(dPage ? +dPage : 0);
    setLimit(dSize ? +dSize : 20);
  };

  useEffect(() => {
    setDefaults();
  }, [searchParams]);

  const disabled = total !== undefined && total <= 20;

  return disabled ? (
    <></>
  ) : (
    <Pagination
      total={total}
      pageSize={limit}
      // showQuickJumper
      showSizeChanger={false}
      onChange={onChange}
      disabled={disabled}
      current={page}
      style={{ marginTop: '24px', display: 'flex', justifyContent: 'flex-end' }}
    />
  );
}

export default PaginationFilter;
