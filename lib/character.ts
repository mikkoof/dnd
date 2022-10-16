import useSWR from "swr"

export function useCharacter() {
  const fetcher = () => fetch(`/api/character`).then(res => res.json())
  const { data, error } = useSWR(`/api/character`, fetcher)

  return {
    character: data,
    isLoading: !error && !data,
    isError: error
  }
}