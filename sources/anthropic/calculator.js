---
id: anthropic.calculator
spdx-id: MIT
origin: https://github.com/anthropics/anthropic-cookbook
hash: sha256:917ef6c93a50ef027f2ab913910110ab4a579620807c15db149bfe3b20158407
version: 1.0.0
signature: |
  -----BEGIN PGP SIGNATURE-----
  
  iQIzBAABCgAdFiEEZ8U4LAM6MxGSR9xCicnEBsaHU18FAmlpmMQACgkQicnEBsaH
  U19yaA/+ImLpU2EA2ebP6yYQmxXu4+1XMSBW6VID+Q66cNFPYEuYuGJ3Kvn/bSyd
  MdydRH6Hdcsu8OkXsBdKjUECoXhzB3JpR4szToBNNdtcQ3rdB2p3ZXdoxn7WEYye
  ohpmCnnqubgg9miuu/BKyYyTmGX0+iQ/7qqXegIvgolvsIYAW7jtEIf36PQAar9A
  y02SiGEXtI8yhaxpNyvyz7IC63t1JTSc1hH4leV6LNFxG81RoD8+yRVafcZhTLnW
  6HwuTUXBiGTr3rH0GT2KXaE0p/5JSMQWbr4ffJIc1PNg+u9vq63gdubxEmkpp2Rq
  VCkUx6F9K/+TpIOPOzOhPN9awJ7zEGJwtXYTSHiic+h7FlXlD2mmNpnVnh9wY3Mr
  QJNR5HuMJfLLV5SGXcH8ot+9aQogZgbRNk+Imj+D7/e9oEO7ONLPUEzUCNIB0AMP
  so4deZgnBCNbd3OGHuUc0V1mpeu7J7UU+ts75vEDqNh8z3Te/d0aTm1KwidGnJ7v
  Clr3t3ASMY8wHv2IeSxV/WNltMxn9FDiJR5Q4OTAu4lzDq6cuCchMck+Q1MHFqYA
  FCYGV7oH9pBbVr2q3ePHcMa9kPBum1UJFlw5zYqofbdCVZR5HS909PUHISTml4xE
  kNBrTj0nXWvdrk3KB9dcPDF0jYWn4PuzMZLXbNd4/Ol1zLTwMQk=
  =qeKH
  -----END PGP SIGNATURE-----
---
export function calculate(expr) { try { return eval(expr.replace(/[^0-9+\-*/().]/g, '')); } catch(e) { return 'Error'; } }
