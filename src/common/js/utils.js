export function group (origin, per) {
  let grouped = []
  if (origin instanceof Array) {
    per = per || origin.length
    while (origin.length > 0) {
      grouped.push(origin.slice(0, per))
      origin.splice(0, per)
    }
    return grouped
  } else {
    return origin
  }
}

export default {
  group
}
