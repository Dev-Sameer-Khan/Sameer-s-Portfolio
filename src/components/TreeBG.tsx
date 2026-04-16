

import { SakuraTree } from './models/SakuraTree'

const TreeBG = ({ count = 4 }: { count?: number }) => {
  return (
    <>
      {Array.from({ length: count }).map((_, i) => (
        <SakuraTree
          key={i}
          position={[i * 25, -2, i % 2 === 0 ? -10 : 10]}
          scale={0.2}
        />
      ))}
    </>
  )
}

export default TreeBG