[build]
publish = "public"
command = "hugo"

[context.production.environment]
HUGO_VERSION = "0.74.1"
HUGO_ENV = "production"
HUGO_ENABLEGITINFO = "true"
