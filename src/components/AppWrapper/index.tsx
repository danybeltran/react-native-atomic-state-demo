import { useEffect, useState } from "react"
import Store from "lib/Store"

export default function AppWrapper({ children }: any) {
  const [storageReady, setStorageReady] = useState(false)

  useEffect(() => {
    // Initialize store
    Store.init()

    // wait until async-storge data is loaded in memory
    const interval = setTimeout(() => {
      setStorageReady(true)
    }, 400)

    return () => {
      clearTimeout(interval)
    }
  }, [])

  return storageReady && children
}
