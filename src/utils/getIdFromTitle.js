const getIdFromTitle = (title) => {
  if (!title) return undefined
  return title.toLocaleLowerCase().replaceAll(" ", "-")
}

export default getIdFromTitle
