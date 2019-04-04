import { useStaticRendering } from 'mobx-react'

import PetStore from './petStore'



const isServer = !process.browser

useStaticRendering(isServer)

let store = null

export function initializeStore(initialData) {
    // Always make a new store if server, otherwise state is shared between requests
    let thisStore = {
        pet: new PetStore(isServer, initialData)
    }

    if (isServer) {
      return thisStore
    }
    if (store === null) {
      store = thisStore
    }

    return store
  }