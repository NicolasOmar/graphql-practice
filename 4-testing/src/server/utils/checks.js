export const checkPropsExists = (data, props) => {
  data.forEach(
    item => props.forEach(prop => expect(item[prop]).not.toBeNull())
  )
}