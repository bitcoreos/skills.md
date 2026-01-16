---
id: bithub.file-io
spdx-id: Apache-2.0
origin: https://github.com/bitcoreos/skills.md
hash: sha256:9d9b978e86e950d544397e6d712a756e4ec236d870489fb41d70e1a6fc8a17dd
version: 1.0.0
signature: |
  -----BEGIN PGP SIGNATURE-----
  
  iQIzBAABCgAdFiEEZ8U4LAM6MxGSR9xCicnEBsaHU18FAmlpmMQACgkQicnEBsaH
  U18rlA//QxPgxVXLBiqvbebH7eyCdkTcSk0NLTWaYZbhjtIqzTL8x1pdTS/bypLD
  WkRybznv0dYkmI1Ots0v23J9jLh1t+/XM5c8mGniU4FMbIQl72OVyOHQ1Pxqzd9Q
  /acoc1JQzZRtMcSU9xAgnOJZTTVP0DwhIajd9qpE7jBg+5B77Tjr8XqIitr5EwXQ
  qzCl4vrdEtpMo0ke8IF+o6qj9JVGRHQeS2n8MU7FZS6GxoTfSUfBpKsNnHVn6CvQ
  LSKXjKctmEj0O5kRcG8XQJI1i/2VKEsBKErID+L/CUvgYdHGTL2jlwzevHUEsx46
  yNFwluF8mnaXW9y1XqhuXt/VvFxMafxiH4wC6Llvr+R3M1X8Lwo1Qe/GozZGcdsF
  VaaupGrIrNnEJ5QUKs26u3g9pLP2Ox91UmVhh8OYXVxsbMQ2UFzPBKWEdKANqZnO
  TfZ4qCa6+WEKYen6kcHnj1tG44JzPIRQlGpDAvHzMYUUtYbby5XhRrfoSIkFlm9U
  LNGqm+Mb8d+sb0DjbudcfLputSNW1GorxIL/QeSnik+rOr78bDYzy2tRV2GUhOp7
  d/ygyYWSnD671Jio2+GBeQVKpOIkHJzA2bMi17L5ID+jLo2Dplv3V/otqrIBV6wQ
  oprPVBP58aALNl2NKeWvjog1lSS1/9RUnvPDjL95o5BBSM2Guos=
  =ND+S
  -----END PGP SIGNATURE-----
---
/* global Deno */
export async function readFile(path) {
  return Deno.readTextFile(path);
}
