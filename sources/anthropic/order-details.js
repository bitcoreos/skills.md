---
id: anthropic.order-details
spdx-id: MIT
origin: https://github.com/anthropics/anthropic-cookbook
hash: sha256:61060a9bc92d64a74bbf92608986f51179b20e3451762c522224479b14603332
signature: |
  -----BEGIN PGP SIGNATURE-----
  
  iQIzBAABCgAdFiEEZ8U4LAM6MxGSR9xCicnEBsaHU18FAmlplqgACgkQicnEBsaH
  U18WQxAAgYVDjm/TrDAzgAFjdaC0hoKfyZ/KQGsNVmopbggKZFnc0VDLj4PlJzAY
  60gLU4lZ7OWDh2armVaMYSLMb37lpxwYXR+g6bHms8G5DFmXmJhQbTwBy2GjvHZy
  IHqW7aVcPQw1C4i60/sipLAfDZHjCmIFsXY76+sX10uYeObJ5xFM5xOM20dz2wnS
  ePQVRSn7Y5vx0uQAVvSuclPfOgr6hhW3XJLru2aZA+jMyfM3o61dfX3gE02BjEVx
  wZwVOBKnbnJtJaossuJ0zo3sSA1HNrmaVkk1sz4xAmFt4SApIPvg3EKWAX8O7KTj
  e4ikPj+hwA/+zK4uOD57MSUaN8LBpJzAOIzlDjEvlPyjSd4zzQpLCumT2ZQKGvuA
  hnP2ksDRHAA01Cx0ijKRWUC4ne/V1q8/7GFJbwEfDMGqd8xdQ/4OHMjS4ZSEJH1D
  v9uzXEEYvXoO7G0BW7FBpblRsZ6uGfxwBBPq0tX3c5zqUNVM/l275WV46bD9uLih
  lawukfQHyv57w+wN8dVarhGhoaAJmolFqnvzOxvMlXI8k/bYa+rV5ch2I9Ew3wQ0
  +pbnsg4qo8bjeLSHBST4THZOOXwBnPgv2Uf77HS973zRoqk6I5zVqkgyw1okCpua
  WgXzr+g51ohx/42ORSCnFoVtXRe8rziNMx4gB6QoL6SzOWlTBfc=
  =4un0
  -----END PGP SIGNATURE-----
---

iQIzBAABCgAdFiEEZ8U4LAM6MxGSR9xCicnEBsaHU18FAmlplJMACgkQicnEBsaH
U1+r+w/9FSY3TU5vVgid3je0NQ9j03T81N8hHJXoBX0xeqS6R/bCLrNiRgVOsGlk
G9yTVQCfprDNZ6PwjjPO8E6cickdWcQVCftHInS9OenqFElkY/16di0bp1t0iHdR
hZDTOI/kH7md6W0zO0WCiya2P8O/1mtmN2IplRxUftTC2daaZvaGF8R1DIwJoCjL
7fzKEIJ4uSaEgXAIqb1mMd7BzLHGLux+lY51lZCbDUY6V7yA0APvNgZ/HXazbVRu
w31cRTUHtD7b8rO8n5sSBOJVCIhFIr1qlLqu+8Whko2vPGbeTQo/Qs4C2FVIIzQz
AfgLFIgDXVW8UEJ8I9hHamGJnoXbn7xpTJI1R3DyMAu02kq/0J4its+CN6hEnCKj
2TVFnEOkCRxCUbpG2+lDj8vlhEcM+RmAwcxVTrV8F/kVq9SBVCi0zXvHpY6Zfmw6
lpTTtCyidCfmyVEWvGGBClyNhM+DCNdQRX7Wzrsszow2gEqV3gYL0zGxSB3XuUOL
6J/O/+dLXFiKgFd2BWnSIX/xQqP1dFqzdiN5Mt5CY9i5v3zpxAjkeRyjSm3veSHL
jfNPeBr/SegVAg/U9eOQLRQnupWwSjTWfmxhulobLkXTiE74siz7vZ7euJVNsjIY
y96p04XtxoPviUFyAur9ioo/mRz05t1fE5UgI4LiZM9bw4x7jew=
=ct/C
-----END PGP SIGNATURE-----
---
export function getOrderDetails(id) { const db = { "O1": {product: "Widget", price: 19.99} }; return db[id] || "Not found"; }
