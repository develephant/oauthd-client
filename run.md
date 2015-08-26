# Run Notes

## redis

`docker run -d --name=redis -p 6379:6379 redis`

## oauthd

`docker run -d -p 443:443 -p 6284:6284 --label='kind=oauthd' --name=oauthd --link redis:redis vinc/oauthd-instance:latest`
