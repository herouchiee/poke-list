import get  from "http";
import Link from 'next/link'
import Search from "../app/ui/search";



type Poke_data = {
  name: string;
  url: string;
}

const poke_api_return = await fetch("https://pokeapi.co/api/v2/pokemon?limit=151")
.then( poke_api_return => poke_api_return.json());

export default async function Home( {
  searchParams,
}: {
  searchParams?: Promise<{
    query?: string;
  }>;
}) {
  const searchParam = await searchParams;
  const query = searchParam?.query || "";
  const poke_list = poke_api_return.results.filter((poke:Poke_data) => poke.name.includes(query.toLocaleLowerCase()));


  return (
    <>
		<header className="text-gray-600 body-font">
		  <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
          <span className="ml-3 text-xl">Original Pokemons</span>
        </a>
		  </div>
		</header>
    
    <div className="mt-4 flex items-center justify-between gap-2 md:mt-8">
        <Search placeholder="Search Pokemon..." />
    </div>
    
    <section className="text-gray-600 body-font">
      <div className="container px-5 py-5 mx-auto">
        <div className="flex flex-wrap -m-4">
          {poke_list.map((poke:Poke_data) =>(

          <div className="p-4 lg:w-1/4" key={poke.name}>
            <div className="h-full bg-gray-100 bg-opacity-75 px-8 pt-16 pb-10 rounded-lg overflow-hidden text-center relative">
              <h1 className="title-font sm:text-2xl text-xl font-medium text-gray-900 mb-3">{poke.name}   </h1>
              <Link href={poke.name} className="text-indigo-500 inline-flex items-center">
                <img className="size-20 shrink-0 items-center" src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${poke_api_return.results.indexOf(poke) +1}.png`}/>
              </Link>
            </div>
          </div>))}

        </div>
      </div>
    </section>

    </>
  );
}
