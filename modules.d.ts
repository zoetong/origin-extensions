declare module '@vue/runtime-core' {
  interface ComponentCustomProperties {
    $app: {
      name: string,
      context:StringifiedUtil
    }
  }
}

// https://stackoverflow.com/a/64189046/479957
export {}
