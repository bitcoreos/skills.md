---
id: anthropic.order-details
spdx-id: MIT
origin: https://github.com/anthropics/anthropic-cookbook
hash: sha256:61060a9bc92d64a74bbf92608986f51179b20e3451762c522224479b14603332
version: 1.0.0
signature: |
    -----BEGIN PGP SIGNATURE-----
    
    iQIzBAABCgAdFiEEZ8U4LAM6MxGSR9xCicnEBsaHU18FAmlrBy8ACgkQicnEBsaH
    U18xXxAAohXVKHDhsB3ko6ZEZJIIr2hwxo4CtvPHDxipgQYqtdDq1r7pdu/rae5d
    pIZNVu7Hefcxhj3RHtxiqb0yGAE7+osFr5Yd2ROYKD4HupzvSZcygpNOQTW5CEPj
    wwoRrncoAojNT5t/CJ0tUUOyf2f9l4KtKs8SUZCcchyDgP5u1TUHqCOv7Z6xubLO
    Fkp/XjC6bXR+njsFv4Vpry3BdXzGyWzveFWuhFbOy8RqAPa/O1It5LJoTpjCNe1u
    ai8OUPLzQpVMzd6VOydufHCKaNRyWXp1KaPaPH1PIJjVav//smNZZLtgVAJNqXUN
    fByOW4WYZ2Rv0GRFP2RREv5gEEwm0pGgw/vCbXL7czIgrutv9sVpeofZsq3x0g3t
    jxceVar+d+/EyeVXpDkXh7nvsf0nNiBIxeZtFKE11ueHVPmwpNZDVkI7e2wdk95D
    2MTdDzDIQJe4r8E9wx8k++YFRrPjFw22x3AATgc0nVrfOCk4Z9bd1fEu5YVkcxni
    0eZ21x4sZuUzO+4nsWiDbAs1VIpAhA3oiRoK4qPwtry+rBjN8M8vUqd1aFqQjIDZ
    FH5XQ7Fyf9Ml21Pefu7dgB2x1jmviBcc5/F4qtMIiV6YqRLY2KuvDPUFm3QMYhwh
    un5wipledmhtB5gmmfeTUQbX4rkELHyYz+6PPltCMn4RvzXJZ1Q=
    =JhAe
    -----END PGP SIGNATURE-----

---
export function getOrderDetails(id) { const db = { "O1": {product: "Widget", price: 19.99} }; return db[id] || "Not found"; }
