export firstLetterToLower = input => {
  input
  ->Common.integrityMap("", x => x->Common.typeof("string"))
  ->Js.String2.substring(~from=0, ~to_=1)
  ->Js.String2.toLowerCase ++ input->Js.String2.sliceToEnd(~from=1)
}