import axios, { AxiosResponse } from 'axios'
import React, { useEffect, useState } from 'react'
import SearchInput from './component/search/SearchInput'
import SearchResult from './component/search/SearchResult'
import styles from './styles.module.css'

export interface Actor {
  char_id: number
  name: string
  img: string
  nickname: string
}
interface Props {
  url: string
}

export const SearchComponentPlayground: React.FC<Props> = ({ url }) => {
  const [searchText, setSearchText] = useState<string>('')
  const [actors, setActors] = useState<Actor[]>([])

  useEffect(() => {
    const fetchCharacters = async () => {
      const response: AxiosResponse<Actor[]> = await axios.get<Actor[]>(url, {
        params: {
          name: searchText
        }
      })
      setActors(response.data)
    }

    const timeoutId: NodeJS.Timeout = setTimeout(() => {
      fetchCharacters()
    }, 500)

    return () => {
      clearTimeout(timeoutId)
    }
  }, [searchText])
  return (
    <div className={styles.search_container}>
      <SearchInput handleSearch={setSearchText}></SearchInput>
      <SearchResult actors={actors}></SearchResult>
    </div>
  )
}
