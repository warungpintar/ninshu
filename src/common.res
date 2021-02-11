let integrityMap = %raw(`
  value => defaultValue => validation => validation(value) ? value : defaultValue
`)

let typeof = %raw(`
  value => etype => {
    if (Array.isArray(value)) {
      return "array" === etype
    } else {
      return typeof value === etype
    }
  }
`)

let typeofs = %raw(`
  function(value, etypes = []) {
    etypes.some(t => Common.typeof(value) === t)
  }
`)
