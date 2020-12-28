import { Card, CardActionArea, CardContent, CardMedia } from '@material-ui/core'
import React from 'react'
import { Actor } from '../../index'
import styles from '../../styles.module.css'

interface Props {
  actors: Actor[]
}

const SearchResult: React.FC<Props> = React.memo(({ actors }) => {
  return (
    <div className={styles.search_result_container}>
      {actors &&
        actors.map((actor) => {
          return (
            <Card className={styles.actor_container} key={actor.char_id}>
              <CardActionArea>
                <CardMedia
                  component='img'
                  image={actor.img}
                  className={styles.image_container}
                />
                <CardContent>
                  <h1>{actor.name}</h1>
                  <p>{actor.nickname}</p>
                </CardContent>
              </CardActionArea>
            </Card>
          )
        })}
    </div>
  )
})

export default SearchResult
