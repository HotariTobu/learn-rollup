interface Person {
  id: number,
  name: string,
}

export default (): Person => {
  return {
    id: 8,
    name: 'John',
  }
}
