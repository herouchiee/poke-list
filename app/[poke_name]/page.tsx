import get  from "http";
import Link from 'next/link'


export default async function poke_info({params, }:{
    params: Promise<{poke_name:string}>,
}) {
    const poke_name = (await params).poke_name;

    const poke_api_return_info = await fetch(`https://pokeapi.co/api/v2/pokemon/${poke_name}`)
    .then( poke_api_return_info => poke_api_return_info.json());

    console.log(poke_api_return_info.stats)
    return(
      <>
      <header className="text-gray-600 body-font">
		    <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
          <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
            <span className="ml-3 text-xl">Information about {poke_name}</span>
          </a>
          <Link href="/" className="md:ml-auto">
            <button className="flex items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0">
              Return 
            </button>
          </Link>
		    </div>
		  </header>
      <img className="size-40 shrink-0 m-auto" src={poke_api_return_info.sprites.other.home.front_default}/>
      <table className="w-full text-sm text-left rtl:text-right text-gray-500">
        <tbody>
          <tr className="bg-white border-b border-gray-200">
            <th scope="col" className="px-6 py-3 bg-gray-50 ">Height</th>
            <th scope="col" className="px-6 py-3">{poke_api_return_info.height}</th>
          </tr>
          <tr className="bg-white border-b border-gray-200">
            <th scope="col" className="px-6 py-3 bg-gray-50 ">Weight</th>
            <th scope="col" className="px-6 py-3">{poke_api_return_info.weight}</th>
          </tr>
          <tr className="bg-white border-b border-gray-200">
            <th scope="col" className="px-6 py-3 bg-gray-50 ">Types</th>
            <th scope="col" className="px-6 py-3">
              {poke_api_return_info.types.map((types:any) =>( 
                <a key={types.slot}>
                  {types.type.name} <br/>
                </a>
              ))}
            </th>
          </tr>
          <tr className="bg-white border-b border-gray-200">
            <th scope="col" className="px-6 py-3 bg-gray-50 ">Species</th>
            <th scope="col" className="px-6 py-3">{poke_api_return_info.species.name}</th>
          </tr>
          <tr className="bg-white border-b border-gray-200">
            <th scope="col" className="px-6 py-3 bg-gray-50 ">Forms</th>
            <th scope="col" className="px-6 py-3">
              {poke_api_return_info.forms.map((forms:any) =>( 
                <a key={forms.name}>
                  {forms.name} <br/>
                </a>
              ))}
            </th>
          </tr>
          <tr className="bg-white border-b border-gray-200">
            <th scope="col" className="px-6 py-3 bg-gray-50 ">Base Experience</th>
            <th scope="col" className="px-6 py-3">{poke_api_return_info.base_experience}</th>
          </tr>
          <tr className="bg-white border-b border-gray-200">
            <th scope="col" className="px-6 py-3 bg-gray-50 ">HP</th>
            <th scope="col" className="px-6 py-3">{poke_api_return_info.stats[0].base_stat}</th>
          </tr>
          <tr className="bg-white border-b border-gray-200">
            <th scope="col" className="px-6 py-3 bg-gray-50 ">Attack</th>
            <th scope="col" className="px-6 py-3">{poke_api_return_info.stats[1].base_stat}</th>
          </tr>
          <tr className="bg-white border-b border-gray-200">
            <th scope="col" className="px-6 py-3 bg-gray-50 ">Defense</th>
            <th scope="col" className="px-6 py-3">{poke_api_return_info.stats[2].base_stat}</th>
          </tr>
          <tr className="bg-white border-b border-gray-200">
            <th scope="col" className="px-6 py-3 bg-gray-50 ">Special Attack</th>
            <th scope="col" className="px-6 py-3">{poke_api_return_info.stats[3].base_stat}</th>
          </tr>
          <tr className="bg-white border-b border-gray-200">
            <th scope="col" className="px-6 py-3 bg-gray-50 ">Special Defense</th>
            <th scope="col" className="px-6 py-3">{poke_api_return_info.stats[4].base_stat}</th>
          </tr>
          <tr className="bg-white border-b border-gray-200">
            <th scope="col" className="px-6 py-3 bg-gray-50 ">Speed</th>
            <th scope="col" className="px-6 py-3">{poke_api_return_info.stats[5].base_stat}</th>
          </tr>
          <tr className="bg-white border-b border-gray-200">
            <th scope="col" className="px-6 py-3 bg-gray-50 ">Abilities</th>
            <th scope="col" className="px-6 py-3">
              {poke_api_return_info.abilities.map((abilities:any) =>( 
                <a key={abilities.slot}>
                  {abilities.ability.name} <br/>
                </a>
              ))}
            </th>
          </tr>
          <tr className="bg-white border-b border-gray-200">
            <th scope="col" className="px-6 py-3 bg-gray-50 ">Moves</th>
            <th scope="col" className="px-6 py-3">
              {poke_api_return_info.moves.map((moves:any) =>( 
                <a key={moves.move.name}>
                  {moves.move.name} <br/>
                </a>
              ))}
            </th>
          </tr>
        </tbody>
      </table>

      </>
    
    );
        
    
}