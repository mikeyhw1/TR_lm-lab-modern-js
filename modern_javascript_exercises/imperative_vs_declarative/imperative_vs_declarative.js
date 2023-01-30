// Instructions can be found in imperative_vs_declarative.md

export const longPasswords = passwords =>
  passwords.filter(item => item.length >= 9)