import React, { Suspense } from 'react';

import GamesList from '../components/gamesList/List'
import Header from '../components/header/header'

Suspense

export default function Home() {

  return (
    <div>
      <Header title={'Game Hub'}/>
      <div>
        <GamesList />
      </div>
    </div>
  )
}
