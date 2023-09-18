import * as React from 'react';
import getData from '@/components/pokemon-facts';

export default async function Page() {
  console.log("Rendering Page");

  const data = await getData();

  console.log(data.abilities[0].ability.name);

  return (
    <p>
      {data.abilities[0].ability.name}
    </p>
  );
}
