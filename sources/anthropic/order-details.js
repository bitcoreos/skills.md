---
id: anthropic.order-details
spdx-id: MIT
origin: https://github.com/anthropics/anthropic-cookbook
hash: sha256:61060a9bc92d64a74bbf92608986f51179b20e3451762c522224479b14603332
version: 1.0.0
signature: |
  -----BEGIN PGP SIGNATURE-----
  
  iQIzBAABCgAdFiEEZ8U4LAM6MxGSR9xCicnEBsaHU18FAmlpmMQACgkQicnEBsaH
  U19tQg//Vi6ulcummScKVVOXDSxNSE7i7X6yCrz6DOzt7hZw9KG+jgUippmuZ0hS
  LJY1BnXJcSCMzXK/MQ628swGaQf3MQJRN7vasH7lY/N8o6adztXE5x0YgywdgC8p
  h/7gylgkWnSpMxovex0qjIYLVLeV4Z5I4u4hXztC3oKE0kaGjtCnD9VyaBcg+yhF
  R52Ez8meY/tGD153zRWNSt8P86lqIQ9iwIaa0Iw5p9QNZrlQLQ2loRcrABUHHK+i
  s0cbKHbJAmo31Ty5uJVs6f5vZkOeJcdOhe5ZF3LCYH8IiLjzTCt9teYjhimHcxHi
  FMGBMIdMQTyNxm6V6rmjRKoOfOU3HGYSo8spbign7V8zFNC5e0t6Ma0umZ1mGjwW
  jlJB+MwRS/POjmyHYHAdaiEDMgPWWV/9GIKIXEDtRzdhtliptGrmDdIxR45GXM/L
  FiMLiDLL+WhUZn6S9+1JUhV+JTxWbn79sAE9G3R43T8AkiTo2Sc94ssM8lALte5e
  1/9FGjN/Yc3cFrQ7LThdYOxPUj/g5QT3jEhRUUPYUHeNL6SmMo22Go86pE7+ZyoO
  rBbNffvJrVOmSKqp4go+T+BJ5bimQbJhaq+yAIlT32S9vlPfT+H20FcjEWD1G4HS
  cvpAy3/DaDz4MNnIQW5EZMcFydelg7zPj6C//OZr6BPp25kAfBA=
  =zLHO
  -----END PGP SIGNATURE-----
---
export function getOrderDetails(id) { const db = { "O1": {product: "Widget", price: 19.99} }; return db[id] || "Not found"; }
