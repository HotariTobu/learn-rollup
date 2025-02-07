export const lazy = () => {
  import('./foo')
    .then(({ default: foo }) => {
      console.log(foo)
    })
}
