---
id: bithub.file-io
spdx-id: Apache-2.0
origin: https://github.com/bitcoreos/skills.md
hash: sha256:ba2660d75865f45d5c5cc63b36ac48a0146350fe43657c607651fa8216619d15
version: 1.0.0
signature: -----BEGIN PGP SIGNATURE-----iQIzBAABCgAdFiEEZ8U4LAM6MxGSR9xCicnEBsaHU18FAmlpgqQACgkQicnEBsaHU18hLQ/+KJiJqI/6/jz6RP5roxwiZKmuUSGwb1n+6bUzPdBjZONx8yzpEIDPTKp2TyxBT9H7JsirnZiiuPIR2YMbyBcMfhFtegjVeMmLLtjLVlXMjj2Fthzo9N6uBRvH5JqIsD9Rzi/fHtKCHPcWyoAFXAftDDCGZogk1uANzHC29CAiMBUJ0Krob8DPkuB3u77DN/wMJLEw0cc8jv/45uJDtrGI4Eh7QmXwV6oA1mRymeOv6PkEXZkslJDatgWnWDUG7jXhBQdCp9szxd5a8TkhLz3nfv5ycto+t8KMQuDmgGdY2U7WTHeZvA+pz38zlMsIivbbccipZkxXEn8uFbFuO6Aav8QKs7fH6Qy9xN+fyl9fICbrC7LPX3fIwXhMEUISDa2GPSIvE6zCwCK5lludQ5IqtVlXSL1Sq5VHsfq1QSkK8Sy6iPe5G6I6apqWH9fbphI2ezgFlIkCqddiEl8U0Ne3E+Dg2tP2OPBKsKvCLU5Wkb3z+oV4BP8ksGjKRJtAv6uQL9E0bTQk/jCKKw5qQT+J79Tn3qySLfK3WkOIwunPLnlQbsmzihDkRuo+Zdyv1hWBy6XBK/i37yP0HNRpx1DasoePIGHsHdG8/+tJAoTvhBdD+Ou2RUK5CDwdZjClGorhCrfoYsZ4TjzsfbbpXX2vJek+EwmOO8xmemvQcl1+xbI==wdlD-----END PGP SIGNATURE-----
---
/* global Deno */
export async function readFile(path) {
  return Deno.readTextFile(path);
}
