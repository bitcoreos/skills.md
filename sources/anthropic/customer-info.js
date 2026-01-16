---
id: anthropic.customer-info
spdx-id: MIT
origin: https://github.com/anthropics/anthropic-cookbook
hash: sha256:ee8691aaa7e545e3c12ec627853c5d93cd47792b442371e34e255a6e157d1bc0
signature: |
  -----BEGIN PGP SIGNATURE-----
  
  iQIzBAABCgAdFiEEZ8U4LAM6MxGSR9xCicnEBsaHU18FAmlplqgACgkQicnEBsaH
  U1+gnxAAp7D39FHft5uIuOSJltWhWON6FmZ06JR/m+Tx5jYPjvmkZefxrKpNnj8i
  kHwEii+FO/bCOIFq1jWATN09guCv4UvE8lhs1VVKpMsVtUKDwue5ugyPyy3Mqzvm
  Vb0iUwzvIX8ExwJ4eksg+Chqf4VIU+KXNHJVjUVqX6PL5JYdx+2EwgucfTCgRHNZ
  YeOM9GnsAvyJQCdwthPN6Nm24kl1z+ZDXWCEQ93Aakog5RNsIq3wZ082R0R0+aN3
  I64fViyLpZdHAi/5jjKIQQ9/t5kz9uuVkUZbH/vRX61+EMbHb7rbgcFoBJTZUJYD
  3DlLnWJjp2+tz+RmoT7G54EoZeUpDppkHJCtmeCea9ZKkDqKx0xtQwXpYvMXfl/P
  xzsb0k6ec758IBAYr7CQ2yQyvjcHws9k/al/R+jC73ArVqBgZCx56x1UiAOyhOwQ
  xeywwKf3iXjxnqHjXyu3VZoLB2OaOVr7IRd59aBv/bmLgw51IIhPAuQ7Xo1oBUhN
  /07hTqlNlc/r7t/wNny6exUjxeFwEaKYIF96PDBLoamrWgTbhRN3m4JPLXnwXISW
  U1foQGYEnAfBWnXESc3wyvTpneI1citJai3MOGwQcBC/VCrh1GLL7FMpVpJgQi7D
  N1/q6BPdVDLcnAuB3oJ3i5h3DrxsKsVm4NTUHBGme1Sb+mFmz1A=
  =xWHm
  -----END PGP SIGNATURE-----
---

iQIzBAABCgAdFiEEZ8U4LAM6MxGSR9xCicnEBsaHU18FAmlplJMACgkQicnEBsaH
U19ZkQ//VACGfb1fWiEau4/WUykKG9nI9V1OebNCVdI+yduJwLGU6COrEaNb+sz0
p3RiAKS2JVBJnkZv3SaYM+7b/olSl07vzQm+AAF/qPI7ixkROyYk3NSHF4DKgZi9
q2BGqLT17DxFWNQXiAXk9XDXXiIGgY4MkIgV8MDjtUeojuiyGcudFUagloG1XkpE
n9cBr0aSfnE3fTS92y19CgPsARBFIvl1XnSbovKCUf62TL15+0vmpsbZiqDv/bDO
ASyBZtJCXuXD2faNnwLU7Y0kN5NrHdicY+iy3AIXSwTJ+f0TUnE3CjAeqOKeJMC6
AkcYbT7LWqXsF6JV+ArYAT2pWNBDljHy1kls/YYriOSGmKF1fjPSTQWtKf0/MkxT
5woqU3Ww1LTFxyqUlBAttLfL5etpkJDG3fkUmsvXehc1BCS/hiu6/CjxOPOMxXMp
W6zGyH1Ptndd/Zm19IOJO4LFpued7oy6xcOIIBuY4LKBVMLJOfLBx+YmXP4hRlzv
TxSmI76mCt/ocL6tzBtmBI0eavXq5FDQWIGENUTZpazNMnm8RMypv6rjfDglkarG
/u4LlYQVxX8VIG3C1gQLQFGO9Ej3zLqy8VaScPgNVW7yPGN6SAQP73OItsJSaRlI
O4imNtIX4SySITvb1TiHfQ0dax3QpOd3ZpdiRjvI47qHD21UxHg=
=R2X+
-----END PGP SIGNATURE-----
---
export function getCustomerInfo(id) { const db = { "C1": {name: "John", email: "j@x.com"} }; return db[id] || "Not found"; }
