let camelCaseRegexp = %re(
  "/^[a-z]([A-Z0-9]*[a-z][a-z0-9]*[A-Z]|[a-z0-9]*[A-Z][A-Z0-9]*[a-z])[A-Za-z0-9]*/g"
)

let snakeCaseRegexp = %re("/^([a-z]{1,})(_[a-z0-9]{1,})*$/g")

// Support camel case ("camelCase" -> "camel Case" and "CAMELCase" -> "CAMEL Case").
let defaultSplitRegexp = [%re("/([a-z0-9])([A-Z])/g"), %re("/([A-Z])([A-Z][a-z])/g")]

// Remove all non-word characters.
let defaultStriptRegexp = %re("/[^A-Z0-9]+/gi")

let getObjVal = %raw(`
  (input, key) => input[key]
`)

let createObj = %raw(`
  (key, val) => ({[key]: val})
`)

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
    etypes.some(t => typeof(value) === t)
  }
`)
