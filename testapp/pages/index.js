import getConfig from "next/config"

const { publicRuntimeConfig, serverRuntimeConfig } = getConfig()

console.log(publicRuntimeConfig)
console.log(serverRuntimeConfig)

export default function Home() {
  return (
    <>
      <p></p>
    </>
  )
}
