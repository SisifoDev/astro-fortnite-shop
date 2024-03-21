import React from 'react'

const SectionShop = ({ dataTienda }) => {
  return (
    <div>
      {/* Iterar objeto dataTienda y renderizar claves valores */}
      <ul>
        {Object.entries(dataTienda).map(([key, value]) => {
          return (
            <li className='text-3xl font-bold' key={key}>
              {key}
              <ul>
                {value.map((item) => (
                  <>
                    <li className='text-xl font-medium' key={item.id}>
                      {item.displayName}
                    </li>
                    <img src={item.displayAssets.url} alt={item.displayName} />
                  </>
                ))}
              </ul>
            </li>
          )
        })}
      </ul>
    </div>
  )
}

export default SectionShop
