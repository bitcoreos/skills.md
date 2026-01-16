---
id: anthropic.customer-info
spdx-id: MIT
origin: https://github.com/anthropics/anthropic-cookbook
hash: sha256:ee8691aaa7e545e3c12ec627853c5d93cd47792b442371e34e255a6e157d1bc0
version: 1.0.0
signature: |
  -----BEGIN PGP SIGNATURE-----
  
  iQIzBAABCgAdFiEEZ8U4LAM6MxGSR9xCicnEBsaHU18FAmlpmMQACgkQicnEBsaH
  U1/DPw//XumCjT4WSC2V6QpbBTW5p8U2dsEegAtsJavBZuE/L6jRqCAsvkVLcZGd
  Mo8njMU+Zid5X84royh6qoU5wK1nWXK246p+xNp9dO1/R0AHoklSjiHmpFL9YBKn
  MwCcn8W6mL+lOdHuttEuaCgnPzPsEQW0rEKwIg0jh8cead/YeRhGJdIdQDhhugdL
  2oLYasIXjd7Isl47hlkRbakP8Vs2UBsEZQyubDvitd4jSLCAppz8EL0SqG6l516P
  DoSnZAFAoDFF98wep1/UTHmZsZXDvGwHCam70Ey1zuvCdvUIK/v3dxXq5NaogQJI
  waiphPFBwrTIZ8GIKBurbLKXIuqAhjORFd8qRWI2dQcYJlj9UQ9ML0y/qntucFik
  N0TsjErGNoWXlzJ4+pleELm4mu0xnW0uT8srzYDRbkavyT+vPKwZkFMTs2rKdfWy
  4hcIOui6lwSrg6UTUWuXr0Ip4zXI9lYmd0ufx02VgvPu5cH/IEHyMPyO3WwBTQds
  lB017sCdiofNY547Zg+kWGVf0YV1xucSX9YIFmMSku6bUgx+0HQSE7EFl3MQ5QSZ
  a3cmHyDEc/crYtCcLdbXbDL+tZe67wFss1kq4ET7ZCD1gPZa4ncFczDlE+Lwrmlo
  X+pjjUN670JPURMXygQ10Fv5IIGBRKZAn65HrQtJSc4EOMgLagA=
  =3Ql1
  -----END PGP SIGNATURE-----
---
export function getCustomerInfo(id) { const db = { "C1": {name: "John", email: "j@x.com"} }; return db[id] || "Not found"; }
