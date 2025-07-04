import { useNavigate, useSearchParams } from 'react-router-dom';

export default function useParamsHook() {
  const navigate = useNavigate();
  const [searchParams, setSearchParams] = useSearchParams();

  const handleMakeParams = (key: string, value: string) => {
    if (value) {
      if (searchParams.has(key)) searchParams.set(key, value);
      else searchParams.append(key, value);
    } else searchParams.delete(key);
    setSearchParams(searchParams);
  };
  return {
    navigate,
    searchParams,
    handleMakeParams,
  };
}
